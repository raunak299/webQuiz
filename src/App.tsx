
import './App.css';
import Home from  './Pages/Home/Home';
import {Switch,Route,Redirect} from 'react-router-dom'
import React from 'react';
import Contest from './Pages/Contest/Contest';
import Result from './Pages/Result/Result';

function App() {
  return (
    <React.Fragment>
      <Switch>

      <Route path='/' exact>
        <Redirect to='/home' />
      </Route>

      <Route path='/home' exact>
        <Home />
      </Route>

      <Route path='/contest/:contestId' exact>
        <Contest />
      </Route>

      
      <Route path='/result/:contestId' exact>
        <Result />
      </Route>
  
      <Route path='*'>
          <Redirect to='/' />
      </Route>

      </Switch>
      </React.Fragment>
  );
}

export default App;
