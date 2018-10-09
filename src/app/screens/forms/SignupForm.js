import React from 'react';
import InlineError from '../../components/InlineError';
import { isEmail } from 'validator';


class SignupForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data : {
                email : "",
                password : "",
                confirm_password : "",
            },
            errors : {
                email:"",
                password:"",
                
            },
            loading :false 
        }
        this.onChange = this.onChange.bind(this)
    }
    
    onChange(e){
        this.setState({
            ...this.state, 
            data : {
                ...this.state.data , [e.target.name]: e.target.value,
            }
        })
    }
    
    validate() {
        if (!isEmail(this.state.data.email)) this.state.errors.email = "it an invalid email";
        if (this.state.data.password != this.state.data.confirm_password )  this.state.errors.password = "wrong password u set";
    }

    onSubmit = e => {
        e.preventDefault();
        this.validate();
        if (Object.keys(this.state.errors).length === 0) {
          this.setState({ loading: true });
          this.props
            .submit(this.state.data)
            .catch(err =>
              this.setState({ errors: err.response.data.errors, loading: false })
            );
        }
      };
    
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
                    id="confirm_password"
                    name="confirm_password"
                    value={data.confirm_password}
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