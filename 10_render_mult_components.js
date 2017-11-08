import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css'

const Links = () => (
  <nav>
    <Link to="/home">home</Link>
    <Link to="/about">about</Link>
  </nav>
)

const App = (props) => (
  <Router>
    <div>
      <Links />
      <Route  path='/:page' render={({match}) => <h1>{match.params.page}</h1>} />
    </div>
  </Router>
)

export default App

// single route is defined that takes and parameterized a string ('/:page') as a param called page
// wrap the route in a header class and add CSS border
<div className="header">
  <Route  path='/:page' render={({match}) => <h1>{match.params.page}</h1>} />
</div>

// create another div wrapped route, this time with class content. Add CSS
<div className="content">
  <Route  path='/:page' render={({match}) => <p>{match.params.page} content</p>} />
</div>

// ex if we go to  http://localhost:3000/home
home
home content


// create a fn that will take in match data and return the header content
const Header = ({match}) => (
  <div className="header">
    <Route  path='/:page' render={({match}) => <h1>{match.params.page}</h1>} />
  </div>
)

const App = (props) => ( ... // the header/content are no longer in the App component

// do the same for Content
// now add the functions to the App
const Header = ({match}) => (
  <div className="header">
    <Route  path='/:page' render={({match}) => <h1>{match.params.page}</h1>} />
  </div>
)

const Content = ({match}) => (
  <div className="content">
    <Route  path='/:page' render={({match}) => <p>{match.params.page} content</p>} />
  </div>
)

const App = (props) => (
  <Router>
    <div>
      <Links />
       <Header />   {/*Each containing their own route */}
      <Content />   {/*works because Routes are simply components*/}
    </div>          {/*so we just have Components rendering other Components*/}
  </Router>
)

// ex if we go to  http://localhost:3000/home
home
home content
