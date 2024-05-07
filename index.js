const { app, BrowserWindow, TouchBar, nativeImage, Menu } = require("electron");
const { TouchBarButton, TouchBarPopover } = TouchBar
const Path = require("path");

const isMac = process.platform === 'darwin';

const createNewWindow = () => {
    const Main = new TouchBarButton({
        label: "⚒️ Main",
        backgroundColor: "#222222",
        click: () => {
            mainWindow.loadURL(`file://${Path.join(__dirname, './build/index.html#/')}`);
        }
    });
    const WeatherLink = new TouchBarButton({
        label: "🌤️ Weather",
        backgroundColor: "#85CE31",
        click: () => {
            mainWindow.loadURL(`file://${Path.join(__dirname, './build/index.html#/weathersettlement')}`);
        }
    });
    const MetOfficeLogo = new TouchBarButton({
        icon: nativeImage.createFromDataURL('about:blank').resize({ height: 30 }),
        iconPosition: 'left',
        label: "MetOffice",
        accessibilityLabel: '',
        backgroundColor: "#000",
        click: () => {}
    });

    const ThemeChoice = new TouchBarPopover({
        label: "🎨 Themes",
        backgroundColor: "#222222",
        showCloseButton: true,
        items: new TouchBar({
            items: [
                new TouchBarButton({
                    label: "Light Pink",
                    backgroundColor: "#FAC0CB",
                    click: () => {
                        mainWindow.webContents
                            .executeJavaScript('localStorage.setItem("zooink_theme", "pink");', true)
                            .then(x => {})
                        mainWindow.reload();
                    }
                }),
                new TouchBarButton({
                    label: "Light Blue",
                    backgroundColor: "#B2DBF4",
                    click: () => {
                        mainWindow.webContents
                            .executeJavaScript('localStorage.setItem("zooink_theme", "blue");', true)
                            .then(x => {})
                        mainWindow.reload();
                    }
                }),
                new TouchBarButton({
                    label: "Light Orange",
                    backgroundColor: "#FAC6AB",
                    click: () => {
                        mainWindow.webContents
                            .executeJavaScript('localStorage.setItem("zooink_theme", "orange");', true)
                            .then(x => {})
                        mainWindow.reload();
                    }
                }),
                new TouchBarButton({
                    label: "Light Purple",
                    backgroundColor: "#CDABFA",
                    click: () => {
                        mainWindow.webContents
                            .executeJavaScript('localStorage.setItem("zooink_theme", "purple");', true)
                            .then(x => {})
                        mainWindow.reload();
                    }
                }),
                new TouchBarButton({
                    label: "Dark",
                    backgroundColor: "#333333",
                    click: () => {
                        mainWindow.webContents
                            .executeJavaScript('localStorage.setItem("zooink_theme", "dark");', true)
                            .then(x => {})
                        mainWindow.reload();
                    }
                }),
                new TouchBarButton({
                    label: "Dark Cyan",
                    backgroundColor: "#337071",
                    click: () => {
                        mainWindow.webContents
                            .executeJavaScript('localStorage.setItem("zooink_theme", "cyan");', true)
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
            { label: 'Main', click: () => { mainWindow.loadURL(`file://${Path.join(__dirname, './build/index.html#/')}`); } },
            { label: 'Contact', click: () => { mainWindow.loadURL(`file://${Path.join(__dirname, './build/index.html#/contact')}`); } },
            { label: 'Weather', click: () => { mainWindow.loadURL(`file://${Path.join(__dirname, './build/index.html#/weathersettlement')}`); } },
            ...(isMac ? [ { type: 'separator' } ] : []),
            { label: 'Settings', click: () => { mainWindow.loadURL(`file://${Path.join(__dirname, './build/index.html#/settings')}`); } },
          ]
        },
        {
          label: 'Themes',
          submenu: [
            { label: 'Light Pink', click: () => { mainWindow.webContents.executeJavaScript('localStorage.setItem("zooink_theme", "pink");', true).then(x => {});mainWindow.reload(); } },
            { label: 'Light Blue', click: () => { mainWindow.webContents.executeJavaScript('localStorage.setItem("zooink_theme", "blue");', true).then(x => {});mainWindow.reload(); } },
            { label: 'Light Orange', click: () => { mainWindow.webContents.executeJavaScript('localStorage.setItem("zooink_theme", "orange");', true).then(x => {});mainWindow.reload(); } },
            { label: 'Light Purple', click: () => { mainWindow.webContents.executeJavaScript('localStorage.setItem("zooink_theme", "purple");', true).then(x => {});mainWindow.reload(); } },
            ...(isMac ? [ { type: 'separator' } ] : []),
            { label: 'Dark', click: () => { mainWindow.webContents.executeJavaScript('localStorage.setItem("zooink_theme", "dark");', true).then(x => {});mainWindow.reload(); } },
            { label: 'Dark Cyan', click: () => { mainWindow.webContents.executeJavaScript('localStorage.setItem("zooink_theme", "cyan");', true).then(x => {});mainWindow.reload(); } },
          ]
        },
        {
          role: 'help',
          submenu: [
            {
              label: 'App Documentation',
              click: async () => {
                const { shell } = require('electron');
                await shell.openExternal('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
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
            Main,
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
