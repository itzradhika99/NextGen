import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Registration from './components/Registration';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
