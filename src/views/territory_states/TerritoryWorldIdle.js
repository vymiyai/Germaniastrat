"use strict";

// the basic territory state.
// if clicked: will summon the menu.
// if hovered: will change color.
var TerritoryWorldIdle = function()
{
    this.shouldShowMenu = true;
    this.worldMenu      = null;
    this.worldContainer = null;
    this.canvas         = null;
    
    this.getWorldMenu = function()
    {
        if( this.worldMenu === null )
            this.worldMenu = GERMANIA.STAGE.getChildByName( "WORLD MENU" );
        
        return this.worldMenu;
    };
    
    this.getWorldContainer = function()
    {
        if( this.worldContainer === null )
            this.worldContainer = GERMANIA.STAGE.getChildByName( "WORLD CONTAINER" );
        
        return this.worldContainer;
    };
    
    this.getCanvas = function()
    {
        if( this.canvas === null )
            this.canvas = GERMANIA.STAGE.canvas;
            
        return this.canvas;
    };
    
    this.onClick = function( evt, data )
    {
        // show menu only if the click was made without a pressmove.
        if( this.shouldShowMenu )
        {
            // assign the territory resource panel with the "data" territory as a target.
            GERMANIA.WORLD.getUI().getTerritoryResourcePanel().setReferencedTerritory( data.model );
            GERMANIA.WORLD.resolve( new Date().getTime() );
            
            // summon world menu.
            GERMANIA.WORLD.getUI().summonWorldMenu();
        }
    };
    
    this.onMouseOver = function( evt, data )
    {
        evt.target.graphics.beginFill( "LightGray" ).drawRect( 0, 0, GERMANIA.CONFIG.TERRITORY_WIDTH, GERMANIA.CONFIG.TERRITORY_HEIGHT );
        evt.target.getStage().update();
    };
    
    this.onMouseOut = function( evt, data )
    {
        evt.target.graphics.beginFill( "gray" ).drawRect( 0, 0, GERMANIA.CONFIG.TERRITORY_WIDTH, GERMANIA.CONFIG.TERRITORY_HEIGHT );
        evt.target.getStage().update();
    };
    
    this.onMouseDown = function( evt, data )
    {
        // save the current mouse coordinates for later.
        x = evt.stageX; 
        y = evt.stageY;
    };
    
    this.onPressUp = function( evt, data )
    {
        this.shouldShowMenu = true;
    };
    
    this.onPressMove = function( evt, data )
    {
        this.shouldShowMenu = false;
        
        var container = this.getWorldContainer();
        
        var currentPointerX = evt.stageX;
        var currentPointerY = evt.stageY;
                        
        var currentTargetX = container.x;
        var currentTargetY = container.y;
                        
        container.x = (currentPointerX - x) + currentTargetX;
        container.y = (currentPointerY - y) + currentTargetY;
        
        // cap the boundaries if the background gets outside of the stage.
        var canvas = this.getCanvas();
        if( container.x < canvas.width - GERMANIA.CONFIG.BACKGROUND_WIDTH )
            container.x = canvas.width - GERMANIA.CONFIG.BACKGROUND_WIDTH ;
                        
        if( container.x > 0 )
            container.x = 0;
                        
        if( container.y < canvas.height - GERMANIA.CONFIG.BACKGROUND_HEIGHT )
            container.y = canvas.height - GERMANIA.CONFIG.BACKGROUND_HEIGHT;
                        
        if( container.y > 0 )
            container.y = 0;
                        
        x = currentPointerX;
        y = currentPointerY;
        
        // dismiss world menu.
        GERMANIA.WORLD.getUI().dismissWorldMenu();
    };
    
};