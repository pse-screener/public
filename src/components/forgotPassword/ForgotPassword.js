'use strict';
import React from 'react';
import ForgotPasswordActionCreator from '../../actions/ForgotPasswordActionCreator';
import ForgotPasswordStore from '../../stores/ForgotPasswordStore';
import Alert from '../Alert';

function getStatus() {
	return ForgotPasswordStore.getStatus()
}

export default React.createClass({
	getInitialState: function() {
		return {
			status: {},
			displayAlert: false,
			displayLoader: false
		}
	},
	componentDidMount: function() {
        ForgotPasswordStore.addChangeListener(this._onErrorEvent);
        this.refs.email.focus();
    },
    // it is always a good idea to remove listener when unmounting. It actually causes error
    componentWillUnmount: function() {
        ForgotPasswordStore.removeChangeListener(this._onErrorEvent);
    },
    _onErrorEvent: function() {
    	//getStatus() returns object; no var holder
    	// this.state.displayAlert = true;
        this.setState({
        	displayLoader: false,
        	displayAlert: true,
        	status: getStatus().message,
        });
    },
	_onClick: function() {
		this.state.status = {};
		this.state.displayLoaderert = false;
		this.state.displayLoader = true;
		let email = this.refs.email.value.trim();

		if (this.state.displayLoader)
			this.forceUpdate();

		if (email.length < 6) {
			this.setState({
				status: {statusDesc: "Please enter valid email address."},
				displayAlert: true,
			});
			// this.state.status.statusDesc = "Please enter valid email address.";
            // this.state.displayAlert = true;
        }

        if (this.state.displayAlert) {
        	this.state.displayLoader = false;
        	this.forceUpdate();
        } else {
        	ForgotPasswordActionCreator.onSubmit(email);
        }
	},
	render: function() {
		let renderAlert = null, renderLoader = null;
		if (this.state.displayAlert)
			renderAlert = (<Alert message={this.state.status} alertType="danger" />);
		if (this.state.displayLoader)
			renderLoader = (<img style={{WebkitUserSelect: "none"}} src="public/images/ajax-loader-small.gif" />);

		return (<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h4 className="page_title">Forgot Password</h4>
							{renderAlert}
                        	<p>Enter your email address.</p>
                        	<div className="col-xs-6 col-sm-6 col-md-4 col-lg-5"><input ref="email" type="email" className="form-control" placeholder="Enter email address" />{renderLoader}</div>
                        	<div className="col-xs-6 col-sm-2 col-md-3 col-lg-2"><button type="button" className="btn btn-primary" onClick={this._onClick}>Send</button></div>
						</div>
					</div>
				</div>);
	}
});