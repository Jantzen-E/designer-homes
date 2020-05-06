import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
 
import Services from './components/Services';
import Gallery from './components/Gallery';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
          <Switch />
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            <Route exact path="/history">
              {/* <History /> */}
            </Route>
            <Route exact path="/reviews">
              {/* <Reviews /> */}
            </Route>
            <Route exact path="/blog">
              {/* <Blog /> */}
            </Route>
            <Route exact path="/contact">
              {/* <Contact /> */}
            </Route>
            <Route exact path="/hours">
              {/* <Hours /> */}
            </Route>
            <Route exact path="/videos">
              {/* <Videos /> */}
            </Route>
          <Switch />
      </Router>
    );
  }
}