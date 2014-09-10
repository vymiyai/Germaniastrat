"use strict";

// the state object that contain the event handlers for the escave's save game menu back button.
var EscaveBackState = function( context )
{
    this.context = context;
    
    // global attributes.
    var BUTTON_HEIGHT   = GERMANIA.CONFIG.BUTTON_HEIGHT;
    var CANVAS          = GERMANIA.STAGE.canvas;
    
    this.onClick = function( evt, data )
    {
        // bring curtain to the back.
        GERMANIA.STAGE.setChildIndex( GERMANIA.CURTAIN, 0 );
        createjs.Tween.get( GERMANIA.CURTAIN )
            .to( { alpha:0 }, 0 );
            
        var container = GERMANIA.STAGE.getChildByName( "ESCAVE PROFILE CONTAINER" );
        GERMANIA.STAGE.removeChild( container );
    };
    
};