const { app, BrowserWindow } = require("electron");
//create with electron
let win;
const createWindow = () => {
        win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.loadFile("./assets/html/index.html");
};

module.exports = {
    createWindow,
};