import React from 'react';
import LoginForm from './forms/LoginForm';
import { connect } from 'react-redux';

class Login extends React.Component{
    submit = () => {
        console.log('hello world this is a login');
    }
    
    render(){
        return(
            <div>
                <LoginForm submit={this.submit}/>
            </div>
        )
    }
}

Login.prototype = {

}

export default Login;