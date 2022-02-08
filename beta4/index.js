/**
 * @package: UnoBlockly
 * @file index-code.js
 * @version 0.1 (25-01-2022)
 * @description Compilation for Arduino board only
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

const {
	ipcRenderer, shell, clipboard
} = require("electron");

const {
	exec
} = require('child_process');

// const APP_NAME = 'UnoBlockly'; // Important!!!

const sp = require('serialport');
const fs = require('fs');
const http = require('http');
const https = require('https');

const homedir = require('os').homedir(); // C:\Users\xxx

const sketchName = 'sketch';
const sketchFile = sketchName + '.ino';

// NB. The file must be contained in a folder with the same name (sketch)

// const sketchFolder    = 'C:/Users/(user_name)/AppData/Roaming/UnoBlockly/Cache/' + sketchName + '/'; 
// const sketchFolder = homedir.replace(/\\/g, '/') + '/AppData/Roaming/' + APP_NAME + '/Cache/' + sketchName + '/';
const sketchFolder = homedir.replace(/\\/g, '/') + '/AppData/Local/Temp/' + sketchName + '/';
const writePathname = sketchFolder + sketchFile;

// cmd = 'arduino-cli.exe upload --port ' + serialPort.value + ' --fqbn ' + upload_arg + ' sketch/sketch.ino'
// const compile_cmd = 'arduino-cli.exe compile --fqbn ' + upload_arg + ' ' + sketchFolder + sketchFile; 
// const upload_cmd  = 'arduino-cli.exe upload --port ' + serialPort.value + ' --fqbn ' + upload_arg + ' ' + sketchFolder + sketchFile;
const compile_cmd = 'arduino-cli.exe compile --fqbn '; // arduino-cli.exe compile --fqbn arduino:avr:uno sketch/sketch.ino
const upload_cmd = 'arduino-cli.exe upload --port ';

const full_path = location.pathname;
//console.log("full_path: ", full_path)
//let compiler_folder = './compilation/arduino/'; // cwd (default)
//let app_path;

let compiler_folder = null; // = './compilation/arduino/'; // cwd (default)
if (full_path) {
	let app_path;
	let pnt = full_path.indexOf('/www');
	if (pnt<0) pnt = full_path.indexOf('/resources');
	//console.log(pnt);
	if (pnt>4) {
		let start_pnt = (full_path.startsWith('/')) ? 1 : 0;
		app_path = full_path.substr(start_pnt, pnt);
		app_path = app_path.replace(/%20/g, " ");
		//console.log("app_path: ", app_path);
		compiler_folder = app_path + 'compilation/arduino/'; // cwd
	}
}

// console.log("compiler_folder: ", compiler_folder);

const quitDiv = '<button type="button" class="close" data-dismiss="modal" aria-label="Close">&#215;</button>'

const OK = '✅';

// Define global variables
let editorLen = 0;
let editorHash = 0;

/*
Defined in index-code.js:
  let blockLen = 0;
  let blockHash = 0;
*/
let lastSerialAttached = 0;

window.addEventListener('load', function load(event) {

	// Update checkBox
	let checkBox = document.getElementById('checkUpdate')
	checkBox.addEventListener('change', function(event) {
		if (window.localStorage.update) {
			if (event.target.checked) {
				window.localStorage.update = true;
			} else {
				window.localStorage.update = false;
			}
		}
	})

	if (window.localStorage.update === "true") {
		$('#checkUpdate').prop('checked', true);
	} else {
		$('#checkUpdate').prop('checked', false);
	}

	//----- Begin serialport -----//
	const serialPort = document.getElementById('serialport');
	const messageDiv = document.getElementById('messageDIV');
	
	// Update the available serial ports
	$('#serialport').mouseover(function () {

		// Reload the available serial ports
		sp.list().then(ports => {
			// Check the number of attached ports
			let serialAttached = getSerialAttached(ports);
			if (lastSerialAttached == serialAttached) {
				// console.log("They are equal!");
				return;
			}

			// Remove all elements except the header (serialPort.options[0])
			// while(menu_opt.length > 0) { menu_opt[0].remove(); }
			// while(serialPort.options.length > 0) { serialPort.options[0].remove(); }
			// while(menu_opt.length > 0) { serialPort.removeChild(menu_opt[0]); } // HTML DOM removeChild()
			for(let i=serialPort.options.length-1; i>0; i--) {
				// console.log(i);
				serialPort.options[i].remove();
			}

			// Add the header as the first element
			ports.forEach(function (port) {
				if (port.vendorId) {
					let opt = document.createElement('option')
					opt.text = port.path;
					opt.value = port.path;
					serialPort.appendChild(opt);
				}
			});

			// Update lastSerialAttached
			lastSerialAttached = serialPort.options.length - 1; // Remove header

			// Update localStorage
			if (serialPort.options.length > 1) {
				localStorage.setItem("com_id", serialPort.options[serialPort.selectedIndex].value);
			} else {
				localStorage.setItem("com_id", "com")
			}
			
		})

	})

	// Load the available serial ports
	sp.list().then(ports => {
		// Add the header as the first element
		let opt = document.createElement('option');
		opt.value = "com"; // Default for no element
		opt.text = Blockly.Msg.com1;
		serialPort.appendChild(opt);
		let portsFound = []; // Ports detected
		ports.forEach(function (port) {
			if (port.vendorId) {
				let opt = document.createElement('option')
				opt.value = port.path;
				opt.text = port.path;
				portsFound.push(port.path);
				//console.log("Port:", port.path)
				serialPort.appendChild(opt);
			}
		});

		if (portsFound.length<1) { // No ports detected
			localStorage.setItem("com_id", "com");
			return;
		}

		// Search the selected port on localStorage
		let comId = localStorage.getItem("com_id");
		serialPort.selectedIndex = 0; // Default header
		portsFound.forEach(function(item, index) {
			if (item == comId) {
				serialPort.selectedIndex = index + 1; // Skip the header
			}
		})

		if (serialPort.selectedIndex == 0) serialPort.selectedIndex = 1; // No ports detected

		// Update localStorage
		localStorage.setItem("com_id", serialPort.options[serialPort.selectedIndex].value);
	})

	//----- End serialport -----//

	//--- Button events ------//
	$('#btn_site').on('click', function(){
		shell.openExternal(INDEX_MSG.appSite);
	})

	$('#btn_copy').on('click', function () {
		clipboard.writeText($('#pre_previewArduino').text())
	})

	$('#btn_search').on('click', function () {
		editor.execCommand("replace");
	})

	$('#btn_term').on('click', function () {
		if (serialPort.value == "com") {
			$("#message").modal("show")
			messageDiv.style.color = '#ff0000'
			messageDiv.innerHTML = Blockly.Msg.com2 + quitDiv;
			return
		}

		ipcRenderer.send("term", "");
	})

	//--- #btn_verify: only compilation ---
	$('#btn_verify').on('click', function () {
		let data;
		if (code_editor) {
			data = editor.getValue();
		} else {
			data = $('#pre_previewArduino').text();
		}

		if (!data) {
			messageDiv.style.color = '#ff0000';
			messageDiv.innerHTML = Blockly.Msg.no_code + quitDiv;
			return;
		}

		// Check message
		messageDiv.style.color = '#000000';
		messageDiv.innerHTML = Blockly.Msg.check + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>';

		// Check if sketchFolder exists and write file sketch.ino
		writeSketch(data);

		// Compile file sketch.ino
		let index = $("#boards").val(); // int
		let boardType = IndexCode.getBoardName(index);
		let upload_arg = window.profile[boardType].upload_arg;
		// console.log("upload_arg: ", upload_arg);
		let cmd = compile_cmd + upload_arg + ' ' + sketchFolder + sketchFile;
		exec(cmd, {
			cwd: compiler_folder
		}, (error, stdout, stderr) => {
			if (error) {
				messageDiv.style.color = '#ff0000';
				messageDiv.innerHTML = error.toString() + quitDiv;
				return;
			} else {
				messageDiv.style.color = '#009000';
				messageDiv.innerHTML = Blockly.Msg.check + OK + quitDiv;
			}
		})

	})

	//--- #btn_upload: compilation and load ---
	$('#btn_upload').on('click', function () {
		let data;
		if (code_editor) {
			data = editor.getValue();
		} else {
			data = $('#pre_previewArduino').text();
		}

		if (!data) {
			messageDiv.style.color = '#ff0000';
			messageDiv.innerHTML = Blockly.Msg.no_code + quitDiv;
			return;
		}
		
		let com = serialPort.value
		if (com == "com") {
			messageDiv.style.color = '#ff0000';
			messageDiv.innerHTML = Blockly.Msg.com2 + quitDiv;
			return;
		}

		// Verify message
		messageDiv.style.color = '#000000'
		messageDiv.innerHTML = Blockly.Msg.check + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'

		// Check if sketchFolder exists and write file sketch.ino
		writeSketch(data);

		// Compile file sketch.ino
		let errorFlag = 0;
		let index = $("#boards").val(); // int
		let boardType = IndexCode.getBoardName(index);
		let upload_arg = window.profile[boardType].upload_arg;
		// console.log("upload_arg: ", upload_arg);
		let cmd = compile_cmd + upload_arg + ' ' + sketchFolder + sketchFile;
		exec(cmd, {
			cwd: compiler_folder
		}, (error, stdout, stderr) => {
			if (error) {
				messageDiv.style.color = '#ff0000'
				messageDiv.innerHTML = error.toString() + quitDiv
				errorFlag = 1; // error!
				return;
			} else {
				// Upload message
				messageDiv.style.color = '#A00000';
				messageDiv.innerHTML = Blockly.Msg.upload + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>';

				// Upload: arduino-cli.exe
				// console.log("serialPort.value: ", serialPort.value)
				cmd = upload_cmd + serialPort.value + ' --fqbn ' + upload_arg + ' ' + sketchFolder + sketchFile;
				exec(cmd, {
					cwd: compiler_folder
				}, function (err, stdout, stderr) {
					if (err) {
						messageDiv.style.color = '#ff0000'
						messageDiv.innerHTML = err.toString() + quitDiv
						return
					} else {
						messageDiv.style.color = '#009000';
						messageDiv.innerHTML = Blockly.Msg.upload + OK + quitDiv;
					}
				})

			}
		})
	})

	// Update download: get new version
	// pathname = homedir.replace(/\\/g, '/') + '/Download/' + LATEST_FILENAME;
	$('#btn_update_download').on('click', function () {
		let update_path = homedir + '\\Download\\' + LATEST_FILENAME;
		// console.log(update_path);
		ipcRenderer.send('update-download', update_path);
	})

	$('#btn_load').on('click', function () {
		ipcRenderer.send('load-bloc');
	})

	// #btn_saveino from 'preview'
	$('#btn_saveino').on('click', function () {
		ipcRenderer.send('save-ino');
	})

	$('#btn_saveXML').on('click', function () {
		if (code_editor) {
			ipcRenderer.send('save-ino');			
		} else {
			ipcRenderer.send('save-bloc')
		}
	})

	$('#btn_new').on('click', function () {
		if (!code_editor) { // Blockly mode
			if (IndexCode.checkToSave(INDEX_MSG['clearCode'])) { // Reset
				setTitle('');
				isSaved = !0;
				blockLen = 0;
				blockHash = 0;
				Blockly.mainWorkspace.clear();
	  			// Blockly.mainWorkspace.trashcan.emptyContents(); // ???
				Blockly.mainWorkspace.render();
				//window.location.reload(); // Clear all (F5):
			}

		} else { // 'code_editor' is true
			if (editor.getValue().length!=0) {
				if (window.confirm(INDEX_MSG['clearCode'])) { // Reset
					editor.setValue("");
					editorLen = 0;
					editorHash = 0;
				}
			}
		}
	})

	$('#btn_undo').on("click", function () {
		if (code_editor) {
			editor.undo();
		} else {
			Blockly.mainWorkspace.undo(0)			
		}
	})

	$('#btn_redo').on("click", function () {
		if (code_editor) {
			editor.redo();
		} else {
			Blockly.mainWorkspace.undo(1);
		}	
	})

	$('#btn_preview').on("click", function() {
		$("#toggle").toggle("slide")
	});

	$('#btn_code').on("click", function () {
		editor.setValue($('#pre_previewArduino').text(),1);

		setBlockCode(false); // Set code mode

		// Save editor len and hash
		let str = editor.getValue();
		editorHash = IndexCode.hashCode(str);
		editorLen = str.length;
	})

	$('#btn_block').on("click", function () {
		// Check for any changes
		let str = editor.getValue();
		let newHash = IndexCode.hashCode(str);
		let changed = (newHash!=editorHash) & (editorLen!=str.length);
		// if changed, ask for confirmation
		let confirm = (changed) ? window.confirm(INDEX_MSG['code2block']) : true;
		if (confirm) {
			setBlockCode(true); // Set block mode
		} else {
			return;
		}
	})

	$('#pre_previewArduino').on("click", function() {
		$("#toggle").toggle("slide");
	});

	// Change the configuration
	$('#btn_config').on("click", function () {
		ToolboxCode.openConfigToolbox();
	})

	$('#select_all').on("click", IndexCode.checkAll);

	// Confirm: change the configuration
	$('#btn_valid_config').on("click", function () {
		if (IndexCode.checkToSave(INDEX_MSG['change_config'])) {
			isSaved = !0;
			blockLen = 0;
			blockHash = 0;
			ToolboxCode.changeToolbox();
		} else {
			$('#configModal').modal('hide');
		}
	})

	//--- End window.addEventListener() ---//
})

//-------------------- ipcRender.on --------------------//
// Callback from main.js: ipcMain.on('load-bloc', (event) => { }
ipcRenderer.on('loaded-bloc', function (event, path) {
	if (path === null || path.length != 1) return;
	loadfile(path[0]);
})

// Callback from main.js: ipcMain.on('save-ino', (event) => { }
ipcRenderer.on('saved-ino', function (event, path) {
	//let code = $('#pre_previewArduino').text()
	let code = editor.getValue();
	if (path) {
		fs.writeFile(path, code, function (err) {
			if (err) {
				return console.log(err);
			} else {
				setTitle(path);
				// Save editor len and hash
				editorHash = IndexCode.hashCode(code);
				editorLen = code.length;
			}
		})
	} else {
		return;
	}
})

// Callback from main.js: ipcMain.on('save-bloc', (event) => { }
ipcRenderer.on('saved-bloc', function (event, path) {
	if (path === null) {
		return
	} else {
		let xmlcode = IndexCode.getXmlBlocks();
		fs.writeFile(path, xmlcode, function (err) {
			if (err) {
				return console.log(err);
			} else {
				setTitle(path);
				isSaved = !0;
				blockLen = xmlcode.length;
				blockHash = IndexCode.hashCode(xmlcode);
			}
		})
	}
})

/*
  Load associated file .ubk
  See on main.js: ipcMain.on('get-file-data', function(event) {
  https://discuss.atom.io/t/open-a-file-with-electron-app/41528/4
*/
var data = ipcRenderer.sendSync('get-file-data')
if (data ===  null) {
	fileToLoad = ""; // see 'globals.js'
} else {
	fileToLoad = data;
}

// Ask for confirmation to close
// Callback from main.js: ipcMain.on("close-ok")
ipcRenderer.on('close-req', function (event, data) {
	let count = Blockly.mainWorkspace.getAllBlocks().length;
	if (!count) ipcRenderer.send('close-ok');
	// Check if saved
	let str = IndexCode.getXmlBlocks();
	let isSaved = ((blockHash === IndexCode.hashCode(str)) && (blockLen == str.length));
	if (isSaved) ipcRenderer.send('close-ok');
	// Show confirm message
	if (window.confirm(INDEX_MSG['closing_notice'])) {
		ipcRenderer.send('close-ok');
	} else {
		return;
	}
})

// Load file (type: .ubk, .bloc, .xml, .ino)
function loadfile(pathname) {
	if (pathname === null || pathname.length<4) return;
		setTitle(pathname);
		let isIno = pathname.endsWith(".ino");
		fs.readFile(pathname, 'utf8', function (err, data) {
			if (err) return console.log(err);
			Blockly.mainWorkspace.clear();
			if (!isIno) {
				let xml = Blockly.Xml.textToDom(data); // Only .bloc (no .ino)
				Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace);
				Blockly.mainWorkspace.render();

				// Set hash of getXmlBlocks(xml)
				let str = IndexCode.getXmlBlocks();
				blockHash = IndexCode.hashCode(str);
				blockLen = str.length;
				setBlockCode(true); // Set block mode
			} else {
				editor.setValue(data, 1) // Load data
				setBlockCode(false); // Set code mode
			}
		});
}

// Callback from main.js: ipcMain.on('updated-download', (event) => { }
ipcRenderer.on('updated-download', function (event, path) {
	// console.log(LATEST_FILE_URL, LATEST_FILENAME);
	if (path) {
		download_from_url(LATEST_FILE_URL, path, 2000); // TIMEOUT = 2000;
	} else {
		return;
	}
})

// https://stackoverflow.com/questions/11944932/how-to-download-a-file-with-node-js-without-using-third-party-libraries
function download_from_url(url, dest, timeout) {
	const uri = new URL(url);
	const pkg = url.toLowerCase().startsWith('https:') ? https : http;
	if (!dest) dest = basename(uri.pathname);

	return new Promise((resolve, reject) => {
		const request = pkg.get(uri.href).on('response', (res) => {
			if (res.statusCode === 200) {
				// https://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options
				const file = fs.createWriteStream(dest);
				res
					.on('end', () => {
						file.end();
						resolve();
					})
					.on('error', (err) => {
						file.destroy();
						fs.unlink(dest, () => reject(err));
					}).pipe(file)

			} else if (res.statusCode === 302 || res.statusCode === 301) {
				// Recursively follow redirects, only a 200 will resolve
				download_from_url(res.headers.location, dest, TIMEOUT).then(() => resolve())

			} else {
				reject(new Error('Download request failed, response status: ${res.statusCode} ${res.statusMessage}'));
			}
		})

		// https://nodejs.org/api/http.html#http_request_settimeout_timeout_callback
		request.setTimeout(timeout, function () {
			request.destroy();
			reject(new Error('Request timeout after ${timeout / 1000.0}s'));
		});
	});
}

// Drag&drop files
document.addEventListener('drop', (event) => {
	event.preventDefault();
	event.stopPropagation();

	for (const f of event.dataTransfer.files) {
		loadfile(f.path);
	}
});

document.addEventListener('dragover', (e) => {
	e.preventDefault();
	e.stopPropagation();
});

/*
document.addEventListener('dragenter', (event) => {
	console.log('File is in the Drop Space');
});

document.addEventListener('dragleave', (event) => {
	console.log('File has left the Drop Space');
});
*/

//--- Compile ---//
// Check if sketchFolder exists and write file sketch.ino
function writeSketch(data) {
	// Check if sketchFolder exists
	if (!fs.existsSync(sketchFolder)) {
		fs.mkdirSync(sketchFolder, {
			recursive: true
		});
	}

	// Write file sketch.ino
	fs.writeFile(writePathname, data, function (err) {
		if (err) return console.log(err);
	})
}

function getSerialAttached(ports) {
	let n = 0;
	ports.forEach(function (port) {
		if (port.vendorId) ++n;
	})
	return n;
}

// Set title
function setTitle(pathname) {
	fileToLoad = pathname
	document.title = APP_NAME + ' ' + APP_VERSION + ' ​​\u205f ​​\u205f ​​\u205f ​​\u205f' + pathname;
}

// Set Block/Code mode
function setBlockCode(isBlock) {
	$('#btn_new').show();
	if(isBlock) {
		// Set block workspace
		$('a[href="#content_blocks"]').tab('show');
		$('#btn_config').show();
		$('#btn_code').show();
		$('#btn_block').hide();
		$('#btn_search').hide();
		$('#btn_preview').show();
		code_editor = false;
	} else {
		// Set code editor
		$('a[href="#content_code"]').tab('show');
		$('#btn_config').hide();
		$('#btn_code').hide();
		$('#btn_block').show();
		$('#btn_search').show();
		$('#btn_preview').hide();
		code_editor = true;
	}
}
