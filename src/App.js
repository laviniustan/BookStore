import React from 'react';
import BookCard from './commons/components/book-card/book-card'
import Home from './pages/home/home'
import {Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">

    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/book/:val' component={BookCard} />
    </Switch>
 
    
    </div>
  );
}

export default App;
