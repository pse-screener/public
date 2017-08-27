'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './header/Menu';
import { Link } from 'react-router';

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
		            <h3>Looking for an alert system of the daily stock prices right to your mobile phone?</h3>
					We offer free SMS alert service for all registered user of the site. Yes it's absolutely free of charge! In order to get free from our services, you have to register to avail. It is needed to keep track of all our users. To register click <Link to="registration"><strong>here</strong></Link>.
				</div>
		);
	}
});