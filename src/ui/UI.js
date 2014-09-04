"use strict";

// the creator of all handlers. In a perfect world, this should be a state machine in a RESTful style...
var UI = function( stage )
{
    this.stage          = stage;
    this.worldMenu      = new createjs.Container();
    this.worldMenu.name = "WORLD MENU";
    
    // assign the resource panel to the world menu.
    this.territoryResourcePanel = new TerritoryResourcePanel();
    
    this.worldMenu.addChild( this.territoryResourcePanel.getShape() );
    this.worldMenu.x = this.stage.canvas.width/2;
    this.worldMenu.y = this.stage.canvas.height + CONFIG.BUTTON_HEIGHT / 2;
    
    this.stage.addChild( this.worldMenu );
    
    
    
    
    
    
    
    // text box from the tutorials.
    var ui = new createjs.Text("Test press, click, mouseover, and mouseout", "14px Arial");
    ui.name = "DEBUG TEXT";
    ui.color = "gray";
    ui.x = 10;
    ui.y = 10;
    this.ui = ui;
    this.stage.addChild( this.ui );
    
    this.getTerritoryResourcePanel = function()
    {
        return this.territoryResourcePanel;
    };
    
    this.update = function()
    {
        this.territoryResourcePanel.update();
    };
};

// minimalism
// duas partes principais do jogo:
// usar as cores do império alemão: 
// mapa pra interações estratégicas
// escaves

// em escaves, o esquema de cores tem que ser definido pelo ambiente (trincheiras com tons de camuflagem, bunker cinzento, ruinas tons de tijolo)
// dah pra incluir aimacoeszinhas que nem grama ao vento etc...

// interacoes estrategicas, tons de cinza com explosoes no mapa em vermelho, botoes podem ser preto e branco com divisoes em cinza?