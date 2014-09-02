"use strict";

// the basic territory state.
// if clicked: will summon the menu.
// if hovered: will change color.
var TerritoryWorldIdle = function( context )
{
    // expected to be a Shape.
    this.context = context;
    
    this.onClick = function( evt, data )
    {
        // summon menu with this territory as a target.
        createjs.Tween.get( this.context.getStage().getChildByName( "WORLD MENU" ) )
            .to( { y: 545}, 200, createjs.Ease.quintOut );
    };
    
    this.onMouseOver = function( evt, data )
    {
        this.context.graphics.beginFill( "LightGray" ).drawRect(-50, -50, 100, 100);
    };
    
    this.onMouseOut = function( evt, data )
    {
        this.context.graphics.beginFill( "gray" ).drawRect(-50, -50, 100, 100);
    };
    
    this.onPressMove = function( evt, data )
    {
        // do nothing for now...
    };
    
};