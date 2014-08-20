"use strict";

var TerritoryV = function( territoryAttributes )
    {
        /*
        var handler = function handleMouseEvent( evt ) 
        {
            output.text = "evt.target: "+evt.target+", evt.type: "+evt.type;
            
            // to save CPU, we're only updating when we need to, instead of on a tick:1
            stage.update();
        };
        */
        
        // use this to define some difference between world territory types.
        territoryAttributes.type;
        
        var shape = new createjs.Shape();
        shape.graphics.beginFill( "red" ).drawRect(-50, -50, 100, 100);
        shape.x = territoryAttributes.x;
        shape.y = territoryAttributes.y;
        shape.name = territoryAttributes.name;
        
        /*
        shape.on("click", handler);
        shape.on("dblclick", handler);
        shape.on("mouseover", handler);
        shape.on("mouseout", handler);
        */
        return shape;
    };