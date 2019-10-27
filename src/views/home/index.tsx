import React from 'react';
import { Button } from "antd";

const electron = window.require('electron');
const { ipcRenderer } = electron;
const home = (props:any) => {
    const exit = () => {
        ipcRenderer.send('mini')
        props.history.push('/')
    }
    return (
        <div>
            <Button onClick={exit}>退出</Button>
        </div>
    )
}
export default home;