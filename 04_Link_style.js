import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './App.css';

const isActiveFunc = (match, location) => {
 console.log(match, location);
 return match
}

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="">Home</NavLink>
    <NavLink activeStyle={{color: 'green'}} to="/contact">contact</NavLink>
    <NavLink isActive={isActiveFunc}
             activeClassName="active"
             to="/about">about</NavLink>

  </nav>
)

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>Home</h1>}/>
      <Route path="/about" render={() => <h1>About</h1>}/>
      <Route path="/contact" render={() => <h1>Contact</h1>}/>
    </div>
  </Router>
)

export default App

// navLink allows us to identify current route and give it an active state
  <NavLink exact activeClassName="active" to="/">Home</NavLink>   // className defined in CSS

// can also style active inline
  <NavLink activeStyle={{color: green}} to="/">contact</NavLink>

// use 'isActive' prop to manually identify whether or not the 'activeClassName' is applied
// - pass 'isActive' a fn (we created 'isActiveFunc')
  <NavLink isActive={isActiveFunc}
           activeClassName="active"
           to="/about">about</NavLink>

// creating the fn passed to 'isActive' passing in match and location data
// - the 'isActiveFunc' is fired each time links are rendered
//   * will check if link matched the 'about'
  const isActiveFunc = (match, location) => {
   console.log(match, location);
   return match  // if the route is a match, this will return 'true'
  }
