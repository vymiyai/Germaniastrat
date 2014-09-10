"use strict";

// the state object that contain the event handlers for the main menu's new game button or load profile buttons.
var StartProfileState = function( context )
{
    this.context = context;
    
    this.onClick = function( evt, data )
    {
        // bring curtain to the front.
        GERMANIA.STAGE.setChildIndex( GERMANIA.CURTAIN, 1 );
                    
        // fade out the main menu.
        createjs.Tween.get( GERMANIA.CURTAIN )
            .wait( CONFIG.MAIN_MENU.CURTAIN.WAIT_TIME )
            .to( { alpha:1 }, CONFIG.MAIN_MENU.CURTAIN.FADE_TIME );
            
        // f@cking closure...
        var callback = function( ctx )
        {
            return function()
            {
                GERMANIA.loadWorld( ctx );
                
                // remove the main menu from the stage and free the menu's reference from Germania class.
                GERMANIA.STAGE.removeChild( GERMANIA.MAIN_MENU.getShape() );
                GERMANIA.MAIN_MENU  = null;
            };
        };
                    
        // move the "camera" up, instantiate the world based on the given context and send curtain to background.
        createjs.Tween.get( GERMANIA.MAIN_MENU.getShape() )
            .to( { y:stage.canvas.height }, CONFIG.MAIN_MENU.CAMERA_TWEEN_TIME, createjs.Ease.quintInOut )
            .call( callback( this.context ) );
    };
    
};