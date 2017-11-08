import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css'

const Links = () => (
  <nav>
    <Link to="/">home</Link>
    <Link to="/about">about</Link>
    <Link to="/contact">contact</Link>
  </nav>
)

const App = (props) => (
  <Router>
    <div>
      <Links />
      <Switch>
        <Route exact path='/' render={() => <h1>home</h1>} />
        <Route path='/about' render={() => <h1>about</h1>} />
        <Route path='/contact' render={() => <h1>contact</h1>} />
        <Route path='/contact' render={() => <h1>contact</h1>} />
      </Switch>
    </div>
  </Router>
)

export default App

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css'

const Links = () => (
  <nav>
    <Link to="/">home</Link>
    <Link to="/about">about</Link>
    <Link to="/contact">contact</Link>
  </nav>
)

const App = (props) => (
  <Router>
    <div>
      <Links />
        <Route exact path='/' render={() => <h1>home</h1>} />
        <Route path='/about' render={() => <h1>about</h1>} />
        <Route path='/contact' render={() => <h1>contact</h1>} />
    </div>
  </Router>
)

export default App

// Add new dynamic route
  <Route exact path='/' render={() => <h1>home</h1>} />
  <Route path='/about' render={() => <h1>about</h1>} />
  <Route path='/contact' render={() => <h1>contact</h1>} />
  <Route path='/:itemid' render={({match}) => <h1>Item: {match.params.id}</h1>} />

// ex if we go to  http://localhost:3000/about
About
Item: about // the '/about' parameter in URL is considered the '/:itemid'
            // - this is not wanted

// Wrap the Routes in a Switch that will only render the first match
<Switch>
  <Route exact path='/' render={() => <h1>home</h1>} />
  <Route path='/about' render={() => <h1>about</h1>} />
  <Route path='/contact' render={() => <h1>contact</h1>} />
  <Route path='/:itemid' render={({match}) => <h1>Item: {match.params.id}</h1>} />
</Switch>

// ex if we go to  http://localhost:3000/about
About // 'About' is rendered by itself just like we want
// ex if we go to  http://localhost:3000/adfaf
About
Item: adfaf // just like we want
