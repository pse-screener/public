'use strict';
import Dispatcher from '../dispatcher/Dispatcher';
import assign from 'object-assign';
import BaseStore from './BaseStore';
import Actions from '../constants/Actions';

let errorObject = null, successObject = null;

let RegistrationStore = assign(BaseStore(), {
    getErrorObject: function() {
        return errorObject;
    },
    getSuccessObject: function() {
        return successObject;
    },
    setErrorObject: function() {
        errorObject = null;
    },
    setSuccessObject: function() {
        successObject = null;
    },
});

RegistrationStore.dispatchToken = Dispatcher.register(function(payload) {
    switch(payload.actionType) {
        case Actions.ERROR_NO:
            errorObject = payload.xhr;
            RegistrationStore.emitChange();
            break;
        case Actions.SUCCESS_REGISTRATION:
            successObject = payload.data;
            RegistrationStore.emitChange();
            break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
});

module.exports = RegistrationStore;