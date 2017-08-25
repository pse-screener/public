import { DefaultRoute, Route } from 'react-router';

import Home from './components/Home';
import HomeContents from './components/HomeContents';
import Services from './components/Services';
import Customers from './components/Customers';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Registration from './components/registration/Registration';
import SuccessRegistration from './components/registration/SuccessRegistration';
import ForgotPassword from './components/forgotPassword/ForgotPassword';
import ForgotPasswordEmailSent from './components/forgotPassword/ForgotPasswordEmailSent';
import ForgotPasswordReset from './components/forgotPassword/ForgotPasswordReset';
import PasswordResetSuccess from './components/forgotPassword/PasswordResetSuccess';
import EmailConfirmation from './components/registration/EmailConfirmation';
import Donate from './components/Donate';

export default (  
  <Route name="app" path="/" handler={Home}>
    <DefaultRoute handler={HomeContents} />
    // Menu
    <Route name="home" path="/home" handler={HomeContents} />
    <Route name="services" path="/services" handler={Services} />
    <Route name="customers" path="/customers" handler={Customers} />
    <Route name="about" path="/about" handler={About} />
    <Route name="registration" path="/registration" handler={Registration} />
    <Route name="login" path="/login" handler={Login}/>
    <Route name="contactUs" path="/contactUs" handler={ContactUs}/>

    <Route name="successRegistration" path="/successregistration" handler={SuccessRegistration} />
    // forgot password
    <Route name="forgotpassword" path="/forgotpassword" handler={ForgotPassword} />
    <Route name="forgotpasswordemailsent" path="/forgotpasswordemailsent" handler={ForgotPasswordEmailSent} />
    // link sent throught email; http://localhost:8080/#/forgotPasswordReset/0PBKERM59SzVOmT63viDHxwWrqeytua2j8UnZXCF
    <Route name="forgotPasswordReset" path="/forgotPasswordReset/:hash" handler={ForgotPasswordReset} />
    <Route name="passwordResetSuccess" path="/passwordResetSuccess" handler={PasswordResetSuccess} />

    // Email confirmation
    <Route name="emailConfirmation" path="/emailConfirmation/:hash" handler={EmailConfirmation} />

    <Route name="donate" path="/donate" handler={Donate} />
  </Route>
);