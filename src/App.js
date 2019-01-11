import React from 'react';
import './App.css';
import rootReducer from './rootreducer';
import {save, load} from 'redux-localstorage-simple';
import MoviesList  from './movies/MoviesList';
import MovieDetail  from './movies/MovieDetail';
import {

  BrowserRouter as Router,
  Route, 
  Switch, 
  Link
} from 'react-router-dom'; 
import thunk from 'redux-thunk';

import logger from 'redux-logger';

import {Provider} from 'react-redux';
import {applyMiddleware, createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import Toggle from './toggle/Toggle';

const middleware =[logger, thunk];


const store =createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware,save())),
  
  );

const App = ()=> {
  return (
    <Provider store ={store}>
      <Router>
      <div className="App">
        <header className="App-header">
          <Link to ='/'>
          <h2> Movie Database </h2>
          
          
          </Link>
           
          
        </header>
        <Toggle />
        <Switch>

        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
                
        </Switch>
      </div>

      </Router>
      </Provider>
  )
}  

export default App;

