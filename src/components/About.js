'use strict';
import React from 'react';
import { Link } from 'react-router';

var About = {
    render: function() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="page_title">About Us</h4>
                        <hr />
                        <h4>The Project</h4>
                        <p>When we started investing and trading with PSE, we began to notice and ask ourselves if there is a company, site, or brokerage that offers free or paid service that sends SMS and/or email of the current stock price based on their criteria -- like if the price has reached below or above the current price.
                        Unfortunately, COL Financial which is our broker doesn't offer such service and it seems that other brokerage firms do not offer as well. They have Watchlist though but seems not enough because you still have to login to check on it. We're a little frustated because we are also committed to other tasks that we just
                        cannot leave behind like our primary source of income -- our job, which is time consuming and demanding. We read some of the articles on the internet, they suggest to create another source of income and so we chose trading and/or investing in Philippine Stock Exchange (PSE). We chose this because we're not only helping
                        the Philippine economy but this is also advantageous to us as we do not have to go outside, conquer the scorching hot or go against the rain. But here with PSE, time is the most valuable thing you should have, the when to buy or sell your stocks otherwise you'll lose money unnoticed.
                        </p>
                        <p>This is where the project started. Like anybody else we see on the internet asking such free or paid services, we want something like this also. So out of wishful thinking, we made it possible this time. It's completely free of change, easy to register that would take less than a minute. The UI (user interface)
                        is so straight-forward and therefore no need for an expert to come to assist you. 
                        </p><br />
                        <h4>Roadmap</h4>
                        <p>There are a couple of things in our mind that we'll be implementing soon. One of it is sending through email not just SMS, and it comes as a free service as well. You can choose any of the two channels most convenient to you or if you want both that's totally fine. So make sure you have registered your real
                        email address and it should have been verified. Verification email is always sent upon registration. If you haven't received one or missed it, contact us <Link to="contactUs">here</Link>.
                        </p>
                        <p>
                        Just recently, we have lauched this free text message to anyone in the Philippines. This was basically and primarily for OFW's but anyone can actually use it because we know how frustating it is when you want to text but cannot send because of insufficient balance or no credit available. And for those who are in abroad,
                        we all know how expensive it is sending text message to your loved ones in the Philippines. Take that money for load back to your packet and use this for free.
                        </p>
                        <p>Adding the charting or graphs are also in our plans as we all know that graph is also an important tool in making decisions. Although historical records may not be the sole and primary basis, it can help you coming up with the right decisions.
                        </p>
                    </div>
                </div>
                <div style={{marginBottom: '20px'}}></div>
    		</div>);
    }
};

export default React.createClass(About);