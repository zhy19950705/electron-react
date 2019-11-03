import React, { useEffect } from 'react';
import './App.css';
import Login from "./views/login";
import Home from "./views/home";
import { HashRouter, Route, Switch, useHistory, withRouter, Link } from "react-router-dom";

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
      {/* <Link to="/home">About</Link> */}
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
        {/* <Route path="/login" component={Login} /> */}
      </HashRouter>
    </div>
  );
}

export default App;
