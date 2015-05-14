// Mixin to get resize event

var WindowResizeMixin = {
  componentDidMount: function() {
    window.addEventListener('resize', this.onResize, false);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.onResize, false);
  }
};

module.exports = WindowResizeMixin;