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
                            <h4>Designed for small Spa Business</h4>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>);
    }
};

export default React.createClass(Home);