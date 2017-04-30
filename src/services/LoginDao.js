import publicVar from '../constants/publicVar';
import LoginActionCreator from '../actions/LoginActionCreator';

export default {
	onLoginSubmit: function(data) {
		data.client_id = publicVar.client_id;
		data.client_secret = publicVar.client_secret;

		let promise = new Promise(function(resolve, reject) {
			$.ajax({
	            type: "POST",
	            url: publicVar.getUnsecuredRESTWithoutIndex(),
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
			LoginActionCreator.onLoginSubmitDone(data);
		}, function(reason) {
			console.log('Error logging-in: ', reason.errorThrown);
			// window.location = publicVar.gotoUnsecuredLogin();
			LoginActionCreator.onLoginSubmitDoneWithError(reason);
		});
	},
	loginToAdmin: function(accessToken) {
		window.localStorage.setItem("access_token", accessToken);
		window.location = publicVar.getUnsecuredEndpointWithoutIndex().concat('/admin/#/app/');
	}
};