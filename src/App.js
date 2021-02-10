import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ItemList from './pages/ItemList/ItemList'; 
import ItemDetail from './pages/ItemDetail/ItemDetail';

function App() {
  return (
      <Router>
        <Route exact path="/" component={Home}/>
        <Switch>
          <Route exact path="/items" component={ItemList}/>
          <Route exact path="/items/:id" component={ItemDetail}/> 
        </Switch>
      </Router>
  );
}

export default App;
