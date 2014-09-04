"use strict";

// class that represents the data part of a territory to be presented in a map.
var TerritoryM = function( name )
{
    // static values.
    this.name           = name;
    this.attributes     = TERRITORIES[ name ];
    this.typeAttributes = TERRITORY_TYPES[ this.attributes.type ];
    
    // dynamic values.
    this.timestamp  = new Date().getTime();
    this.resources  = { food: 0, ammo: 0, fuel: 0 };
    
    // initializes this instance with an instance description.
    this.init = function( territoryContext )
    {
        this.timestamp = territoryContext.timestamp;
        this.resources = territoryContext.resources;
    };
    
    // updates the timestamp and resources in case they are changed.
    // this method should be called everytime an interaction is made or regularly from time to time.
    this.resolve = function( timestamp )
    {
        // retrieve last timestamp.
        var lastTimestamp = this.timestamp;
        
        // update the current timestamp.
        this.timestamp = timestamp;
        
        // calculate the time passed since the last timestamp.
        var timePassed = this.timestamp - lastTimestamp;
        
        // calculate the amount of each resources that was produced or consumed during this time period.
        // TODO
        
        // update battlegroups, attrition and whatmore.
        // TODO
        
        // update resources.
        this.resources = { food: this.resources.food + timePassed, ammo: this.resources.ammo + timePassed, fuel: this.resources.fuel + timePassed };
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