import React from 'react';
import Register from  './Register';
import Login from './Login';
import About from './About';
import './Header.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import MyPage from './MyPage';
import {lam} from '../global';



function changeStatus() {
   
    console.log("lam");
}

function Header(props) {
    if (props.check === false) {
        return (
            <div>
                <div class="header">
                    <h1> Web App quản lý công việc </h1>
                    <h2> Demo</h2>
                </div>
                {/* <Router>  */}
                    <div class="navbar navbar-expand-sm bg-dark navbar-dark" id="nav">
                    
                        <Link to="/About" class="navbar-brand"> About</Link>
                        <Link to="/Register" class="navbar-brand"> Register</Link>
                        <Link to="/Login" class="navbar-brand"> Login</Link> 

                    </div>
                    <Switch>
                        
                        <Route path="/About" component={About} /> 
                        {/* <Route path="/Login" component={Login} /> */}
                        <Route path="/Login" render={(props1) => <Login {...props1} changeStatusLogin={props.changeStatus} />} />
                        <Route path="/Register" component={Register} /> 
                        <Route path="/MyPage" component={MyPage} /> 
                    </Switch>
                    
                    
                {/* </Router> */}
            </div>
        );
    }
    else return (
            <div>
            <div class="LoggedHeader">
                <div id="container">
                    <h1>  Quản lý công việc </h1>
                    <div id="logOut">
                        <Link to="/About" >
                            <i class="fa fa-sign-out" aria-hidden="true" style={{color: 'black'}} title={'Log out'}></i>  
                        </Link>
                    </div>
                </div>
                
                
            </div> 
            {/* <Router>  */}
                {/* <div class="navbar navbar-expand-sm bg-dark navbar-dark" id="nav">
                
                    <Link to="/About" class="navbar-brand"> About</Link>
                
                
                </div> */}
                <Switch>
                    
                    <Route path="/About" component={About} /> 
                    {/* <Route path="/Login" component={Login} />
                    <Route path="/Register" component={Register} /> </Route> */}
                    <Route path="/MyPage" component={MyPage} />  
                </Switch> 
                
                
            {/* </Router> */}
            </div>
    );
}

export default Header;  