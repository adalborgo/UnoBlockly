/**
 * @package: UnoBlockly
 * @file term.js
 * @version 0.1 (13-07-2021)
 * @description Code of term.html
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 * @see https://serialport.io/docs/guide-usage
 *		https://serialport.io/docs/api-stream
 */

'use strict';

let { ipcRenderer } = require("electron");
let fs = require('fs');
let SerialPort = require("serialport");

let connected = false;
let bit_rate;
let port;
let comId;
let monitor;

window.addEventListener('load', function load(event) {
	
	// Init
	document.title = INDEX_MSG.btn_term; // term.html title

	monitor = document.getElementById('window_term');

	comId = localStorage.getItem("com_id");

	if(localStorage.getItem("bitrate")) {
		bit_rate = parseInt(localStorage.getItem("bitrate"));
		document.getElementById('speed').value = localStorage.getItem("bitrate");
	} else {
		localStorage.setItem("bitrate", 9600); // Default: 9600
	}

	// Send button text
	document.getElementById('btn_term_send').innerHTML=INDEX_MSG.btn_term_send_text;
	document.getElementById('btn_term_send').disabled = true;

    //----------- onclick -----------//

    // Button clear all
	document.getElementById('btn_term_clear').onclick = function(event) {
		document.getElementById('window_term').textContent = '';
		document.getElementById('schbox').value = '';
	}

   	// Button save -->
	document.getElementById('btn_term_save').onclick = function(event) {
		ipcRenderer.send('save-csv');
	}

    // Button send
	document.getElementById('btn_term_send').onclick = function(event) {
		let data = document.getElementById('schbox').value
		if (port.isOpen) {
			document.getElementById('window_term').innerHTML += data + "<br>";
			port.write(data);
			document.getElementById('schbox').value = '';
		}
	}
	
	// Pressed <enter>
	document.addEventListener("keyup", function(event) {
		if (event.key === 'Enter') document.getElementById("btn_term_send").click();
	})

	// Button Open/close connection
	document.getElementById('btn_term_open').onclick = function(event) {
		bit_rate = parseInt(localStorage.getItem("bitrate"));
		connect(connected); // Open port connection
	}
	
})

// Open/Close port connection
function connect(isConnected) {
	if (!isConnected) {
		document.getElementById('btn_term_open').innerHTML=INDEX_MSG.btn_term_close_text;
		document.getElementById('btn_term_send').disabled=false;
		port = new SerialPort(comId, {baudRate: bit_rate, autoOpen:false});
		port.open(function (err) {
			if(err) {
				monitor.innerHTML += err.message + '<br>';
				return;
			}
		});

		connected = true;
		port.on('data', function(data) {
			if (connected) {
				monitor.innerHTML += newline(data.toString());
				monitor.scrollTop = monitor.scrollHeight;
				monitor.animate({scrollTop: monitor.scrollHeight});
			}
		})

	} else {
		document.getElementById('btn_term_open').innerHTML=INDEX_MSG.btn_term_open_text;
		document.getElementById('btn_term_send').disabled=true;
		port.close(function (err) {
			if(err) {
				monitor.innerHTML += err.message + '<br>';
			} else {
				connected = false;
			}
		});
	}
}

// Remove linefeed
function newline(s) {
	let text = '';
	for (let i = 0; i<s.length; i++) {
		let c = s[i].charCodeAt(0);
		if (c==13) {
			text += '<br>'
		} else {
			if (c!=10) text += s[i];
		}
	}

	return text;
}

// --> is saved
ipcRenderer.on('saved-csv', function(event, path){
	let code = document.getElementById('window_term').innerHTML;
	code = code.split('<br>').join('\n');
	if (path === null) {
		return;
	} else {
		fs.writeFile(path, code, function(err) {
			if (err) return console.log(err);
		})
	}
})
