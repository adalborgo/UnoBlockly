/**
 * @package: UnoBlockly
 * @file index-code.js
 * @version 0.1 (09-03-2022)
 * @description Main index.html functions
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

/*
  Get localStorage keys:
  for (let [key, value] of Object.entries(localStorage)) console.log(`${key}: ${value}`);
  for (let a in localStorage) console.log(a, ' = ', localStorage[a]);
*/
'use strict';

// Override Blockly.confirm() with custom implementation
const { ipcRenderer } = require("electron");
const fs = require('fs');

const toolbox_filename = "toolbox";
const toolbox_path = "./toolbox/";
const ZOOM_START = 0.8;

// Board types
// see: Blockly.Msg.option_texts
const BOARD_TYPES = ["uno", "nano", "nano_old", "uno", "nano_old", "bt"];

// Items of window.localStorage
const STORAGE_LANG = "lang";
const STORAGE_COM = "com_id";
const STORAGE_UPDATE = "update";
const STORAGE_SELECTED_DEVICE = "deviceIndex";

// Global variables
let blockLen = 0;
let blockHash = 0;

var deviceIndex = 0; // Default 'uno'

Blockly.prompt = function (message, defaultValue, callback) {
	callback(ipcRenderer.sendSync("varPrompt", message));
};

//----- IndexCode -----//
var IndexCode = {};

IndexCode.selectedToolbox = toolbox_filename;
IndexCode.workspace = null;

IndexCode.init = function() {
	// for (let [key, value] of Object.entries(localStorage)) console.log(`${key}: ${value}`);
	////for (let a in localStorage) console.log(a, ' = ', localStorage[a]);
	IndexCode.loadConfig();

	/*
      toolbox: toolboxCategories,
      theme: Blockly.Themes.Halloween,
	*/
	// https://developers.google.com/blockly/guides/configure/web/configuration_struct
	IndexCode.workspace = Blockly.inject(
		'content_blocks',
		{
			grid:{
				spacing: 20,
				length: 1,
				colour: '#777',
				snap:true
			},
			trashcan: true,
			theme:'custom',
			sounds:true, media:'media/',
			toolbox: ToolboxCode.buildToolbox(),
			renderer:'geras', // renderer: geras' (the default), 'thrasos', and 'zelos' 
			zoom:{ // https://developers.google.com/blockly/guides/configure/web/zoom
				controls:true,
				wheel:true,
				startScale: ZOOM_START,
				maxScale: 3,
				minScale: 0.3,
				scaleSpeed: 1.2,
				pinch: true
			}
		}
	);

	IndexCode.bindFunctions(); // ???

	Blockly.mainWorkspace.render();

	IndexCode.workspace.addChangeListener(IndexCode.renderArduinoCodePreview);

	IndexCode.registerButton(); // Add variables buttons

	// window.addEventListener('unload', IndexCode.backupBlocks, false);

	// Upload associated file at startup
	if(fileToLoad.length > 4) {
		setMsg(fileToLoad);
		fs.readFile(fileToLoad, 'utf8', function (err, data) {
			if (err) return console.log(err);
			//Blockly.mainWorkspace.clear();
			let xml = Blockly.Xml.textToDom(data);
			Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace);
			Blockly.mainWorkspace.render();
			// Set block workspace
			$('a[href="#content_blocks"]').tab('show');
			$('#btn_config').show();
			$('#btn_code').show();
			$('#btn_block').hide();
			$('#btn_search').hide();
			$('#btn_preview').show();
			$('#btn_new').show();
			code_editor = false;
		});
	}
};

IndexCode.save_com = function() {
	// #Serialport contains the menu choice on index.html, also the USB port selection
	$("#serialport").blur();
	let com = $("#serialport").val();
	if (com.toUpperCase().indexOf("COM") == 0) {
		window.localStorage.setItem(STORAGE_COM, com);
	}
};

IndexCode.renderArduinoCodePreview = function() {
	$('#pre_previewArduino').text(Blockly.Arduino.workspaceToCode(IndexCode.workspace));
	$('#pre_previewArduino').html(prettyPrintOne($('#pre_previewArduino').html(), 'cpp'));
};

// Not used???
/*IndexCode.getStringParamFromUrl = function(name, defaultValue) {
  let val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};*/

// Not used???
/*IndexCode.addReplaceParamToUrl = function(url, param, value) {
	let rex = new RegExp("([?&])" + param + "=.*?(&|$)", "i");
	let separator = url.indexOf('?') !== -1 ? "&" : "?";
	if (url.match(rex)) {
		return url.replace(rex, '$1' + param + "=" + value + '$2');
	} else {
		return url + separator + param + "=" + value;
	}
};*/

IndexCode.loadConfig = function() {
	// Set block workspace
	$('a[href="#content_blocks"]').tab('show');
	$('#btn_code').show();
	$('#btn_block').hide();
	$('#btn_search').hide();
	$('#btn_config').show();
	$('#btn_preview').show();
	$('#btn_new').show();

	if (!window.localStorage.update) {
		window.localStorage.setItem(STORAGE_UPDATE, "true"); // Set update = true
		$('#checkUpdate').prop('checked', true);
	}

	// Get deviceIndex
	if (window.localStorage.deviceIndex) {
		deviceIndex = window.localStorage.getItem(STORAGE_SELECTED_DEVICE);
	}

	// Load Boards/Devices for <select> in index.html
	const boards = document.getElementById('boards');
	let label = Blockly.Msg.optgroup; //'Arduino boards header'
	let optgroup = $('<optgroup label="' + label + '" />');
	optgroup.appendTo(boards);

	// Add all options
	let items = Blockly.Msg.option_texts.length;

	// https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement/Option
	// https://select2.org/programmatic-control/add-select-clear-items
	let options = Blockly.Msg.option_texts;
	options.forEach(function(element, key) {
		if (element == options[deviceIndex]) boards[key] = new Option(element, boards.options.length, false, true);
    	else boards[key] = new Option(element, key);
	});

	// Load toolbox definitions
	$("#toolboxes").val(IndexCode.selectedToolbox);
	ToolboxCode.loadToolboxDefinition(toolbox_path, IndexCode.selectedToolbox);
};

// <select id="boards" class="board-select" onchange="IndexCode.change_board();"></select>
IndexCode.change_board = function() {
	$("#boards").blur(); // Remove focus from the text input
	deviceIndex = $("#boards").val(); // int
	window.localStorage.setItem(STORAGE_SELECTED_DEVICE, deviceIndex); // Selected index
};

IndexCode.search = function() {
	editor.execCommand("find");
};

IndexCode.bindFunctions = function() {
	$('.modal-child').on('show.bs.modal', function () {
		let modalParent = $(this).attr('data-modal-parent');
		$(modalParent).css('opacity', 0);
	});

	$('.modal-child').on('hidden.bs.modal', function () {
		let modalParent = $(this).attr('data-modal-parent');
		$(modalParent).css('opacity', 1);
	});
};

IndexCode.checkAll = function() {
    if(this.checked) {
        $('#modal-body-config input:checkbox[id^=checkbox_]').each(function() { this.checked = true; });
    } else {
    	$('#modal-body-config input:checkbox[id^=checkbox_]').each(function() { this.checked = false; });
    }
};

IndexCode.checkToSave = function(message) {
	let count = Blockly.mainWorkspace.getAllBlocks().length;
	if (count==0) {
		return true;
	} else {
		// Check if saved
		let str = IndexCode.getXmlBlocks();
		let isSaved = ((blockHash === IndexCode.hashCode(str)) && (blockLen == str.length));
		// Show confirm message
		let setClear = (!isSaved && count>2) ? window.confirm(message) : true;
		return setClear;
	}
};

// Get xml code of all blocks
IndexCode.getXmlBlocks = function() {
	let xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
	let toolbox = localStorage.getItem("toolbox")
	if (toolbox) {
		let newel = document.createElement("toolbox")
		newel.appendChild(document.createTextNode(toolbox))
		xml.insertBefore(newel, xml.childNodes[0])
	} else {
		toolbox = $("#toolboxes").val()
	}

	let toolboxids = localStorage.getItem("toolboxids")
	if (!toolboxids || toolboxids === "") {
		if ($('#defaultCategories').length) {
			toolboxids = $('#defaultCategories').html()
		}
	}

	return Blockly.Xml.domToPrettyText(xml);
}


// Convert indexBoard to board name
// @see: 'Index-code.loadConfig' and 'Blockly.Msg.option_texts'
// return BOARD_TYPES[indexBoard]
IndexCode.getBoardName = function(index) {
	//console.log("index:", index, (index>=0 && index<BOARD_TYPES.length) ? BOARD_TYPES[index] : "uno")
	return (index>=0 && index<BOARD_TYPES.length) ? BOARD_TYPES[index] : "uno";
}

// Convert index to board name
// @see: 'Index-code.loadConfig' and 'Blockly.Msg.option_texts'
IndexCode.getDeviceName = function(index) {
	let len = Blockly.Msg.option_texts.length;
	return (index>=0 && index<len) ? Blockly.Msg.option_texts[index] : "uno";
}
//---------------------------------//

// hash of a string
IndexCode.hashCode = function(str) {
	let h, i;
	for (h = 0, i = 0; i < str.length; h &= h) h = 31 * h + str.charCodeAt(i++);
  	return h;
}

// Initialize typed_variable 
IndexCode.registerButton = function () {
	// Functions defined in "variables.js"
	// workspace.registerButtonCallback(yourCallbackKey, yourFunction)
	IndexCode.workspace.registerButtonCallback('createVarBtnInt', createVarBtnIntCallBack);
	IndexCode.workspace.registerButtonCallback('createVarBtnLong', createVarBtnLongCallBack);
    IndexCode.workspace.registerButtonCallback('createVarBtnFloat', createVarBtnFloatCallBack);
    IndexCode.workspace.registerButtonCallback('createVarBtnBoolean', createVarBtnBooleanCallBack);
	IndexCode.workspace.registerButtonCallback('createVarBtnString', createVarBtnStringCallBack);
	IndexCode.workspace.registerButtonCallback('createVarBtnChar', createVarBtnCharCallBack);
	IndexCode.workspace.registerButtonCallback('createBtnDefine', createBtnDefineCallBack);
    
	/*
	  Add blocks in toolbox. See:
	  	<category name="CAT_VAR_DEFINE" categorystyle="variable_category" custom="VARIABLE_TYPED_DEFINE"></category>
        <category name="CAT_VAR_NUM" categorystyle="variable_category" custom="VARIABLE_TYPED_NUM"></category>
        <category name="CAT_VAR_TEXT" categorystyle="variable_category" custom="VARIABLE_TYPED_TEXT"></category>
        <category name="CAT_VAR_BOOLEAN" categorystyle="variable_category" custom="VARIABLE_TYPED_BOOLEAN"></category>
	*/
	IndexCode.workspace.registerToolboxCategoryCallback('VARIABLE_TYPED_DEFINE', defineCallBack);
	IndexCode.workspace.registerToolboxCategoryCallback('VARIABLE_TYPED_NUM', numVariablesCallBack);
    IndexCode.workspace.registerToolboxCategoryCallback('VARIABLE_TYPED_TEXT', textVariablesCallBack);
    IndexCode.workspace.registerToolboxCategoryCallback('VARIABLE_TYPED_BOOLEAN', booleanVariablesCallBack);
}
