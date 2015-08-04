var React = require('react');
var Icon = require('react-icons');

var App = React.createClass({
	render () {
		return (
			<Icon name="circle" className="test-this-out" />
		);
	}
});

React.render(<App />, document.getElementById('app'));
