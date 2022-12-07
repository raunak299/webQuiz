
import './App.css';
import Home from  './Pages/Home/Home';
import {Switch,Route,Redirect} from 'react-router-dom'
import React, { useContext } from 'react';
import Contest from './Pages/Contest/Contest';
import Result from './Pages/Result/Result';
import Authentication from './Pages/Authentication/Authentication';
import Profile from './Pages/Profile/Profile';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


function App() {

  return (
    <React.Fragment>
      <Switch>

      <Route path='/' exact>
        <PrivateRoute>
        <Redirect to='/home' />
        </PrivateRoute>
      </Route>

      <Route path='/home' exact>
        <Home />
      </Route>

      <Route path='/contest/:contestId' exact>
        <PrivateRoute>
        <Contest />
        </PrivateRoute>
      </Route>

      
      <Route path='/result/:contestId' exact>
      <PrivateRoute>
        <Result />
        </PrivateRoute>
      </Route>

      <Route path='/authentication' exact>
        <Authentication/> 
      </Route>

      <Route path='/profile'>
      <PrivateRoute>
        <Profile />
        </PrivateRoute>
      </Route>
  
      <Route path='*'>
          <Redirect to='/' />
      </Route>

      

      </Switch>
      </React.Fragment>
  );
}

export default App;
