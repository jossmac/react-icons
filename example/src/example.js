var React = require('react');
var Icon = require('react-icons');

var App = React.createClass({
	render () {
		return (
			<Icon name="test" size={128} color="white" className="can-haz-custom-classname" />
		);
	}
});

React.render(<App />, document.getElementById('app'));
