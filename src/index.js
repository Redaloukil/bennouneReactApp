import React from 'react';
import ReactDOM from 'react-dom';
import {createStore , applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './rootReducer';
import { decode } from 'punycode';
import setAuthorisationHeader from './app/utils/setAuthorisationHeader';
import { userLogIn} from './app/actions/User'; 


const store = createStore(
    rootReducer , 
    applyMiddleware(thunk)
)



if (localStorage.bennoune) {
    const key = decode(localStorage.bennoune)
    const user = {
        token : localStorage.bennoune,
        email : key.email , 
    }
    setAuthorisationHeader(localStorage.bennoune);
    store.dispatch(userLogIn(user));
}


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
