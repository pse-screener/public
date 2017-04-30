'use strict';
import Dispatcher from '../dispatcher/Dispatcher';
import assign from 'object-assign';
import BaseStore from './BaseStore';
import Actions from '../constants/Actions';

let accessToken = null, reason = null;

let LoginStore = assign(BaseStore(), {
    getAccessToken: function() {
        return accessToken;
    },
    getErrorReason: function() {
        return reason;
    }
});

LoginStore.dispatchToken = Dispatcher.register(function(payload) {
    switch(payload.actionType) {
        case Actions.STORE_ACCESS_TOKEN:
            reason = null;
            accessToken = payload.data;
            LoginStore.emitChange();
            break;
        case Actions.LOGIN_ERROR:
            reason = payload.reason;
            LoginStore.emitChange();
            break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
});

module.exports = LoginStore;