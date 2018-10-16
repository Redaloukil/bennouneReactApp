import React from 'react';
import LoginForm from './forms/LoginForm';
import { connect } from 'react-redux';
import { login } from '../actions/User';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this)
        
    }

    submit = (data) => {
        this.props.login(data)
        .then((res )=> {
            console.log(res)
        }).catch((err)=> {
            console.log(err)
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
                <div className="form-header">
                    <h2 className="h4 text-center">Welcome to Bennoune</h2>
                </div>
                <LoginForm submit={this.submit}/>
            </div>
            
            </div>
            </div>
            </div>
            
            
        )
    }
}
    

export default connect(null, { login })(Login);