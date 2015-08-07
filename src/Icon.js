// import blacklist from 'blacklist';
import { createClass, createElement, PropTypes } from 'react';
// import ionicons from './ionicons-map';

const ionicons = {
	'test': '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path d="M476.7,422.2L270.1,72.7c-2.9-5-8.3-8.7-14.1-8.7c-5.9,0-11.3,3.7-14.1,8.7L35.3,422.2c-2.8,5-4.8,13-1.9,17.9 c2.9,4.9,8.2,7.9,14,7.9h417.1c5.8,0,11.1-3,14-7.9C481.5,435.2,479.5,427.1,476.7,422.2z M288,400h-64v-48h64V400z M288,320h-64 V176h64V320z"/></svg>'
};
const CLEANUPS = {
	// some useless junk
	title: /<title>.*<\/title>/gi,
	desc: /<desc>.*<\/desc>/gi,
	comment: /<!--.*-->/gi,
	defs: /<defs>.*<\/defs>/gi,
	
	// remove hardcoded dimensions
	width: / +width="\d+(\.\d+)?(px)?"/gi,
	height: / +height="\d+(\.\d+)?(px)?"/gi,
	
	// remove fill
	fill: / +fill=\"(none|#[0-9a-f]+)\"/gi,
	
	// Sketch.app shit
	sketchMSShapeGroup: / +sketch:type=\"MSShapeGroup\"/gi,
	sketchMSPage: / +sketch:type=\"MSPage\"/gi,
	sketchMSLayerGroup: / +sketch:type=\"MSLayerGroup\"/gi
};

var Icon = createClass({
	displayName: 'Icon',

	propTypes: {
		color: PropTypes.string,
		name: PropTypes.oneOf(Object.keys(ionicons)).isRequired,
		size: PropTypes.number
	},
	
	getDefaultProps () {
		return {
			color: 'black',
			size: 32,
		};
	},

	cleanupSvg(svg) {
		return Object.keys(CLEANUPS)
			.reduce((acc, key) => {
				return acc.replace(CLEANUPS[key], '');
			}, svg)
			.trim();
	},

	render () {
		let fill = this.props.color;
		let height, width;
		let svg = ionicons[this.props.name];
		let svgClasses = 'SVGIcon ' + this.props.className;
		
		height = width = this.props.size;
		
		return createElement('div', {
			style: {
				backgroundColor: 'blue',
				display: 'inline-block',
				lineHeight: 0,
				overflow: 'hidden',
			},
			dangerouslySetInnerHTML: {
				__html: this.cleanupSvg(svg).replace(
					/<svg/,
					`<svg class="${ svgClasses }"` +
					(
						fill
						? ` fill="${ fill }"`
						: ``
					) +
					(
						width || height
						? (
							` style="` +
								(width ? `width: ${width};` : ``) +
								(height ? `height: ${height};` : ``) +
							`"`
						)
						: ""
					)
				),
			},
		});
	}
});

export default Icon;
