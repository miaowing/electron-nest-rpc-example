import { bootstrap } from "./app";
import { app } from 'electron';
import { MainWindow } from "./windows/MainWindow";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let nestContext;

const createNestApp = async () => {
    nestContext = await bootstrap();
};

app.commandLine.appendSwitch('--autoplay-policy', 'no-user-gesture-required');

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
    await MainWindow.create();

    await createNestApp();
});

// Quit when all windows are closed.
app.on('window-all-closed', async () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        await nestContext.close();
        app.quit();
    }
});

let quiting = false;

app.on('before-quit', async (e) => {
    if (!quiting) {
        await nestContext.close();
        app.quit();
        e.preventDefault();
    }
});

app.on('activate', async () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (!MainWindow.isInitialized()) {
        await MainWindow.create();
    } else {
        MainWindow.getInstance().once('ready-to-show', () => {
            MainWindow.getInstance().show()
        })
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
