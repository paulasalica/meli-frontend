import React from 'react';
import {Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
    </Router>
  );
}

export default App;
