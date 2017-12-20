import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import {AuthRoute, ProtectedRoute} from '../util/route_util';

import Header from './header/header';
import Footer from './home/footer';
import HomeContainer from './home/home_container';

const App = () => (
  <div>
    <Header/>
    <main id="site-content">
      <Route exact path='/' component={HomeContainer} />
    </main>
  </div>
);

export default App;
