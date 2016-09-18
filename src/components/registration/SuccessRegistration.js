'use strict';
import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render: function() {
		return (<div className="container">
            <h4 className="page_title">Successful</h4>
            	<p>Congratualtions!!! You have successfully registered.</p>
            	<p>Please check the email sent to you and click on the link to activate.</p>
            	<br />
            	<p>Click <Link to="login"><strong>here</strong></Link> to log-in.</p>
        	</div>);
	}
});