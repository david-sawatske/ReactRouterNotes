import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route exact path="/page?" render={() => (
        <h1>
          PAGE
        </h1>
      )} />
    </div>
  </Router>
)

export default App

// URL parameters - a method by which data can be extracted from URL
// change route to a parameter called ':page' and use match data to get data out of route
    <Route exact path="/:page?" render={({match}) => ( // '?' makes 'page' in url optional ie '/' will work
      <h1>
        PAGE: {match.params.page || 'Home'}
      </h1>
    )} />

// ex if we go to  http://localhost:3000/test
PAGE: test    // is displayed
// ex if we go to  http://localhost:3000/
PAGE: Home    // is displayed because of the '||' and '?' making :page and optional parameter


// expand on that with a subdirectory
<Route exact path="/:page?/:subpage?" render={({match}) => (
  <h1>
    PAGE: {match.params.page || 'Home'} <br/>
    SUBPAGE: {match.params.subpage}
  </h1>
)} />

// ex if we go to  http://localhost:3000/test
PAGE: test    // is displayed
SUBPAGE:      // no subpage defined
// ex if we go to  http://localhost:3000/test/sub
PAGE: test
SUBPAGE: sub

// not limited to subdirectories only
// using '-' in URL
<Route exact path="/:page?-:subpage?" render={({match}) => (
  <h1>
    PAGE: {match.params.page || 'Home'} <br/>
    SUBPAGE: {match.params.subpage}
  </h1>
)} />
// ex if we go to  http://localhost:3000/test-sub
PAGE: test    // is displayed
SUBPAGE: sub
