"use strict";

// the container for virtually anything realted to the strategic/management part of the application.
var World = function( context, stage )
{
    this.stage          = stage;
    this.ui             = new UI( this.stage );
    this.model          = new WorldM( context );
    this.view           = new WorldV( this.model, this.stage );
    
    this.INTERVAL_ID    = null;
    this.lastResolve    = 0;
    
    this.getStage = function()
    {
        return this.stage;
    };
    
    this.getUI = function()
    {
        return this.ui;
    };
    
    this.getModel = function()
    {
        return this.model;
    };
    
    this.getView = function()
    {
        return this.view;
    };
    
    // resolves all timestamp-dependent calculations. Essential for saving calls. 
    this.resolve = function( timestamp )
    {
        // TODO consider pausing all scheduled individual resolves...
        
        this.lastResolve = timestamp;
        for( var territoryIndex in this.model.territories )
        {
            var territoryM = this.model.territories[ territoryIndex ];
            territoryM.resolve( timestamp );
        }
        
        // update the UI.
        this.ui.update();
    };
    
    // starts the world through setup of the global resolve interval.
    this.start = function()
    {
        this.INTERVAL_ID = window.setInterval( function(){ GERMANIA.WORLD.resolve( new Date().getTime() ); }, GERMANIA.CONFIG.RESOLVE_INTERVAL );
    };
    
    // GAME START!
    this.start();
};