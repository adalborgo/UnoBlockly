/**
 * @package: UnoBlockly
 * @file loops.js
 * @version 0.1 (09-04-2022)
 * @description Blockly.Arduino.loops
	Override: controls_for
	The loop variables are local, NOT global
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

Blockly.Arduino.loops = {};

// Not used!
Blockly.Arduino.controls_repeat_ext = function (a) {
	var b = a.getField("TIMES") ? String(Number(a.getFieldValue("TIMES"))) : Blockly.Arduino.valueToCode(a, "TIMES", Blockly.Arduino.ORDER_ASSIGNMENT) || "0",
		c = Blockly.Arduino.statementToCode(a, "DO");
	c = Blockly.Arduino.addLoopTrap(c, a);
	a = "";
	var d = Blockly.Arduino.nameDB_.getDistinctName("i", Blockly.VARIABLE_CATEGORY_NAME),
		e = b;
	b.match(/^\w+$/) || Blockly.isNumber(b) || (e = Blockly.Arduino.nameDB_.getDistinctName("repeat_end", Blockly.VARIABLE_CATEGORY_NAME),
		a += "int " + e + " = " + b + ";\n");
	return a + ("for (int " + d + " = 0; " + d + " < " + e + "; " + d + "++) {\n" + c + "}\n")
};

Blockly.Arduino.controls_repeat = Blockly.Arduino.controls_repeat_ext;

Blockly.Arduino.controls_whileUntil = function (a) {
	var b = "UNTIL" == a.getFieldValue("MODE"),
		c = Blockly.Arduino.valueToCode(a, "BOOL", b ? Blockly.Arduino.ORDER_LOGICAL_NOT : Blockly.Arduino.ORDER_NONE) || "false",
		d = Blockly.Arduino.statementToCode(a, "DO");
	d = Blockly.Arduino.addLoopTrap(d, a);
	b && (c = "!" + c);
	return "while (" + c + ") {\n" + d + "}\n"
};

// Override 'blocks_compressed.js'
Blockly.Blocks['controls_for'] = {
  init: function() {
	this.setStyle("loop_blocks");
    this.appendDummyInput()
		.appendField(Blockly.Msg.CONTROLS_FOR)
		.appendField(new Blockly.FieldTextInput('cnt'), "VAR");
		
	this.appendValueInput("FROM")
		.appendField(Blockly.Msg.CONTROLS_FOR_FROM)
		.setCheck("Number");
		
	this.appendValueInput("TO")
		.appendField(Blockly.Msg.CONTROLS_FOR_TO)
		.setCheck("Number");

    this.appendDummyInput()
	    .appendField(Blockly.Msg.CONTROLS_FOR_BY)
        .appendField(new Blockly.FieldNumber(1), "BY");

	this.appendStatementInput("DO");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.CONTROLS_FOR_TOOLTIP);
	this.setHelpUrl("");
  }
};

Blockly.Arduino['controls_for'] = function (block) {
	
    // For loop
	let variable0 = block.getFieldValue('VAR');
    let argument0 = Blockly.Arduino.valueToCode(block, 'FROM', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    let argument1 = Blockly.Arduino.valueToCode(block, 'TO', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    let inc_dec = block.getFieldValue('BY');
	
	let branch = Blockly.Arduino.statementToCode(block, "DO");
	if (Blockly.Arduino.INFINITE_LOOP_TRAP) branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;

	let incVar = parseInt(inc_dec);
	let inc_decSign = (inc_dec>=0) ?  '+' : '-';
	let versus = (inc_dec>=0) ? '<=': '>=';
	let inc_decType = (Math.abs(inc_dec)==1) ? (inc_decSign + inc_decSign) : (inc_decSign + '=' + Math.abs(inc_dec));
	let code = 'for (int ' + variable0 + ' = ' + argument0 + '; ' +  variable0 + versus + argument1 + '; ' + variable0 + inc_decType + ') {\n' + branch + '}\n';
	return code;
};

// Not used!
Blockly.Arduino.controls_forEach = function (a) {
	var b = Blockly.Arduino.nameDB_.getName(a.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME),
		c = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_ASSIGNMENT) || "[]",
		d = Blockly.Arduino.statementToCode(a, "DO");
	d = Blockly.Arduino.addLoopTrap(d, a);
	a = "";
	var e = c;
	c.match(/^\w+$/) || (e = Blockly.Arduino.nameDB_.getDistinctName(b + "_list", Blockly.VARIABLE_CATEGORY_NAME), a += "var " + e + " = " + c + ";\n");
	c = Blockly.Arduino.nameDB_.getDistinctName(b +
		"_index", Blockly.VARIABLE_CATEGORY_NAME);
	d = Blockly.Arduino.INDENT + b + " = " + e + "[" + c + "];\n" + d;
	return a + ("for (var " + c + " in " + e + ") {\n" + d + "}\n")
};

// controls_flow_statements: break/continue
Blockly.Arduino.controls_flow_statements = function (a) {
	var b = "";
	Blockly.Arduino.STATEMENT_PREFIX && (b += Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_PREFIX, a));
	Blockly.Arduino.STATEMENT_SUFFIX && (b += Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_SUFFIX, a));
	if (Blockly.Arduino.STATEMENT_PREFIX) {
		var c = Blockly.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN.getSurroundLoop(a);
		c && !c.suppressPrefixSuffix && (b += Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_PREFIX,
			c))
	}
	switch (a.getFieldValue("FLOW")) {
		case "BREAK":
			return b + "break;\n";
		case "CONTINUE":
			return b + "continue;\n"
	}
	throw Error("Unknown flow statement.");
};

Blockly.Blocks["ArduinoLoop"]={
	init:function(){
        this.setStyle("loop_blocks");
        this.setHelpUrl(Blockly.Msg.HELPURL);
		this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinoLoop);
		this.appendStatementInput("LOOP");
		this.setInputsInline(false);
		this.setTooltip(Blockly.Msg.ArduinoLoop_tooltip);
		this.setHelpUrl("");
		this.contextMenu = false;
	}
};

Blockly.Arduino["ArduinoLoop"]=function(block) {
	var branch = Blockly.Arduino.statementToCode(block, "LOOP");
	if (Blockly.Arduino.INFINITE_LOOP_TRAP) branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
	Blockly.Arduino.loops_["ArduinoLoop"] = Blockly.Arduino.statementToCode(block, "LOOP"); // loop_key
	return ""
};

// loop var
Blockly.Blocks['loop_var'] = {
	init: function () {
		this.setStyle("loop_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldTextInput("cnt"), "VAR");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Arduino['loop_var'] = function (block) {
	var varname = block.getFieldValue('VAR');
	return [varname, Blockly.Arduino.ORDER_ATOMIC];
};
