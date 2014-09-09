"use strict";

// class that represents the data part of a territory to be presented in a map.
var TerritoryM = function( world, name )
{
    // static values.
    this.name           = name;
    this.attributes     = GERMANIA.TERRITORIES[ name ];
    this.typeAttributes = GERMANIA.TERRITORY_TYPES[ this.attributes.type ];
    
    // dynamic values.
    this.world          = world;
    this.resources      = { food: 0, ammo: 0, fuel: 0 };
    
    // initializes this instance with an instance description.
    this.init = function( territoryContext )
    {
        this.resources = territoryContext.resources;
    };
    
    // updates the timestamp and resources in case they are changed.
    // this method should be called everytime an interaction is made or regularly from time to time.
    this.resolve = function( timestamp )
    {
        // retrieve last timestamp.
        var lastTimestamp = this.world.lastResolve;
        
        // calculate the time passed since the last timestamp.
        var timePassed = timestamp - lastTimestamp;
        var resourcesToBeAdded = timePassed/1000;
        
        
        // calculate the amount of each resources that was produced or consumed during this time period.
        // TODO
        
        // update battlegroups, attrition and whatmore.
        // TODO
        
        // update resources.
        this.resources = { food: this.resources.food + resourcesToBeAdded, ammo: this.resources.ammo + resourcesToBeAdded, fuel: this.resources.fuel + resourcesToBeAdded };
    };
    
    // returns the name of this territory.
    this.getName = function()
    {
        return this.name;
    };
    
    // returns the relevant that will be shown in he user interace.
    this.getStatus = function()
    {
        return { resources:this.resources };
    };
    
    // returns the static attributes of this territory.
    this.getAttributes = function()
    {
        return this.attributes;
    };
    
};