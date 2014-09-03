"use strict";

// the basic territory state.
// if clicked: will summon the menu.
// if hovered: will change color.
var TerritoryWorldIdle = function()
{
    this.shouldShowMenu = true;
    this.context = null;
    
    this.onClick = function( evt, data )
    {
        if( this.shouldShowMenu )
        {
            // summon menu with this territory as a target.
            //
            this.context.getChildByName( "LABEL" ).text = data.name;
            createjs.Tween.get( this.context )
                .to( { y: 545}, 200, createjs.Ease.quintOut );
            
            evt.target.getStage().update();
        }
    };
    
    this.onMouseOver = function( evt, data )
    {
        evt.target.getStage().getChildByName( "DEBUG TEXT" ).text = "evt.target: "+evt.target+", evt.type: "+evt.type+", view: "+data.name;
        evt.target.graphics.beginFill( "LightGray" ).drawRect(-100, -100, 200, 200);
        evt.target.getStage().update();
    };
    
    this.onMouseOut = function( evt, data )
    {
        evt.target.getStage().getChildByName( "DEBUG TEXT" ).text = "evt.target: "+evt.target+", evt.type: "+evt.type+", view: "+data.name;
        evt.target.graphics.beginFill( "gray" ).drawRect(-100, -100, 200, 200);
        evt.target.getStage().update();
    };
    
    this.onMouseDown = function( evt, data )
    {
        // save the current mouse coordinates for later.
        x = evt.stageX; 
        y = evt.stageY;
        
        this.context = evt.target.getStage().getChildByName( "WORLD MENU" );
    };
    
    this.onPressUp = function( evt, data )
    {
        this.shouldShowMenu = true;
    };
    
    this.onPressMove = function( evt, data )
    {
        this.shouldShowMenu = false;
        
        var container = evt.target.getStage().getChildByName( "CONTAINER" );
        
        var currentPointerX = evt.stageX;
        var currentPointerY = evt.stageY;
                        
        var currentTargetX = container.x;
        var currentTargetY = container.y;
                        
        container.x = (currentPointerX - x) + currentTargetX;
        container.y = (currentPointerY - y) + currentTargetY;
                    
        // cap the boundaries if the background gets outside of the stage.
        if( container.x < -200 )
            container.x = -200;
                        
        if( container.x > 0 )
            container.x = 0;
                        
        if( container.y < -400 )
            container.y = -400;
                        
        if( container.y > 0 )
            container.y = 0;
                        
        x = currentPointerX;
        y = currentPointerY;
        
        if( ! createjs.Tween.hasActiveTweens( this.context ) )
        {
            createjs.Tween.get( this.context )
                .to( { y: 700 }, 200, createjs.Ease.quintIn );
        }
                
        evt.target.getStage().update( evt );
    };
    
};