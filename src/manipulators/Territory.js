"use strict";

var Territory = function( territoryName )
{
    // get the territory attributes by name (erritories.js).
    var attributes = TERRITORIES[ territoryName ];
    
    this.name   = territoryName;
    this.model  = new TerritoryM( attributes )
    this.view   = new TerritoryV()
    
};