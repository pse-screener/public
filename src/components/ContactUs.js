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
			recaptchaString: ''
		};

		this._handleSubmit = this._handleSubmit.bind(this);
		this._onSendingMessage = this._onSendingMessage.bind(this);
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

	_handleSubmit(e) {
		let alert = {...this.state.alert};
		alert.showAlert = false; alert.alertMessage = '', alert.alertType = '';
		this.setState({alert, showSpinner: true});

		e.preventDefault();

		if (this.state.recaptchaString === '') {
			alert = {...this.state.alert};
			alert.showAlert = true; alert.alertMessage = 'Please resolve captcha', alert.alertType = 'danger';
			this.setState({alert, showSpinner: false});
			return;
		}

		const data = {
			fName: this.refs.fName.value.trim(),
			lName: this.refs.lName.value.trim(),
			email: this.refs.email.value.trim(),
			phoneNo: this.refs.phoneNo.value.trim(),
			message: this.refs.message.value.trim()
		};

		ContactUsActionCreator.onSubmit(data);
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
                                <div className="col-sm-6 col-md-6" style={{marginTop: '20px'}}>
                                    <input ref="fName" type="text" name="fName" className="form-control" placeholder="First name *" required="required" />
                                </div>
                                <div className="col-sm-6 col-md-6" style={{marginTop: '20px'}}>
                                    <input ref="lName" type="text" name="lName" className="form-control" placeholder="Last name *" required="required" />
                                </div>
                                <div className="col-sm-6 col-md-6" style={{marginTop: '20px'}}>
                                    <input ref="email" type="text" name="email" className="form-control" placeholder="Email *" required="required" />
                                </div>
                                <div className="col-sm-6 col-md-6" style={{marginTop: '20px'}}>
                                    <input ref="phoneNo" type="text" name="phone" className="form-control" placeholder="Phone number" />
                                </div>
                                <div className="col-xs-12" style={{marginTop: '20px'}}>
                                    <textarea ref="message" name="message" className="form-control" placeholder="Your issue or your message. *" rows="4" required="required"></textarea>
                                </div>
                                <div className="col-xs-12" style={{marginTop: '20px'}}>
                                	<Recaptcha sitekey={publicVar.sitekey} render="explicit" onloadCallback={function() {}} verifyCallback={this.recaptchaVerifyCallback} />
                                </div>
                                <div className="col-xs-12" style={{textAlign: 'center', marginTop: '20px'}}>
                                    <input ref="sendMessage" type="submit" className="btn btn-primary btn-lg" value="Send message" />
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