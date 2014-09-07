"use strict";

// a state that contains the actions when the exit escave button is pressed in the Escave GUI.
var ExitEscaveState = function( context )
{
    this.context = context;
    
    this.onClick = function( evt, data )
    {
        var callback = function()
        {
            // send curtain to back.
            GERMANIA.STAGE.setChildIndex( GERMANIA.CURTAIN, 2 );
            
            // free memory from stage and world.
            GERMANIA.STAGE.removeChild( GERMANIA.WORLD.escave.getShape() );
            GERMANIA.WORLD.escave = null;
            
            // restart the global resolves and return to the world.
            GERMANIA.WORLD.start();
        };
        
        // bring curtain to the front.
        GERMANIA.STAGE.setChildIndex( GERMANIA.CURTAIN, 3 );
                    
        // fade out the world by increasing the curtain's alpha.
        createjs.Tween.get( GERMANIA.CURTAIN )
            .wait( 200 )
            .to( { alpha:1 }, 1200 )
            .call( callback );
    };
    
};