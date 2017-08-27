'use strict';
import React from 'react';
import { Link } from 'react-router';

var About = {
    render: function() {

        return (
            <div className='container'>
    			<h4 className="page_title">About Us</h4>
                <hr />
                <p>As we have seen people engaged in PSE, we noticed there is a need to alert them of current prices in the stock market. The most convenient is through an SMS a.k.a text message, since we all keep an eye to our cellphones.
                E-mail alert is also in our roadmap so we humbly ask for your support for the funding of the site to keep it up and running.</p>

                <p>If you would like to donate, click <Link to="donate"><b>here</b></Link>.</p>
    		</div>);
    }
};

export default React.createClass(About);