"use strict";

var WorldM = function( world, context )
{
    this.territories    = {};

    // instantiate all territories based on the context.
    for( var name in context.TERRITORIES )
    {
        // initialize the new territory instance.
        var territory               = new TerritoryM( world, context.VARIABLES.CURRENT_ACT, name );
        var territoryContext        = context.TERRITORIES[ name ];
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