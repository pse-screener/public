'use strict'
import React from 'react';
import { Link } from 'react-router';

var Home = {
    render: function() {
        return (<div className="container">
                    <div className="carousel slide" id="myCarousel">
                        <ol className="carousel-indicators">
                            <li className="active" data-slide-to="0" data-target="#myCarousel"></li>
                            <li data-slide-to="1" data-target="#myCarousel"></li>
                            <li data-slide-to="2" data-target="#myCarousel"></li>
                            <li data-slide-to="3" data-target="#myCarousel"></li>
                        </ol>

                        <div className="carousel-inner">
                            <div className="item active" id="slide0"></div>
                            <div className="item" id="slide1"></div>
                            <div className="item" id="slide2"></div>
                            <div className="item" id="slide3"></div>
                        </div>

                        <a href="#myCarousel" className="left carousel-control" data-slide="prev"><span className="icon-prev"></span></a>
                        <a href="#myCarousel" className="right carousel-control" data-slide="next"><span className="icon-next"></span></a>
                    </div>
                    <div className="well">
                        <div className="page-header">
                            <h4>PSE Screener Alert System</h4>
                        </div>
                        <h4>Sends an SMS to a Philippine registered mobile number to alert user based on their criteria.</h4>
                        <br />
                        <br />
                        The service doesn't cost you a penny because it's absolutely free of charge. If you have no time to check the current prices of the stocks, cannot get online, or very much committed to other tasks, this is the answer.
                        <br /><br /><Link to="registration" className="btn btn-success btn-lg">Register here for free</Link>
                    </div>
                </div>);
    }
};

export default React.createClass(Home);