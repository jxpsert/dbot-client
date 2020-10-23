const { app, BrowserWindow } = require('electron'); // Load stuff in

function createWindow(){ // Startup function
    const win = new BrowserWindow({ // New window
        width: 1280,
        height: 720,
        backgroundColor: "#36393F", // Discord chat window background colour
        webPreferences: {
            nodeIntegration: true // Using node inside the html's JS scripts
        }
    });
    win.loadFile('./html/main.html'); // Load the page
    win.removeMenu(); // Removing the "File", "Edit" etc bar
    win.webContents.openDevTools();
}
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== "darwin") app.quit();
    process.exit();
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
});