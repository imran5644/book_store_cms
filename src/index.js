/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={App} />
        <Route path="/books" component={App} />
        <Route path="/categories" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
