import React, { useEffect } from 'react';
import './App.css';
import Login from "./views/login";
import Home from "./views/home";
import { BrowserRouter as Router, Route, Switch, useHistory, withRouter } from "react-router-dom";

const electron = window.require('electron');
const { ipcRenderer } = electron;

const App = () => {
  useEffect(() => {
    ipcRenderer.send('hello', 'hello')
    ipcRenderer.on('hello-reply', (event: any, arg: any) => {
      // console.log(arg)
    })
    // useHistory
  }, [])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
        {/* <Route path="/login" component={Login} /> */}
      </Router>
    </div>
  );
}

export default App;
