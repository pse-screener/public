'use strict'
import React from 'react';

var Home = {
    render: function() {
        return (<div className="container">
                    <div className="carousel slide" id="myCarousel">
                        <ol className="carousel-indicators">
                            <li className="active" data-slide-to="0" data-target="#myCarousel"></li>
                            <li data-slide-to="1" data-target="#myCarousel"></li>
                            <li data-slide-to="2" data-target="#myCarousel"></li>
                        </ol>

                        <div className="carousel-inner">
                            <div className="item active" id="slide1"></div>
                            <div className="item" id="slide2"></div>
                            <div className="item" id="slide3"></div>
                        </div>

                        <a href="#myCarousel" className="left carousel-control" data-slide="prev"><span className="icon-prev"></span></a>
                        <a href="#myCarousel" className="right carousel-control" data-slide="next"><span className="icon-next"></span></a>
                    </div>
                    <div className="well">
                        <div className="page-header">
                            <h4>PSE Monitoring Alert System</h4>
                        </div>
                        <p>Sends an SMS to a Philippine registered mobile number to alert user based on their criteria.</p>
                    </div>
                </div>);
    }
};

export default React.createClass(Home);