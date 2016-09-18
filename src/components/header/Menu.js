"use strict";
import React from "react";
import { Link } from "react-router";
import bootStrap from 'bootstrap';

export default React.createClass({
    getInitialState: function() {
        var hash = location.href.substr(location.href.indexOf('#') + 1);
        return {
            homeCSS: (hash == "/" || hash == "/home") ? "active" : "",
            servicesCSS: (hash == "/services") ? "active" : "",
            customersCSS: (hash == "/customers") ? "active" : "",
            aboutCSS: (hash == "/about") ? "active" : "",
            loginCSS: (hash == "/login") ? "active" : "",
            registrationCSS: (hash == "/registration") ? "active" : ""
        }
    },
    _onClick: function(e) {
        let that = this;

        function resetToInitialState() {
            that.state.homeCSS = "";
            that.state.servicesCSS = "";
            that.state.customersCSS = "";
            that.state.aboutCSS = "";
            that.state.loginCSS = "";
            that.state.registrationCSS = "";
        }

        function resetActiveMenu(e) {
            resetToInitialState();

            switch(e.toLowerCase()) {
                case "home":
                    that.state.homeCSS = "active";
                    break;
                case "about":
                    that.state.aboutCSS = "active";
                    break;
                case "services":
                    that.state.servicesCSS = "active";
                    break;
                case "customers":
                    that.state.customersCSS = "active";
                    break;
                case "login":
                    that.state.loginCSS = "active";
                    break;
                case "registration":
                    that.state.registrationCSS = "active";
                    break;
            }
        }

        resetActiveMenu(e);
        this.forceUpdate();
    },
	render: function() {
		return (<nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to="/" className="navbar-brand">PSE Monitor</Link>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li id="home" className={this.state.homeCSS} onClick={this._onClick.bind(null, "home")}><Link to="home">Home <span className="sr-only">(current)</span></Link></li>
                                <li id="services" className={this.state.servicesCSS} onClick={this._onClick.bind(null, "services")} ref="services"><Link to="services">Services</Link></li>
                                <li id="customers" className={this.state.customersCSS} onClick={this._onClick.bind(null, "customers")}><Link to="customers">Customers</Link></li>
                                <li id="about" className={this.state.aboutCSS} onClick={this._onClick.bind(null, "about")}><Link to="about">About</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li id="login" className={this.state.loginCSS} onClick={this._onClick.bind(null, "login")}><a href="#myModal" role="button" data-toggle="modal"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                                <li id="registration" className={this.state.registrationCSS} onClick={this._onClick.bind(null, "registration")}><Link to="registration"><span className="glyphicon glyphicon-registration-mark"></span> Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>);
	}
});