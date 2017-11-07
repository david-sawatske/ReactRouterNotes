import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = (props) => (
  <Router>
    <div>
      <Route path="/:a/:b" render={({match}) => (
        <h1>
          paramA: {match.params.a} <br/>
          paramB: {match.params.b}
        </h1>
      )} />
    </div>
  </Router>
)

export default App

// ex if we go to  http://localhost:3000/a/b
paramA: a
paramB: b


// only want to validate 'a' if it is a digit (or any number of digits)
  <Route path="/:a(\d+)/:b" render={({match}) => (

// ex if we go to  http://localhost:3000/123/b
paramA: 123
paramB: b


// only want to validate 'a' if it is in a data format and 'b' is a . followed
// by any number of alpha characters

  <Route path="/:a(\d{2}-\d+{2}-\d+{4})-:b(\.[a-z]+)" render={({match}) => (

// ex if we go to  http://localhost:3000/12-31-2017.html
paramA: 12-31-2017
paramB: .html
