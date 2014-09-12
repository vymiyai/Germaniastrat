"use strict";

// the graphical representation of the map.
var WorldV = function( worldModel, stage )
{
    this.stage          = stage;
    this.shape          = null;
    this.parentShape    = this.stage.getChildByName( "WORLD CONTAINER" );
    this.territories    = {};
    
    this.shape   = new createjs.Container();
    this.shape.name  = "TERRITORY CONTAINER"
    this.parentShape.addChild( this.shape );
    
    // adds a territory view object to this world view.
    this.addTerritory = function( territoryV )
    {
        this.shape.addChild( territoryV );
    };
    
    // add territories to the world container.
    var models = worldModel.getTerritories();
    for( var territoryKey in models )
    {
        var territoryM  = models[ territoryKey ];
        var territoryV  = new TerritoryV( territoryM );
        
        this.territories[ territoryM.name ] = territoryV;
        this.addTerritory( territoryV.getShape() );
    }
    
    // since this is the first time it is instantiated, centralize the "camera".
    var width       = GERMANIA.CONFIG.BACKGROUND_WIDTH;
    var height      = GERMANIA.CONFIG.BACKGROUND_HEIGHT;
    
    this.shape.x    =  ( width - 600 )/2;
    this.shape.y    =  ( height - 600 )/2;
    
    if( this.stage.canvas.width < width )
        this.parentShape.x  = ( this.stage.canvas.width - width )/2;
        
    if( this.stage.canvas.height < height )
        this.parentShape.y  = ( this.stage.canvas.height - height )/2;
};