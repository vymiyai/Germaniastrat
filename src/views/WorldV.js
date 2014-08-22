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
        this.stage.addChild( territoryV );
    };
    
    var views = this.territories;
    for( territoryKey in views )
    {
        var territoryModel  = models[ territoryKey ];
        var territoryView   = views[ territoryKey ];
        var handler         = this.ui.eventHandlers[ territoryKey ];
        
        territoryView.on("click", handler, null, false, { model:territoryModel, view:territoryView, ui:this.ui.ui, stage:this.stage } );
        territoryView.on("dblclick", handler, null, false, { model:territoryModel, view:territoryView, ui:this.ui.ui, stage:this.stage } );
        territoryView.on("mouseover", handler, null, false, { model:territoryModel, view:territoryView, ui:this.ui.ui, stage:this.stage } );
        territoryView.on("mouseout", handler, null, false, { model:territoryModel, view:territoryView, ui:this.ui.ui, stage:this.stage } );
        
        this.addTerritory( territoryView );
    }
    
};