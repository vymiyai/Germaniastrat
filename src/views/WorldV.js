"use strict";

// the graphical representation of the map.
var WorldV = function( stage, output )
{
    this.stage = stage;
    this.output = output;
    
    // instantiates a new territory's graphical representation based on its static attributes.
    this.Territory = function( worldTerritory )
    {
        var handler = function handleMouseEvent( evt ) 
        {
            output.text = "evt.target: "+evt.target+", evt.type: "+evt.type;
            
            // to save CPU, we're only updating when we need to, instead of on a tick:1
            stage.update();
        };
        
        // use this to define some difference between world territory types.
        worldTerritory.type;
        
        var shape = new createjs.Shape();
        shape.graphics.beginFill( "red" ).drawRect(-50, -50, 100, 100);
        shape.x = worldTerritory.x;
        shape.y = worldTerritory.y;
        shape.name = worldTerritory.name;
        
        shape.on("click", handler);
        shape.on("dblclick", handler);
        shape.on("mouseover", handler);
        shape.on("mouseout", handler);
        
        return shape;
    };
    
    this.addTerritory = function( worldTerritory )
    {
        this.stage.addChild( worldTerritory );
    };
    
    this.update = function()
    {
        this.stage.update();
    };
    
};