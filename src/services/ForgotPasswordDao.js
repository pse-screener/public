import $ from 'jquery';
import publicVar from '../constants/publicVar';
import ForgotPasswordActionCreator from '../actions/ForgotPasswordActionCreator';

export default {
	onSubmit: function(data) {
		let promise = new Promise(function(resolve, reject) {
			$.ajax({
	            type: "POST",
	            url: publicVar.getEndpoint().concat('/password/email'),
	            data: data,
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
			ForgotPasswordActionCreator.onSubmitDone(data);
		}, function(reason) {
			console.log('Error forgot password: ', reason);
		});
	},
	forgotPasswordReset: function(data) {
		let promise = new Promise(function(resolve, reject) {
			/*var oReq = new XMLHttpRequest();
			//oReq.addEventListener("load", reqListener);
			oReq.open("PUT", "http://yourspa.com/index.php/api/forgotPasswordReset?hash=0PBKERM59SzVOmT63viDHxwWrqeytua2j8UnZXCF");
			oReq.send();

			return; */
			let url = publicVar.getEndpoint().concat('/password/reset')
			$.ajax({
	            type: "POST",
	            url: url,
	            data: data,
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
			ForgotPasswordActionCreator.forgotPasswordResetDone(data);
		}, function(errorObj) {
			console.log('Error forgot password reset: ', errorObj);
			ForgotPasswordActionCreator.forgotPasswordResetDoneWithError(errorObj);
		});
	}
};