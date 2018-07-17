import $ from 'jquery';
import publicVar from '../constants/publicVar';
import EmailConfirmationActionCreator from '../actions/EmailConfirmationActionCreator';

export default {
	emailConfirmation: function(hash) {
		let promise = new Promise(function(resolve, reject) {
			let url = publicVar.getEndpoint().concat('/api/v1/emailConfirmation/', hash)
			$.ajax({
	            type: "POST",
	            url: url,
	            success: function(data) {
	                resolve(data);
	            },
	            error: function(jqXHR, textStatus, errorThrown) {
	            	let error = {};
	            	error.jqXHR = jqXHR; error.textStatus = textStatus; error.errorThrown = errorThrown;
	                reject(error);
	            }
	        });
		});

		promise.then(function(data) {
			EmailConfirmationActionCreator.emailConfirmationSuccess(data);
		}, function(errorObj) {
			console.log('Error confirming email address: ', errorObj);
			EmailConfirmationActionCreator.emailConfirmationWithError(errorObj);
		});
	}
};