# RequestAnimationFrameMixin
Request animation frame shim mixin for React.

### Sample
Scrolling with Request Animation Frame.

```javascript
import SimplePageScrollMixin from '../mixins/SimplePageScrollMixin';
import RequestAnimationFrameMixin from '../mixins/                

var Comp = React.createClass({
  mixins: [SimplePageScrollMixin, RequestAnimationFrameMixin],

  onScroll: function() {
    requestAnimFrame(this._rafScrolling);
  },

  _rafScrolling: function() {
	// Scroll on RAF
  }, 

  render: function() {
    return (
      <div></div>
    );
  }
});

module.exports = Comp;

```