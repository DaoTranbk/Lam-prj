import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Gui_cho_Huy from './components/Gui_cho_Huy';
import {BrowserRouter} from 'react-router-dom';
import TeamPage from './components/TeamPage/TeamPage';
 


ReactDOM.render((
    <BrowserRouter>
        <TeamPage />     
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
