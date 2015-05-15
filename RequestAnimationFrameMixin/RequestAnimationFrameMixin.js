var RequestAnimationFrameMixin = {
  componentDidMount: function () {
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ) {
                window.setTimeout(callback, 1000 / 60);
              };
    })();  
  }
};

module.exports = RequestAnimationFrameMixin;