'use strict';
import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render: function() {
		return (<div className="container">
					<h4 className="page_title">Customers</h4>
		            <hr />
		            <h3>Are you a trader or a stock investor?</h3>
		            <p>You came into the right place! Whether you are a trader or an investor that monitors stock prices we can take care of it.
		            <br />
		            Register <Link to="registration"><strong>here</strong></Link> for absolutely free of charge.</p>
		            

				</div>
		);
	}
});