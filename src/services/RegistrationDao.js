import $ from 'jquery';
import publicVar from '../constants/publicVar';
import RegistrationActionCreator from '../actions/RegistrationActionCreator';

export default {
	getProvinces: function() {
		let promise = new Promise(function(resolve, reject) {
			$.ajax({
				//url: publicVar.getUnsecuredEndpointWithIndex().concat('/api/getProvinces'),
				url: publicVar.getUnsecuredEndpointWithIndex().concat('/province'),
				success: function(data, textStatus, jqXHR) {
					resolve(data);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					reject(errorThrown);
				}
			});
		});

		promise.then(function(data) {
			RegistrationActionCreator.getProvincesDone(data);
		}, function(reason) {
			console.log('Error fetching provinces: ', reason);
		});
	},
	getCitiesByProvinceId: function(id) {
		let promise = new Promise(function(resolve, reject) {
			$.ajax({
				//url: publicVar.getUnsecuredEndpointWithIndex().concat('/api/getCity/', id),
				url: publicVar.getUnsecuredEndpointWithIndex().concat('/citiesinprovince/', id),
	            success:function(data) {
	                resolve(data);
	            },
	            error: function(jqXHR, textStatus, errorThrown) {
	                reject(errorThrown)
	            }
			});
		});

		promise.then(function(data) {
			RegistrationActionCreator.getCitiesByProvinceIdDone(data);
		}, function(reason) {
			console.log('Error fetching cities: ', reason);
		});
	},
	onSubmit: function(data) {
		let promise = new Promise(function(resolve, reject) {
			$.ajax({
	            type: "post",
	            url: publicVar.getUnsecuredEndpointWithIndex().concat('/registration/register'),
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
			RegistrationActionCreator.onSubmitDone(data);
		}, function(reason) {
			console.log('Error registering: ', reason);
		});
	}
};