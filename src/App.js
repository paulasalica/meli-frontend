import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
        
        {/* <Route path="/">
          <Searcher />
        </Route>
        <Route path="/ItemList">
          <ItemList />
        </Route>
        <Route path="/items/:id">
          <ItemList />
        </Route> */}
    </Switch>
  );
}

export default App;
