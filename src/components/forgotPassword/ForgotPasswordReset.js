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
			displayLoader: false,
		}
	},
	componentWillMount: function() {
		// this might not be perfect yet
		/*function getUrlVars() {
			var vars = {};
			var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
			
			function(m,key,value) {
				vars[key] = value;
			});

			return vars;
		}*/

		// let hash = getUrlVars()["hash"];
		/*let hash = return window.location.pathname.split('/')[3];
		ForgotPasswordActionCreator.forgotPasswordReset(hash);*/
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
	_getHash: function() {
		return window.location.pathname.split('/')[3];
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

                        	<form className="form-horizontal" role="form" method="POST" action="#">
                        		<input type="hidden" name="token" value="{this._getHash()}" />
		                        <div className="form-group">
		                            <label for="email" className="col-md-4 control-label">E-Mail Address</label>
		                            <div className="col-md-6">
		                                <input id="email" type="email" className="form-control" name="email" value="" required="" autofocus="" />
		                            </div>
		                        </div>
		                        <div className="form-group">
		                            <label for="password" className="col-md-4 control-label">Password</label>
		                            <div className="col-md-6">
		                                <input id="password" type="password" className="form-control" name="password" required="" />
		                            </div>
		                        </div>
		                        <div className="form-group">
		                            <label for="password-confirm" className="col-md-4 control-label">Confirm Password</label>
		                            <div className="col-md-6">
		                                <input id="password-confirm" type="password" className="form-control" name="password_confirmation" required="" />
		                            </div>
		                        </div>
		                        <div className="form-group">
		                            <div className="col-md-6 col-md-offset-4">
		                                <button type="submit" className="btn btn-primary">
		                                    Reset Password
		                                </button>
		                            </div>
		                        </div>
                        	</form>
						</div>
						<div className="col-sm-4 col-md-5 col-lg-4"></div>
						<div className="col-sm-3 col-md-4 col-lg-4"></div>
					</div>
				</div>);
	}
});