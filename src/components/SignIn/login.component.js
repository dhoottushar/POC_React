import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    }
    handleChange(e) {
        console.log(e)
        console.log(e.target.value)
        // console.log(this.state.fields)
        let fields = this.state.fields;
        console.log(fields);

        fields[e.target.name] = e.target.value
        console.log(fields)
        this.setState({
            fields
        })
        // console.log(e.target)
        // let fields = this.state.fields;
        // fields[e.target.name] = e.target.value;
        // this.setState({
        //   fields
        // });

    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {...this.state.fields};
            if (fields["emailid"] === 'test@test.com' && fields["password"] === 'Test@12345') {
                fields["emailid"] = "";
                fields["password"] = "";
                this.setState({ fields: fields, usernameError: '',isAuth: true });
                this.props.history.push('/home');
            }else{
                this.setState({
                    usernameError: 'Email id password is incorrect'
                })
            }


        }

    }

    validateForm() {

        let fields = this.state.fields;
        console.log(fields);
        let errors = {};
        let formIsValid = true;
        console.log(fields["username"])

         if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailid"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }
    render() {
        const { errors, usernameError } = this.state;
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} noValidate>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="emailid" onChange={this.handleChange} noValidate placeholder="Enter email" />
                    {errors && errors.emailid &&
                        <span className='error'>{errors.emailid}</span>}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" onChange={this.handleChange} noValidate placeholder="Enter password" />
                    {errors && errors.password &&
                        <span className='error'>{errors.password}</span>}
                    {usernameError &&
                        <span className='error'>{usernameError}</span>}
                </div>

                

                <button type="submit" className="btn btn-primary btn-block">Submit</button>

            </form>
            </div>
            </div>
        );
    }
}
