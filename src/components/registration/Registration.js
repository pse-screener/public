import React from 'react';
import RegistrationActionCreator from '../../actions/RegistrationActionCreator';
import RegistrationStore from '../../stores/RegistrationStore';
import Alert from '../Alert';
import $ from 'jquery';
import Recaptcha from 'react-recaptcha';
import { HashLocation } from 'react-router';
import Spinner from '../Spinner';
import publicVar from '../../constants/publicVar';

let Registration = {
    getInitialState: function() {
        return {
            displayAlert: false,
            errorMessage: "",
            showSpinner: false,
            captchaString: ''
        };
    },
    componentDidMount: function() {
        RegistrationStore.addChangeListener(this._onRegistrationRequest);
    },
    componentWillUnmount: function() {
        RegistrationStore.removeChangeListener(this._onRegistrationRequest);
    },
    _onRegistrationRequest: function() {
        let errorObject = RegistrationStore.getErrorObject();
        let successObject = RegistrationStore.getSuccessObject();

        let errorAsText = "";
        if (errorObject) {
            for (let key in errorObject.jqXHR.responseJSON) {
                errorAsText = errorAsText.concat(errorObject.jqXHR.responseJSON[key][0]);
            }

            this.setState({displayAlert: true, errorMessage: errorAsText, showSpinner: false});
        } else if (successObject) {
            if (successObject.code == 0) {
                HashLocation.push('/successregistration');
            } else {
                errorAsText = successObject.message;
                this.setState({displayAlert: true, errorMessage: errorAsText, showSpinner: false});
            }
        }

        $("#submit").removeClass("disabled");
    },
    recaptchaVerifyCallback: function(string) {
        this.setState({captchaString: string});
    },
    _onSubmit: function(e) {
        e.preventDefault();

        if ($("#submit").hasClass("disabled"))
            return;

        this.setState({displayAlert: false, errorMessage: '', showSpinner: true});
        RegistrationStore.setErrorObject();
        RegistrationStore.setSuccessObject();

        let formComponent = $('#form'), data = {};

        let mobileNo = this.refs.mobileNo.value.trim(),
        fName = this.refs.fName.value.trim(),
        lName = this.refs.lName.value.trim(),
        email = this.refs.email.value.trim(),
        gender = this.refs.gender.value.trim(),
        password = this.refs.password.value.trim(),
        password_confirmation = this.refs.password_confirmation.value.trim();

        if (gender == 0) {
            this.setState({errorMessage: "Please choose your gender.", displayAlert: true, showSpinner: false});
            return;
        }
        if (mobileNo.length < 7) {
            this.setState({errorMessage: "Invalid mobile number.", displayAlert: true, showSpinner: false});
            return;
        }
        if (fName.length < 2) {
            this.setState({errorMessage: "Invalid first name.", displayAlert: true, showSpinner: false});
            return;
        }
        if (lName.length < 2) {
            this.setState({errorMessage: "Invalid last name.", displayAlert: true, showSpinner: false});
            return;
        }
        if (email.length < 6) {
            this.setState({errorMessage: "Invalid e-mail.", displayAlert: true, showSpinner: false});
            return;
        }        
        if (password.length < 6) {
            this.setState({errorMessage: "Password should be at least 6 alphanumeric characters.", displayAlert: true, showSpinner: false});
            return;
        }        
        if (password_confirmation.length < 6) {
            this.setState({errorMessage: "Password should be at least 6 alphanumeric characters.", displayAlert: true, showSpinner: false});
            return;
        }        
        if (password !== password_confirmation) {
            this.setState({errorMessage: "Password and confirm password are not the same.", displayAlert: true, showSpinner: false});
            return;
        }
        if (this.state.captchaString === '') {
            this.setState({errorMessage: "Please resolve captcha.", displayAlert: true, showSpinner: false});
            return;
        }

        formComponent.find('[name]').each(function(index, component) {
            data[component.name] = component.value;
        });

        $("#submit").addClass("disabled");
        RegistrationActionCreator.onSubmit(data);      
    },
    _onCancel: function() {
        this.refs.registrationForm.getDOMNode().reset;
    },
	render: function() {
		return (
            <div className="container">
                { this.state.showSpinner ? <Spinner /> : null }
				<div className="row">
                    <div className="col-sm-6">
                    <h4 className="page_title">Register</h4>
                    <hr />
                    <p>Fill out the form completely to use the services.</p>
                    <Alert message={this.state.errorMessage} alertType="danger" />
                    <hr />

                    <form className="form-horizontal" id="form" ref="registrationForm" method="post" action="#" onSubmit={this._onSubmit}>
                        <div className="form-group registerSubGroup">
                            <label className="col-sm-2 control-label" htmlFor="fName">First name</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="fName" name="fName" placeholder="First name" ref="fName" required="required" />
                            </div>
                            <label className="col-sm-2 control-label" htmlFor="lName">Last name</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="lName" name="lName" placeholder="Last name" ref="lName" required="required" />
                            </div>
                        </div>
                        
                        <div className="form-group registerSubGroup">
                            <label className="col-sm-3 control-label" htmlFor="email">Email</label>
                            <div className="col-sm-9">
                                <input type="email" className="form-control" id="email" name="email" placeholder="User email" ref="email" required="required" />
                            </div>
                        </div>

                        <div className="form-group registerSubGroup">
                            <label className="col-sm-3 control-label" htmlFor="gender">Gender</label>
                            <div className="col-sm-9">
                                <select className="form-control" id="gender" name="gender" ref="gender" required="required">
                                    <option value="0">-- select --</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group registerSubGroup">
                            <label className="col-sm-3 control-label" htmlFor="password">Password</label>
                            <div className="col-sm-9">
                                <input type="password" className="form-control" id="password" name="password" placeholder="Password" ref="password" required="required" />
                            </div>
                        </div>
                        <div className="form-group registerSubGroup">
                            <label className="col-sm-3 control-label" htmlFor="password_confirmation">Confirm Password</label>
                            <div className="col-sm-9">
                                <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" placeholder="Confirm Password" ref="password_confirmation" required="required" />
                                <span id="helpBlock" className="help-block">We recommend not to use your broker password here.</span>
                            </div>
                        </div>

                        <div className="form-group registerSubGroup">
                            <label className="col-sm-3 control-label" htmlFor="mobileNo">Mobile number</label>
                            <div className="col-sm-9">
                                <input className="form-control" type="text" id="mobileNo" name="mobileNo" placeholder="09178888888" maxLength="11" minLength="11" ref="mobileNo" required="required" />
                            </div>
                        </div>
                        <hr />

                        <h5>Captcha</h5>
                        <div className="form-group registerSubGroup">
                            <div className="col-sm-12">
                                <p>Refresh the page if no captcha image is shown below.</p>
                                <Recaptcha sitekey={publicVar.sitekey} render="explicit" onloadCallback={function() {}} verifyCallback={this.recaptchaVerifyCallback} />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-12">
                                <hr />
                                <div className="pull-right">
                                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>

                    <div className="col-sm-6">
                    </div>
                </div>
			</div>);
	}
};

export default React.createClass(Registration);