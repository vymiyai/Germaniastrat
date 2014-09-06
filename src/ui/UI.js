"use strict";

// the creator of all handlers. In a perfect world, this should be a state machine in a RESTful style...
var UI = function( stage )
{
    this.stage          = stage;
    
    this.territoryResourcePanel = new TerritoryResourcePanel();
    
    this.worldMenu      = new createjs.Container();
    this.worldMenu.name = "WORLD MENU";

    this.worldMenu.addChild( this.territoryResourcePanel.getShape() );
    
    this.stage.addChild( this.worldMenu );
    
    var enterEscaveButton = new WorldMenuButton( "ENTER ESCAVE" );
    enterEscaveButton.setState( new DummyState( null ) );
    enterEscaveButton.getShape().x = GERMANIA.CONFIG.BUTTON_WIDTH;
    this.enterEscaveButton = enterEscaveButton;
    this.worldMenu.addChild( this.enterEscaveButton.getShape() );
    
    // set menu position.
    this.worldMenu.x    = this.stage.canvas.width/2 - this.worldMenu.getBounds().width/2;;
    this.worldMenu.y    = this.stage.canvas.height + GERMANIA.CONFIG.BUTTON_HEIGHT / 2;
    
    
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