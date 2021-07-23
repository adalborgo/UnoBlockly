/**
 * @package: UnoBlockly
 * @file extra.js
 * @version 0.1 (16-07-2021)
 * @description Extra functions of Blockly.Blocks & Blockly.Arduino
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

// ArduinobasePins
Blockly.Blocks["ArduinobaseDPins"]={
	init:function(){
		this.setStyle("arduino_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.digitalPins), "PIN");
		this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.ArduinobaseDPins_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["ArduinobaseDPins"]=function(block){
    let code=block.getFieldValue('PIN');
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// ArduinobasePins
Blockly.Blocks["ArduinobaseAPins"]={
	init:function(){
		this.setStyle("arduino_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.analogPins), "PIN");
		this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.ArduinobaseAPins_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["ArduinobaseAPins"]=function(block){
    // let pin = block.getFieldValue('PIN');
    let code=block.getFieldValue('PIN');
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// ArduinoSetupLoop
Blockly.Blocks["ArduinoSetupLoop"] = {
	init: function () {
		this.setStyle("arduino_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinoSetup);
		this.appendStatementInput("DO");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinoLoop);
		this.appendStatementInput("LOOP");
		this.setInputsInline(false);
		this.setTooltip(Blockly.Msg.ArduinoSetupLoop_tooltip);
		this.setHelpUrl("");
		this.contextMenu = false;
	}
};

Blockly.Arduino["ArduinoSetupLoop"] = function (block) {
	let setup = Blockly.Arduino.statementToCode(block, "DO");
	if (Blockly.Arduino.INFINITE_LOOP_TRAP) setup = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + setup;
	Blockly.Arduino.setups_["ArduinoSetup"] = setup;
	
	let loop = Blockly.Arduino.statementToCode(block, "LOOP");
	if (Blockly.Arduino.INFINITE_LOOP_TRAP) loop = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + loop;
	Blockly.Arduino.loops_["ArduinoLoop"]=loop;	
	return '';
};

// ArduinoCode
Blockly.Blocks["ArduinoCode"] = {
	init: function () {
		this.setStyle("arduino_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldTextInput("code"), "TEXT");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.code_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["ArduinoCode"] = function (block) {
	return block.getFieldValue("TEXT") + "\n";
};

// ArduinoCodeData
Blockly.Blocks['ArduinoCodeData'] = {
	init: function () {
		this.setStyle("arduino_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldTextInput("data"), "TEXT");
		this.setOutput(true);
		this.setTooltip(Blockly.Msg.code_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['ArduinoCodeData'] = function (block) {
	return [block.getFieldValue("TEXT"), Blockly.Arduino.ORDER_ATOMIC];
};

// ArduinoInclude
Blockly.Blocks['ArduinoInclude'] = {
	init: function () {
		this.setStyle("arduino_blocks");
		this.appendDummyInput()
			.appendField("#include")
			.appendField(new Blockly.FieldTextInput(""), "TEXT");
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Arduino['ArduinoInclude'] = function (block) {
	let data = block.getFieldValue("TEXT");
	Blockly.Arduino.includes_['include_' + data]='#include ' + data;
	return '';
};

Blockly.Blocks['Remark'] = {
	init: function () {
		this.setColour(60);
		this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinoRemark)
			.appendField(new Blockly.FieldMultilineInput(''), "TEXT")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.ArduinoRemark_tooltip);
		this.setHelpUrl();
	}
};

Blockly.Arduino['Remark'] = function(block) {
	let text = block.getFieldValue("TEXT");
	let code;
	let sar = text.match(/[^\r\n]+/g); // text.split(/\r?\n/);
	let multiline = (sar) ? sar.length>1 : false;
	if (multiline) {
		code = '/*\n';
		for (let i = 0; i<sar.length; i++) {
			let s = sar[i].trim();
			if (s.length) code += '  ' + s + '\n';
		}
		code +=  '\n*/';
	} else {
		code = '// ' + text;
	}

	return code + '\n';
};

Blockly.Blocks['Remark_header'] = {
	init: function () {
		this.setColour(60);
		this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinoRemarkHeader)
			.appendField(new Blockly.FieldMultilineInput(''), "TEXT");
		this.setTooltip(Blockly.Msg.ArduinoRemarkHeader_tooltip);
		this.setHelpUrl();
	}
};

Blockly.Arduino['Remark_header'] = function(block) {
	let text = block.getFieldValue("TEXT");
	let code;
	let sar = text.match(/[^\r\n]+/g); // text.split(/\r?\n/);
	let multiline = (sar) ? sar.length>1 : false;
	if (multiline) {
		code = '/*\n';
		for (let i = 0; i<sar.length; i++) {
			let s = sar[i].trim();
			if (s.length) code += '  ' + s + '\n';
		}
		code +=  '\n*/';
	} else {
		code = '// ' + text;
	}

	Blockly.Arduino.includes_['include_remark_header']=code;
	return '';
};

// Convert from number to string (Inserted in the 'text' category)
Blockly.Blocks['text_from_number'] = {
	init: function () {
		this.setStyle("text_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.TEXT_FROM_NUMBER);
		this.appendValueInput("DATA")
			.setCheck("Number")
		this.setInputsInline(true);
		this.setOutput(true);
		this.setTooltip(Blockly.Msg.TEXT_FROM_NUMBER_TOOLTIP);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["text_from_number"] = function (block) {
	let x = Blockly.Arduino.valueToCode(this, "DATA", Blockly.Arduino.ORDER_NONE);
	return ['String(' + x + ').c_str()', Blockly.Arduino.ORDER_ATOMIC];
};
