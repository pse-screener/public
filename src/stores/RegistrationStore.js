'use strict';
import Dispatcher from '../dispatcher/Dispatcher';
import assign from 'object-assign';
import BaseStore from './BaseStore';
import Actions from '../constants/Actions';

let errorObject = null;

let RegistrationStore = assign(BaseStore(), {
    getErrorObject: function() {
        return errorObject;
    },
});

RegistrationStore.dispatchToken = Dispatcher.register(function(payload) {
    switch(payload.actionType) {
        case Actions.ERROR_NO:
            errorObject = payload.data;
            RegistrationStore.emitChange();
            break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
});

module.exports = RegistrationStore;