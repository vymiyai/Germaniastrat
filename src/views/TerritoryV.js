"use strict";

var TerritoryV = function()
{
    this.name = "territory";
    
    this.init = function( territoryM )
    {
        // set the name of this territory.
        this.name   = territoryM.name;
        
        // use this to define some difference between world territory types.
        var territoryAttributes = territoryM.getAttributes();
        territoryAttributes.type;
        
        var shape = new createjs.Shape();
        shape.graphics.beginFill( "red" ).drawRect(-50, -50, 100, 100);
        shape.x = territoryAttributes.x;
        shape.y = territoryAttributes.y;
        shape.name = territoryAttributes.name;
        
        return shape;
    };
    
};