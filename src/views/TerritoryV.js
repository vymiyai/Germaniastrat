"use strict";

var TerritoryV = function( territoryM )
{
    this.name = "territory";
    this.shape = null;
    this.state = new TerritoryWorldIdle();
    
    // set the name of this territory.
    this.name   = territoryM.name;
        
    // use this to define some difference between world territory types.
    var territoryAttributes = territoryM.getAttributes();
    territoryAttributes.type;
    
    // initialize the shape.
    var shape = new createjs.Shape();
    shape.graphics.beginFill( "gray" ).drawRect(-50, -50, 100, 100);
    shape.x = territoryAttributes.x;
    shape.y = territoryAttributes.y;
    shape.name = territoryAttributes.name;
    this.shape = shape;
    
    // set the event listeners that will call the actual handler implementation from the state object.
    this.shape.on( "click", function( evt, data ){ data.state.onClick( evt, data ); }, null, false, this );
    this.shape.on( "mouseover", function( evt, data ){ data.state.onMouseOver( evt, data ); }, null, false, this );
    this.shape.on( "mouseout", function( evt, data ){ data.state.onMouseOut( evt, data ); }, null, false, this );
    this.shape.on( "mousedown", function( evt, data ){ data.state.onMouseDown( evt, data ); }, null, false, this );
    this.shape.on( "pressmove", function( evt, data ){ data.state.onPressMove( evt, data ); }, null, false, this );
    
    // sets the state of this territory view.
    this.setState = function( state )
    {
        this.state = state;
    };
    
    this.getShape = function()
    {
        return this.shape;
    }
    
};