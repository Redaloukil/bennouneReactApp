import React from 'react';


class SignupForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email : "",
            password : "",
            errors : {
                email:"",
                password:""
            },
            isLoading :False 
        }
    }
    render (){
        return (
        <Form onSubmit={this.onSubmit} loading={loading}>
            <Form.Field error={!!errors.email}>
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
            </Form.Field>

            <Form.Field error={!!errors.password}>
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={data.password}
                onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}
            </Form.Field>

        <Button primary>Sign Up</Button>
      </Form>
        )
    }
    
}