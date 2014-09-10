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
                // insert a new profile in the profile list if it does not exist yet.
                if( GERMANIA.PROFILER.loadProfile( this.context.profileName ) === null)
                {
                    // add new entry in the profile list.
                    var profiles = GERMANIA.PROFILER.loadProfile( "PROFILES" );
                    profiles.push(  this.context.profileName )
                    
                    GERMANIA.PROFILER.saveProfile( "PROFILES", profiles );
                }
                
                // save the new profile.
                GERMANIA.PROFILER.saveProfile( this.context.profileName, GERMANIA.WORLD.model.toJson() );
                alert( "SAVED SUCCESSFULLY" );
                
                // return to the Escave menu.
                
                var callback = function()
                {
                    // bring curtain to the back.
                    GERMANIA.STAGE.setChildIndex( GERMANIA.CURTAIN, 0 );
                    GERMANIA.STAGE.removeChild( this.context.container );
                };
                            
                // fade in the save menu.
                createjs.Tween.get( GERMANIA.CURTAIN )
                    .to( { alpha:0 }, 0 )
                    .call( callback, null, this );
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