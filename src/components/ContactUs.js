import React, { Component } from 'react';
import Alert from './Alert';
import ContactUsActionCreator from '../actions/ContactUsActionCreator';
import ContactUsStore from '../stores/ContactUsStore';

class ContactUs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			alert: {
					showAlert: false,
					alertMessage: '',
					alertType: ''
				}
		};

		this._handleSubmit = this._handleSubmit.bind(this);
		this._onSendingMessage = this._onSendingMessage.bind(this);
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

			this.setState({alert});
		} else if (response) {
			alert.alertMessage = response.message;
			alert.alertType = 'success';

			this.setState({alert});
		}
	}

	_handleSubmit(e) {
		let alert = {...this.state.alert};
		alert.showAlert = false; alert.alertMessage = '', alert.alertType = '';
		this.setState({alert});

		e.preventDefault();

		const data = {
			fName: this.refs.fName.value.trim(),
			lName: this.refs.lName.value.trim(),
			email: this.refs.email.value.trim(),
			phoneNo: this.refs.phoneNo.value.trim(),
			message: this.refs.message.value.trim()
		};

		ContactUsActionCreator.onSubmit(data);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
                    <div className="col-md-8 col-md-offset-2">
                    	{this.state.alert.showAlert ? <Alert message={this.state.alert.alertMessage} alertType={this.state.alert.alertType} /> : null}
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
                                <div className="col-xs-12" style={{textAlign: 'center', marginTop: '20px'}}>
                                    <input ref="sendMessage" type="submit" className="btn btn-primary btn-lg" value="Send message" />
                                </div>
                        </form>
                    </div>
                </div>
			</div>
		);
	}
}

export default ContactUs;