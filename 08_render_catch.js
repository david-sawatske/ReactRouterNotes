import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css'

const Links = () => (
  <nav>
    <Link to="/">home</Link>
    <Link to="/about">about</Link>
    <Link to="/contact">non existant</Link>   {/*need to catch this route without a path */}
  </nav>
)

const App = (props) => (
  <Router>
    <div>
      <Links />
      <Switch>
        <Route exact path='/' render={() => <h1>home</h1>} />
        <Route path='/about' render={() => <h1>about</h1>} />
        <Route render={() => <h1>Page not found</h1>} />      {/* a route without a path */}
      </Switch>                                               {/* will ALWAYS render  */}
    </div>
  </Router>
)

export default App

// to fix the pathless route from rendering on all pages, we need to import Switch
//  - Switch only renders the first match
... Switch } from 'react-router-dom';
...
const App = (props) => (
  <Router>
    <div>
      <Links />
      <Switch>    {/* Switch will only render the FIRST route that matches */}
        <Route exact path='/' render={() => <h1>home</h1>} />
        <Route path='/about' render={() => <h1>about</h1>} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
