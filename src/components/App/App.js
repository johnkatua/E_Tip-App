import React from 'react';
import '../App/App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Authentication from '../Authentication/Authentication';
import Dashboard from '../Dashboard/Dashboard';
import {AboutUs, OurAim, OurVision} from '../../Pages/About/AboutUs';
import {Services, ServiceOne, ServiceTwo, ServiceThree} from '../../Pages/Services/Services';
import {Events, EventOne, EventTwo} from '../../Pages/Events/Events';
import {Contact} from '../../Pages/ContactUs/ContactUs';
import {Support} from '../../Pages/Support/Support';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Authentication} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/about-us/aim' exact component={OurAim} />
          <Route path='/about-us/vision' exact component={OurVision} />
          <Route path='/services' exact component={Services} />
          <Route path='/services/service 1' exact component={ServiceOne} />
          <Route path='/services/service 2' exact component={ServiceTwo} />
          <Route path='/services/service 3' exact component={ServiceThree} />
          <Route path='/events' exact component={Events} />
          <Route path='/events/event 1' exact component={EventOne} />
          <Route path='/events/event 2' exact component={EventTwo} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/support' exact component={Support} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
