var React = require('react');
var ReactIcons = require('react-icons');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactIcons />
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
