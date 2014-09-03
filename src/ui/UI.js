"use strict";

// the creator of all handlers. In a perfect world, this should be a state machine in a RESTful style...
var UI = function( worldModel, stage )
{
    this.stage = stage;
    
    // a shape.
    var button = new WorldButton( "WORLD MENU", CONFIG.BUTTON_WIDTH, CONFIG.BUTTON_HEIGHT );
    
    button.setX( this.stage.canvas.width/2 );
    button.setY( this.stage.canvas.height + CONFIG.BUTTON_HEIGHT / 2 );
    
    button.getShape().on("click", function()
    { 
        alert( "LABEL" );
    }, null, false );
    this.stage.addChild( button.getShape() );
    
    
    
    
    
    // text box from the tutorials.
    var ui = new createjs.Text("Test press, click, doubleclick, mouseover, and mouseout", "14px Arial");
    ui.name = "DEBUG TEXT";
    ui.color = "gray";
    ui.x = 10;
    ui.y = 10;
    this.ui = ui;
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
    
};

// minimalism
// duas partes principais do jogo:
// usar as cores do império alemão: 
// mapa pra interações estratégicas
// escaves

// em escaves, o esquema de cores tem que ser definido pelo ambiente (trincheiras com tons de camuflagem, bunker cinzento, ruinas tons de tijolo)
// dah pra incluir aimacoeszinhas que nem grama ao vento etc...

// interacoes estrategicas, tons de cinza com explosoes no mapa em vermelho, botoes podem ser preto e branco com divisoes em cinza?