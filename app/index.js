import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose } from 'redux'
import {Router, Route, browserHistory} from 'react-router';
import { reducer as formReducer } from 'redux-form'
import App from './components/App'
import initialState from './initialState'
import employeeReducer from './reducers/employeeReducer'
import {combineReducers} from 'redux'


const reducers = {
  employeeReducer,
  form: formReducer
}
const reducer = combineReducers(reducers)

let store = createStore(reducer);
console.log(store.getState());

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)

