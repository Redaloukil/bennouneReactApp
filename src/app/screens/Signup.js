import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import SignupForm from './forms/SignupForm';
import {signup} from '../actions/User';

class Signup extends React.Component{
    submit = (data) => {
        this.props.submit(data).then(()=> {
            console.log("Signup has been made")
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
                
            <h2 className="h4 text-center">Register in Bennoune</h2>

            </div>
                <SignupForm submit={this.submit}/>
            </div>
            
            </div>
            </div>
            </div>
            
        )
    }
}

export default connect(null, { signup })(Signup);



