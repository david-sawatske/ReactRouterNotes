import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css'

const Links = () => (
  <nav>
    <Link to="/">Inline</Link>
    <Link to="{{pathname: '/'}}">Object</Link>
  </nav>
)

const App = (props) => (
  <Router>
    <div>
      <Links />
      <Route path='/' render={() => (
        <div>
          <p>Root</p>
        </div>
      )} />
    </div>
  </Router>
)

export default App

// append a query string to the inline Link
// when the 'Inline' link is clicked, url = http://localhost:3000/?id=123
<nav>
  <Link to="/?id=123">Inline</Link>
...
// Take a look a the match and location data
<Route path='/' render={({match, location}) => (
  <div>
    <p>Root</p>
    <p>{JSON.stringify(match)}</p>
    <p>{JSON.stringify(location)}</p>
  </div>
)} />

// returns to the page match and location data
{"path":"/","url":"/","isExact":true,"params":{}}
{"pathname":"/","search":"?id=123","hash":"","key":"ryyqn7"}
// in location: "search":"?id=123" <- the query string with '?'



// try same with the object version of Link
    <Link to="{{pathname: '/?=456'}}">Object</Link>

// the returned location data only
{"pathname":"/{{pathname: '/","search":"?=456'}}","hash":"","key":"m8z784"}
// we want to isolate the search from the pathname


// add 'search' field to 'Link to' object
    <Link to="{{pathname: '/', search: 'id=456'}}">Object</Link>  // no '?'

// the returned location data only
{pathname: '/', search: '?id=456',"search":"","hash":"","key":"tiiogh"}
// react router put in the '?'

// now, lets get the id from the url and put it into a <p>
  <Route path='/' render={({match, location}) => (
    <div>
      <p>Root</p>
      <p>{JSON.stringify(match)}</p>
      <p>{JSON.stringify(location)}</p>
      <p>{new URLSearchParams(location.search).get('id')}</p>
    </div>


// rendered to the page
Root
{"path":"/","url":"/","isExact":false,"params":{}}
{pathname: '/', search: '?id=456',"search":"","hash":"","key":"tiiogh"}
456
