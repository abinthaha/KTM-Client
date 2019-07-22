import React from "react";
import { createBrowserHistory } from 'history';
import { Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import './index.scss';
import "./App.css";

import LandingComponent from './scenes/KTM';
import HeaderComponent from './common/Header';
import BikerComponent from './scenes/KTM/components/biker-data';
import BikeComponent from './scenes/KTM/components/bike-data';
import LandingCardComponent from './scenes/KTM/components/landing';

import store from './store/index';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router history={history}>
            <HeaderComponent />
            <section className='main-wrapper'>
              <Route path="/" exact component={LandingCardComponent} />
              <Route path="/table-data" component={LandingComponent} />
              <Route path="/biker-data" component={BikerComponent} />
              <Route path="/bike-data" component={BikeComponent} />
            </section>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
