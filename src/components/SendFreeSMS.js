import { Component } from 'react';
import Alert from './Alert';
import SendFreeSmsActionCreator from '../actions/SendFreeSmsActionCreator';
import SendFreeSmsStore from '../stores/SendFreeSmsStore';
import Spinner from './Spinner';
import Recaptcha from 'react-recaptcha';
import publicVar from '../constants/publicVar';

class SendFreeSMS extends Component {
	constructor(props) {
		super(props);

		this.state = {
			alert: {
					showAlert: false,
					alertMessage: '',
					alertType: ''
				},
			showSpinner: false,
			messageData: {
					phoneNo: '',
					message: '',
					'g-recaptcha-response': ''
				}
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.onSendingMessage = this.onSendingMessage.bind(this);
		this.recaptchaVerifyCallback = this.recaptchaVerifyCallback.bind(this);
		this.onReset = this.onReset.bind(this);
	}

	componentDidMount() {
		SendFreeSmsStore.addChangeListener(this.onSendingMessage);
	}

	componentWillUnmount() {
		SendFreeSmsStore.removeChangeListener(this.onSendingMessage);
	}

	onSendingMessage() {
		const response = SendFreeSmsStore.getData(),
			error = SendFreeSmsStore.getError();

		let alert = {...this.state.alert};
		alert.showAlert = true;

		if (error) {
			alert.alertMessage = error.errorThrown;
			alert.alertType = 'danger';

			this.setState({alert, showSpinner: false});
		} else if (response) {
			alert.alertMessage = response.message;
			alert.alertType = 'success';

			this.setState({alert, showSpinner: false});
		}
	}

	handleInputChange(event) {
		const name = event.target.name,
			messageData = {...this.state.messageData};
		messageData[name] = event.target.value;

		this.setState({messageData});
	}

	handleSubmit(event) {
		if (this.state.showSpinner)
			return;

		let alert = {...this.state.alert};
		alert.showAlert = false; alert.alertMessage = '', alert.alertType = '';

		this.setState({alert, showSpinner: true});

		event.preventDefault();

		if (this.state.messageData.phoneNo.length !== 11) {
			alert = {...this.state.alert};
			alert.showAlert = true; alert.alertMessage = 'Invalid phone number. Please enter 11 digit number.', alert.alertType = 'danger';
			this.setState({alert, showSpinner: false});
			return;
		}
		if (this.state.messageData.message.length > 160) {
			alert = {...this.state.alert};
			alert.showAlert = true; alert.alertMessage = 'Limit characters to 160 only.', alert.alertType = 'danger';
			this.setState({alert, showSpinner: false});
			return;
		}

		if (this.state.messageData['g-recaptcha-response'] === '') {
			alert = {...this.state.alert};
			alert.showAlert = true; alert.alertMessage = 'Please resolve captcha', alert.alertType = 'danger';
			this.setState({alert, showSpinner: false});
			return;
		}

		SendFreeSmsActionCreator.onSubmit(this.state.messageData);
	}

	recaptchaVerifyCallback(string) {
		let messageData = {...this.state.messageData};
		messageData['g-recaptcha-response'] = string;
		this.setState({messageData});
	}

	onReset() {
		const messageData = {...this.state.messageData};
		messageData.phoneNo = ''; messageData.message = ''; messageData['g-recaptcha-response'] = '';
		this.setState({messageData});
	}

	render() {
		return (
			<div className="container">
					<h4 className="page_title">Send Free SMS</h4>
		            <hr />
					<div className="row">
						<div className="col-sm-6">
							{ this.state.showSpinner ? <Spinner /> : null}
                    		{ this.state.alert.showAlert ? <Alert message={this.state.alert.alertMessage} alertType={this.state.alert.alertType} /> : null }
							<form onSubmit={this.handleSubmit}>
								<div style={{marginTop: '15px'}}>
                                    <input type="text" name="phoneNo" className="form-control" placeholder="Phone number *" value={this.state.messageData.phoneNo} onChange={this.handleInputChange} maxLength="11" />
                                </div>
                                <div style={{marginTop: '15px'}}>
                                    <textarea name="message" className="form-control" placeholder="Your message. *" rows="4" required="required" value={this.state.messageData.message} onChange={this.handleInputChange} resize="none" maxLength="160"></textarea>
                                </div>
                                <div style={{marginTop: '15px'}}>
                                	<Recaptcha sitekey={publicVar.sitekey} render="explicit" onloadCallback={function() {}} verifyCallback={this.recaptchaVerifyCallback} />
                                </div>
                                 <div style={{textAlign: 'center', marginTop: '15px'}}>
                                    <input type="submit" className="btn btn-primary btn-lg" style={{marginRight: '7px'}} value="Send SMS" />
                                    <input type="button" className="btn btn-default btn-lg" value="Reset" onClick={this.onReset} />
                                </div>
							</form>
						</div>
						<div className="col-sm-6"><br />
							<p>Send text message to anyone in the Philippines even if you are from abroad. No more registration needed just send that message right away to your loved ones to show you care.</p>
							<p>We have created this app for all specially our fellow OFW's who have been working so hard outside the Philippines to give brighter future to their family.</p>
							<img src="public/images/telcos_logo-xs.jpg" className="telCo_logo-xs" />
							<img src="public/images/telcos_logo.jpg" className="telCo_logo-sm" />
						</div>
					</div>
			</div>
		);
	}
}

export default SendFreeSMS;