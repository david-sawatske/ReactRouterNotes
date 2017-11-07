import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to={{pathname: '/about'}}>about</Link>
    <Link replace to="/contact">Contact</Link>
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

Create navigation element for router with Link component from react-router-dom

create Links component and add to App component
const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to={{pathname: '/about'}}>about</Link>     {/* interpolate object ('to' prop becomes 'pathname') */}
    <Link replace to="/contact">Contact</Link>       {/* 'replace' gives control over browser history */}
  </nav>                                             {/* click sequence 'home' => 'about' => 'contact' => back*/}
)                                                    {/*  - sends to 'home' */}
...
const App = () => (
  <Router>
    <div>
      <Links />
