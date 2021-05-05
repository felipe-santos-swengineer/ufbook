import './App.css';
import React, {Component} from 'react';
//bootstrap include
import 'bootstrap/dist/css/bootstrap.min.css';

//pages import
import Login from "./pages/Login"
import Feed from "./pages/Feed"

import { BrowserRouter, Switch, Route, Link }from "react-router-dom"

function App(props) {
  return (
    <div>
      <header>
      </header>
      <main>
       <Switch>
         <Route exact path = "/" component={Login}></Route>
         <Route path = "/Feed" component={Feed}></Route>
       </Switch>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
