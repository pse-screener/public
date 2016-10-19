'use strict';
import React from 'react';
import bootStrap from 'bootstrap';
import { RouteHandler } from 'react-router';
import LoginModal from './header/LoginModal';
import Menu from './header/Menu';
import Footer from './footer/Footer';
// import jquery from 'jquery';

var Home = {
    render: function() {
    	/* #push is important to push the footer not overlapped. */
    	return (<div style={{height: "100%"}}>
	    			<div id="wrap">
	    				<LoginModal />
						<Menu />
						<RouteHandler />
						<div id="push"></div>
					</div>

					<Footer />
    			</div>
    	);

	}
};

export default React.createClass(Home);