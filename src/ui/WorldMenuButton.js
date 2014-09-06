"use strict";

// template for a world menu button. In essence, exactly the same as a main menu button, but for different purposes.
var WorldMenuButton = function( name )
{
    // global attributes.
    var STROKE_COLOR    = GERMANIA.CONFIG.BUTTON_STROKE_COLOR;
    var FILL_COLOR      = GERMANIA.CONFIG.BUTTON_FILL_COLOR;
    var WIDTH           = GERMANIA.CONFIG.BUTTON_WIDTH;
    var HEIGHT          = GERMANIA.CONFIG.BUTTON_HEIGHT;
    var CANVAS          = GERMANIA.STAGE.canvas;
    
    // this class attributes.
    this.name   = name;
    this.state  = null;
    this.shape  = new createjs.Container();
    this.button = null;
    this.label  = null;
    
    // container attributes.
    this.shape.name     = name;
    
    // instantiate the button.
    var button          = new createjs.Shape();
    button.name         = "WORLD MENU BUTTON " + name;
    button.graphics.beginStroke( STROKE_COLOR )
        .beginFill( FILL_COLOR )
        .drawRect( -WIDTH/2, -HEIGHT/2, WIDTH, HEIGHT );
    this.button         = button;
    this.shape.addChild( this.button );
    
    // instantiate the label.
    var label           = new createjs.Text( name );
    label.name          = "WORLD MENU BUTTON LABEL " + name;
    label.color         = STROKE_COLOR;
    label.x             = -label.getMeasuredWidth()/2;
    label.y             = -label.getMeasuredHeight()/2;
    this.label          = label;
    this.shape.addChild( this.label );
    
    // set the event listener to process events in the state implementation.
    this.shape.on( "click", function( evt, data ){ data.state.onClick( evt, data ); }, null, false, this );

    // returns this button's state.
    this.getState = function()
    {
        return this.state;
    };
    
    // set this button's state.
    this.setState = function( state )
    {
        this.state = state;
    };
    
    // returns the container that contains the visual representation of this button.
    this.getShape = function()
    {
        return this.shape;
    };
    

    
};