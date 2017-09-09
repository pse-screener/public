'use strict';
import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	componentDidMount(){
		window.FB.XFBML.parse(); //saying FB plugin to re parse the dom.
	},

	render: function() {
		return (<div className="container">
					<h4 className="page_title">Customers</h4>
		            <hr />
		            <h3>Are you a trader or a stock investor?</h3>
		            <p>You came into the right place! Whether you are a trader or an investor that monitors stock prices we can take care of it.
		            <br />
		            Register <Link to="registration"><strong>here</strong></Link> for absolutely free of charge.</p>

		            <div className="row">
		            	<div className="col-sm-6">
		            		<br /><hr />
		            		<p>Add some comments here.</p>
							<div className="fb-comments" data-href="https://www.facebook.com/freeSMStoAll/" data-numposts="5"></div>
		            	</div>
		            </div>
				</div>
		);
	}
});