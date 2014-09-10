"use strict";

// and here it comes again...
var Escave = function()
{
    // global attributes.
    var BG_STROKE_COLOR = GERMANIA.CONFIG.BACKGROUND_STROKE_COLOR;
    var BG_FILL_COLOR   = GERMANIA.CONFIG.BACKGROUND_FILL_COLOR;
    var BUTTON_HEIGHT   = GERMANIA.CONFIG.BUTTON_HEIGHT;
    var CANVAS          = GERMANIA.STAGE.canvas;
    
    this.name           = "ESCAVE";
    this.shape          = null;     // the container that contains the whole visual representation of this menu.
    this.background     = null;
    this.exitButton     = null;
    this.saveButton     = null;

    // the main menu container.
    var container       = new createjs.Container();
    container.name      = this.name;
    this.shape          = container;
    
    // the menu background. will probably be an image.
    var background      = new createjs.Shape();
    background.name     = "ESCAVE BACKGROUND";
    background.graphics.beginStroke( BG_STROKE_COLOR )
        .beginFill( BG_FILL_COLOR )
        .drawRect( 0, 0, CANVAS.width, CANVAS.height );
    background.on( "click", function( evt, data ){}, null, false );
    this.background     = background;
    this.shape.addChild( this.background );   

    // instantiate the go to surface (exit) button.
    var exitButton          = new MainMenuButton( "EXIT ESCAVE" );
    exitButton.getShape().x = CANVAS.width/2;
    exitButton.getShape().y = CANVAS.height/2;
    exitButton.setState( new ExitEscaveState( null ) );
    this.exitButton         = exitButton;
    this.shape.addChild( this.exitButton.getShape() );
    
    // instantiate the save game button.
    var saveButton          = new MainMenuButton( "SAVE GAME" );
    saveButton.getShape().x = CANVAS.width/2;
    saveButton.getShape().y = CANVAS.height/2 + GERMANIA.CONFIG.BUTTON_HEIGHT;
    saveButton.setState( new SaveGameButtonState( null ) );
    this.saveButton         = saveButton;
    this.shape.addChild( this.saveButton.getShape() );

    // calls the initial animation. TO THE ESCAVE YOU GO!
    this.start = function()
    {
        // fade in the main menu and send the curtain to the back.
        createjs.Tween.get( GERMANIA.CURTAIN )
            .wait( CONFIG.ESCAVE.CURTAIN.WAIT_TIME )
            .to( { alpha:0 }, CONFIG.ESCAVE.CURTAIN.FADE_TIME )
            .call( function(){ GERMANIA.STAGE.setChildIndex( GERMANIA.CURTAIN, 0 ); } );
    };
        
    // returns the visual representation of this menu.
    this.getShape = function()
    {
        return this.shape;
    }
    
    this.init   = function()
    {
        
    };
};