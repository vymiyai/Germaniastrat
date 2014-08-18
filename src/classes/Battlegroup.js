"use strict";

// class that represents the emergent behavior of the component units. A dynamic instance of a set of Unit Card.
var Battlegroup = function( battlegroupInstance )
{
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
    
};
