import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
// import allReducers from './reducers/index'
import { Provider } from 'react-redux'

// const store = createStore(allReducers);
// store to hold all your state data

//Action -> says what you wana do (increment)


//Reducer describes how your action transforms the state

//dispatch executes the action
// store.dispatch(increment());

ReactDOM.render(
  // <Provider store={store}>
    <App />
  // </Provider>,
  ,document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
