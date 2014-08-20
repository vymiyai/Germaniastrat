"use strict";

// class that represents the data part of a territory to be presented in a map.
var Territory = function( type )
{
    // initial values.
    this.timestamp = new Date().getTime();
    this.resources = { food: 0, ammo: 0, fuel: 0 };
    
    // initializes this instance with an instance description.
    this.init = function( territoryInstance )
    {
        this.timestamp = territoryInstance.timestamp;
        this.resources = territoryInstance.resouces;
    };
    
    // updates the timestamp and resources in case they are changed.
    // this method should be called everytime an interaction is made or regularly from time to time.
    this.update = function()
    {
        // retrieve last timestamp.
        var lastTimestamp = this.timestamp;
        
        // update the current timestamp.
        this.timestamp = new Date().getTime();
        
        // calculate the time passed since the last timestamp.
        var timePassed = this.timestamp - lastTimestamp;
        
        // calculate the amount of each resources that was produced or consumed during this time period.
        
        
        // update battlegroups, attrition and whatmore.
        
        // update resources.
        this.resources = { food: 0, ammo: 0, fuel: 0 };
    };
    
    // returns the relevant that will be shown in he user interace.
    this.getStatus = function()
    {
        return { resources:this.resources };
    };
    
};