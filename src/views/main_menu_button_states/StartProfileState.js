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
            .wait( 200 )
            .to( { alpha:1 }, 1200 );
                    
        // move the "camera" up, instantiate the world based on the given context and send curtain to background.
        createjs.Tween.get( GERMANIA.MAIN_MENU.getShape() )
            .to( { y:stage.canvas.height }, 1500, createjs.Ease.quintInOut )
            .call( function(){ GERMANIA.loadWorld( this.context ); GERMANIA.STAGE.setChildIndex( GERMANIA.CURTAIN, 0 ); } );
    };
    
};