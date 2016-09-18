import $ from 'jquery';
import publicVar from '../constants/publicVar';
import LoginActionCreator from '../actions/LoginActionCreator';

export default {
	onLoginSubmit: function(data) {
		data.client_id = publicVar.client_id;
		data.client_secret = publicVar.client_secret;

		// curl http://yourebusinessrest.com/mytoken.php -d 'grant_type=password&username=simply.amazing.wizard@gmail.com&password=1234'
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
			console.log('Error logging-in: ', reason);
		});
	},
	loginToAdmin: function(accessToken) {
		//window.location = "https://www.yahoo.com";
		window.location = publicVar.getUnsecuredEndpointWithoutIndex().concat('/admin/#/app/', accessToken);
		/*let token = {access_token: accessToken};
		$.ajax({
            type: "POST",
            //url: publicVar.getUnsecuredEndpointWithoutIndex().concat('/admin'),
            url: "https://www.yahoo.com/",
            data: token,
            success: function(data) {
            	if (data.success)
            		window.location = "https://www.yahoo.com/";
            		//window.location = publicVar.getUnsecuredAdminDomainAndPath().concat('/',accessToken);
            },
            error: function(jqXHR, textStatus, errorThrown) {
            	let error = {};
            	error.jqXHR = jqXHR; error.textStatus = textStatus; error.errorThrown = errorThrown;
                reject(error);
            }
        });*/
	}
};