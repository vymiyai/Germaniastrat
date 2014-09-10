"use strict";

var CONFIG = {};

// global.
CONFIG.FPS                                  = 30;
CONFIG.RESOLVE_INTERVAL                     = 500;

// world menu configuratons.
CONFIG.BUTTON_HEIGHT                        = 70;
CONFIG.BUTTON_WIDTH                         = 120;
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