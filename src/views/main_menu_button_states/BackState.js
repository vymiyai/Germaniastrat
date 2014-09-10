"use strict";

// the state object that contain the event handlers used for the main menu's back button. in essence, does the opposite of LoadGameState.
var BackState = function( context )
{
    this.context = context;
    
    this.onClick = function( evt, data )
    {
        // replace all profile buttons' states in level 2 with dummy states.
        var profiles = GERMANIA.MAIN_MENU.profiles;
        for( var index in profiles )
        {
            // retrieve previous state's context and instantiate a new state.
            var previousState = profiles[ index ].getState();
            profiles[ index ].setState( new DummyState( previousState.context ) );
        }
        
        // send level 2 to the back when fade out finishes.
        var onFadeOutFinished = function()
        {
            GERMANIA.MAIN_MENU.getShape().setChildIndex( GERMANIA.MAIN_MENU.level2, 0 );
        };
        
        // fade out the main menu's level 2.
        createjs.Tween.get( GERMANIA.MAIN_MENU.level2 )
            .to( { alpha:0 }, CONFIG.MAIN_MENU.BACK_MENU_TWEEN, createjs.Ease.linear )
            .call( onFadeOutFinished );
        
        // replace the new game and load game buttons' states with functional ones.
        var onFadeInFinished = function()
        {
            var newGameButton   = GERMANIA.MAIN_MENU.newGameButton;
            GERMANIA.MAIN_MENU.newGameButton.setState( new StartProfileState( newGameButton.getState().context ) );
            
            var loadGameButton  = GERMANIA.MAIN_MENU.loadGameButton;
            GERMANIA.MAIN_MENU.loadGameButton.setState( new LoadGameState( loadGameButton.getState().context ) );
        };
        
        // fade in the main menu's level 1.
        createjs.Tween.get( GERMANIA.MAIN_MENU.level1 )
            .wait( CONFIG.MAIN_MENU.BACK_MENU_WAIT_TIME )
            .to( { x:0, alpha:1 }, CONFIG.MAIN_MENU.BACK_MENU_TWEEN, createjs.Ease.linear )
            .call( onFadeInFinished );
    };
    
};