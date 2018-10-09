import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom'; 
import {} from './app/components/GuestRoute';
import Home from './app/screens/Home';
import Login from './app/screens/Login';
import Signup from './app/screens/Signup';
import Navbar from './app/components/Navbar';
import GuestRoute from './app/components/GuestRoute';
import UserRoute from './app/components/UserRoute';


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Route path="/" exact component={Home}/>
      <GuestRoute path="/login/" exact component={Login}/>
      <GuestRoute path="/signup/" exact component={Signup}/>
    </div>
  );
}

    
  


export default App;
