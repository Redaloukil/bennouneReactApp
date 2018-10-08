import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import api from './api';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user : {}
    }
  }
  
  

  componentWillMount(){
    

    api.getUsers()
    .then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })

    api.login(
      {
        email : 'loukil.red@gmail.com',
        password : 'redareda'
      })
      .then((res)=> {
        console.log(res)
      })
      .catch((err)=> {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        { this.state.user.email }
      </div>
    );
  }
}

export default App;
