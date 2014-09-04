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
    
    var models = worldModel.getTerritories();
    for( var territoryKey in models )
    {
        var territoryM  = models[ territoryKey ];
        var territoryV  = new TerritoryV( territoryM );
        
        this.territories[ territoryM.name ] = territoryV;
        this.addTerritory( territoryV.getShape() );
    }

};