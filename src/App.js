import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
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
