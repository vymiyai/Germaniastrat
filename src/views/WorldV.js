"use strict";

// the graphical representation of the map.
var WorldV = function( worldModel, stage, ui )
{
    this.stage          = stage;
    this.ui             = ui;
    this.territories    = {};
    
    var territoryKey;

    var models = worldModel.getTerritories();
    for( territoryKey in models )
    {
        var territoryM   = models[ territoryKey ];
        this.territories[ territoryM.name ] = new TerritoryV().init( territoryM );
    }

    this.addTerritory = function( territoryV )
    {
        //this.stage.addChild( territoryV );
        this.stage.getChildByName( "CONTAINER" ).addChild( territoryV );
    };
    
    var views = this.territories;
    for( territoryKey in views )
    {
        var territoryModel  = models[ territoryKey ];
        var territoryView   = views[ territoryKey ];
        var handler         = this.ui.eventHandlers[ territoryKey ];
        var data            = { model:territoryModel, view:territoryView, ui:this.ui.ui, stage:this.stage };
        
        var click = function( evt, data )
        {
            // summon menu with this territory as a target.
            createjs.Tween.get( data.stage.getChildByName( "WORLD MENU" ) )
                .to( { y: 545}, 200, createjs.Ease.quintOut );
                //.call(handleComplete);
        };
        
        territoryView.on("click", click, null, false, data );
        territoryView.on("mouseover", handler, null, false, data );
        territoryView.on("mouseout", handler, null, false, data );
        
        this.addTerritory( territoryView );
    }
    
};