'use strict';
import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	componentDidMount(){
		window.FB.XFBML.parse(); //saying FB plugin to re parse the dom.
	},

	render: function() {
		return (<div className="container">
					<h4 className="page_title">Customers</h4>
		            <hr />
		            <div style={{marginBottom: '40px'}}></div>
		            <h4>What customers say</h4>

		            <div className="row">
		            	<div className="col-xs-12 col-sm-3">
		            		<div className="thumbnail">
		            			<img src="public/images/jhunex.jpg" />
		            			<div className="caption">
		            				<p>Thanks pse-screener for such service. I really couldn't find like this on the internet anywhere. I can now monitor and be updated with the prices even without going online. Fantastic!!!</p>
		            			</div>
		            		</div>
		            	</div>
		            	<div className="col-xs-12 col-sm-3">
		            		<div className="thumbnail">
		            			<img src="public/images/tim.jpg" />
		            			<div className="caption">
		            				<p>As an OFW I am busy working with my daily chores. I barely see the prices because it sometimes frustrating looking at those prices. So thank you to this application, because it helps me being updated with the current prices.</p>
		            			</div>
		            		</div>
		            	</div>
		            	<div className="col-xs-12 col-sm-3">
		            		<div className="thumbnail">
		            			<img src="public/images/user1.jpg" />
		            			<div className="caption">
		            				<p>One of the amazing thing here because it doesn't only offer text blast on current prices, it also offers free text messaging for free without registration. How cool is that isn't it?</p>
		            			</div>
		            		</div>
		            	</div>
		            	<div className="col-xs-12 col-sm-3">
		            		<div className="thumbnail">
		            			<img src="public/images/user1.jpg" />
		            			<div className="caption">
		            				<p>Every day I do lots of things and trading or investing is my secondary income. I also invest for my future and of course to my own family. I realized timing is the most important in stock buying and selling.
		            				So because I do not have good internet access and when I do I have to go to somewhere just to get connected only to find out that the stocks I've been eyeing went through a stiff price drop and went back to normal. It's frustrating to know that I missed buying.
		            				So this website is a big help to me. Thank you a million times.</p>
		            			</div>
		            		</div>
		            	</div>
		            </div>

		            <div className="row">
		            	<div className="col-sm-6">
		            		<br /><hr />
		            		<p>Add some comments here.</p>
							<div className="fb-comments" data-href="https://www.facebook.com/freeSMStoAll/" data-numposts="5"></div>
		            	</div>
		            </div>
				</div>
		);
	}
});