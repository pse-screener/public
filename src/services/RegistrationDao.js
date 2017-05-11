import $ from 'jquery';
import publicVar from '../constants/publicVar';
import RegistrationActionCreator from '../actions/RegistrationActionCreator';

export default {
	onSubmit: function(data) {
		let promise = new Promise(function(resolve, reject) {
			$.ajax({
	            type: "POST",
	            url: publicVar.getEndpoint().concat('/register'),
	            data: data,
	            beforeSend: function (xhr) {
	                xhr.setRequestHeader("Accept", "application/json");
	            },
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
			RegistrationActionCreator.onSubmitDoneButError(reason);
		});
	}
};