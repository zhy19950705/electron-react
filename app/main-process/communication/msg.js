const {ipcMain} = require('electron')

ipcMain.on('hello', (event, arg) => {
  console.log('hello received')
  event.sender.send('hello-reply', 'hello-reply')
})
