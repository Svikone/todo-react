import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from './auth/auth';
import Main from './main/main.jsx'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers';
import { connect, Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { watchLoadData } from './sagas/sagas';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiidleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, sagaMiidleware)));
sagaMiidleware.run(watchLoadData)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route path="/auth" component={Auth} />
          <Route path="/main" component={Main} />
        </div>
      </BrowserRouter>  
    </Provider>
      
  );
}

export default App;
