import { Component } from 'react';
import Alert from './Alert';
import ContactUsActionCreator from '../actions/ContactUsActionCreator';
import ContactUsStore from '../stores/ContactUsStore';
import Spinner from './Spinner';
import Recaptcha from 'react-recaptcha';
import publicVar from '../constants/publicVar';

class ContactUs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			alert: {
					showAlert: false,
					alertMessage: '',
					alertType: ''
				},
			showSpinner: false,
			recaptchaString: '',
			messageData: {
				fName: '',
				lName: '',
				email: '',
				phoneNo: '',
				message: '',
				'g-recaptcha-response': ''
			}
		};

		this._handleSubmit = this._handleSubmit.bind(this);
		this._onSendingMessage = this._onSendingMessage.bind(this);
		this._handleInputChange = this._handleInputChange.bind(this);
		this.recaptchaVerifyCallback = this.recaptchaVerifyCallback.bind(this);
	}

	componentDidMount() {
		ContactUsStore.addChangeListener(this._onSendingMessage);
	}

	componentWillUnmount() {
		ContactUsStore.removeChangeListener(this._onSendingMessage);
	}

	_onSendingMessage() {
		let response = ContactUsStore.getData(),
			error = ContactUsStore.getError();

		let alert = {...this.state.alert};
		alert.showAlert = true;

		if (error) {
			alert.alertMessage = error.errorThrown;
			alert.alertType = 'danger';

			this.setState({alert, showSpinner: false});
		} else if (response) {
			alert.alertMessage = response.message;
			alert.alertType = 'success';

			this.setState({alert, showSpinner: false, recaptchaString: ''});
		}
	}

	_handleInputChange(event) {
		const name = event.target.name;
		let messageData = {...this.state.messageData};
		messageData[name] = event.target.value;

		this.setState({messageData});
	}

	_handleSubmit(event) {
		let alert = {...this.state.alert};
		alert.showAlert = false; alert.alertMessage = '', alert.alertType = '';

		this.setState({alert, showSpinner: true});

		event.preventDefault();

		if (this.state.recaptchaString === '') {
			alert = {...this.state.alert};
			alert.showAlert = true; alert.alertMessage = 'Please resolve captcha', alert.alertType = 'danger';
			this.setState({alert, showSpinner: false});
			return;
		}

		let messageData = {...this.state.messageData};
		messageData["g-recaptcha-response"] = this.state.recaptchaString;

		ContactUsActionCreator.onSubmit(messageData);
	}

	recaptchaVerifyCallback(string) {
		this.setState({recaptchaString: string});
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<h4 className="page_title">Contact Us</h4>
			            <hr />
						<h4>If you have question, verification, or issues regarding the site?</h4>
						<p>Reach us through this channel and we're happy to assist you.</p>
					</div>
				</div>
				<div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                    	{ this.state.showSpinner ? <Spinner /> : null}
                    	{ this.state.alert.showAlert ? <Alert message={this.state.alert.alertMessage} alertType={this.state.alert.alertType} /> : null }
                        <form onSubmit={this._handleSubmit}>
                                <div className="col-sm-6 col-md-6" style={{marginTop: '15px'}}>
                                    <input type="text" name="fName" className="form-control" placeholder="First name *" required="required" value={this.state.messageData.fName} onChange={this._handleInputChange} />
                                </div>
                                <div className="col-sm-6 col-md-6" style={{marginTop: '15px'}}>
                                    <input type="text" name="lName" className="form-control" placeholder="Last name *" required="required" value={this.state.messageData.lName} onChange={this._handleInputChange} />
                                </div>
                                <div className="col-sm-6 col-md-6" style={{marginTop: '15px'}}>
                                    <input type="text" name="email" className="form-control" placeholder="Email *" required="required" value={this.state.messageData.email} onChange={this._handleInputChange} />
                                </div>
                                <div className="col-sm-6 col-md-6" style={{marginTop: '15px'}}>
                                    <input type="text" name="phoneNo" className="form-control" placeholder="Phone number" value={this.state.messageData.phoneNo} onChange={this._handleInputChange} />
                                </div>
                                <div className="col-xs-12" style={{marginTop: '15px'}}>
                                    <textarea name="message" className="form-control" placeholder="Your issue or your message. *" rows="4" required="required" value={this.state.messageData.message} onChange={this._handleInputChange}></textarea>
                                </div>
                                <div className="col-xs-12" style={{marginTop: '15px'}}>
                                	<Recaptcha sitekey={publicVar.sitekey} render="explicit" onloadCallback={function() {}} verifyCallback={this.recaptchaVerifyCallback} />
                                </div>
                                <div className="col-xs-12" style={{textAlign: 'center', marginTop: '15px'}}>
                                    <input type="submit" className="btn btn-primary btn-lg" value="Send message" />
                                </div>
                        </form>
                    </div>
                </div>
                <div style={{marginBottom: '20px'}}></div>
			</div>
		);
	}
}

export default ContactUs;