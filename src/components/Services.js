'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './header/Menu';

export default React.createClass({
	//mixin: []
	componentDidMount: function() {
		$('#home').removeClass("active");
		$('#services').addClass("active");
		$('#customers').removeClass("active");
		$('#about').removeClass("active");
		$('#login').removeClass("active");
		$('#registration').removeClass("active");
	},
	render: function() {
		return (<div className="container">
					Services Page.
				</div>
		);
	}
});