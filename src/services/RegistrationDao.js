import $ from 'jquery';
import publicVar from '../constants/publicVar';
import RegistrationActionCreator from '../actions/RegistrationActionCreator';

export default {
	onSubmit: function(data) {
		let promise = new Promise(function(resolve, reject) {
			$.ajax({
	            type: "POST",
	            url: publicVar.getUnsecuredEndpointWithIndex().concat('/register'),
	            data: data,
	            /*beforeSend: function (request) {
	                request.setRequestHeader("Accept", "application/json");
	            },*/
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
			RegistrationActionCreator.onSubmitDone(data);
		}, function(reason) {
			console.log('Error registering: ', reason);
		});
	}
};