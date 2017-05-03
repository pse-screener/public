'use strict';
import React from 'react';

var Donate = {
    render: function() {
        return (<div className='container'>
    			<h4 className="page_title">Donate</h4>
                <hr />
                <p>We encourage everyone to donate any amount to make the site up and running. As with any other websites in the world, this also needs funding for maintenance not limited to domain name, staffing, server maintenance, and SMS load.</p>
                        <p>Currently, there are only 3 ways to donate. We are still working on how to make other options possible.</p>
                            <ol>
                                <li><a href="https://www.paypal.com/ph/webapps/mpp/home" target="_blank"><strong>PayPal</strong></a> - PayPal is secured wherein you can also use it to buy item(s) on an e-commerce sites like eBay. For more info go to <a href="https://www.paypal.com/ph/webapps/mpp/home" target="_blank">PayPal website.</a>
                                <div className="text-center">
                                    <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                        <input type="hidden" name="cmd" value="_s-xclick" />
                                        <input type="hidden" name="hosted_button_id" value="VNDAN39ENR6AN" />
                                        <input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                        <img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                    </form>
                                </div>
                                </li>
                                <li><a href="https://www.bdo.com.ph/personal" target="_blank"><strong>BDO</strong></a> - Using Account number: 002510187240 under the name Pastor L. Morcilla III
                                    <div className="text-center"><a href="https://www.bdo.com.ph/personal" target="_blank"><img src="public/images/BDO_logo.png" height="42" /></a></div>
                                </li>
                                <li><a href="https://www.bpiexpressonline.com/" target="_blank"><strong>BPI</strong></a> - Using Account number: 1929278409 under the name Pastor L. Morcilla III
                                    <div className="text-center"><a href="https://www.bpiexpressonline.com/" target="_blank"><img src="public/images/BPI_logo.png" height="42" /></a></div>
                                </li>
                            </ol>
                <br />
    		</div>);
    }
};

export default React.createClass(Donate);