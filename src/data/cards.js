"use strict";

// resources
// food
// ammo
// fuel

// { food:0, ammo:0, fuel:0 }
// non-physical resources
// manpower
// manufacturing power

var cards = {};

var RIFLEMAN_UNIT = {   name:"Rifleman Unit", 
                        type:"infantry", 
                        apDam:2, 
                        atDam:0, 
                        aaDam:0, 
                        upgradeXP:100, 
                        mobility:5, 
                        upkeepingCost:{ food:5, ammo:0, fuel:0 }, 
                        battlingCost:{ food:6, ammo:7, fuel:0 }, 
                        cargoCapacity:{ food:30, ammo:20, fuel:0 } };