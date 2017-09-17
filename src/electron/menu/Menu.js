const { Menu } = require('electron');
const electron = require('electron');
const app = electron.app;
const dialog = electron.dialog;

const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'New File'
      },
      {
        type: 'separator'
      },
      {
        label: 'Open File...',
        click (item, focusedWindow) {
          dialog.showOpenDialog(function (filenames) {
            if (focusedWindow) focusedWindow.webContents.send("open", { filenames });
          });
        }
      },
      {
        label: 'Open Recent'
      },
      {
        type: 'separator'
      },
      {
        label: 'Save'
      },
      {
        label: 'Save As...'
      },
      {
        label: 'Save All'
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        role: 'resetzoom'
      },
      {
        role: 'zoomin'
      },
      {
        role: 'zoomout'
      },
      {
        type: 'separator'
      },
      {
        role: 'togglefullscreen'
      },
      {
        type: 'separator'
      },
      {
        label: 'Toggle Developer Tools',
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools();
        }
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'About',
        click () { 
          require('electron').shell.openExternal('http://electron.atom.io');
        }
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);