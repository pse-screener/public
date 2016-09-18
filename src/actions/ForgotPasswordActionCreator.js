'use strict';
import Dispatcher from '../dispatcher/Dispatcher';
import Actions from '../constants/Actions';
import ForgotPasswordDao from '../services/ForgotPasswordDao';
import { HashLocation } from 'react-router';

export default {
	onSubmit: function(email) {
		let data = {email: email};
		ForgotPasswordDao.onSubmit(data);
	},
	onSubmitDone: function(data) {
		if (parseInt(data.statusCode) == 0) {
        	HashLocation.push('/forgotpasswordemailsent');
        } else {
        	Dispatcher.dispatch({
				actionType: Actions.FORGOT_PASSWORD_ERROR,
				data
			});
        }
	},
	forgotPasswordReset: function(hash) {
		ForgotPasswordDao.forgotPasswordReset(hash);
	},
	forgotPasswordResetDone: function(data) {
		Dispatcher.dispatch({
			actionType: Actions.FORGOT_PASSWORD_RESET_DONE,
			data
		});
	}
}