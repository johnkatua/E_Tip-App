import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import UsersPage from './pages/users';
import './app.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/users' component={UsersPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={RegisterPage} />
      </Switch>
    </Router>
  );
}

export default App;