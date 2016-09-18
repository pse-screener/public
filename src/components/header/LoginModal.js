// 'use strict';
let React = window.React = require('react');
import Alert from '../Alert';
import { Link } from 'react-router';
import LoginActionCreator from '../../actions/LoginActionCreator';
import LoginStore from '../../stores/LoginStore';

function getAccessToken() {
    return LoginStore.getAccessToken();
}

module.exports = React.createClass({
	getInitialState: function() {
        return {
            displayAlert: false,
            errorMessage: ""
        }
    },
    componentDidMount: function() {
        LoginStore.addChangeListener(this._onLoginRequest);
    },
    componentWillUnmount: function() {
        LoginStore.removeChangeListener(this._onLoginRequest);
    },
    _onLoginRequest: function() {
        let accessToken = getAccessToken();

        if (accessToken.access_token)
            LoginActionCreator.loginToAdmin(accessToken.access_token);
        else
            console.log("Invalid authentication.");
    },
    _onLoginSubmit: function(e) {
        e.preventDefault();
        this.state.displayAlert = false;
        this.state.errorMessage = "";

        let data = {},
        username = this.refs.username.value.trim(),
        password = this.refs.password.value.trim();

        if (username.length < 6) {
            this.state.errorMessage = "Invalid Email.";
            this.state.displayAlert = true;
        }
        if (password.length < 4) {
            this.state.errorMessage = "Password should be at least 6 characters.";
            this.state.displayAlert = true;
        }

        data.username = username;
        data.password = password;
        data.grant_type = 'password';

        if (this.state.displayAlert)
            this.forceUpdate();
        else
            LoginActionCreator.onLoginSubmit(data);
    },
	render: function() {
		return (<div className="modal fade" id="myModal">
		        <div className="modal-dialog">
		            <div className="modal-content">
		                <div className="modal-header">
		                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
		                    </button>
		                    <div className="modal-title">
		                        <h4>Log-in</h4>
		                    </div>
		                    <div className="modal-subtitle"><small>Enter your username and password</small></div>
		                </div>
		                <div className="modal-body">
		                    <form method="post" action="#" className="form-horizontal">
		                        <div className="form-group">
		                             <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
		                             <div className="col-sm-8">
		                                <input type="email" className="form-control" id="username" name="username" ref="username" placeholder="You email here" />
		                             </div>
		                             <div col="className-sm-2"></div>
		                        </div>
		                        <div className="form-group">
		                            <label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
		                            <div className="col-sm-8">
		                                <input type="password" id="password" name="password" ref="password" className="form-control" placeholder="Input password here" />
		                            </div>
		                        </div>
		                        <div className="form-group">
		                            <div className="col-sm-offset-2 col-sm-4">
		                                <div className="checkbox">
		                                    <label><input type="checkbox" /> Remember me</label>
		                                </div>
		                            </div>
		                            <div className="col-sm-offset-2 col-sm-4">
		                                <Link to="forgotpassword">Forgot password</Link>
		                            </div>
		                        </div>
		                        <div className="form-group">
		                            <div className="col-sm-offset-2 col-sm-10">
		                                <button type="submit" className="btn btn-primary" onClick={this._onLoginSubmit}>Log-in</button>
		                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
		                            </div>
		                        </div>
		                    </form>
		                </div>
		            </div>
		        </div>
    		</div>);
	}
});