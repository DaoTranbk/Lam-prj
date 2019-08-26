import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

import {lam} from '../global';



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: "",
            password: "", 
            IsLogin: lam.isLogin,
        };
        this.handlerAccountChange = this.handlerAccountChange.bind(this);
        this.handlerPasswordChange = this.handlerPasswordChange.bind(this);
       
        this.HAHA = this.HAHA.bind(this);

    }

    handlerAccountChange(e) {
        this.setState({account: e.target.value});
    }

    handlerPasswordChange(e) {
        this.setState({password: e.target.value});
    }

    // showInfo(e) {
    //     alert(this.state.account + " " + this.state.password);
    // }


    

    HAHA() {
        console.log(lam.isLogin);
    }

    render() {
        return (

            
            <div class="row">
                <div class ="main">
                    <div class="box">
                        <h2>Login</h2>
                        <form>
                            <div class="form-group">
                                <div class ="inputBox">
                                    <input id="account" class="form-control" onChange={this.handlerAccountChange} />
                                    <label for="account">Account</label>
                                </div>
                                <div class ="inputBox">
                                    <input id="password" class="form-control" onChange={this.handlerPasswordChange} />
                                    <label for="password">Password</label>
                                </div>
                            </div>
                            <Link to="/MyPage" class="btn btn-primary"> 
                            <span class="submit" onClick={this.props.changeStatusLogin}>Submit</span>  
                            </Link> 
                            <Link to="/Register" id="register">Sign Up</Link>
                    
                        </form>
                    </div>    
                   
                </div>
            </div>
        )
    }
    
}



export default Login;