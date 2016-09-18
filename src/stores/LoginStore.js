'use strict';
import Dispatcher from '../dispatcher/Dispatcher';
import assign from 'object-assign';
import BaseStore from './BaseStore';
import Actions from '../constants/Actions';

let accessToken = null;

let LoginStore = assign(BaseStore(), {
    getAccessToken: function() {
        // console.log("accessToken: ", accessToken);
        return accessToken;
    }
});

LoginStore.dispatchToken = Dispatcher.register(function(payload) {
    switch(payload.actionType) {
        case Actions.STORE_ACCESS_TOKEN:
            accessToken = payload.data;
            LoginStore.emitChange();
            break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
});

module.exports = LoginStore;