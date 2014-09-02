"use strict";


var WorldButton= function( name, width, height )
{
    this.width  = width;
    this.height = height;
    this.label  = null;
    this.button = null;
    
    // create the abstract container that will contain the button and its label.
    var container = new createjs.Container();
    container.name = name;
    
    // create the button view.
    var button = new createjs.Shape();
    button.graphics.beginStroke("DimGray").beginFill( "gray" ).drawRect(-width/2, -height/2, width, height);
    this.button = button;
    
    container.addChild( button );
    
    // create the label.
    var label = new createjs.Text("LABEL");
    label.color = "DimGray";
    label.name = "LABEL";
    label.x = -label.getMeasuredWidth()/2;
    label.y = -label.getMeasuredHeight()/2;
    this.label = label;
    container.addChild( label );
    
    this.shape = container;
    
    this.getShape = function()
    {
        return this.shape;
    };
    
    this.setX = function( x )
    {
        this.shape.x = x;
    };
    
    this.setY = function( y )
    {
        this.shape.y = y;
    };
    
};