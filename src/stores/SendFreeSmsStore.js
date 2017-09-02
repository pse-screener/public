import Dispatcher from '../dispatcher/Dispatcher';
import assign from 'object-assign';
import BaseStore from './BaseStore';
import Actions from '../constants/Actions';

let data = null, error = null;

let SendFreeSmsStore = assign(BaseStore(), {
    getData: function() {
        return data;
    },
    getError: function() {
        return error;
    }
});

SendFreeSmsStore.dispatchToken = Dispatcher.register(function(payload) {
    switch(payload.actionType) {
        case Actions.SENT_MESSAGE:
            error = null;
            data = payload.data;
            SendFreeSmsStore.emitChange();
            break;
        case Actions.SEND_MESSAGE_ERROR:
            data = null;
            error = payload.error;
            SendFreeSmsStore.emitChange();
            break;
    }

    return true;
});

module.exports = SendFreeSmsStore;