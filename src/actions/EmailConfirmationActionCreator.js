'use strict';
import Dispatcher from '../dispatcher/Dispatcher';
import Actions from '../constants/Actions';
import EmailConfirmationDao from '../services/EmailConfirmationDao';
import { HashLocation } from 'react-router';

export default {
	confirmEmail: function(hash) {
		EmailConfirmationDao.emailConfirmation(hash);
	},
	emailConfirmationSuccess: function(data) {
		// console.log(data);
	}
}