import React from 'react/addons';
// import ionicons from './ionicons-map';

const ionicons = {
	'circle': '<svg height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>',
}

var Icon = React.createClass({
	displayName: 'Icon',

	propTypes: {
		color: React.PropTypes.string,
		name: React.PropTypes.oneOf(Object.keys(ionicons)).isRequired,
		size: React.PropTypes.number,
	},
	
	getDefaultProps () {
		return {
			color: 'black',
			size: 32,
		}
	},

	render () {
		let svg = ionicons[this.props.name];
		return React.createElement('span', {
			className: this.props.className,
			dangerouslySetInnerHTML: {
				__html: svg
			}
		});
	}
});

export default Icon;
