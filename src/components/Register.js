import React from 'react';
import {Link} from 'react-router-dom';
import Login from './Login';
import './Register.css';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName: "",
            Email: "",
            Password: "",
            cfPassword: "",
            redirect: false,
        };
        this.handlerUserNameChange = this.handlerUserNameChange.bind(this);
        this.handlerEmailChange = this.handlerEmailChange.bind(this);
        this.handlerPasswordChange = this.handlerPasswordChange.bind(this);
        this.handlerConfirmPasswordChange = this.handlerConfirmPasswordChange.bind(this);
        this.showInfo = this.showInfo.bind(this);
     
    }

    handlerUserNameChange(e) {
        this.setState({UserName: e.target.value});
    }

    handlerEmailChange(e) {
        this.setState({Email: e.target.value});
    }

    handlerPasswordChange(e) {
        this.setState({Password: e.target.value});
    }

    handlerConfirmPasswordChange(e) {
        this.setState({cfPassword: e.target.value});
    }

    showInfo() {
        alert(this.state.UserName + " " + this.state.Email + " " + this.state.Password + " " + this.state.cfPassword);
    }

    render() {     
        return (
            <div class="register-form">
                <div class="r-title">
                    <h2>Create An Account</h2>
                    <p class="welcome"> Welcome! It's free and only takes a minute.</p>
                </div>
                <div class="form-group">
                    <label for="UserName">User name: </label>
                    <input id="UserName" class="form-control" onChange={this.handlerUserNameChange} />
                    <label for="emali">Email: </label>
                    <input id="email" class="form-control" onChange={this.handlerEmailChange} />
                    <label for="password">Password: </label>
                    <input id="password" class="form-control" onChange={this.handlerPasswordChange} />
                    <label for="cfPassword">Confirm password: </label>
                    <input id="cfPassword" class="form-control" onChange={this.handlerConfirmPasswordChange} />
                </div>
                <input type="button" onClick={this.showInfo} class="btn btn-primary" value="Register" />
                <div class="r-footer">
                    <p  id="ques">Already a member? </p>  
                    <Link to="/Login" id="login-link">Sign in</Link>
                    
                </div>
            </div>
        );
        
         
        
    }
}
export default Register;