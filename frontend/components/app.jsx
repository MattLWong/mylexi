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
import FeedContainer from './feed/feed_container';
import LibraryContainer from './library/library_container';

const App = () => (
  <div>
    <Header/>
    <main id="site-content">
      <Route exact path='/' component={HomeContainer} />
      <ProtectedRoute path='/feed' component={FeedContainer}/>
      <ProtectedRoute path='/library' component={LibraryContainer}/>

    </main>
  </div>
);

export default App;
