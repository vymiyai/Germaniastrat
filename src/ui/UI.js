"use strict";

// in a perfect world, this should be a state machine in a RESTful style...
var UI = function( stage )
{
    this.stage          = stage;
    
    // offset to counter the same length offset in the opposite direction in the buttons' classes.
    var OFFSET          = GERMANIA.CONFIG.BUTTON_WIDTH/2;

    this.worldMenu                              = new createjs.Container();
    this.worldMenu.name                         = "WORLD MENU";
    
    this.territoryResourcePanel                 = new TerritoryResourcePanel();
    this.worldMenu.addChild( this.territoryResourcePanel.getShape() );

    this.enterEscaveButton                      = new WorldMenuButton( "ENTER ESCAVE" );
    this.enterEscaveButton.setState( new EnterEscaveState( null ) );
    this.enterEscaveButton.getShape().on( "click", function( evt, data ){ data.state.onClick( evt, data ); }, null, false, this.enterEscaveButton );
    this.worldMenu.addChild( this.enterEscaveButton.getShape() );
    
    this.stage.addChild( this.worldMenu );
    
    
    this.calculateButtonPositions = function( numberOfChildren )
    {
        for( var index = 0; index < numberOfChildren; index++ )
        {
            var child   = this.worldMenu.getChildAt( index );
            child.x     = index * GERMANIA.CONFIG.BUTTON_WIDTH + OFFSET
        }
    };
    
    // calculate the positions of the buttons in the menu.
    var numberOfChildren    = this.worldMenu.getNumChildren();
    this.calculateButtonPositions( numberOfChildren );
    
    // set menu position.
    this.worldMenu.x    = this.stage.canvas.width/2 - ( GERMANIA.CONFIG.BUTTON_WIDTH * numberOfChildren )/2;
    this.worldMenu.y    = this.stage.canvas.height + GERMANIA.CONFIG.BUTTON_HEIGHT / 2;
    
    // returns the resource panel.
    this.getTerritoryResourcePanel = function()
    {
        return this.territoryResourcePanel;
    };
    
    // updates the values shown in the menu.
    this.update = function()
    {
        this.territoryResourcePanel.update();
    };
    
    
    
    this.summonWorldMenu = function()
    {
        var desiredY = GERMANIA.WORLD.getStage().canvas.height - GERMANIA.CONFIG.MENU_Y_OFFSET - GERMANIA.CONFIG.BUTTON_HEIGHT / 2;
        
        createjs.Tween.get( this.worldMenu )
            .to( { y: desiredY }, GERMANIA.CONFIG.MENU_TWEEN_TIME, createjs.Ease.quintOut );
    };
    
    this.dismissWorldMenu = function()
    {
        if( ! createjs.Tween.hasActiveTweens( this.worldMenu ) )
        {
            var desiredY = GERMANIA.STAGE.canvas.height + GERMANIA.CONFIG.BUTTON_HEIGHT / 2;
            
            createjs.Tween.get( this.worldMenu )
                .to( { y: desiredY }, GERMANIA.CONFIG.MENU_TWEEN_TIME, createjs.Ease.quintIn );
        }
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