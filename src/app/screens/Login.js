import React from 'react';
import LoginForm from './forms/LoginForm';
import { connect } from 'react-redux';
import { login } from '../actions/User';

class Login extends React.Component{
    submit = () => {
        console.log('hello world this is a login');
    }
    
    render(){
        return(
            <div className="container">
            <div className="row">
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4">
            <div className="box">
                <LoginForm submit={this.login}/>
            </div>
            
            </div>
            </div>
            </div>
            
            
        )
    }
}
    

export default connect(null, { login })(Login);