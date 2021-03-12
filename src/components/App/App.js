import React from 'react';
import '../App/App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Authentication from '../Authentication/Authentication';
import Dashboard from '../Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Authentication />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
