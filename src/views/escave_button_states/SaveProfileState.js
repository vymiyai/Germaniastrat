"use strict";

// the state object that contain the event handlers for the escave's profile save buttons.
var SaveProfileState = function( context )
{
    this.context = context;
    
    this.onClick = function( evt, data )
    {
        var decision = confirm( "Overwrite this profile?" );
        if ( decision == true ) 
        {
            var x = "You pressed OK!";
            alert( "SAVED SUCCESSFULLY" );
        } 
        else 
        {
            var x = "You pressed Cancel!";
        } 
    };
    
};