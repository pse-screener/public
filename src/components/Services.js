'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './header/Menu';
import { Link } from 'react-router';

export default React.createClass({
	//mixin: []
	componentDidMount: function() {
		$('#home').removeClass("active");
		$('#services').addClass("active");
		$('#customers').removeClass("active");
		$('#about').removeClass("active");
		$('#login').removeClass("active");
		$('#registration').removeClass("active");
	},
	render: function() {
		return (<div className="container">
					<h4 className="page_title">Services</h4>
		            <hr />
		            <h3>Looking for an alert system of the daily stock prices and volumes right to your mobile phone?</h3>
					We offer free SMS alert service for all registered user of the site. Yes it's absolutely free of charge! In order to get free from our services, you have to register to avail. It is needed to keep track of all our users. The registration only takes less than a minute and the admin page is so easy to use. To register click <Link to="registration"><strong>here</strong></Link>.
					<div className="row">
						<div className="col-sm-6"><br />
							<div className="media">
								<div className="media-left">
									<img className="media-object" src="public/images/price-graph.png" />
								</div>
								<div className="media-body">
									<h4 className="media-heading">Stock Price</h4>
									Busy for the day or two, cannot get online but wants to know the current price automatically sent to your mobile phone? This is what you're looking for.
								</div>
							</div>
							<div className="media">
								<div className="media-left">
									<img className="media-object" src="public/images/volume-graph.png" />
								</div>
								<div className="media-body">
									<h4 className="media-heading">Volume Traded</h4>
									This is similar to the price alert but in terms of volume traded during the day. (This is currently not available at the moment but keep in touch as we include this very soon in your admin page.)
								</div>
							</div>
						</div>
					</div>
					<br /><br />
					<h4>Importance of SMS Messaging</h4>
					<p>In this advanced world, mobile services like SMS or widely known as text messages has been indispensable tools in todays' 21st century. It has been a tool to communicate specially in the Philippines where during the early years of mobile penetration became the the text messaging capital of the world.</p>
					<p>Josefina T. Lichauco wrote an article <a href="http://www.philstar.com/business-life/85823/philippine-text-messaging-phenomenon" target="_blank">The Philippine text messaging phenomenon</a> it says that SMS (Short Message Service) has given rise to a subculture with its own lingo, folklore and etiquette. Fact is, in the Philippines, the words ‘I will call you’ have been replaced by ‘I will text you.’.
					In my humber opinion, Filipinos prefer text messaging because it's cheaper than call and that calling someone with mobile phone is pricier than a single text message. Also, text message is a way to deliver a message without disturbing or wasting too much time with someone who is currently busy or at least informing him/her to
					reply when he/she doesn't want to talk to. I know lovers out there can relate to this.
					</p>
					<p>With the affordability and introduction of prepaid with no monthly fees it dramatically became popular and relevant to every day living. Ben Parr said in his 2010 article, <a href="http://mashable.com/2010/10/14/nielsen-texting-stats" target="_blank">the average teenager sends 3,339 texts per month</a>. That's more than six texts per waking hour.</p>
					<br />
					<img src="public/images/2156_chart1.jpg" /><br /><br />
					<p>According to a new study from Nielsen, our society has gone mad with texting, data usage and app downloads. Nielsen analyzed the mobile data habits of more than 60,000 mobile subscribers and surveyed more than 3,000 teens during April, May and June of this year 2010. The numbers they came up with are astounding.
						Text messaging originally offered as a free feature of the mobile phone service but Filipinos love bargain and so it become a craze. And they even more got excited because of unlimited text messages offered by TelCos. They don't have to worry about the load as long as they are subscribed to an unlimited text for a span of minutes, hours, and days
						nothing to worry about.
					</p>
					<p>Nowadays, text messaging is not only being used as a form of ordinary message but also as a form of another level of security measures put in place by some companies like banks, either to inform of withdrawal threshold, notification of withdrawal, One-time Password (OTP) for web login, etc. This is a one step-forward for banks against fraud, theft, phishing.
						There are also some companies, government agencies, and other institutions use text messaging as promotional avenue to its customers, broadcasting their products and new services being offered. Did I forgot something? Of course, this technology is also being used by the politicians during election period but as far as I know this has been banned because
						this falls into the spam messaging.
					</p>
					<br />
					<b>Drawbacks</b><br />
					<p>Same with other technologies in the market, text messaging has its own drawbacks. This has proven to be one of the causes of traffic jams which resulted to death to some. Last June, government has implemented the anti-distracted driving act. Under the IRR, the following acts constitute distracted driving, whether the driver performs them while vehicle
					is in motion or is temporary stopped at a traffic light or intersection: (source: <a href="http://www.gmanetwork.com/news/serbisyopubliko/transportation/615308/dotr-issues-implementing-rules-regulations-of-anti-distracted-driving-act/story/" target="_blank">GMA7 News</a>)</p>
					<ul>
						<li>Using a mobile communications device to write, send, or read a text-based communication, or to make or receive calls, and other similar acts; and</li>
						<li>Using an electronic entertainment or computing device to play games, watch movies, surf the internet, compose messages, read e-books, perform calculation, and other similar acts.</li>
					</ul>
					<p>The technology also leads us to abbreaviating some of our commonly used pharses, although some of it have already been widely used in internet chat such as BRB, NASL, LOL, and 'anyari?' for 'anong nangyari?' (what happened?). Text linggo or SMS language has been around but some educators and individual do not prefer using them. But in this world,
					there's only one thing is for sure -- constant change.</p>
					<div style={{marginBottom: '40px'}}></div>
				</div>
		);
	}
});