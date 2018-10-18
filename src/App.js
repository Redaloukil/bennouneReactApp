import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'; 
import Home from './app/screens/Home';
import Login from './app/screens/Login';
import Signup from './app/screens/Signup';
import Dashbord from './app/screens/Dashbord';
import Navbar from './app/components/Navbar';
import { GuestRoute } from './app/components/GuestRoute';
import { UserRoute } from './app/components/UserRoute';


const App = ({isAuthenticated , location}) => {
  return (
    <div className="App">
      <Navbar/>
      <Route path="/" exact component={Home}/>
      <GuestRoute location={location} exact path="/login" exact component={Login}/>
      <GuestRoute exact path="/signup" exact component={Signup}/>
      <UserRoute exact path="/dashbord" exact component={Dashbord}/>
    </div>
  );
}

    
  
function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email
  };
}

export default App


