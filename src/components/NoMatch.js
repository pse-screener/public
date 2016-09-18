'use strict';
import React from 'react';
import { Link } from 'react-router';

var Logout = {
    render: function(){
        return (<div>
    		<div className='container'>
    			<h3>No Match page.</h3>
    			<h5>Click <Link to='home'>here</Link> to go to about.</h5>
    		</div>
    	</div>);
    }
};

export default React.createClass(Logout);