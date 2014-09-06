"use strict";

var WorldM = function( context )
{
    this.territories    = {};
    
    // these should be computed from the context.
    this.names = [ "AREA_0", "AREA_1", "AREA_2", "AREA_3", "AREA_4", "AREA_5", "AREA_6", "AREA_7", "AREA_8" ];
    
    // returns the context of a specific territory.
    this.getTerritoryContext = function( name, context )
    {
        // this.context[ name ]
        return { timestamp: new Date().getTime(), resources: { food: 0, ammo: 0, fuel: 0 } };
        
        //var territoryContext = context.territories[ name ];
        //return { timestamp: context.timestamp, resources: { food: 0, ammo: 0, fuel: 0 } };
    };
    
    // instantiate all territories based on the context.
    for( var nameIndex in this.names )
    {
        var name                    = this.names[ nameIndex ];
        var territoryContext        = this.getTerritoryContext( name, context );
        
        // initialize the new territory instance.
        var territory               = new TerritoryM( name );
        territory.init( territoryContext );
        
        this.territories[ name ]    = territory; 
    } 
    
    // returns a list of all territories.
    this.getTerritories = function()
    {
        return this.territories;
    };
    
};