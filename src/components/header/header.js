import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Reactjs from '../reactjs/reactjs';
import JavaScript from '../javascript/javascript';
import Nodejs from '../nodejs/nodejs';
import Python from '../python/python';
import './header.css';

const header = () => {
  return (
    <div className='par'>

    <Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/reactjs">
            <div className='first'>
              <h1> Reactjs </h1>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/js">
            <div className='second'>
              <h1> JavaScript </h1>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/nodejs">
            <div className='third'>
              <h1> Nodejs </h1>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/python">
            <div className='fourth'>
              <h1> Python </h1>
            </div>
          </Link>
        </li>
      </ul>
    </nav>

    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/reactjs">
        <Reactjs />
      </Route>
      <Route path="/js">
        <JavaScript />
      </Route>
      <Route path="/nodejs">
        <Nodejs />
      </Route>
      <Route path="/python">
        <Python />
      </Route>
    </Switch>
  </div>
</Router>
    </div>
  )
}

export default header;
