import React from 'react';
import { Route, Switch } from 'react-router-dom';  // Importing for routing
import LandingPage from './components/LandingPage';
import Registration from './components/Registration';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <NavBar /> {/* Navigation Bar */}
      
      {/* Routing logic to display different pages */}
      <Switch>
        <Route exact path="/" component={LandingPage} />  {/* Home Page */}
        <Route path="/register" component={Registration} />  {/* Registration Page */}
        <Route path="/login" component={Login} />  {/* Login Page */}
      </Switch>

      <Footer /> {/* Footer */}
    </div>
  );
};

export default App;
