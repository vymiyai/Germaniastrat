"use strict";

// class that represents the data part of a territory to be presented in a map.
var Territory = function( type )
{
    this.timestamp = new Date().getTime();
    this.resources = { food: 0, ammo: 0, fuel: 0 };
    
    // initializes this instance with an instance description.
    this.init = function( territoryInstance )
    {
        this.resources = territoryInstance.resouces;
    };
    
    // updates the timestamp and resources in case they are changed.
    // this method should be called everytime an interaction is made.
    this.update = function()
    {
        // retrieve last timestamp.
        var lastTimestamp = this.timestamp;
        
        // update the current timestamp.
        this.timestamp = new Date().getTime();
        
        // calculate the time passed since the last timestamp.
        var timePassed = this.timestamp - lastTimestamp;
        
        // calculate the amount of each resources that was produced or consumed during this time period.
        
        // update units, conflicts and whatmore.
        
        // update resources.
        this.resources = { food: 0, ammo: 0, fuel: 0 };
    };
    
};