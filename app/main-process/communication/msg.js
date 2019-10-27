const {ipcMain,BrowserWindow} = require('electron')

ipcMain.on('hello', (event, arg) => {
  console.log('hello received')
  event.sender.send('hello-reply', 'hello-reply')
})

ipcMain.on('login', (event, arg) => {
  let win = BrowserWindow.getFocusedWindow();
  win.maximize();
})

ipcMain.on('mini', (event, arg) => {
  let win = BrowserWindow.getFocusedWindow();
  win.unmaximize();
})