import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ItemList from './components/ItemList/ItemList'; 
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  return (
      <Router>
        <Route exact path="/" component={Home}/>
        {/* <Route exact path="/items?search=" component={ItemList}/>
        <Route exact path="/items/:id" component={ItemDetail}/> */}
      </Router>
  );
}

export default App;
