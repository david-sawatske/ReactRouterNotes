import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css'

const Home = () => (<h1>Home</h1>)
const Menu = () => (<h1>Menu</h1>)


const App = (props) => (
  <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/menu">menu</Link>
      <Route exact path="/" component={Home} />
      <Route  path="/menu" component={Menu} />
    </div>
  </Router>
)

export default App

// Since Routes are components, we nest the Routes where we want them to appear
// Create Link to each

// Create a div in the Menu comp and add additional Links to nested routes
const Menu = () => (
  <div>
    <h1>Menu</h1>
    <Link to="menu/food">Food</Link>
    <Link to="menu/drinks">Drinks</Link>
    <Link to="menu/sides">Sides</Link>
  </div>
)

// To render at the URLs specified by the new Links, nest the Route in the Menu component
const Menu = () => (
  <div>
    <h1>Menu</h1>
    <Link to="menu/food">Food</Link>
    <Link to="menu/drinks">Drinks</Link>
    <Link to="menu/sides">Sides</Link>
    <Route
     path="/menu/:section"   {/* parameterize  ':section' */}
      render={({match}) => <h2>{match.params.section}</h2>} />
  </div>     {/*get the match data from the 'render' method and get section for display in h2 */}
)
