import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = (props) => {
  console.log(props)
  return <div>Home</div>
};


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route strict path="/about/" component={Home}/>       {/* url must include '/' */}
      {/* <Route path="/about" render={() => <h1>About</h1>}/> */}
      <Route path="/about" children={(match) => match && <h1>About</h1>}/>
    </div>
  </Router>
)

export default App

// 'render' Prop - render into a fn and return JSX or other Component
// render={() =>

// 'children' Prop - the method will always run, whether there is a match or not
//  - extract '{(match)}' data (which is passed to all components) pulled from react-rouer props
//    * if you want to make a match necessary within a Route
//      'children={(match) => match && <h1>About</h1>}/>'

// React Router Props - match and location will used
