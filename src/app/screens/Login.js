import React from 'react';
import LoginForm from './forms/LoginForm';
import { connect } from 'react-redux';
import { login } from '../actions/User';

class Login extends React.Component{
    submit = (data) => {
        console.log(data);
        this.props.login(data).then(()=> {
            console.log("login has been made")
        })
    }
    
    render(){
        return(
            <div className="container">
            <div className="row">
            <div className="col-sm-3">
            </div>
            <div className="col-sm-6">
            <div className="box">
                <LoginForm submit={this.submit}/>
            </div>
            
            </div>
            </div>
            </div>
            
            
        )
    }
}
    

export default connect(null, { login })(Login);