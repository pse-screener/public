let React = window.React = require('react');
import Alert from '../Alert';
import { Link } from 'react-router';
import LoginActionCreator from '../../actions/LoginActionCreator';
import LoginStore from '../../stores/LoginStore';
import $ from 'jquery';
import publicVar from '../../constants/publicVar';
import Spinner from '../Spinner';

function getAccessToken() {
    return LoginStore.getAccessToken();
}

module.exports = React.createClass({
	getInitialState: function() {
		return {
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

        if (errorObject) {
        	this.setState({showSpinner: false});
        	$('#closeBtn').click();
			window.location = publicVar.gotoLoginPage();
        } else {
        	LoginActionCreator.loginToAdmin(accessToken.access_token);
        }
    },
    _onLoginSubmit: function(e) {
        e.preventDefault();

        this.setState({showSpinner: true});

        let data = {},
        username = this.refs.username.value.trim(),
        password = this.refs.password.value.trim();

        data.username = username;
        data.password = password;
        data.grant_type = 'password';

        /*if (this.state.displayAlert)
            this.forceUpdate();
        else*/
            LoginActionCreator.onLoginSubmit(data);
    },
    _onForgotPasswordClicked: function() {
    	$('#closeBtn').click();
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
		                	{ this.state.showSpinner ? <Spinner /> : null }
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
		                                <Link to="forgotpassword" onClick={this._onForgotPasswordClicked}>Forgot password</Link>
		                            </div>
		                        </div>
		                        <div className="form-group">
		                            <div className="col-sm-offset-2 col-sm-10">
		                                <button type="submit" className="btn btn-primary" onClick={this._onLoginSubmit}>Log-in</button>
		                                <button id="closeBtn" name="closeBtn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
		                            </div>
		                        </div>
		                    </form>
		                </div>
		            </div>
		        </div>
    		</div>);
	}
});