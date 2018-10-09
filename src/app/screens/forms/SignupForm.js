import React from 'react';
import InlineError from '../../components/InlineError';


class SignupForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data : {
                email : "",
                password : "",
            },
            errors : {
                email:"",
                password:"",
                confirm_password:""
            },
            loading :false 
        }
    }
    
    data = this.state.data
    errors = this.state.errors

    onChange(){

    }
    
    onSubmit(){

    }
    
    render (){
        const { data , errors , loading } = this.state
        return (
            <div>
            <form onSubmit={this.onSubmit} loading={loading}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@email.com"
                    value={data.email}
                    onChange={this.onChange}
                />
                {errors.email && <InlineError text={errors.email} />}
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={this.onChange}
                />
                {errors.password && <InlineError text={errors.password} />}
                <label htmlFor="confirmpassword">Password</label>
                <input
                    type="password"
                    id="password"
                    name="confirm_password"
                    value={data.password}
                    onChange={this.onChange}
                />
                {errors.password && <InlineError text={errors.password} />}
                <button>Signup</button>
            </form>
        </div>
        )
    }
    
}


export default SignupForm;