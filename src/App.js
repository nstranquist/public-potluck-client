import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
// Could also import all of these from 'index.js' in /screens
import { Login, Signup } from './screens/Auth'
import { Home } from './screens/Home'

function App() {
  return (
    <BrowserRouter>
      {/* todo: change after auth */}
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      {/* make '/' after auth is setup */}
      <Route exact path="/home" component={Home} />
    </BrowserRouter>
  );
}

export default App;
