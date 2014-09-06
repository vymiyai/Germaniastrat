"use strict";

// the panel in the world view that shows the current amount of resources in a selected territory.
var TerritoryResourcePanel = function()
{
    this.width          = GERMANIA.CONFIG.BUTTON_WIDTH;
    this.height         = GERMANIA.CONFIG.BUTTON_HEIGHT;
    this.territoryModel = null;
    
    this.panel          = null;
    this.label          = null;
    this.container      = new createjs.Container();
    this.container.name = "TERRITORY RESOURCE PANEL CONTAINER";
    
    // create the panel view.
    this.panel          = new createjs.Shape();
    this.panel.name     = "TERRITORY RESOURCE PANEL";
    this.panel.graphics.beginStroke( GERMANIA.CONFIG.BUTTON_STROKE_COLOR )
        .beginFill( GERMANIA.CONFIG.BUTTON_FILL_COLOR )
        .drawRect( -this.width/2, -this.height/2, this.width, this.height );
    this.container.addChild( this.panel );
    
    // create the label.
    this.label          = new createjs.Text( "TERRITORY\n\n\n" );
    this.label.name     = "TERRITORY RESOURCE PANEL LABEL";
    this.label.color    = GERMANIA.CONFIG.BUTTON_STROKE_COLOR;
    this.label.x        = -this.label.getMeasuredWidth()/2;
    this.label.y        = -this.label.getMeasuredHeight()/2;
    this.container.addChild( this.label );

    this.update = function()
    {
        // update label only if the territory model has been set.
        if( this.territoryModel !== null )
        {
            var resources   = this.territoryModel.getStatus().resources;
            this.label.text = this.territoryModel.getName() + "\nFOOD " + resources.food + "\nAMMO " + resources.ammo + "\nFUEL " + resources.fuel;
        }
    };
    
    // assigns a territory model whose data will be shown in the UI.
    this.setReferencedTerritory = function( territoryModel )
    {
        this.territoryModel = territoryModel;
    };
    
    this.getShape = function()
    {
        return this.container;
    };
    
    this.getPanel = function()
    {
        return this.panel;
    };
    
    this.getLabel = function()
    {
        return this.label;
    };
    
    this.setX = function( x )
    {
        this.container.x = x;
    };
    
    this.setY = function( y )
    {
        this.container.y = y;
    };
    
};