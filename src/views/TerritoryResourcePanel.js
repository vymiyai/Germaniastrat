"use strict";

// the panel in the world view that shows the current amount of resources in a selected territory.
var TerritoryResourcePanel = function()
{
    this.width          = CONFIG.BUTTON_WIDTH;
    this.height         = CONFIG.BUTTON_HEIGHT;
    this.territoryModel = null;
    
    this.panel          = null;
    this.label          = null;
    this.container      = new createjs.Container();
    this.container.name = "TERRITORY RESOURCE PANEL CONTAINER";
    
    // create the panel view.
    this.panel          = new createjs.Shape();
    this.panel.name     = "TERRITORY RESOURCE PANEL";
    this.panel.graphics.beginStroke( CONFIG.BUTTON_STROKE_COLOR ).beginFill( CONFIG.BUTTON_FILL_COLOR ).drawRect( -this.width/2, -this.height/2, this.width, this.height );
    this.container.addChild( this.panel );
    
    // create the label.
    this.label          = new createjs.Text( "\n\nSELECT A \nTERRITORY\n\n" );
    this.label.name     = "TERRITORY RESOURCE PANEL LABEL";
    this.label.color    = CONFIG.BUTTON_LABEL_COLOR;
    this.label.x        = -this.label.getMeasuredWidth()/2;
    this.label.y        = -this.label.getMeasuredHeight()/2;
    this.container.addChild( this.label );
    
    this.setReferencedTerritory = function( territoryModel )
    {
        this.territoryModel = territoryModel;
        var resources       = this.territoryModel.getStatus().resources;
        this.label.text     = this.territoryModel.getName() + "\n\nFOOD " + resources.food + "\nAMMO " + resources.ammo + "\nFUEL " + resources.fuel;
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