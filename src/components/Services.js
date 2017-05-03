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
					<h4 className="page_title">Services</h4>
		            <hr />
					Sends SMS message to users based on their criteria on PSE stock prices.
				</div>
		);
	}
});