'use strict';
import Dispatcher from '../dispatcher/Dispatcher';
import assign from 'object-assign';
import BaseStore from './BaseStore';
import Actions from '../constants/Actions';

let status = {};

let ForgotPasswordStore = assign(BaseStore(), {
    getStatus: function() {
        return status;
    }
});

ForgotPasswordStore.dispatchToken = Dispatcher.register(function(payload) {
    switch(payload.actionType) {
        case Actions.FORGOT_PASSWORD_ERROR:
            status = payload.data;
            ForgotPasswordStore.emitChange();
            break;
        case Actions.FORGOT_PASSWORD_RESET_DONE:
            status = payload.data;
            ForgotPasswordStore.emitChange();
            break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
});

module.exports = ForgotPasswordStore;