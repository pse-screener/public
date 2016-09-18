'use strict'
import React from 'react';
import bootStrap from 'bootstrap';
import { Link } from 'react-router';
import LoginModal from './header/LoginModal';
import Menu from './header/Menu';

const Logout = {
    render: function() {
        return (<div className='container'>
    			<h3>You have successfully logged out.</h3>
    			<h5>Click <Link to='login'>here</Link> to re-login.</h5>
    		</div>);
    }
};

module.exports = React.createClass(Logout);