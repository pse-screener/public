'use strict';
import Dispatcher from '../dispatcher/Dispatcher';
import Actions from '../constants/Actions';
import LoginDao from '../services/LoginDao';
//import { HashLocation } from 'react-router';

export default {
	onLoginSubmit: function(data) {
		LoginDao.onLoginSubmit(data);
	},
	onLoginSubmitDone: function(data) { // Successfully login.
		Dispatcher.dispatch({
			actionType: Actions.STORE_ACCESS_TOKEN,
			data
		});
	},
	onLoginSubmitDoneWithError: function(reason) {
		Dispatcher.dispatch({
			actionType: Actions.LOGIN_ERROR,
			reason
		});
	},
	loginToAdmin: function(accessToken) {
		LoginDao.loginToAdmin(accessToken);
	}
}