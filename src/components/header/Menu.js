import { Component } from "react";
import { Link } from "react-router";
import bootStrap from 'bootstrap';

class Menu extends Component {
    constructor(props) {
        super(props);

        const hash = location.href.substr(location.href.indexOf('#') + 1);

        this.state = {
            homeCSS: (hash == "/" || hash == "/home") ? "active" : "",
            servicesCSS: (hash == "/services" || hash == "/sendFreeSMS") ? "active" : "",
            customersCSS: (hash == "/customers") ? "active" : "",
            aboutCSS: (hash == "/about") ? "active" : "",
            contactUsCSS: (hash == "/contactUs") ? "active" : "",
            donateCSS: (hash == "/donate") ? "active" : "",
            loginCSS: (hash == "/login") ? "active" : "",
            registrationCSS: (hash == "/registration") ? "active" : ""
        };

        this._resetToInitialState = this._resetToInitialState.bind(this);
        this._onClick = this._onClick.bind(this);
    }

    _resetToInitialState() {
        const cssStates = {
            homeCSS: '', servicesCSS: '', customersCSS: '', aboutCSS: '', loginCSS: '', registrationCSS: '', contactUsCSS: '', donateCSS: ''
        }

        this.setState(cssStates);
    }

    _onClick(menu) {
        this._resetToInitialState();

        switch(menu.toLowerCase()) {
            case "home":
                this.setState({homeCSS: "active"});
                break;
            case "services":
                this.setState({servicesCSS: "active"});
                break;
            case "customers":
                this.setState({customersCSS: "active"});
                break;
            case "about":
                this.setState({aboutCSS: "active"});
                break;
            case "contactus" :
                this.setState({contactUsCSS: "active"});
                break;
            case "donate" :
                this.setState({donateCSS: "active"});
                break;
            case "login":
                this.setState({loginCSS: "active"});
                break;
            case "registration":
                this.setState({registrationCSS: "active"});
                break;
            default:
                // nothing
                break;
        }
    }

	render() {
		return (<nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to="/" className="navbar-brand" onClick={this._resetToInitialState}>PSE Screener</Link>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li id="home" className={this.state.homeCSS} onClick={this._onClick.bind(null, 'home')}><Link to="home">Home <span className="sr-only">(current)</span></Link></li>
                                <li id="services" className={'dropdown ' + this.state.servicesCSS}>
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                    <li onClick={this._onClick.bind(null, 'services')}><Link to="services"><span className="glyphicon glyphicon-cog"></span> Services</Link></li>
                                    <li onClick={this._onClick.bind(null, 'services')}><Link to="sendFreeSMS"><span className="glyphicon glyphicon-envelope"></span> Send Free SMS</Link></li>
                                    </ul>
                                </li>
                                <li id="customers" className={this.state.customersCSS} onClick={this._onClick.bind(null, 'customers')}><Link to="customers">Customers</Link></li>
                                <li id="about" className={this.state.aboutCSS} onClick={this._onClick.bind(null, 'about')}><Link to="about">About Us</Link></li>
                                <li id="contactUs" className={this.state.contactUsCSS} onClick={this._onClick.bind(null, 'contactUs')}><Link to="contactUs">Contact Us</Link></li>
                                <li id="donate" className={this.state.donateCSS} onClick={this._onClick.bind(null, 'donate')}><Link to="donate">Donate</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li id="login" className={this.state.loginCSS} onClick={this._onClick.bind(null, 'login')}><a href="#myModal" role="button" data-toggle="modal"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                                <li id="registration" className={this.state.registrationCSS} onClick={this._onClick.bind(null, 'registration')}><Link to="registration"><span className="glyphicon glyphicon-registration-mark"></span> Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>);
	}
};

export default Menu;