/**
 * @package: UnoBlockly
 * @file variables.js
 * @version 0.1 (08-07-2021)
 * @description Blockly.Arduino.variables
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 * @see
 	https://developers.google.com/blockly/reference/js/Blockly.FieldVariable
	Blockly.FieldVariable = function (varName, validator, variableTypes, defaultType, config)

	https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/variable#creation
	Blockly.Blocks['example_variable_typed'] = {
		init: function() {
   		this.appendDummyInput()
   			.appendField('variable:')
	      	.appendField(new Blockly.FieldVariable('X', null, ['Number', 'String'], 'Number'), 'FIELDNAME');
		}
	};

	https://developers.google.com/blockly/guides/create-custom-blocks/variables
	https://developers.google.com/blockly/guides/create-custom-blocks/variables#javascript_1
	https://developers.google.com/blockly/guides/create-custom-blocks/generating-code
	https://blockly-demo.appspot.com/static/tests/playground.html?toolbox=categories-typed-variables
	https://developers.google.com/blockly/guides/create-custom-blocks/variables#typed_variable_blocks
	https://github.com/google/blockly/issues/1921
	https://neil.fraser.name/blockly/custom-blocks/defining-blocks

	appendField FieldVariable
	var variable = new Blockly.FieldVariable('item');
	input.appendField(variable, 'VAR');
	Another field element is a variable selection menu.
	The FieldVariable object is created with the default variable name to use (in this case 'item').
	If this name is omitted, the variable will be a new unique variable (e.g. 'i', 'j', 'k'...).
 */

'use strict';

Blockly.Arduino.variables = {};

const INT = "int", LONG = "long", FLOAT = "float";
const BOOLEAN = "bool";
const STRING = "String", CHAR = "char";

/**
  @see header.js: excludes '$define' from the variable declaration
  // definitions space (exclude $define)
  for (var name in Blockly.Arduino.definitions_) {
	let def_name = Blockly.Arduino.definitions_[name];
	definitions.push(stripDefine(def_name));
  }
*/
const DEFINE = "$define";

//--- Type: #define ---//
Blockly.Blocks["set_define"] = {
	init: function () {
		this.setStyle('variable_blocks');
		this.appendValueInput("VALUE")
			.appendField(Blockly.Msg.VAR_CREATE_DEFINE)
			.appendField(new Blockly.FieldVariable("", null, [DEFINE], DEFINE), "SET_DEFINE")
			.appendField(Blockly.Msg.EQUAL);
		this.setTooltip(Blockly.Msg.VAR_CREATE_DEFINE_TOOLTIP);
		this.setHelpUrl("");
	}
};

// set_define
Blockly.Arduino["set_define"] = function (block) {
	let argument0 = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
	let varName = Blockly.Arduino.nameDB_.getName(block.getFieldValue('SET_DEFINE'), Blockly.Variables.NAME_TYPE);
	//Blockly.Arduino.includes_['set_define_' + varName] = '#define ' + varName + ' ' + argument0 + '\n';
	Blockly.Arduino.definitions_['set_define_' + varName] = '#define ' + varName + ' ' + argument0 + '\n';
	return '';
};

// get_define
Blockly.Blocks['get_define'] = {
	init: function () {
		this.setStyle('variable_blocks');
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable("", null, [DEFINE], DEFINE), "GET_DEFINE");
		this.setOutput(true);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Arduino['get_define'] = function (block) {
	let code = Blockly.Arduino.nameDB_.getName(block.getFieldValue('GET_DEFINE'), Blockly.Variables.NAME_TYPE);
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//--- Type: int ---//
Blockly.Blocks['vars_set_int'] = {
	init: function () {
		this.setStyle('variable_blocks');
		this.appendValueInput("VALUE")
			.appendField(Blockly.Msg.VARIABLES_SET)
			.appendField(new Blockly.FieldVariable("", null, [INT], INT), "VAR_SET_INT")
			.setCheck('Number')
			.appendField(" " + Blockly.Msg.AT);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['vars_set_int'] = function (block) {
	let argument0 = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
	let varName = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR_SET_INT'), Blockly.Variables.NAME_TYPE);
	let code = varName + ' = ' + argument0 + ';\n';
	return code;
};

// vars_get_int
Blockly.Blocks['vars_get_int'] = {
	init: function () {
		this.setStyle('variable_blocks');
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable("", null, [INT], INT), "VAR_GET_INT");
		this.setOutput(true, 'Number');
		this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
	}
};

Blockly.Arduino['vars_get_int'] = function (block) {
	let code = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR_GET_INT'), Blockly.Variables.NAME_TYPE);
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//--- Type: long ---//
Blockly.Blocks['vars_set_long'] = {
	init: function () {
		this.setStyle('variable_blocks');
		this.appendValueInput("VALUE")
			.appendField(Blockly.Msg.VARIABLES_SET)
			.appendField(new Blockly.FieldVariable("", null, [LONG], LONG), "VAR_SET_LONG")
			.setCheck('Number')
			.appendField(" " + Blockly.Msg.AT);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['vars_set_long'] = function (block) {
	let argument0 = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
	let varName = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR_SET_LONG'), Blockly.Variables.NAME_TYPE);
	return varName + ' = ' + argument0 + ';\n';
};

// vars_get_long
Blockly.Blocks['vars_get_long'] = {
	init: function () {
		this.setStyle('variable_blocks');
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable("", null, [LONG], LONG), "VAR_GET_LONG");
		this.setOutput(true, 'Number');
		this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
	}
};

Blockly.Arduino['vars_get_long'] = function (block) {
	let code = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR_GET_LONG'), Blockly.Variables.NAME_TYPE);
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//--- Type: float---//
Blockly.Blocks['vars_set_float'] = {
	init: function () {
		this.setStyle('variable_blocks');
		this.appendValueInput("VALUE")
			.appendField(Blockly.Msg.VARIABLES_SET)
			.appendField(new Blockly.FieldVariable("", null, [FLOAT], FLOAT), "VAR_SET_FLOAT")
			.setCheck('Number')
			.appendField(" " + Blockly.Msg.AT);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP); 
		this.setHelpUrl("");
	}
};

Blockly.Arduino['vars_set_float'] = function (block) {
	let argument0 = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
	let varName = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR_SET_FLOAT'), Blockly.Variables.NAME_TYPE);
	return varName + ' = ' + argument0 + ';\n';
};

// vars_get_float
Blockly.Blocks['vars_get_float'] = {
	init: function () {
		this.setStyle('variable_blocks');
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable("", null, [FLOAT], FLOAT), "VAR_GET_FLOAT");
		this.setOutput(true, 'Number');
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Arduino['vars_get_float'] = function (block) {
	let code = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR_GET_FLOAT'), Blockly.Variables.NAME_TYPE);
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//-- Type: boolean --//
Blockly.Blocks['vars_set_boolean'] = {
	init: function () {
		this.setStyle('variable_blocks');
		this.appendValueInput("VALUE")
			.appendField(Blockly.Msg.VARIABLES_SET)
			.appendField(new Blockly.FieldVariable("", null, [BOOLEAN], BOOLEAN), "VAR_SET_BOOLEAN")
			.setCheck('Boolean')
			.appendField(" " + Blockly.Msg.AT);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['vars_set_boolean'] = function (block) {
	let argument0 = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT) || 'false';
	let varName = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR_SET_BOOLEAN'), Blockly.Variables.NAME_TYPE);
	return varName + ' = ' + argument0 + ';\n';
};

// vars_get_boolean
Blockly.Blocks['vars_get_boolean'] = {
	init: function () {
		this.setStyle('variable_blocks');
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable("", null, [BOOLEAN], BOOLEAN), "VAR_GET_BOOLEAN");
		this.setOutput(true, 'Boolean');
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Arduino['vars_get_boolean'] = function (block) {
	let code = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR_GET_BOOLEAN'), Blockly.Variables.NAME_TYPE);
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//---  Type: String ---//
Blockly.Blocks['vars_set_string'] = {
	init: function () {
		this.setStyle('variable_blocks');
		this.appendValueInput("VALUE")
			.appendField(Blockly.Msg.VARIABLES_SET)
			.appendField(new Blockly.FieldVariable("", null, [STRING], STRING), "VAR_SET_STRING")
			.setCheck('String')
			.appendField(" " + Blockly.Msg.AT);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['vars_set_string'] = function (block) {
	let argument0 = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT) || '\"\"';
	let varName = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR_SET_STRING'), Blockly.Variables.NAME_TYPE);
	return varName + ' = ' + argument0 + ';\n';
};

// vars_get_string
Blockly.Blocks['vars_get_string'] = {
	init: function () {
		this.setStyle('variable_blocks');
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable("", null, [STRING], STRING), "VAR_GET_STRING");
		this.setOutput(true, 'String');
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Arduino['vars_get_string'] = function (block) {
	let code = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR_GET_STRING'), Blockly.Variables.NAME_TYPE);
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//---  Type: char ---//
Blockly.Blocks['vars_set_char'] = {
	init: function () {
		this.setStyle('variable_blocks');
		this.appendValueInput("VALUE")
			.appendField(Blockly.Msg.VARIABLES_SET)
			.appendField(new Blockly.FieldVariable("", null, [CHAR], CHAR), "VAR_SET_CHAR")
			.setCheck('String')
			.appendField(" " + Blockly.Msg.AT);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['vars_set_char'] = function (block) {
	let argument0 = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT) || '\"\"';
	let varName = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR_SET_CHAR'), Blockly.Variables.NAME_TYPE);
	return varName + ' = ' + argument0 + ';\n';
};

// vars_get_char
Blockly.Blocks['vars_get_char'] = {
	init: function () {
		this.setStyle('variable_blocks');
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable("", null, [CHAR], CHAR), "VAR_GET_CHAR");
		this.setOutput(true, 'String');
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Arduino['vars_get_char'] = function (block) {
	let code = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR_GET_CHAR'), Blockly.Variables.NAME_TYPE);
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//============== Numeric vars (int, long, float) ==============//
const GAP = 8;
let numVariablesCallBack = function (currWorkspace) {
	let xmlList = [];

	//--- var int ---//
	let createintBtnXml = Blockly.Xml.textToDom(
		'<xml>' +
			'<button text="' + Blockly.Msg.VAR_CREATE_INT + '" callbackKey="createVarBtnInt">' + '</button>' +
		'</xml>').firstChild;
	xmlList.push(createintBtnXml);

	let allIntVars = currWorkspace.getVariablesOfType(INT);
	if (allIntVars.length > 0) {
		allIntVars.sort(Blockly.VariableModel.compareByType);

        if (Blockly.Blocks['vars_set_int']) {
			for (let i = 0, variable; variable = allIntVars[i]; i++) {
				let blockText =
					'<xml>' +
					'<block type="vars_set_int" gap="' + GAP + '">' +
					'<field name="VAR_SET_INT" variabletype=\"' + INT + '\">' +
						variable.name +
					'</field>' +
					'</block>' +
					'</xml>';
				xmlList.push(Blockly.Xml.textToDom(blockText).firstChild);
			}
		}

		if (Blockly.Blocks['vars_get_int']) {
			for (let i = 0, variable; variable = allIntVars[i]; i++) {
				let blockText =
					'<xml>' +
					'<block type="vars_get_int" gap="' + GAP + '">' +
					'<field name="VAR_GET_INT" variabletype=\"' + INT + '\">' +
                        variable.name +
                     '</field>' +
					'</block>' +
					'</xml>';
				xmlList.push(Blockly.Xml.textToDom(blockText).firstChild);
			}
		}
	}

	//--- var long ---//
	let createlongBtnXml = Blockly.Xml.textToDom(
		'<xml>' +
			'<button text="' + Blockly.Msg.VAR_CREATE_LONG + '" callbackKey="createVarBtnLong">' + '</button>' +
		'</xml>').firstChild;
	xmlList.push(createlongBtnXml);

	let allLongVars = currWorkspace.getVariablesOfType(LONG);
	if (allLongVars.length > 0) {
        allLongVars.sort(Blockly.VariableModel.compareByType);

		if (Blockly.Blocks['vars_set_long']) {
			for (let i = 0, variable; variable = allLongVars[i]; i++) {
				let blockText =
					'<xml>' +
					'<block type="vars_set_long" gap="' + GAP + '">' +
					'<field name="VAR_SET_LONG" variabletype=\"' + LONG + '\">' +
						variable.name +
					'</field>' +
					'</block>' +
					'</xml>';
				xmlList.push(Blockly.Xml.textToDom(blockText).firstChild);
			}
		}

		if (Blockly.Blocks['vars_get_long']) {
			for (let i = 0, variable; variable = allLongVars[i]; i++) {
				let blockText =
					'<xml>' +
					'<block type="vars_get_long" gap="' + GAP + '">' +
					'<field name="VAR_GET_LONG" variabletype=\"' + LONG + '\">' +
						variable.name +
					'</field>' +
					'</block>' +
					'</xml>';
				xmlList.push(Blockly.Xml.textToDom(blockText).firstChild);
			}
		}
	}

	//--- var float ---//
	let createfloatBtnXml = Blockly.Xml.textToDom(
		'<xml>' +
			'<button text="' + Blockly.Msg.VAR_CREATE_FLOAT + '" callbackKey="createVarBtnFloat">' + '</button>' +
		'</xml>').firstChild;
	xmlList.push(createfloatBtnXml);

	let allFloatVars = currWorkspace.getVariablesOfType(FLOAT);
	if (allFloatVars.length > 0) {
		allFloatVars.sort(Blockly.VariableModel.compareByType);

		if (Blockly.Blocks['vars_set_float']) {
			for (let i = 0, variable; variable = allFloatVars[i]; i++) {
				let blockText =
					'<xml>' +
					'<block type="vars_set_float" gap="' + GAP + '">' +
					'<field name="VAR_SET_FLOAT" variabletype=\"' + FLOAT + '\">' +
						variable.name +
					'</field>' +
					'</block>' +
					'</xml>';
				xmlList.push(Blockly.Xml.textToDom(blockText).firstChild);
			}
		}

		if (Blockly.Blocks['vars_get_float']) {
			for (let i = 0, variable; variable = allFloatVars[i]; i++) {
				let blockText =
					'<xml>' +
					'<block type="vars_get_float" gap="' + GAP + '">' +
					'<field name="VAR_GET_FLOAT" variabletype=\"' + FLOAT + '\">' +
						variable.name +
					'</field>' +
					'</block>' +
					'</xml>';
				xmlList.push(Blockly.Xml.textToDom(blockText).firstChild);
			}
		}
	}

	// End: numVariablesCallBack
	return xmlList;
};

//============== Boolean vars (bool) ==============//
let booleanVariablesCallBack = function (currWorkspace) {
	let xmlList = [];

	//--- var boolean ---//
	let createboolBtnXml = Blockly.Xml.textToDom(
		'<xml>' +
			'<button text="' + Blockly.Msg.VAR_CREATE_BOOLEAN + '" callbackKey="createVarBtnBoolean">' + '</button>' +
		'</xml>').firstChild;
	xmlList.push(createboolBtnXml);

	let allBoolVars = currWorkspace.getVariablesOfType(BOOLEAN);
	if (allBoolVars.length > 0) {
		allBoolVars.sort(Blockly.VariableModel.compareByType);

		if (Blockly.Blocks['vars_set_boolean']) {
			for (let i = 0, variable; variable = allBoolVars[i]; i++) {
				let blockText =
					'<xml>' +
					'<block type="vars_set_boolean" gap="' + GAP + '">' +
					'<field name="VAR_SET_BOOLEAN" variabletype=\"' + BOOLEAN + '\">' +
						variable.name +
					'</field>' +
					'</block>' +
					'</xml>';
				xmlList.push(Blockly.Xml.textToDom(blockText).firstChild);
			}
		}

		if (Blockly.Blocks['vars_get_boolean']) {
			allBoolVars.sort(Blockly.VariableModel.compareByType);
			for (let i = 0, variable; variable = allBoolVars[i]; i++) {
				let blockText =
					'<xml>' +
					'<block type="vars_get_boolean" gap="' + GAP + '">' +
					'<field name="VAR_GET_BOOLEAN" variabletype=\"' + BOOLEAN + '\">' +
					    variable.name +
					'</field>' +
					'</block>' +
					'</xml>';
				xmlList.push(Blockly.Xml.textToDom(blockText).firstChild);
			}
		}
	}

	return xmlList;
};

//============== Text vars (String, char) ==============//
let textVariablesCallBack = function (currWorkspace) {
	let xmlList = [];
	
	//-- var String ---//
	let createStringBtnXml = Blockly.Xml.textToDom(
		'<xml>' +
			'<button text="' + Blockly.Msg.VAR_CREATE_STRING + '" callbackKey="createVarBtnString">' + '</button>' +
		'</xml>').firstChild;
	xmlList.push(createStringBtnXml);

	let allStringVars = currWorkspace.getVariablesOfType(STRING);
	if (allStringVars.length > 0) {
        allStringVars.sort(Blockly.VariableModel.compareByType);

		if (Blockly.Blocks['vars_set_string']) {
			for (let i = 0, variable; variable = allStringVars[i]; i++) {
				let blockText =
					'<xml>' +
					'<block type="vars_set_string" gap="' + GAP + '">' +
					'<field name="VAR_SET_STRING" variabletype=\"' + STRING + '\">' +
                    	variable.name +
				 	'</field>' +
					'</block>' +
					'</xml>';
				xmlList.push(Blockly.Xml.textToDom(blockText).firstChild);
			}
		}

		if (Blockly.Blocks['vars_get_string']) {
			for (let i = 0, variable; variable = allStringVars[i]; i++) {
				let blockText =
					'<xml>' +
					'<block type="vars_get_string" gap="' + GAP + '">' +
					'<field name="VAR_GET_STRING" variabletype=\"' + STRING + '\">' +
					    variable.name +
					 '</field>' +
					'</block>' +
					'</xml>';
				xmlList.push(Blockly.Xml.textToDom(blockText).firstChild);
			}
		}
	}
	
	//--- var char ---//
	let createCharBtnXml = Blockly.Xml.textToDom(
		'<xml>' +
			'<button text="' + Blockly.Msg.VAR_CREATE_CHAR + '" callbackKey="createVarBtnChar">' + '</button>' +
		'</xml>').firstChild;
	xmlList.push(createCharBtnXml);

	let allCharVars = currWorkspace.getVariablesOfType(CHAR);
	if (allCharVars.length > 0) {
		allCharVars.sort(Blockly.VariableModel.compareByType);

		if (Blockly.Blocks['vars_set_char']) {
			for (let i = 0, variable; variable = allCharVars[i]; i++) {
            	let blockText =
					'<xml>' +
					'<block type="vars_set_char" gap="' + GAP + '">' +
					'<field name="VAR_SET_CHAR" variabletype=\"' + CHAR + '\">' +
                    	variable.name +
					'</field>' +
					'</block>' +
					'</xml>';
				xmlList.push(Blockly.Xml.textToDom(blockText).firstChild);
			}
		}

		if (Blockly.Blocks['vars_get_char']) {
			for (let i = 0, variable; variable = allCharVars[i]; i++) {
				let blockText =
					'<xml>' +
					'<block type="vars_get_char" gap="' + GAP + '">' +
					'<field name="VAR_GET_CHAR" variabletype=\"' + CHAR + '\">' +
					    variable.name +
					 '</field>' +
					'</block>' +
					'</xml>';
				xmlList.push(Blockly.Xml.textToDom(blockText).firstChild);
			}
		}
	}
	
	// End:  textVariablesCallBack 
	return xmlList;
};

//============== #define ==============//
let defineCallBack = function (currWorkspace) {
	let xmlList = [];

	//--- #define ---//
	let createDefineBtnXml = Blockly.Xml.textToDom(
		'<xml>' +
			'<button text="' + Blockly.Msg.VAR_CREATE_DEFINE + '" callbackKey="createBtnDefine">' + '</button>' +
		'</xml>').firstChild;
	xmlList.push(createDefineBtnXml);

	let allDefine = currWorkspace.getVariablesOfType(DEFINE);	
	if (allDefine.length > 0) {
		allDefine.sort(Blockly.VariableModel.compareByType);

		if (Blockly.Blocks['set_define']) {
			for (let i = 0, variable; variable = allDefine[i]; i++) {
				let blockText =
					'<xml>' +
					'<block type="set_define" gap="' + GAP + '">' +
					'<field name="SET_DEFINE" variabletype=\"' + DEFINE + '\">' +
                    	variable.name +
					'</field>' +
					'</block>' +
					'</xml>';
				xmlList.push(Blockly.Xml.textToDom(blockText).firstChild);
			}
		}

		if (Blockly.Blocks['get_define']) {
			for (let i = 0, variable; variable = allDefine[i]; i++) {
				let blockText =
					'<xml>' +
					'<block type="get_define" gap="' + GAP + '">' +
					'<field name="GET_DEFINE" variabletype=\"' + DEFINE + '\">' +
					    variable.name +
					 '</field>' +
					'</block>' +
					'</xml>';
				xmlList.push(Blockly.Xml.textToDom(blockText).firstChild);
			}
		}
	}
	return xmlList;
};

//============== Create buttons ==============//
var createVarBtnIntCallBack = function (button) {
	Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, INT);
};

var createVarBtnLongCallBack = function (button) {
	Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, LONG);
};

var createVarBtnFloatCallBack = function (button) {
	Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, FLOAT);
};

var createVarBtnBooleanCallBack = function (button) {
	Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, BOOLEAN);
};

var createVarBtnStringCallBack = function (button) {
	Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, STRING);
};

var createVarBtnCharCallBack = function (button) {
	Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, CHAR);
};

var createBtnDefineCallBack = function (button) {
	Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, DEFINE);
};
