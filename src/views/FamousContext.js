define(function(require, exports, module) {
  var Engine  = require('famous/core/Engine');
  var CanvasView = require('views/CanvasView');

  var canvasView;

  function FamousContext(baseElement, size){
    var mainContext = Engine.createContext(baseElement);

    mainContext.setPerspective(1000);

    canvasView = new CanvasView({
      size: size
    });

    mainContext.add(canvasView);    
  }

  FamousContext.prototype = Object.create(Object.prototype);
  FamousContext.prototype.constructor = FamousContext;

  FamousContext.prototype.getCanvasContext = function() {
    return canvasView.getContext();
  }


  
  module.exports = FamousContext;
});