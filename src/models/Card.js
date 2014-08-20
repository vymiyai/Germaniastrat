"use strict";

// class that represents the static attributes of a Unit.
var Card = function( cardStats )
{
    // the card's name.
    this.name           = cardStats.name;
    
    // TODO something like armor types.
    // airplane
    // infantry
    // vehicle
    this.type           = cardStats.type;

    // basic damage types.
    this.apDam          = cardStats.apDam;       // anti-personnel damage.
    this.atDam          = cardStats.atDam;       // anti-tank damage.
    this.aaDam          = cardStats.aaDam;       // anti-aircraft damage.
    
    // TODO the minimum amount of experience a unit needs to be upgraded.
    this.upgradeXP      = cardStats.upgradeXP;
    
    // mobility factor of the unit. Motorized vehicles are expected to have higher values than infantry.
    this.mobility       = cardStats.mobility;
    
    // there are two main upkeeping costs for units:
    // stationed: when units are idle and stationed in a position. Represents the minimal resource cost to keep a standing army.
    // battling: when units are activelly battling, which implies higher energy consumption and ammo expenses. Should be a value that is added to the stationed cost.
    this.stationedCost  = cardStats.upkeepingCost;
    this.battlingCost   = cardStats.battlingCost;
    
    // amount of supplies that the unit can carry without sacrificing performance. For instance, the maximum amount of food and ammo that paratroopers carry.
    // possibly a hashmap.
    this.cargoCapacity  = cardStats.cargoCapacity;

};
