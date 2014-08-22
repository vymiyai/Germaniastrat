"use strict";

// the creator of all handlers. In a perfect world, this should be a state machine in a RESTful style...
var UI = function( worldModel, stage )
{
    this.stage = stage;
    this.ui = new createjs.Text("Test press, click, doubleclick, mouseover, and mouseout", "14px Arial");
    this.ui.x = 10;
    this.ui.y = 10;
    this.stage.addChild( this.ui );
    
    this.eventHandlers  = {};
    
    // not only territories will have handlers assigned...
    var territories = worldModel.getTerritories();
    for( var territoryIndex in territories )
    {
        var model = territories[ territoryIndex ];
        
        // prepare a handler somehow.
        this.eventHandlers[ model.name ] = function handleMouseEvent( evt, data ) 
        {
            // data: {model:???, view:???, ui:???, stage:stage}
            data.ui.text = "evt.target: "+evt.target+", evt.type: "+evt.type+", view: "+data.model.name;
            
            // to save CPU, we're only updating when we need to, instead of on a tick:1
            data.stage.update();
        };
        
    }
    
    this.getUI = function()
    {
        return this.ui;
    };
    
};