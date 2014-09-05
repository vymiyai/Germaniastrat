"use strict";

// the state object that contain the event handlers for the main menu's load game button.
var LoadGameState = function()
{
    this.onClick = function( evt, data )
    {
        // assuming data as { container:mainMenuContainer, level1:level1Container, level2:level2Container }...
        var container   = data.container;
        var level1      = data.level1;
        var level2      = data.level2;
        
        // fade out the main menu's level 1.
        createjs.Tween.get( level1 )
            .to( { x:-GERMANIA.CONFIG.BUTTON_WIDTH, alpha:0.3 }, 200, createjs.Ease.linear )
            .call( function(){ container.setChildIndex( level2, 1 ); } );
                        
        // fade in the main menu's level 2.
        createjs.Tween.get( level2 )
            .wait( 200 )
            .to( { alpha:1 }, 200, createjs.Ease.linear );
    };
    
};