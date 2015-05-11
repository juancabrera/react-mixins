var SimplePageScrollMixin = {
  componentDidMount: function() {
    window.addEventListener('scroll', this.onScroll, false);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.onScroll, false);
  }
};

module.exports = SimplePageScrollMixin;