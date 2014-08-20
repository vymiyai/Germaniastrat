"use strict";

// class that represents the emergent behavior of the component units. A dynamic instance of a set of Unit Card.
// the true purpose of this class is to aggregate attributes of its composing Units to be used in damage and attrition calculations.
var Battlegroup = function()
{
    // constants.
    
    // maximum number of units in a batlegroup.
    this.MAXIMUM_LENGTH = 5;
    
    // the battlegroup name.
    this.name           = "Battlegroup";
    
    // the composing units.
    this.units          = [];

   
   
    // initializes a specific instance of a battlegroup by an instance.
    this.init = function( battlegroupInstance )
    {
        this.name       = battlegroupInstance.name;
        this.units      = battlegroupInstance.units;
    };
   

    // returns the name of this battlegroup.
    this.getName = function()
    {
        return this.name;
    };
    
    // returns the individual conditions of the battlegroup.
    this.getConditions = function()
    {
        var result = [];
        
        for( var unitIndex in this.units )
        {
            var unit        = this.units[ unitIndex ];
            var condition   = unit.getCondition();
            
            result.push( condition );
        }
        
        return result;
    };
    
    // sums all resources in the Units' cargoes and return the accumulated amount.
    this.getCargo = function()
    {
        var result = { food:0, ammo:0, fuel:0 };
        
        for( var unitIndex in this.units )
        {
            var unit    = this.units[ unitIndex ];
            var cargo   = unit.getCargo();
            
            result.food = result.food + cargo.food;
            result.ammo = result.ammo + cargo.ammo;
            result.fuel = result.fuel + cargo.fuel;
        }
        
        return result;
    };
    
    // sums all attrbiutes of all units and return the accumulated attributes of the whole battlegroup.
    this.getAttributes = function()
    {
        var result = { apDam:0, atDam:0, aaDam:0, mobility:0 };
        
        for( var unitIndex in this.units )
        {
            var unit        = this.units[ unitIndex ];
            var attributes  = unit.getAttributes();
            
            result.apDam    = result.apDam + attributes.apDam;
            result.atDam    = result.atDam + attributes.atDam;
            result.aaDam    = result.aaDam + attributes.aaDam;
            result.mobility = result.mobility + attributes.mobility;
        }
        
        return result;
    };
    
    // adds a new unit if the maximum number of units in a battlegroup has not been reached, returns the success condition.
    this.addUnit = function( unit )
    {
        if( this.units.length < this.MAXIMUM_LENGTH )
        {
            this.units.push( unit );
            return true;
        }
        else
        {
            return false;
        }
    };
    
    // removes a unit from a battlegroup's unit slot and returns it.
    this.removeUnit = function( position )
    {
        return this.units.splice( position, 1 );
    };
    
};
