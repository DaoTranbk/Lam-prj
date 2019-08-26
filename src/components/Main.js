import React from 'react';
import Register from  './Register';
import Login from './Login';
import About from './About';
import MyPage from './MyPage';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

const Main = () => (
    
        <Switch> 
            
            <Route path="/About" component={About} /> 
            <Route path="/Login" render={(props) => <Login {...props} changeStatusLogin={props.changeStatus} />} />
            <Route path="/Register" component={Register} />    
            <Route path="/MyPage" component={MyPage} />
        </Switch>
    
    
);

export default Main;
