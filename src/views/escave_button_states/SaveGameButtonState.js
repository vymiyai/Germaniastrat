"use strict";

// the state object that contain the event handlers for the escave's save game button.
var SaveGameButtonState = function( context )
{
    this.context = context;
    
    // global attributes.
    var BUTTON_HEIGHT   = GERMANIA.CONFIG.BUTTON_HEIGHT;
    var CANVAS          = GERMANIA.STAGE.canvas;
    
    this.onClick = function( evt, data )
    {
        // bring curtain to the front.
        GERMANIA.STAGE.setChildIndex( GERMANIA.CURTAIN, 2 );
                    
        // fade in the save menu.
        createjs.Tween.get( GERMANIA.CURTAIN )
            .to( { alpha:CONFIG.ESCAVE.CURTAIN.ALPHA }, 0 );

        // instantiate the profiles container.
        var container          = new createjs.Container();
        container.name         = "ESCAVE PROFILE CONTAINER";
        GERMANIA.STAGE.addChild( container );    


        var profileList = GERMANIA.PROFILER.loadProfile( "PROFILES" );   
        // instantiate a button for each profile.
        var index;
        for( index in profileList )
        {
            // retrieve the context from the profiler based on the profile's name.
            var profileName = profileList[ index ];
            var context     = GERMANIA.PROFILER.loadProfile( profileName );
            var offset      = index * BUTTON_HEIGHT;
                        
            // create a new profile button.
            var profileButton           = new MainMenuButton( profileName );
            profileButton.getShape().x  = CANVAS.width/2;
            profileButton.getShape().y  = CANVAS.height/2 + offset;
            profileButton.setState( new SaveProfileState( { profileName: profileName } ) );
            container.addChild( profileButton.getShape() );
        }
        
        // instantiate the back button.
        var backButton          = new MainMenuButton( "BACK" );
        backButton.getShape().x = CANVAS.width/2;
        backButton.getShape().y = CANVAS.height/2 + ( BUTTON_HEIGHT * ( profileList.length ) );
        backButton.setState( new EscaveBackState( null ) );
        container.addChild( backButton.getShape() );
    };
    
};