/**
 * @package: UnoBlockly
 * @file main.js
 * @version 0.1 (10-08-2021)
 * @description Electron main file
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

// electron,
const {
	BrowserWindow,
	app,
	screen,
	ipcMain,
	globalShortcut,
	dialog
} = require('electron')

const path = require('path')

let mainWindow = null;
let termWindow = null;

let promptWindow = null;
let promptOptions = null;
let promptAnswer = null;

// www/index.html
function createWindow(width, height) {
	mainWindow = new BrowserWindow({
		frame: true,
		resizable: true,
		movable: true,
		width, height,
		//width: 1240, height: 700,
		//backgroundColor: '#312450',
        webPreferences: {
            nodeIntegration: true,
			contextIsolation: false,
			worldSafeExecuteJavaScript: false,
            enableRemoteModule: true
        },
		icon: 'www/media/icon.png',
		show: false
	});

	mainWindow.loadURL(path.join(__dirname, '../../www/index.html'));
	mainWindow.setMenu(null);
	
	mainWindow.once('ready-to-show', () => {
		mainWindow.show()
	})

	mainWindow.on('closed', () => {
		mainWindow = null
	});

	// Prompt to save/quit before closing window
	// https://stackoverflow.com/questions/39574636/prompt-to-save-quit-before-closing-window
	// https://www.electronjs.org/docs/api/browser-window
	// dialog.showMessageBox([browserWindow, ]options[, callback])
	mainWindow.on('close', function(e) {
		e.preventDefault();
		e.sender.send('close-req', '');
	});
}

// www/term.html
function createTerm(width, height) {
	termWindow = new BrowserWindow({
		resizable: false,
		movable: true,
		frame: true,
		modal: true,
		width, height,
        webPreferences: {
            nodeIntegration: true,
			contextIsolation: false,
			worldSafeExecuteJavaScript: false,
            enableRemoteModule: true
        },
		'parent': mainWindow
	});
	
	termWindow.loadURL(path.join(__dirname, "../../www/term.html"));
	termWindow.setMenu(null);
	termWindow.on('closed', () => {
		termWindow = null 
	});
}

// www/promptModal
function promptModal(options, callback) {
	promptOptions = options
	promptWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
			contextIsolation: false,
			worldSafeExecuteJavaScript: false,
            enableRemoteModule: true
        },
		width:360, height: 110, 
		'parent': mainWindow,
		resizable: false,
		movable: true,
		frame: false,
		modal: true}
	)
	promptWindow.loadURL(path.join(__dirname, "../../www/promptModal.html"))
	promptWindow.on('closed', () => {
		promptWindow = null 
		callback(promptAnswer)
	})
}

function refresh(mainWindow = BrowserWindow.getFocusedWindow()) {
	if (mainWindow) {
		if (process.argv.length >= 2) process.argv[1] = "";
		mainWindow.webContents.reloadIgnoringCache();
	}
}

// DevTools
function openDevTools(BlocklyWindow = BrowserWindow.getFocusedWindow()) {
    if (BlocklyWindow) {
        BlocklyWindow.webContents.toggleDevTools();
    }
};

//--- Prevent multiple instance ---/
// https://stackoverflow.com/questions/35916158/how-to-prevent-multiple-instances-in-electron
if (app.requestSingleInstanceLock()) {
	let myWindow = null;
	app.on('second-instance', (event, commandLine, workingDirectory) => {
		if (myWindow) {
			if (myWindow.isMinimized()) myWindow.restore();
			myWindow.focus();
		}
	})

	// Create myWindow, load the rest of the app, etc...
	app.on('ready', () => {
	// app.whenReady().then(() => {
		app.allowRendererProcessReuse = false;
		let dimensions = screen.getPrimaryDisplay().workAreaSize;
		createWindow(dimensions.width, dimensions.height);
		globalShortcut.register('F8', openDevTools);
		globalShortcut.register('F5', refresh);
	});
} else {
	app.quit();
}

//--- app.on ---//
app.on('activate', () => {
	if (mainWindow === null) createWindow()
})

app.on('window-all-closed', () => {
	globalShortcut.unregisterAll()
	if (process.platform !== 'darwin') app.quit()
})

//--- ipcMain.on ---//
// https://www.electronjs.org/docs/api/app
ipcMain.on("close-ok", (event, data) => {
	app.exit(0);
})

ipcMain.on("term", () => {
	let dimensions = screen.getPrimaryDisplay().size;
	let width = 0.60*dimensions.width;
	let height = 0.70*dimensions.height;
	createTerm(width, height);
})

// Input variables
ipcMain.on("varPrompt", (event, arg) => {
	promptModal(
		{"label": arg, "value": "", "ok": "OK"}, 
	    function(data) {
	       event.returnValue = data
        }
	)       
})

ipcMain.on("openDialog", (event, data) => {
    event.returnValue = JSON.stringify(promptOptions, null, '')
})

ipcMain.on("closeDialog", (event, data) => {
	promptAnswer = data
})

ipcMain.on('load-bloc', (event) => {
	let filename = dialog.showOpenDialogSync(mainWindow,{
		title: 'Load format .ubk',
		defaultPath: 'Uno_block',
		filters: [{ name: 'UnoBlockly', extensions: ['ubk', 'ino', 'xml', 'bloc'] }]
	})

	if (filename) event.sender.send('loaded-bloc', filename);
	else event.sender.send('loaded-bloc', "");
})

// Update download
// https://www.brainbell.com/javascript/show-save-dialog.html
ipcMain.on('update-download', (event, pathname) => {
	filename = dialog.showSaveDialogSync(mainWindow, {
		// title: 'New version',
		defaultPath: pathname,
		filters: [{ extensions: ['*'] }]
	})

	if (filename) event.sender.send('updated-download', filename);
	else event.sender.send('updated-download', "");
})

ipcMain.on('save-ino', (event) => {
	let filename = dialog.showSaveDialogSync(mainWindow,{
		title: 'Save format .ino',
		defaultPath: 'Uno_Arduino',
		filters: [{ name: 'Arduino', extensions: ['ino'] }]
	})

	if (filename) event.sender.send('saved-ino', filename);
	else event.sender.send('saved-ino', "");
})

ipcMain.on('save-bloc', (event) => {
	let filename = dialog.showSaveDialogSync(mainWindow,{
		title: 'Save format .ubk',
		defaultPath: 'Uno_block',
		filters: [{ name: 'UnoBlockly', extensions: ['ubk'] }]
	})

	if (filename) event.sender.send('saved-bloc', filename);
	else event.sender.send('saved-bloc', "");
})

ipcMain.on('save-csv', (event) => {
	let filename = dialog.showSaveDialogSync(mainWindow,{
		title: 'Save format .csv',
		defaultPath: 'Uno_csv',
		filters: [{ name: 'data', extensions: ['csv'] }]
	})
	
	if (filename) event.sender.send('saved-csv', filename);
	else event.sender.send('saved-csv', "");
})

// Load associated file: send filename to the render process
ipcMain.on('get-file-data', function(event) {
  let filename = null
  if (process.argv.length >= 2) filename = process.argv[1];
  event.returnValue = filename
})

//--- module.exports --//
module.exports.openDevTools = openDevTools;
module.exports.refresh = refresh;
