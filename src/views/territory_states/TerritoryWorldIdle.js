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
            this.worldMenu = WORLD.getStage().getChildByName( "WORLD MENU" );
        
        return this.worldMenu;
    };
    
    this.getWorldContainer = function()
    {
        if( this.worldContainer === null )
            this.worldContainer = WORLD.getStage().getChildByName( "CONTAINER" );
        
        return this.worldContainer;
    };
    
    this.getCanvas = function()
    {
        if( this.canvas === null )
            this.canvas = WORLD.getStage().canvas;
            
        return this.canvas;
    };
    
    this.onClick = function( evt, data )
    {
        // show menu only if the click was made without a pressmove.
        if( this.shouldShowMenu )
        {
            // assign the territory resource panel with the "data" territory as a target.
            WORLD.getUI().getTerritoryResourcePanel().setReferencedTerritory( data.model );
            WORLD.resolve( new Date().getTime() );
            
            // summon menu.
            var worldMenu = this.getWorldMenu();
            createjs.Tween.get( worldMenu )
                .to( { y: WORLD.getStage().canvas.height - CONFIG.MENU_Y_OFFSET - CONFIG.BUTTON_HEIGHT / 2 }, CONFIG.MENU_TWEEN_TIME, createjs.Ease.quintOut );
        }
    };
    
    this.onMouseOver = function( evt, data )
    {
        evt.target.getStage().getChildByName( "DEBUG TEXT" ).text = "evt.target: "+evt.target+", evt.type: "+evt.type+", view: "+data.name;
        evt.target.graphics.beginFill( "LightGray" ).drawRect( -CONFIG.TERRITORY_WIDTH/2, -CONFIG.TERRITORY_HEIGHT/2, CONFIG.TERRITORY_WIDTH, CONFIG.TERRITORY_HEIGHT );
        evt.target.getStage().update();
    };
    
    this.onMouseOut = function( evt, data )
    {
        evt.target.getStage().getChildByName( "DEBUG TEXT" ).text = "evt.target: "+evt.target+", evt.type: "+evt.type+", view: "+data.name;
        evt.target.graphics.beginFill( "gray" ).drawRect( -CONFIG.TERRITORY_WIDTH/2, -CONFIG.TERRITORY_HEIGHT/2, CONFIG.TERRITORY_WIDTH, CONFIG.TERRITORY_HEIGHT );
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
        if( container.x < canvas.width - CONFIG.BACKGROUND_WIDTH )
            container.x = canvas.width - CONFIG.BACKGROUND_WIDTH ;
                        
        if( container.x > 0 )
            container.x = 0;
                        
        if( container.y < canvas.height - CONFIG.BACKGROUND_HEIGHT )
            container.y = canvas.height - CONFIG.BACKGROUND_HEIGHT;
                        
        if( container.y > 0 )
            container.y = 0;
                        
        x = currentPointerX;
        y = currentPointerY;
        
        // dismiss menu if it is not being dismissed yet.
        var worldMenu = this.getWorldMenu();
        if( ! createjs.Tween.hasActiveTweens( worldMenu ) )
        {
            createjs.Tween.get( worldMenu )
                .to( { y: WORLD.getStage().canvas.height + CONFIG.BUTTON_HEIGHT / 2 }, CONFIG.MENU_TWEEN_TIME, createjs.Ease.quintIn );
        }
    };
    
};