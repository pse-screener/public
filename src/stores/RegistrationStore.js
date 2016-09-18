'use strict';
import Dispatcher from '../dispatcher/Dispatcher';
import assign from 'object-assign';
import BaseStore from './BaseStore';
import Actions from '../constants/Actions';

let provinces = null;
let cities = null;

let RegistrationStore = assign(BaseStore(), {
    getProvincesList: function() {
        return provinces;
    },
    getCitiesList: function() {
        return cities;
    },
});

RegistrationStore.dispatchToken = Dispatcher.register(function(payload) {
    switch(payload.actionType) {
        case Actions.GET_PROVINCES:
            provinces = payload.data;
            RegistrationStore.emitChange();
            break;
        case Actions.GET_CITIES:
            cities = payload.data;
            RegistrationStore.emitChange();
            break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
});

module.exports = RegistrationStore;