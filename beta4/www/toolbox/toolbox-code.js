/**
 * @package: UnoBlockly
 * @file toolbox-code.js
 * @version 0.1 (28-06-2021)
 * @description Manage the toolbox functions
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict'

//----- Toolbox -----//
var ToolboxCode = {};

// Load configuration file
ToolboxCode.openConfigToolbox = function() {
	let modalbody = $("#modal-body-config");
	let loadIds = window.localStorage.toolboxids;
	if (!loadIds || loadIds === "") {
		if ($('#defaultCategories').length) {
			loadIds = $('#defaultCategories').html();
		} else {
			loadIds = '';
		}
	}

	modalbody.empty();
	$("#toolbox").children("category").each(function() {
		let i = 0;
		let line = "";
		let n = loadIds.search($(this).attr("id"));
		if (n >= 0) {
			line = '<input type="checkbox" checked="checked" name="checkbox_' + i + '" id="checkbox_' +$(this).attr("id") + '"/> ' +Blockly.Msg[$(this).attr("id")] + '<br/>';
		} else {
			line = '<input type="checkbox" name="checkbox_' + i + '" id="checkbox_' + $(this).attr("id") + '"/> ' + Blockly.Msg[$(this).attr("id")] + '<br/>';
		}
		i++;
		modalbody.append(line);
     });
};

// Change toolbox
ToolboxCode.changeToolbox = function() {
	let toolboxIds = [];
	window.localStorage.lang = $('#languageMenu').val();
	$('#modal-body-config input:checkbox[id^=checkbox_]').each(function() {
        // Update toolbox items
		if (this.checked == true) {
			let xmlid = this.id;
			toolboxIds.push(xmlid.replace("checkbox_", ""))
		}
	});

    // Copy toolbox items to window.localStorage.toolboxids
	window.localStorage.toolboxids = toolboxIds;
	Blockly.getMainWorkspace().updateToolbox(ToolboxCode.buildToolbox());

	Blockly.mainWorkspace.render();
	$('#configModal').modal('hide');

	window.location.reload(); // Clear all (as 'F5'):
};

// Load default categories
ToolboxCode.buildToolbox = function() {
	let loadIds = window.localStorage.toolboxids;
	if (!loadIds || loadIds === "") {
		if ($('#defaultCategories').length) {
			loadIds = $('#defaultCategories').html();
		} else {
			loadIds = '';
		}
	}
	let xmlValue = '<xml id="toolbox">';	
	let xmlids = loadIds.split(",");
	for (let i = 0; i < xmlids.length; i++) {
		let categories = $('#'+xmlids[i]);
		categories.each(function () {
			xmlValue += $('#'+xmlids[i])[0].outerHTML; 
		});
	}

	xmlValue += '</xml>';
	// console.log(xmlValue);
	
	return xmlValue;
};

// Load/change toolbox definition
// Errore da Jquery 3.5.1 a 3.6.0: carica in modo errato!!!
ToolboxCode.loadToolboxDefinition = function(path, toolboxFile) {
	$.ajax({
		type: "GET",
		url: path + toolboxFile + ".xml",
		dataType: "xml",
		async : false
	}).done(function(data) {
		// Load the toolbox file, delete any comments and load a clean version in the string 'toolboxXml'
		let toolboxXml = '<xml id="toolbox" style="display: none">' + $(data).find('toolbox').html() + '</xml>';
		$("#toolbox").remove();
		$('body').append(toolboxXml);
		
        // Scan and load categories names
		let categories = $("xml").find("category"); // outerHTML bacato!!!
		categories.each(function() {
			if (!$(this).attr('id')) {
				$(this).attr('id', $(this).attr('name'));
				$(this).attr('name', Blockly.Msg[$(this).attr('name')]) // Localized name of all categories
			}
		})
		///console.log(toolboxXml);
		
	}).fail(function(data) {
		$("#toolbox").remove()
	})
};
