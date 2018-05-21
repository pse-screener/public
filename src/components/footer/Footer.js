import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render: function() {
    	const url = API_URL + "/public/#/contactUs";

        return (<div id="footer">
                    <div className="container">
                    	<div className="row">
			                <div className="col-sm-2">
			                    <h6>Copyright &copy; 2018</h6>
			                </div>
			                <div className="col-sm-2">
			                    <h6>Navigation</h6>
			                    <ul className="list-unstyled">
			                        <li><Link to="home"><span className="glyphicon glyphicon-home"></span> Home</Link></li>
			                        <li><Link to="services"><span className="glyphicon glyphicon-wrench"></span> Services</Link></li>
			                        <li><Link to="customers"><span className="glyphicon glyphicon-user"></span> Customers</Link></li>
			                        <li><Link to="about"><span className="glyphicon glyphicon-grain"></span> About Us</Link></li>
			                    </ul>
			                </div>
			                <div className="col-sm-4">
			                	
			                </div>
			                <div className="col-sm-4"></div>
			            </div>
                    </div>
                </div>);
    }
});