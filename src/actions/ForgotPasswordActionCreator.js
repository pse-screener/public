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
		if (parseInt(data.code) == 0) {
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
		if (parseInt(data.code) == 0) {
			HashLocation.push('/passwordResetSuccess');
		} else {
			Dispatcher.dispatch({
				actionType: Actions.FORGOT_PASSWORD_RESET_DONE_ERROR,
				data
			});
		}
	},
	forgotPasswordResetDoneWithError: function(errorObj) {
		Dispatcher.dispatch({
			actionType: Actions.FORGOT_PASSWORD_RESET_DONE_ERROR,
			errorObj
		});
	}
}