import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';

//Specs:
// contains a < NavBar /> component
// contains a < Route path = "/" >
// contains a < Route path = "/actors" >
// contains a < Route path = "/directors" >
const App = (props) => {
  return (
    <Router>
      <div className="app">
        < NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/actors" component={Actors} />
        <Route exact path="/directors" component={Directors} />
        <Route exact path="/movies" component={Movies} />
      </div>
    </Router>
  );
};

export default App
