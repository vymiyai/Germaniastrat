"use strict";

var WorldM = function( world, context )
{
    this.territories    = {};
    
    // these should be computed from the context.
    this.names = [ "AREA_0", "AREA_1", "AREA_2", "AREA_3", "AREA_4", "AREA_5", "AREA_6", "AREA_7", "AREA_8" ];

    // instantiate all territories based on the context.
    for( var nameIndex in this.names )
    {
        var name                    = this.names[ nameIndex ];
        var territoryContext        = context[ name ];
        
        // initialize the new territory instance.
        var territory               = new TerritoryM( world, name );
        territory.init( territoryContext );
        
        this.territories[ name ]    = territory; 
    } 
    
    // returns a list of all territories.
    this.getTerritories = function()
    {
        return this.territories;
    };
    
    this.toJson = function()
    {
        var result = {};
        
        // it is expected that whenever this method is called, all territories have already been resolved.
        for( var index in this.territories )
        {
            var territory = this.territories[ index ];
            result[ territory.getName() ] = territory.toJson();
        }
        
        return result;
    };
    
};