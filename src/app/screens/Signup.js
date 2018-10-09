import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import SignupForm from './forms/SignupForm';
import {signup} from '../actions/User';

class Signup extends React.Component{
    submit = (data) => {
        console.log("hello world , gonna do a signup for everybody");
    }
    render(){
        return(
            <div>
                <SignupForm submit={this.submit}/>
            </div>
        )
    }
}

export default connect(null, { signup })(Signup);
// Signup.prototype = {
//     signup : PropTypes.func.isRequired , 
    
// }


