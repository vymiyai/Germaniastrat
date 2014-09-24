"use strict";

/*
    ALT W fecha a aplicacao...
    
    Wuerttemberg  = Heinrich Vollmer (Stg44, MG34)
    
    Allies:
        Mauser
        Valtion
        Mannlicher
        Steyr

    ACT 1
        Stuttgart - secure Wuerttemberg's capital and seize the industrial infrastructure!
            vs Daimler
                Engines for tanks and airplanes, Marder II, Mauser barrels
    
    ACT 2
        vs Walther (1953)
            Infantry
        Friedrichshafen - key to victory, air power!
            Zeppelin (WWI)
            Dornier (Dorner Do 24 or X + MK 108) "We buy fuel from the Swiss fishermen. Such nice people!"
            
    ACT 3
        vs None
        Oberndorf - liberate the weapon's assembler.
            Heckler & Koch
            Mauser, introduction through Dornier's flying boats.
            
    ACT 3
        Stuttgart - defend the capital!
            vs Porsche
                Ultra-heavy tanks, ultra-heavy tank destroyers
                Porsche Tiger I and II, Elephant, Maus, Kübelwagen
                
    ACT 4
        Karlsruhe - take Baden's capital!
        
    ACT 5
        Secondary Objective: destroy de n AAA batteries around the city's perimeter.
        Ludwigshafen (final mission)
            vs poison gas BASF, Baden Aniline and Soda Factory
                Chemical weapons, Nebelwerfer
*/

var CONFIG = {};

// global.
CONFIG.FPS                                  = 30;
CONFIG.RESOLVE_INTERVAL                     = 500;
CONFIG.MAXIMUM_NUMBER_OF_PROFILES           = 3;

// world menu configuratons.
CONFIG.BUTTON_HEIGHT                        = 100;
CONFIG.BUTTON_WIDTH                         = 150;
CONFIG.BUTTON_STROKE_COLOR                  = "DimGray";
CONFIG.BUTTON_FILL_COLOR                    = "gray";
CONFIG.BUTTON_LABEL_COLOR                   = "DimGray";
CONFIG.MENU_TWEEN_TIME                      = 200;
CONFIG.MENU_Y_OFFSET                        = 5;

// background configuration.
CONFIG.BACKGROUND_HEIGHT                    = 1000;
CONFIG.BACKGROUND_WIDTH                     = 1000;
CONFIG.BACKGROUND_STROKE_COLOR              = "black";
CONFIG.BACKGROUND_FILL_COLOR                = "DimGray"

// temporary territory configurations.
CONFIG.TERRITORY_HEIGHT                     = 200;
CONFIG.TERRITORY_WIDTH                      = 200;

// main menu attributes.
CONFIG.MAIN_MENU                            = {};
CONFIG.MAIN_MENU.CAMERA_TWEEN_TIME          = 1500;
CONFIG.MAIN_MENU.LOAD_GAME_MENU_TWEEN       = 300;
CONFIG.MAIN_MENU.LOAD_GAME_MENU_WAIT_TIME   = 200;
CONFIG.MAIN_MENU.LOAD_GAME_MENU_ALPHA       = 0.3;
CONFIG.MAIN_MENU.BACK_MENU_TWEEN            = 200;
CONFIG.MAIN_MENU.BACK_MENU_WAIT_TIME        = 300;
CONFIG.MAIN_MENU.CURTAIN                    = {};
CONFIG.MAIN_MENU.CURTAIN.WAIT_TIME          = 200;
CONFIG.MAIN_MENU.CURTAIN.FADE_TIME          = 1200;

// Escave attributes.
CONFIG.ESCAVE                               = {};
CONFIG.ESCAVE.CURTAIN                       = {};
CONFIG.ESCAVE.CURTAIN.WAIT_TIME             = 200;
CONFIG.ESCAVE.CURTAIN.FADE_TIME             = 1200;
CONFIG.ESCAVE.CURTAIN.ALPHA                 = 0.3;

// resource increase modifier.
CONFIG.RESOURCE_INCREASE_MODIFIER           = 1000;