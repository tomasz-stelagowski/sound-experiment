// ./main.js
const {app, BrowserWindow, globalShortcut} = require('electron')

let win = null;

app.on('ready', () => {

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 600, frame: false, fullscreen: true});

  //add shortcut to close
  globalShortcut.register('CmdOrCtrl+Q', () => app.quit() );

  // Specify entry point
//  win.loadURL('http://localhost:4200');
  win.loadURL('file:///C:/Users/Tomasz/OneDrive/Documents/Studia/Psychologia/Empiryczna/BadaniaProgram/sound-experiment/dist/index.html');
  
  // Show dev tools
  // Remove this line before distributing
  //win.webContents.openDevTools()

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });

});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});