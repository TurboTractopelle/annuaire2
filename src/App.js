import React, { Component } from 'react';
import './App.css';
import Home from "./containers/Home/Home"
import Section from "./containers/Section/Section"
import Navigation from "./components/Navigation/Navigation"
import {BrowserRouter, Route, Switch} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Navigation />
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/section/:section" component={Section}/>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
