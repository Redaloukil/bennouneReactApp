import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom'; 
import {} from './app/components/GuestRoute';
import Home from './app/screens/Home';
import Login from './app/screens/Login';
import Signup from './app/screens/Signup';
import Dashbord from './app/screens/Dashbord';
import Navbar from './app/components/Navbar';
import GuestRoute from './app/components/GuestRoute';
import UserRoute from './app/components/UserRoute';


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Route path="/" exact component={Home}/>
      <GuestRoute exact path="/login"  component={Login}/>
      <GuestRoute exact path="/signup" component={Signup}/>
      <UserRoute exact path="/dashbord" component={Dashbord}/>
    </div>
  );
}

    
  


export default App;
