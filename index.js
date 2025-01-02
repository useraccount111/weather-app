const { app, BrowserWindow, TouchBar, nativeImage, Menu } = require("electron");
const { TouchBarButton, TouchBarPopover, TouchBarLabel } = TouchBar
const Path = require("path");

const isMac = process.platform === 'darwin';

const createNewWindow = () => {
  // const MetOfficeLogo = new TouchBarButton({
  //   icon: nativeImage.createFromDataURL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWWmywFyRT2lzdhN3EVGd44IEVW72Fq5REw1GP_5ueg&s').resize({ height: 30 }),
  //   iconPosition: 'left',
  //   label: "MetOffice",
  //   accessibilityLabel: 'MetOffice',
  //   backgroundColor: "#000",
  //   click: () => {}
  // });

  const MetOfficeLogo = new TouchBarLabel({
    label: "MetOffice Weather Application",
    accessibilityLabel: 'MetOffice',
    backgroundColor: "#111"
  });
  
  const WeatherLink = new TouchBarButton({
      label: "🌤️ Settlement Weather Forecasts",
      backgroundColor: "#4DBDEA",
      click: () => {
          mainWindow.loadURL(`file://${Path.join(__dirname, './build/index.html#/')}`);
      }
  });

  const ThemeChoice = new TouchBarPopover({
        label: "⚙️ Settings - 🎨 Themes",
        backgroundColor: "#222222",
        showCloseButton: true,
        items: new TouchBar({
            items: [
                new TouchBarButton({
                    label: "Light Orange",
                    backgroundColor: "#FAC6AB",
                    click: () => {
                        mainWindow.webContents
                            .executeJavaScript('localStorage.setItem("app_theme", "orange");', true)
                            .then(x => {})
                        mainWindow.reload();
                    }
                }),
                new TouchBarButton({
                  label: "Light Blue",
                  backgroundColor: "#B2DBF4",
                  click: () => {
                    mainWindow.webContents
                    .executeJavaScript('localStorage.setItem("app_theme", "blue");', true)
                    .then(x => {})
                    mainWindow.reload();
                  }
                }),
                new TouchBarButton({
                  label: "Light Purple",
                  backgroundColor: "#CDABFA",
                  click: () => {
                    mainWindow.webContents
                    .executeJavaScript('localStorage.setItem("app_theme", "purple");', true)
                    .then(x => {})
                    mainWindow.reload();
                  }
                }),
                new TouchBarButton({
                    label: "Light Pink",
                    backgroundColor: "#FAC0CB",
                    click: () => {
                        mainWindow.webContents
                            .executeJavaScript('localStorage.setItem("app_theme", "pink");', true)
                            .then(x => {})
                        mainWindow.reload();
                    }
                }),
                new TouchBarButton({
                    label: "Dark",
                    backgroundColor: "#333333",
                    click: () => {
                        mainWindow.webContents
                            .executeJavaScript('localStorage.setItem("app_theme", "dark");', true)
                            .then(x => {})
                        mainWindow.reload();
                    }
                }),
                new TouchBarButton({
                    label: "Dark Cyan",
                    backgroundColor: "#337071",
                    click: () => {
                        mainWindow.webContents
                            .executeJavaScript('localStorage.setItem("app_theme", "cyan");', true)
                            .then(x => {})
                        mainWindow.reload();
                    }
                })
            ]
        })
    });

    const template = [
        // { role: 'appMenu' }
        ...(isMac
          ? [{
              label: app.name,
              submenu: [
                { role: 'about' },
                { type: 'separator' },
                { role: 'services' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'hideOthers' },
                { role: 'unhide' },
                { type: 'separator' },
                { role: 'quit' }
              ]
            }]
          : []),
        // { role: 'fileMenu' }
        {
          label: 'File',
          submenu: [
            isMac ? { role: 'close' } : { role: 'quit' }
          ]
        },
        // { role: 'editMenu' }
        {
          label: 'Edit',
          submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            ...(isMac
              ? [
                  { role: 'pasteAndMatchStyle' },
                  { role: 'delete' },
                  { role: 'selectAll' },
                  { type: 'separator' },
                  {
                    label: 'Speech',
                    submenu: [
                      { role: 'startSpeaking' },
                      { role: 'stopSpeaking' }
                    ]
                  }
                ]
              : [
                  { role: 'delete' },
                  { type: 'separator' },
                  { role: 'selectAll' }
                ])
          ]
        },
        // { role: 'viewMenu' }
        {
          label: 'View',
          submenu: [
            { role: 'reload' },
            { role: 'forceReload' },
            { role: 'toggleDevTools' },
            { type: 'separator' },
            { role: 'resetZoom' },
            { role: 'zoomIn' },
            { role: 'zoomOut' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
          ]
        },
        // { role: 'windowMenu' }
        {
          label: 'Window',
          submenu: [
            { role: 'minimize' },
            { role: 'zoom' },
            ...(isMac
              ? [
                  { type: 'separator' },
                  { role: 'front' },
                  { type: 'separator' },
                  { role: 'window' }
                ]
              : [
                  { role: 'close' }
                ])
          ]
        },
        {
          label: 'Links',
          submenu: [
            { label: 'Weather', click: () => { mainWindow.loadURL(`file://${Path.join(__dirname, './build/index.html#')}`); } },
            ...(isMac ? [ { type: 'separator' } ] : []),
            { label: 'Settings', click: () => { mainWindow.loadURL(`file://${Path.join(__dirname, './build/index.html#/settings')}`); } },
          ]
        },
        {
          label: 'Themes',
          submenu: [
            { label: 'Light Orange', click: () => { mainWindow.webContents.executeJavaScript('localStorage.setItem("app_theme", "orange");', true).then(x => {});mainWindow.reload(); } },
            { label: 'Light Blue', click: () => { mainWindow.webContents.executeJavaScript('localStorage.setItem("app_theme", "blue");', true).then(x => {});mainWindow.reload(); } },
            { label: 'Light Purple', click: () => { mainWindow.webContents.executeJavaScript('localStorage.setItem("app_theme", "purple");', true).then(x => {});mainWindow.reload(); } },
            { label: 'Light Pink', click: () => { mainWindow.webContents.executeJavaScript('localStorage.setItem("app_theme", "pink");', true).then(x => {});mainWindow.reload(); } },
            ...(isMac ? [ { type: 'separator' } ] : []),
            { label: 'Dark', click: () => { mainWindow.webContents.executeJavaScript('localStorage.setItem("app_theme", "dark");', true).then(x => {});mainWindow.reload(); } },
            { label: 'Dark Cyan', click: () => { mainWindow.webContents.executeJavaScript('localStorage.setItem("app_theme", "cyan");', true).then(x => {});mainWindow.reload(); } },
          ]
        },
        {
          role: 'help',
          submenu: [
            {
              label: 'App Documentation',
              click: async () => {
                const { shell } = require('electron');
                await shell.openExternal('https://github.com/useraccount111/weather-app/blob/master/README.md');
              }
            }
          ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
    
    const touchBar = new TouchBar({
        items: [
            MetOfficeLogo,
            WeatherLink,
            ThemeChoice
        ]
    });

    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            // devTools: false
        },
        width: 2000,
        height: 1000
    });
    // mainWindow.loadFile(`./build/index.html#/`);
    mainWindow.loadURL(`file://${Path.join(__dirname, './build/index.html#/')}`);
    mainWindow.setTouchBar(touchBar);
}

app.whenReady().then(() => {
    createNewWindow();
});

app.on('window-all-closed', () => {
    app.quit();
});
