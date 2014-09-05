"use strict";

// the state object that contain the event handlers for the main menu's load game button.
var LoadGameState = function( context )
{
    this.context = context;
    
    this.onClick = function( evt, data )
    {
        var onFadeOutFinished = function()
        {
            // send level 2 to the foreground and replace level 1's states with dummies.
            GERMANIA.MAIN_MENU.getShape().setChildIndex( GERMANIA.MAIN_MENU.level2, 1 );
            
            var newGameButton   = GERMANIA.MAIN_MENU.newGameButton;
            GERMANIA.MAIN_MENU.newGameButton.setState( new DummyState( newGameButton.getState().context ) );
            
            var loadGameButton  = GERMANIA.MAIN_MENU.loadGameButton;
            GERMANIA.MAIN_MENU.loadGameButton.setState( new DummyState( loadGameButton.getState().context ) );
        };
        
        // fade out the main menu's level 1.
        createjs.Tween.get( GERMANIA.MAIN_MENU.level1 )
            .to( { x:-GERMANIA.CONFIG.BUTTON_WIDTH, alpha:0.3 }, 200, createjs.Ease.linear )
            .call( onFadeOutFinished );
        
        var onFadeInFinished = function()
        {
            // replace all dummy states in level 2 with start profile states.
            var profileButtons = GERMANIA.MAIN_MENU.profileButtons;
            for( var index in profileButtons )
            {
                // retrieve previous state's context and instantiate a new state.
                var previousState = profileButtons[ index ].getState();
                profileButtons[ index ].setState( new StartProfileState( previousState.context ) );
            }
        };
        
        // fade in the main menu's level 2.
        createjs.Tween.get( GERMANIA.MAIN_MENU.level2 )
            .wait( 200 )
            .to( { alpha:1 }, 300, createjs.Ease.linear )
            .call( onFadeInFinished );
    };
    
};