"use strict";

// the first menu shown after the game is launched.
var MainMenu = function()
{
    // global attributes.
    var BG_STROKE_COLOR = GERMANIA.CONFIG.BACKGROUND_STROKE_COLOR;
    var BG_FILL_COLOR   = GERMANIA.CONFIG.BACKGROUND_FILL_COLOR;
    var BUTTON_HEIGHT   = GERMANIA.CONFIG.BUTTON_HEIGHT;
    var CANVAS          = GERMANIA.STAGE.canvas;
    
    this.name           = "MAIN MENU";
    this.shape          = null;     // the container that contains the whole visual representation of this menu.
    this.background     = null;
    
    // members of the main menu.
    
    // members of level 1.
    this.level1         = null;
    this.newGameButton  = null;
    this.loadGameButton = null;
    
    // members of level 2.
    this.level2         = null;
    this.profileButtons = [];
    this.backButton     = null;
    
    // the main menu container.
    var container           = new createjs.Container();
    container.name      = this.name;
    container.y         = CANVAS.height;
    this.shape          = container;
    
    // the menu background. will probably be an image.
    var background      = new createjs.Shape();
    background.name     = "MAIN MENU BACKGROUND";
    background.graphics.beginStroke( BG_STROKE_COLOR )
        .beginFill( BG_FILL_COLOR )
        .drawRect( 0, 0, CANVAS.width, CANVAS.height );
    this.background     = background;
    this.shape.addChild( this.background );   
    
    // instantiate the menu's level 1.
    var level1          = new createjs.Container();
    level1.name         = "MAIN MENU LEVEL 1 CONTAINER"
    this.level1         = level1;
    this.shape.addChild( this.level1 );
    
    // instantiate the new game button.
    var defaultContext  = GERMANIA.PROFILER.loadProfile( "DEFAULT_PROFILE" );
    var newGameButton   = new MainMenuButton( "NEW GAME" );
    newGameButton.getShape().x     = CANVAS.width/2;
    newGameButton.getShape().y     = CANVAS.height/2;
    newGameButton.setState( new StartProfileState( defaultContext[ "ACT_1" ] ) );           // add the ACT 1 part of the default context.
    this.newGameButton  = newGameButton;
    this.level1.addChild( this.newGameButton.getShape() );
    
    // instantiate the load game button and level 2 if there is at least one saved profile.
    var profileList = GERMANIA.PROFILER.loadProfile( "PROFILES" );
    if( profileList !== null && profileList.length > 0 )
    {
        // instantiate the load game button.
        var loadGameButton  = new MainMenuButton( "LOAD GAME" );
        loadGameButton.getShape().x    = CANVAS.width/2;
        loadGameButton.getShape().y    = CANVAS.height/2 + BUTTON_HEIGHT;
        loadGameButton.setState( new LoadGameState( null ) );
        this.loadGameButton = loadGameButton;
        this.level1.addChild( this.loadGameButton.getShape() );
        
        // instantiate the main menu's level 2.
        var level2          = new createjs.Container();
        level2.name         = "MAIN MENU LEVEL 2 CONTAINER";
        level2.alpha        = 0;
        this.level2         = level2;
        this.shape.addChildAt( this.level2, 0 );
        
        // instantiate a button for each profile.
        var index;
        for( index in profileList )
        {
            // retrieve the context from the profiler based on the profile's name.
            var profileName = profileList[ index ];
            var context     = GERMANIA.PROFILER.loadProfile( profileName );
            var offset      = index * BUTTON_HEIGHT;
                        
            // create a new profile button.
            var profileButton           = new MainMenuButton( profileName );
            profileButton.getShape().x  = CANVAS.width/2;
            profileButton.getShape().y  = CANVAS.height/2 + offset;
            profileButton.setState( new DummyState( context ) );
            this.profileButtons.push( profileButton );
            this.level2.addChild( profileButton.getShape() );
        }
        
        // instantiate the back button to return to level 1.
        var backButton          = new MainMenuButton( "BACK" );
        backButton.getShape().x = CANVAS.width/2;
        backButton.getShape().y = CANVAS.height/2 + ( BUTTON_HEIGHT * ( profileList.length ) );
        backButton.setState( new BackState( null ) );
        this.backButton         = backButton;
        this.level2.addChild( this.backButton.getShape() );
    }
    
    // calls the initial animation. GAME START!
    this.start = function()
    {
        // bring curtain to front.
        GERMANIA.STAGE.setChildIndex( GERMANIA.CURTAIN, 1 );
    
        // fade in the main menu and send the curtain to the back.
        createjs.Tween.get( GERMANIA.CURTAIN )
            .wait( CONFIG.MAIN_MENU.CURTAIN.WAIT_TIME )
            .to( { alpha:0 }, CONFIG.MAIN_MENU.CURTAIN.FADE_TIME )
            .call( function(){ GERMANIA.STAGE.setChildIndex( GERMANIA.CURTAIN, 0 ); } );

        // move the "camera" down.
        createjs.Tween.get( this.shape )
            .to( { y:0 }, CONFIG.MAIN_MENU.CAMERA_TWEEN_TIME, createjs.Ease.quintInOut );
    };
        
    // returns the visual representation of this menu.
    this.getShape = function()
    {
        return this.shape;
    }
};