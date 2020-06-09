import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar';
import Login from './pages/login';
import Home from './pages/home';
import Error from './pages/error';
import Register from './pages/register';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={Error} />

      </Switch>
    </BrowserRouter>
  );
}
