import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

import './App.css'

const Links () =>
<nav>
  <Link to="/">Home</Link>
  <Link to="/old/123">Old</Link>
  <Link to="/new/456">New</Link>
</nav>


const App = (props) => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => (<h1>Home</h1>)} />
      <Route  path="/new" render={() => (<h1>New</h1>)} />
    </div>
  </Router>
)

export default App

// Add Redirect component to import from react-router-dom
... Redirect } from 'react-router-dom';

// at this point, nothing will render when 'Old' link is clicked

// add Redirect component and wrap in Switch component
// must have Switch when used directly in Router
<Switch>
  <Route exact path="/" render={() => (<h1>Home</h1>)} />
  <Route  path="/new" render={() => (<h1>New</h1>)} />
  <Redirect from="/old" to="/new" /> {/* 'from' prop (old path) 'to' prop (new path) */}
</Switch>


// more common use case is to override an existing Route
// create Route with render method that returns the Redirect component
// - don't need the  'from="/old"'  or 'Switch'
  <Route  path="/old" render={() => (
    <Redirect to="/new" />
  )} />

// Also allows carryover any parameters from prev URLs
//  add params to Link
<Link to="/old/123">Old</Link>
<Link to="/new/456">New</Link>

// add ':str' parameter to new path and get it out of the match data
  <Route  path="/new/:str" render={({match}) => (<h1>New {match.params.str}</h1>)} />

// in the 'old' redirect path, follow same pattern and interpolate ES6 string
// template, passing in the str
<Route  path="/old" render={({match}) => (
  <Redirect to={`/new/${match.params.str}`} />
)} />

// when 'old' link is clicked
New: 123
// when 'new' link is clicked
New: 456  // taken from URL

// redirect due to protected page
<Route  path="/protected" render={() => (
  loggedin
  ? <h1>you are allowed on the protected page</h1>
  <Redirect to={"/new/login" />
)} />
