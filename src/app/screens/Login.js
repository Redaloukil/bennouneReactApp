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
            <div>
                <LoginForm submit={this.login}/>
            </div>
        )
    }
}
    

export default connect(null, { login })(Login);