"use strict";

// class that represents the emergent behavior of the component units. A dynamic instance of a set of Unit Card.
var Battlegroup = function( battlegroupInstance )
{
    // constants.
    
    // maximum number of units in a batlegroup.
    this.MAXIMUM_LENGTH = 5;
    
    // the battlegroup name.
    this.name           = battlegroupInstance.name;
    
    // the composing units.
    this.units          = battlegroupInstance.units;

    // the true purpose of this class is to aggregate attributes of its composing Units to be used in damage and attrition calculations.

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
            
            result.food =+ cargo.food;
            result.ammo =+ cargo.ammo;
            result.fuel =+ cargo.fuel;
        }
        
        return result;
    };
    
    // sums all attrbiutes of all units and return the accumulated attributes of the whole battlegroup.
    this.getAttributes = function()
    {
        var result = { apDam:0, atDam:0, aaDam:0, mobility:0,  };
        
        for( var unitIndex in this.units )
        {
            var unit        = this.units[ unitIndex ];
            var attributes  = unit.getAttributes();
            
            result.apDam    =+ attributes.apDam;
            result.atDam    =+ attributes.atDam;
            result.aaDam    =+ attributes.aaDam;
            result.mobility =+ attributes.mobility;
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
