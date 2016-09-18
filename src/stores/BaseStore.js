import ActionTypes from '../constants/Actions';
import {EventEmitter} from 'events';
import assign from 'object-assign';

export default function BaseStore() {
    return assign({}, EventEmitter.prototype, {
        emitChange: function() {
            this.emit(ActionTypes.CHANGE_EVENT);
        },
        addChangeListener: function(callback) {
            this.on(ActionTypes.CHANGE_EVENT, callback);
        },
        removeChangeListener: function(callback) {
            this.removeListener(ActionTypes.CHANGE_EVENT, callback);
        }
    });
}
