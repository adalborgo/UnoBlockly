/**
 * @package: UnoBlockly
 * @file logic.js
 * @version 0.1 (16-03-2021)
 * @description Blockly.Arduino.logic (controls)
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

Blockly.Arduino.logic = {};

Blockly.Arduino.controls_if = function (a) {
	var b = 0,
		c = "";
	Blockly.Arduino.STATEMENT_PREFIX && (c += Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_PREFIX, a));
	do {
		var d = Blockly.Arduino.valueToCode(a, "IF" + b, Blockly.Arduino.ORDER_NONE) || "false";
		var e = Blockly.Arduino.statementToCode(a, "DO" + b);
		Blockly.Arduino.STATEMENT_SUFFIX && (e = Blockly.Arduino.prefixLines(Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_SUFFIX, a), Blockly.Arduino.INDENT) + e);
		c += (0 < b ? " else " : "") + "if (" +
			d + ") {\n" + e + "}";
		++b
	} while (a.getInput("IF" + b));
	if (a.getInput("ELSE") || Blockly.Arduino.STATEMENT_SUFFIX) e = Blockly.Arduino.statementToCode(a, "ELSE"), Blockly.Arduino.STATEMENT_SUFFIX && (e = Blockly.Arduino.prefixLines(Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_SUFFIX, a), Blockly.Arduino.INDENT) + e), c += " else {\n" + e + "}";
	return c + "\n"
};

Blockly.Arduino.controls_ifelse = Blockly.Arduino.controls_if;

Blockly.Arduino.logic_compare = function (a) {
	var b = {
			EQ: "==",
			NEQ: "!=",
			LT: "<",
			LTE: "<=",
			GT: ">",
			GTE: ">="
		}[a.getFieldValue("OP")],
		c = "==" == b || "!=" == b ? Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL,
		d = Blockly.Arduino.valueToCode(a, "A", c) || "0";
	a = Blockly.Arduino.valueToCode(a, "B", c) || "0";
	return [d + " " + b + " " + a, c]
};

Blockly.Arduino.logic_operation = function (a) {
	var b = "AND" == a.getFieldValue("OP") ? "&&" : "||",
		c = "&&" == b ? Blockly.Arduino.ORDER_LOGICAL_AND : Blockly.Arduino.ORDER_LOGICAL_OR,
		d = Blockly.Arduino.valueToCode(a, "A", c);
	a = Blockly.Arduino.valueToCode(a, "B", c);
	if (d || a) {
		var e = "&&" == b ? "true" : "false";
		d || (d = e);
		a || (a = e)
	} else a = d = "false";
	return [d + " " + b + " " + a, c]
};

Blockly.Arduino.logic_negate = function (a) {
	var b = Blockly.Arduino.ORDER_LOGICAL_NOT;
	return ["!" + (Blockly.Arduino.valueToCode(a, "BOOL", b) || "true"), b]
};

Blockly.Arduino.logic_boolean = function (a) {
	return ["TRUE" == a.getFieldValue("BOOL") ? "true" : "false", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.logic_null = function (a) {
	return ["null", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.logic_ternary = function (a) {
	var b = Blockly.Arduino.valueToCode(a, "IF", Blockly.Arduino.ORDER_CONDITIONAL) || "false",
		c = Blockly.Arduino.valueToCode(a, "THEN", Blockly.Arduino.ORDER_CONDITIONAL) || "null";
	a = Blockly.Arduino.valueToCode(a, "ELSE", Blockly.Arduino.ORDER_CONDITIONAL) || "null";
	return [b + " ? " + c + " : " + a, Blockly.Arduino.ORDER_CONDITIONAL]
};
