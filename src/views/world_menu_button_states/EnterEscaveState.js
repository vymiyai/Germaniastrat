"use strict";

// a state that contains the actions when the enter escave button is pressed in the world menu.
var EnterEscaveState = function( context )
{
    this.context = context;
    
    this.onClick = function( evt, data )
    {
        var callback = function()
        {
            // load Escave GUI.
            GERMANIA.WORLD.escave = new Escave();
            GERMANIA.WORLD.escave.init( context.name );
            GERMANIA.STAGE.addChildAt( GERMANIA.WORLD.escave.getShape(), 1 );
            
            // start the entrance animation.
            GERMANIA.WORLD.escave.start();
        };
        
        // halt global resolves.
        GERMANIA.WORLD.stopResolve();
        
        // dismiss the world menu.
        GERMANIA.WORLD.getUI().dismissWorldMenu();
        
        // bring curtain to the front.
        GERMANIA.STAGE.setChildIndex( GERMANIA.CURTAIN, 1 );
                    
        // fade out the world by increasing the curtain's alpha.
        createjs.Tween.get( GERMANIA.CURTAIN )
            .wait( CONFIG.ESCAVE.CURTAIN.WAIT_TIME )
            .to( { alpha:1 }, CONFIG.ESCAVE.CURTAIN.FADE_TIME )
            .call( callback );
    };
    
};