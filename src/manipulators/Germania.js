"use strict";

// the container of everything, top-most level of the application.
var Germania = function()
{
    this.getWorld = function( context, stage )
    {
        // the main container object.
        var container = new createjs.Container();
        container.name = "WORLD CONTAINER"
        
        // the background that determines the scrollable area.
        var background = new createjs.Shape();
        background.name = "BACKGROUND";
        background.graphics.beginStroke( CONFIG.BACKGROUND_STROKE_COLOR )
            .beginFill( CONFIG.BACKGROUND_FILL_COLOR )
            .drawRect( 0, 0, CONFIG.BACKGROUND_WIDTH, CONFIG.BACKGROUND_HEIGHT );
        
        container.addChild( background );
        stage.addChild( container );

        return new World( context, stage );
    };
};