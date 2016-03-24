var React = require('react');
import ReactDOM from 'react-dom';
var PureRenderMixin = require('react-addons-pure-render-mixin');

export default React.createClass({
  render() {
    return (
      <div className="navi">
        <ul
          className="list-inline"
          style={styles}
          onClick={this.props.changeFeed}>
          <li>{"  Now Playing  "}</li>
          <li>{"  Coming Soon  "}</li>
          <li className="right">{"  Friends Feed  "}</li>
          <li><span style={{visibility:'hidden'}}>a</span></li>
        </ul>
      </div>
    )
  }
})

var styles = {
  fontSize: '14px',
  margin:"0",
  height: "50px"
}
