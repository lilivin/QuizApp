import React, { Component } from 'react';
import './App.css';
import 'firebase/database';
import './Styles/Navigation.scss';
import SanahQuiz from './SanahQuiz';
import Quizy from './Quizy';
import Home from './Home';
import News from './News';
import AboutUs from './AboutUs';
import MarkowskiQuiz from './MarkowskiQuiz';
import KabeQuiz from './KabeQuiz';
import QuebinafideQuiz from './QuebonafideQuiz';
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
 
  render() {
    return (
      <HashRouter basename='/'>
      <div>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/quizy">
            <Quizy />
          </Route>
          <Route path="/SanahQuiz">
            <SanahQuiz/>
          </Route>
          <Route path="/MarkowskiQuiz">
            <MarkowskiQuiz/>
          </Route>
          <Route path="/KabeQuiz">
            <KabeQuiz/>
          </Route>
          <Route path="/QuebonafideQuiz">
            <QuebinafideQuiz/>
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
        </Switch>
      </div>
    </HashRouter>
    );
  }
}

export default App;
