"use strict";

// class that represents a unit in Battlegroups. A dynamic instance of a Unit Card.
var Unit = function( card, unitInstance )
{
    // the static values of this card.
    this.card           = card;

    // the dynamic values of this card.
    
    // the "life points" of a unit specified in a percentage of performance.
    this.condition      = unitInstance.condition;
    
    // Units can be upgraded once they reach a certain amount of experience.
    this.experience     = unitInstance.experience;
    
    // the amount of resources being carried by this unit.
    // possibly a hashmap.
    this.cargo          = unitInstance.cargo;
    
    // initializes a fresh instance of this unit.
    this.init = function()
    {
        this.condition  = 100;
        this.experience = 0;
        this.cargo      = { food:0, ammo:0, fuel:0 };
    };
    
    // getters that may be implemented in the future.
    this.getCondition = function()
    {
        return this.condition;
    };

    // returns the actual cargo of this Unit.
    this.getCargo = function()
    {
        return this.cargo;
    };
    
    // returns the attributes that are relevant for battles in a hashmap.
    this.getAttributes = function()
    {
        var attributes = {  apDam: this.getapDam(), 
                            atDam: this.getatDam(), 
                            aaDam: this.getaaDam(), 
                            mobility: this.getMobility()  };
                            
        return attributes;
    };
    
    
    
    // getters for this.card attributes.
    this.getMobility = function()
    {
        return this.card.mobility;
    };
    
    this.getapDam = function()
    {
        return this.card.apDam;
    };
    
    this.getatDam = function()
    {
        return this.card.atDam;
    };
    
    this.getaaDam = function()
    {
        return this.card.aaDam;
    };

};
