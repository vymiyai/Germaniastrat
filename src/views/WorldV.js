"use strict";

// the graphical representation of the map.
var WorldV = function( worldModel, stage )
{
    this.stage          = stage;
    this.territories    = {};
    
    // adds a territory view object to this world view.
    this.addTerritory = function( territoryV )
    {
        this.stage.getChildByName( "WORLD CONTAINER" ).addChild( territoryV );
    };
    
    // add territories to the world container.
    var models = worldModel.getTerritories();
    for( var territoryKey in models )
    {
        var territoryM  = models[ territoryKey ];
        var territoryV  = new TerritoryV( territoryM );
        
        this.territories[ territoryM.name ] = territoryV;
        this.addTerritory( territoryV.getShape() );
    }
    
    // since this is the first time it is instantiated, centralize the "camera".
    var container = this.stage.getChildByName( "WORLD CONTAINER" );
    container.x =  ( GERMANIA.STAGE.canvas.width - CONFIG.BACKGROUND_WIDTH )/2;
    container.y =  ( GERMANIA.STAGE.canvas.height - CONFIG.BACKGROUND_HEIGHT )/2;
};