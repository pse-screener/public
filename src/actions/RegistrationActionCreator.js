'use strict';
import Dispatcher from '../dispatcher/Dispatcher';
import Actions from '../constants/Actions';
import RegistrationDao from '../services/RegistrationDao';
import { HashLocation } from 'react-router';

export default {
	onSubmit: function(data) {
		RegistrationDao.onSubmit(data);
	},
	onSubmitDone: function(data) {
		// if(parseInt(data.code) == 0){
			// this is the old and manual way to navigate around outside of the react component.
            /*let loc = window.location, location;
            if (loc.port)
        		location = loc.protocol.concat('//', loc.hostname, ':', loc.port, '/#', '/successregistration');
			else
        		location = loc.protocol.concat('//', loc.hostname, '/#', '/successregistration');

        	window.location = location;*/

        	// Based from https://github.com/reactjs/react-router/blob/master/docs/guides/NavigatingOutsideOfComponents.md
        	// HashLocation.push('/successregistration');
        // } else {
            // alert(data.message);
            Dispatcher.dispatch({
                actionType: Actions.SUCCESS_REGISTRATION,
                data
            });
        // }
	},
    onSubmitDoneButError: function(xhr) {
        Dispatcher.dispatch({
            actionType: Actions.ERROR_NO,
            xhr
        });
    }
};