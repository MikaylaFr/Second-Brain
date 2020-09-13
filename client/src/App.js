import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Meals from './components/Meals';
import Data from './components/Data';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path="/meals" exact component={Meals}/>
          <Route path="/meals/:id" component={Meals}/>
          <Route path='/Data' component={Data}/>
        </Switch>
        
      </div>
    </Router>

  );
}

export default App;
