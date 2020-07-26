import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import Auth from './auth/auth';
import Main from './main/main.jsx'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers';
import { connect, Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { watchLoadData } from './sagas/sagas';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history';

const sagaMiidleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, sagaMiidleware)));
sagaMiidleware.run(watchLoadData)

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/main" component={Main} />
          </Switch>
        </div>
      </Router>  
    </Provider>
      
  );
}

export default App;
