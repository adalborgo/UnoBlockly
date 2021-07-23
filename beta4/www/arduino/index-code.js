/**
 * @package: UnoBlockly
 * @file index-code.js
 * @version 0.1 (20-07-2021)
 * @description Main index.html functions
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

/*
  Get localStorage keys:
  for (let [key, value] of Object.entries(localStorage)) console.log(`${key}: ${value}`);
  for (let a in localStorage) console.log(a, ' = ', localStorage[a]);
*/
'use strict';

// Define global variables
let blockLen = 0;
let blockHash = 0;

// Override Blockly.confirm() with custom implementation
const { ipcRenderer } = require("electron");
const fs = require('fs');

const toolbox_filename = "toolbox";
const toolbox_path = "./toolbox/";

Blockly.prompt = function (message, defaultValue, callback) {
	callback(ipcRenderer.sendSync("varPrompt", message));
};

//----- IndexCode -----//
var IndexCode = {};

IndexCode.selectedToolbox = toolbox_filename;
IndexCode.selectedCard = "uno"; // Init if window.localStorage.card is undefined
IndexCode.workspace = null;

IndexCode.init = function() {
	//for (let [key, value] of Object.entries(localStorage)) console.log(`${key}: ${value}`);
	///// for (let a in localStorage) console.log(a, ' = ', localStorage[a]);
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
				startScale: 0.9,
				maxScale: 3,
				minScale: 0.3,
				scaleSpeed: 1.2,
				pinch: true
			}
		}
	);

	IndexCode.bindFunctions();

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
	// #Serialport contiene la scelta del menu su index.html, anche Usb port selection
	$("#serialport").blur();
	let com = $("#serialport").val();
	if (com.toUpperCase().indexOf("COM") == 0) {
		window.localStorage.setItem("com_id", com);
	}
	
	// for (let [key, value] of Object.entries(localStorage)) console.log(`${key}: ${value}`);
};

IndexCode.renderArduinoCodePreview = function() {
	$('#pre_previewArduino').text(Blockly.Arduino.workspaceToCode(IndexCode.workspace));
	$('#pre_previewArduino').html(prettyPrintOne($('#pre_previewArduino').html(), 'cpp'));
};

IndexCode.getStringParamFromUrl = function(name, defaultValue) {
  let val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

IndexCode.addReplaceParamToUrl = function(url, param, value) {
	let rex = new RegExp("([?&])" + param + "=.*?(&|$)", "i");
	let separator = url.indexOf('?') !== -1 ? "&" : "?";
	if (url.match(rex)) {
		return url.replace(rex, '$1' + param + "=" + value + '$2');
	} else {
		return url + separator + param + "=" + value;
	}
};

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
		window.localStorage.setItem("update", "true"); // Set update = true
		$('#checkUpdate').prop('checked', true);
	}

	// Load Boards/Devices for <select> in index.html
	const boards = document.getElementById('boards');
	let label = Blockly.Msg.optgroup; //'Schede Arduino'
	let optgroup = $('<optgroup label="' + label + '" />');
	optgroup.appendTo(boards);

	// Add all options
	let items = Blockly.Msg.option_texts.length;
	for (let i=0; i<items; i++) {
		let opt = document.createElement('option')
		opt.text = Blockly.Msg.option_texts[i];
		opt.value = i;
		// console.log("index:", i, opt.text);
		boards.appendChild(opt);
	}

	// Default: IndexCode.selectedCard = "uno";
	let card = window.localStorage.getItem("card");
	if (!card) {
		card = IndexCode.selectedCard;
		window.localStorage.setItem("card", card); // IndexCode.selectedCard);
	}
	// console.log("card: ", card);
	boards.selectedIndex = card;

	// Load toolbox definitions
	$("#toolboxes").val(IndexCode.selectedToolbox);
	ToolboxCode.loadToolboxDefinition(toolbox_path, IndexCode.selectedToolbox);
};

IndexCode.change_card = function() {
	$("#boards").blur(); // Remove focus from the text input
	let cardVal = $("#boards").val();
	let selectedCard = IndexCode.getboardType(cardVal)
	//console.log("selectedCard:", selectedCard)
	window.localStorage.setItem("card", selectedCard);
};

IndexCode.search = function() {
	editor.execCommand("find")
};

IndexCode.bindFunctions = function() {
	$('.modal-child').on('show.bs.modal', function () {
		let modalParent = $(this).attr('data-modal-parent');
		$(modalParent).css('opacity', 0)
	});

	$('.modal-child').on('hidden.bs.modal', function () {
		let modalParent = $(this).attr('data-modal-parent');
		$(modalParent).css('opacity', 1)
	});
	
	$('#boards').on("focus", function() {
		IndexCode.selectedCard = $(this).val();
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
// return BOARDS[indexBoard]
IndexCode.getboardType = function(indexBoard) {
	const BOARDS = ["uno", "nano", "nano_old", "uno", "nano_old"];
	//console.log("indexBoard:", indexBoard, (indexBoard>=0 && indexBoard<BOARDS.length) ? BOARDS[indexBoard] : "uno")
	return (indexBoard>=0 && indexBoard<BOARDS.length) ? BOARDS[indexBoard] : "uno";
}

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
