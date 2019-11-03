import React, { useState } from 'react';
import { Button } from "antd";

const electron = window.require('electron');
const { ipcRenderer } = electron;
const Home = (props:any) => {
    const [color, setColor] = useState('');
    const exit = () => {
        ipcRenderer.send('mini')
        props.history.push('/')
    }

    return (
        <div>
            <Button onClick={exit}>退出</Button>
            <Button onClick={() => setColor('red')}>red</Button>
            <Button onClick={() => setColor('green')}>green</Button>
            <Button onClick={() => setColor('yellow')}>yellow</Button>
            <div>
                {color}
            </div>
        </div>
    )
}
export default Home;