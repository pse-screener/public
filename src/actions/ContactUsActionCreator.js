import Dispatcher from '../dispatcher/Dispatcher';
import Actions from '../constants/Actions';
import publicVar from '../constants/publicVar';

export default {
	onSubmit: function(data) {
		$.ajax({
	            type: "POST",
	            url: publicVar.getEndpoint().concat('/api/v1/contactUs'),
	            data: data,
	            beforeSend: function (xhr) {
	                xhr.setRequestHeader("Accept", "application/json");
	            },
	            success: function(data) {
	                Dispatcher.dispatch({
						actionType: Actions.SENT_MESSAGE,
						data
					});
	            },
	            error: function(jqXHR, textStatus, errorThrown) {
	            	let error = {};
	            	error.jqXHR = jqXHR; error.textStatus = textStatus; error.errorThrown = errorThrown;
	                Dispatcher.dispatch({
	                	actionType: Actions.SEND_MESSAGE_ERROR,
	                	error
	                })
	            }
	    });
	}
};