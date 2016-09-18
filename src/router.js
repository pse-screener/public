'use strict';

let router;

// change the func as needed; So far run() has been changed.
module.exports = {
    getCurrentPath() {
        return router.getCurrentPath();
    },
    makePath(to, params, query) {
        return router.makePath(to, params, query);
    },
    makeHref(to, params, query) {
        return router.makeHref(to, params, query);
    },
    replaceWith(to, params, query) {
        router.replaceWith(to, params, query);
    },
    goBack() {
        router.goBack();
    },
    run(render) {
        router.run(render);
    }
};

import routes from './routes';
import Router, {History, HistoryLocation, HashLocation} from 'react-router';


//TODO - problems with HistoryLocation in dev
// let location = process.env.NODE_ENV === 'production' ? HashLocation : HistoryLocation;
let location = HashLocation;
router = Router.create({routes, location});