'use strict';
import React from 'react';

var Donate = {
    render: function() {
        return (<div className='container'>
    			<h4 className="page_title">Donate</h4>
                <hr />
                <h4><strong>Options to Give</strong></h4>
                <p>We give you limited ways to donate for now as we are working hard to make it easy and convenient for you to do so. Currently, PayPal
                and bank transfer are our available options. You may choose any of the following most convenient to you. For those who have credit card you can link it with PayPal and choose PayPal below as your mode of donation.
                </p><br />

                <div className="media">
                    <div className="media-left">
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_s-xclick" />
                            <input type="hidden" name="hosted_button_id" value="5UTBXRU2UVWF2" />
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        </form>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">PayPal Users</h4>
                        PayPal is an online payment service that allows individuals and businesses to transfer funds electronically. For more info go to <a href="https://www.paypal.com/ph/webapps/mpp/home" target="_blank">PayPal website.</a>
                        or visit <a href="http://money.howstuffworks.com/paypal.htm">here</a> to understand how PayPal works. Click below PayPal logo to donate.
                    </div>
                </div>
                <div className="media">
                    <div className="media-left">
                        <a href="https://www.bdo.com.ph/personal" target="_blank"><img src="public/images/BDO_logo.png" height="42" /></a>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">Balance Transfer with Banco De Oro</h4>
                        Send your donations to account number <span className="text-primary">002510187240</span> under the name <span className="text-primary">Pastor L. Morcilla III</span>.
                        <p>BDO is a full-service universal bank in the Philippines. It provides a complete array of industry-leading products and services including Lending (corporate and consumer), Deposit-taking, Foreign Exchange, Brokering, Trust and Investments, Credit Cards, Corporate Cash Management and Remittances in the Philippines. Through its local subsidiaries, the Bank offers Leasing and Financing, Investment Banking, Private Banking, Rural Banking, Life Insurance, Insurance Brokerage and Stock Brokerage services.</p>
                    </div>
                </div>
                <div className="media">
                    <div className="media-left">
                        <a href="https://www.bpiexpressonline.com/" target="_blank"><img src="public/images/BPI_logo.png" height="42" /></a>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">Balance Transfer with BPI</h4>
                        Send your donations to account number <span className="text-primary">1929278409</span> under the name <span className="text-primary">Pastor L. Morcilla III</span>
                        <p>Founded in 1851, Bank of the Philippine Islands is the first bank in the Philippines and in the Southeast Asian region. BPI is a universal bank and together with its subsidiaries and affiliates, it offers a wide range of financial products and solutions that serve both retail and corporate clients.</p>
                    </div>
                </div>
                <div style={{marginBottom: '40px'}}></div>
    		</div>);
    }
};

export default React.createClass(Donate);