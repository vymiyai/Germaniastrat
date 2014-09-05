"use strict";

// the container of everything, top-most level of the application.
// should contain basically all global variables.
var Germania = function( stage )
{
    // data files.
    this.CARDS              = CARDS;
    this.CONFIG             = CONFIG;
    this.TERRITORIES        = TERRITORIES;
    this.TERRITORY_TYPES    = TERRITORY_TYPES;
    
    // the global variables...
    this.STAGE      = stage;
    this.PROFILER   = new Profiler();
    this.CURTAIN    = null;
    this.MAIN_MENU  = null;
    this.WORLD      = null;
    
    // the "curtain" rectangle that will simulate the fade effects.
    var curtain     = new createjs.Shape();
    curtain.name    = "CURTAIN";
    curtain.graphics.beginStroke( "gray" )
        .beginFill( "black" )
        .drawRect( 0, 0, this.STAGE.canvas.width, this.STAGE.canvas.height );
    this.CURTAIN    = curtain;
    this.STAGE.addChild( this.CURTAIN );
    
    this.loadWorld = function( context )
    {
        var strokeColor = this.CONFIG.BACKGROUND_STROKE_COLOR;
        var fillColor   = this.CONFIG.BACKGROUND_FILL_COLOR;
        var width       = this.CONFIG.BACKGROUND_WIDTH;
        var height      = this.CONFIG.BACKGROUND_HEIGHT;
        
        // the main container object.
        var container = new createjs.Container();
        container.name = "WORLD CONTAINER"
        
        // the background that determines the scrollable area.
        var background = new createjs.Shape();
        background.name = "BACKGROUND";
        background.graphics.beginStroke( strokeColor )
            .beginFill( fillColor )
            .drawRect( 0, 0, width, height);
            
        container.addChild( background );
        this.STAGE.addChild( container );
        
        this.WORLD = new World( context, this.STAGE );
    };
    
    // GAME START!
    this.start = function()
    {
        // instantiate the main menu and start animations.
        this.MAIN_MENU  = new MainMenu();
        this.STAGE.addChild( this.MAIN_MENU.getShape() );
        this.MAIN_MENU.start();
    };

};