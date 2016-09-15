import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store'
import {createStore, applyMiddleware, compose } from 'redux'
import {Router, Route, browserHistory} from 'react-router';
import rootReducer from './reducers'
import App from './components/App'
import initialState from './initialState'
import thunk from 'redux-thunk'


let store = configureStore();
// console.log(store.getState());

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)

