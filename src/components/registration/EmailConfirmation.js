import React from 'react';
import EmailConfirmationActionCreator from '../../actions/EmailConfirmationActionCreator';
import { Link } from 'react-router';

export default React.createClass({
	_getHash: function() {		
		return window.location.hash.split('/')[2];
	},
	componentDidMount: function() {
		EmailConfirmationActionCreator.confirmEmail(this._getHash());
	},
	render: function() {
		return (<div className="container">
				<div className="row">
					<div className="col-md-4">
						<h4 className="page_title">Successful.</h4>
		            	<p>Successfully confirmed your email address.</p>
		            	<br />
            			<p>Click <Link to="login"><strong>here</strong></Link> to log-in.</p>
					</div>
					<div className="col-md-4" />
					<div className="col-md-4" />
				</div>
			</div>);
	}
});