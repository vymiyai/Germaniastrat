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
            try
            {
                GERMANIA.PROFILER.saveProfile( this.context.profileName, GERMANIA.WORLD.model.toJson() );
                alert( "SAVED SUCCESSFULLY" );
            }
            catch( error )
            {
                alert( "WARNING: an error occurred while saving your profile." );
            }
        } 
        else 
        {
            // do nothing.
        } 
    };
    
};