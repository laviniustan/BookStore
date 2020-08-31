import React from 'react';
import BookCard from './commons/components/book-card/book-card'
import Home from './pages/home/home'
import BookCollection from './commons/components/book-collection/book-collection'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import BookInfo from './commons/components/book-info/book-info'

function App() {
  return (
    <div className="App">

    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/book/:id' component={BookInfo} />
      <Route path='/book' component={BookCollection} />
    </Switch>
 
    
    </div>
  );
}

export default App;
