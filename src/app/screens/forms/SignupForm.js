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
            loading : false 
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
    
    validate(data) {
        const errors = {};
        if (!isEmail(data.email)) { errors.email = "it an invalid email"; }
        if (data.password != data.confirm_password ){  errors.password = "wrong password u set"; }     
        return errors;
    }


    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors})
        if (Object.keys(this.state.errors).length == 0) {
          this.setState({ loading: true });
          console.log("submitted")
          this.props
            .submit(this.state.data)
        }
      };
    
    render (){
        const { data , errors , loading } = this.state
        return (
            <div className="">
            <form onSubmit={this.onSubmit} loading={loading}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        placeholder="Enter email"
                        className="form-control"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email@email.com"
                        value={data.email}
                        onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email} />}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password} />}
                </div>
                <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input
                        className="form-control"
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        value={data.confirm_password}
                        onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password} />}
                </div>
                <button type="submit" className="btn btn-primary btn-lg">Signup</button>
            </form>
        </div>
        )
    }
}


export default SignupForm;