// Configs
S.cfga({
  "defaultToCurrentScreen" : true,
  "secondsBetweenRepeat" : 0.1,
  "checkDefaultsOnLoad" : true,
  "focusCheckWidthMax" : 3000,
  "orderScreensLeftToRight" : true
});

// Monitors
var monTbolt  = "2560x1440";
var monMBP = "2880x1800";


/*
 * TODO
 *
 * - reverting positioning
 * - from fullscreen back to smth
 * - SUCH POSSIBILITIES!
 *
 *
 */

// Create Operations
var pushRight = slate.operation("push", {
  "direction" : "right",
  "style" : "bar-resize:screenSizeX/3"
});

var pushLeft = slate.operation("push", {
  "direction" : "left",
  "style" : "bar-resize:screenSizeX/3"
});

var chromeLeft = slate.operation("push", {
  "direction" : "left",
  "style" : "bar-resize:screenSizeX/1.3"
});

var pushTop = slate.operation("push", {
  "direction" : "top",
  "style" : "bar-resize:screenSizeY/2"
});

var fullscreen = slate.operation("move", {
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX",
  "height" : "screenSizeY"
});

//left
slate.bind("left:ctrl,cmd", function(win) {

  win.doOperation(pushLeft);

});

//right
slate.bind("right:ctrl,cmd", function(win) {

  win.doOperation(pushRight);

});

//top
slate.bind("up:ctrl,cmd", function(win) {

  win.doOperation(pushRight);

});

//full
slate.bind("pad0:ctrl,cmd", function(win) {

  win.doOperation(fullscreen);

});


// Bind A Crazy Function to 1+ctrl
slate.bind("1:ctrl", function(win) {

  // here win is a reference to the currently focused window
  if (win.title() === "OMG I WANT TO BE FULLSCREEN") {
    win.doOperation(fullscreen);
    return;
  }

  var appName = win.app().name();

  if (appName === "iTerm") {

    win.doOperation(pushRight);
  } else if (appName === "Google Chrome") {

    win.doOperation(chromeLeft);
  } else {

    win.doOperation(pushTop);
  }
});
