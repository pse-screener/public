import React from 'react';

export default React.createClass({
	render: function() {
		return (<div className="container">
				<div className="row">
					<div className="col-md-4">
						<h4 className="page_title">Forgot Password</h4>
		            	<p>Please check your email to reset your password.</p>
		            	<p>An SMS has also been sent.</p>
					</div>
					<div className="col-md-4" />
					<div className="col-md-4" />
				</div>
			</div>);
	}
});