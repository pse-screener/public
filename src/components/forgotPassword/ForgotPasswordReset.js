import React from 'react';
import ForgotPasswordActionCreator from '../../actions/ForgotPasswordActionCreator';
import ForgotPasswordStore from '../../stores/ForgotPasswordStore';

function getStatus() {
	return ForgotPasswordStore.getStatus();
}

export default React.createClass({
	getInitialState: function() {
		return {
			message: "Please wait...",
			displayLoader: true
		}
	},
	componentWillMount: function() {
		// this might not be perfect yet
		function getUrlVars() {
			var vars = {};
			var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
			
			function(m,key,value) {
				vars[key] = value;
			});

			return vars;
		}

		let hash = getUrlVars()["hash"];
		ForgotPasswordActionCreator.forgotPasswordReset(hash);
	},
	componentDidMount: function() {
		ForgotPasswordStore.addChangeListener(this._onStatusChange);
	},
	componentWillUnmount: function() {
		ForgotPasswordStore.removeChangeListener(this._onStatusChange);
	},
	_onStatusChange: function() {
		this.setState({message: getStatus()["statusDesc"], displayLoader: false});
	},
	render: function() {
		let renderLoader = null;
		if (this.state.displayLoader)
			renderLoader = (<img style={{WebkitUserSelect: "none"}} src="public/images/ajax-loader-small.gif" />);

		return (<div className="container">
					<div className="row">
						<div className="col-sm-5 col-md-3 col-lg-4">
							<h4 className="page_title">Forgot Password</h4>
                        	<span>{renderLoader}</span> <span>{this.state.message}</span>
						</div>
						<div className="col-sm-4 col-md-5 col-lg-4"></div>
						<div className="col-sm-3 col-md-4 col-lg-4"></div>
					</div>
				</div>);
	}
});