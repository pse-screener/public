import React from 'react';
import Alert from './Alert';
import { Link } from 'react-router';
import LoginActionCreator from '../actions/LoginActionCreator';
import LoginStore from '../stores/LoginStore';

function getAccessToken() {
    return LoginStore.getAccessToken();
}

let Login = React.createClass({
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
        let errorObject = LoginStore.getErrorReason();

        if (errorObject) {
            // notryrin
        } else
            LoginActionCreator.loginToAdmin(accessToken.access_token);            
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
        return (<div className="container">
            <div className="row">
                <div className="col-xs-2 col-sm-3 col-md-4">
                </div>
                <div className="col-xs-8 col-sm-6 col-md-4">
                    <div className="panel panel-default login">
                        <div className="panel-heading">
                            <h3 className="panel-title">Login</h3>
                        </div>
                        <div className="panel-body">
                            <form method="post" action="#">
                                <div className="form-group">
                                    <label htmlFor="username">Email</label>
                                    <input type="email" className="form-control" id="username" name="username" ref="username" placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" ref="password" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={this._onLoginSubmit}>Login</button>
                                <Link to="forgotpassword" className="pull-right">Forgot password</Link>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2 col-sm-3 col-md-4">
                    <Alert message={this.state.errorMessage} alertType="danger" />
                </div>
            </div>
        </div>);
    }
});

export default Login;