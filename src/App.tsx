import React, { useEffect } from 'react';
import './App.css';
import Login from "./views/login/index";

const electron = window.require('electron');
const {ipcRenderer} = electron;

const App: React.FC = () => {
  useEffect(() => {
    ipcRenderer.send('hello', 'hello')
    ipcRenderer.on('hello-reply', (event:any, arg:any) => {
      console.log(arg)
    })
  }, [])
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
