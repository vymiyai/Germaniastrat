"use strict";

// the container for virtually anything realted to the strategic/management part of the application.
var World = function( context, stage )
{
    this.stage = stage;
    
    this.model  = new WorldM( context );
    this.ui     = new UI( this.model, this.stage );
    this.view   = new WorldV( this.model, this.stage, this.ui );            // associated models->handlers are already included in UI. 
    
    this.update = function()
    {
        this.stage.update();
    };
    
};