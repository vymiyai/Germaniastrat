"use strict";

// define basic save/load capabilities through local storage.
var Profiler = function()
{
    // save global variables in a stringified JSON object.
    this.saveProfile = function( profileName, context )
    {
        window.localStorage.setItem( profileName, JSON.stringify( context ) );
    };
  
    // load global variables from a stringified JSON object.
    this.loadProfile = function( profileName )
    {
        return JSON.parse( window.localStorage.getItem( profileName ) );
    };
  
    // deletes a profile.
    this.deleteProfile = function( profileName )
    {
        window.localStorage.removeItem( profileName );
    };
    
};