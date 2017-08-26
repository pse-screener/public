import React from 'react';
import Alert from './Alert';
import { Link } from 'react-router';
import LoginActionCreator from '../actions/LoginActionCreator';
import LoginStore from '../stores/LoginStore';
import Spinner from './Spinner';

function getAccessToken() {
    return LoginStore.getAccessToken();
}

let Login = React.createClass({
    getInitialState: function() {
        return {
            displayAlert: false,
            errorMessage: "",
            showSpinner: false
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

        this.setState({showSpinner: false});

        if (errorObject) {
            console.log(errorObject);
            this.setState({displayAlert: true, errorMessage: errorObject.errorThrown, showSpinner: false});
        } else {
            LoginActionCreator.loginToAdmin(accessToken.access_token);            
        }
    },
    _onLoginSubmit: function(e) {
        e.preventDefault();
        this.setState({displayAlert: false, errorMessage: '', showSpinner: true});

        let data = {},
        username = this.refs.username.value.trim(),
        password = this.refs.password.value.trim();

        if (username.length < 6) {
            this.setState({errorMessage: 'Invalid email', displayAlert: true, showSpinner: false});
            return;
        }
        if (password.length < 6) {
            this.setState({errorMessage: 'Invalid password.', displayAlert: true, showSpinner: false});
            return;
        }

        data.username = username;
        data.password = password;
        data.grant_type = 'password';

        LoginActionCreator.onLoginSubmit(data);
    },
    render: function() {
        return (<div className="container">
            <div className="row">
                <div className="col-xs-2 col-sm-3 col-md-4">
                    {this.state.displayAlert ? <Alert message={this.state.errorMessage} alertType='danger' /> : null}
                </div>
                <div className="col-xs-8 col-sm-6 col-md-4">
                    <div className="panel panel-default login">
                        <div className="panel-heading">
                            <h3 className="panel-title">Login</h3>
                        </div>
                        <div className="panel-body">
                            { this.state.showSpinner ? <Spinner /> : null }
                            <form method="post" action="#" onSubmit={this._onLoginSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Email</label>
                                    <input type="email" className="form-control" id="username" name="username" ref="username" placeholder="Username" required="required" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" ref="password" placeholder="Password" required="required" />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                                <Link to="forgotpassword" className="pull-right">Forgot password</Link>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2 col-sm-3 col-md-4">
                </div>
            </div>
        </div>);
    }
});

export default Login;