/**
 * @package: UnoBlockly
 * @file math.js
 * @version 0.1 (08-07-2021)
 * @description Blockly.Arduino.math
	added: math_inc, math_dec
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

Blockly.Arduino.math = {};

Blockly.Arduino.math_number = function (a) {
	a = Number(a.getFieldValue("NUM"));
	return [a, 0 <= a ? Blockly.Arduino.ORDER_ATOMIC : Blockly.Arduino.ORDER_UNARY_NEGATION]
};

Blockly.Arduino.math_arithmetic = function (a) {
	var b = {
			ADD: [" + ", Blockly.Arduino.ORDER_ADDITION],
			MINUS: [" - ", Blockly.Arduino.ORDER_SUBTRACTION],
			MULTIPLY: [" * ", Blockly.Arduino.ORDER_MULTIPLICATION],
			DIVIDE: [" / ", Blockly.Arduino.ORDER_DIVISION],
			POWER: [null, Blockly.Arduino.ORDER_NONE]
		}[a.getFieldValue("OP")],
		c = b[0];
	b = b[1];
	var d = Blockly.Arduino.valueToCode(a, "A", b) || "0";
	a = Blockly.Arduino.valueToCode(a, "B", b) || "0";
	return c ? [d + c + a, b] : ["pow(" + d + ", " + a + ")", Blockly.Arduino.ORDER_FUNCTION_CALL]
};

Blockly.Arduino.math_single = function (a) {
	var b = a.getFieldValue("OP");
	if ("NEG" == b) return a = Blockly.Arduino.valueToCode(a, "NUM", Blockly.Arduino.ORDER_UNARY_NEGATION) || "0", "-" == a[0] && (a = " " + a), ["-" + a, Blockly.Arduino.ORDER_UNARY_NEGATION];
	a = "SIN" == b || "COS" == b || "TAN" == b ? Blockly.Arduino.valueToCode(a, "NUM", Blockly.Arduino.ORDER_DIVISION) || "0" : Blockly.Arduino.valueToCode(a, "NUM", Blockly.Arduino.ORDER_NONE) || "0";
	switch (b) {
		case "ABS":
			var c = "abs(" + a + ")";
			break;
		case "ROOT":
			c = "sqrt(" +
				a + ")";
			break;
		case "LN":
			c = "log(" + a + ")";
			break;
		case "EXP":
			c = "exp(" + a + ")";
			break;
		case "POW10":
			c = "pow(10," + a + ")";
			break;
		case "ROUND":
			c = "round(" + a + ")";
			break;
		case "ROUNDUP":
			c = "ceil(" + a + ")";
			break;
		case "ROUNDDOWN":
			c = "floor(" + a + ")";
			break;
		case "SIN":
			c = "sin(" + a + " / 180 * PI)";
			break;
		case "COS":
			c = "cos(" + a + " / 180 * PI)";
			break;
		case "TAN":
			c = "tan(" + a + " / 180 * PI)"
	}
	if (c) return [c, Blockly.Arduino.ORDER_FUNCTION_CALL];
	switch (b) {
		case "LOG10":
			c = "log(" + a +
				") / log(10)";
			break;
		case "ASIN":
			c = "asin(" + a + ") / PI * 180";
			break;
		case "ACOS":
			c = "acos(" + a + ") / PI * 180";
			break;
		case "ATAN":
			c = "atan(" + a + ") / PI * 180";
			break;
		default:
			throw Error("Unknown math operator: " + b);
	}
	return [c, Blockly.Arduino.ORDER_DIVISION]
};

// Override 'blocks_compressed.js'
Blockly.Blocks.math_constant = {
	init: function () {
		var CONSTANTS = [
			["\u03c0", "PI"],
			["e", "E"],
			["\u03c6", "GOLDEN_RATIO"],
			["\u221A 2", "SQRT2"],
			["\u221A \u00BD", "SQRT1_2"],
			["\u221E", "INFINITY"]
		];
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(CONSTANTS), "CONSTANT");
		// this.setColour(Blockly.Blocks.math.HUE);
		this.setColour(Blockly.Msg.MATH_HUE);
		this.setOutput(true, "Number");
		this.setTooltip(Blockly.Msg.MATH_CONSTANT_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.HELPURL);
	}
};

Blockly.Arduino.math_constant = function (a) {
	return {
		PI: ["PI", Blockly.Arduino.ORDER_MEMBER],
		E: ["exp(1)", Blockly.Arduino.ORDER_MEMBER],
		GOLDEN_RATIO: ["(1 + sqrt(5)) / 2", Blockly.Arduino.ORDER_DIVISION],
		SQRT2: ["sqrt(2)", Blockly.Arduino.ORDER_MEMBER],
		SQRT1_2: ["sqrt(.5)", Blockly.Arduino.ORDER_MEMBER],
		INFINITY: ["INFINITY", Blockly.Arduino.ORDER_ATOMIC]
	}[a.getFieldValue("CONSTANT")]
};

Blockly.Arduino.math_number_property = function (a) {
	var b = Blockly.Arduino.valueToCode(a, "NUMBER_TO_CHECK", Blockly.Arduino.ORDER_MODULUS) || "0",
		c = a.getFieldValue("PROPERTY");
	if ("PRIME" == c) return [Blockly.Arduino.provideFunction_("mathIsPrime", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(n) {", "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods", "  if (n == 2 || n == 3) {", "    return true;", "  }", "  // False if n is NaN, negative, is 1, or not whole.", "  // And false if n is divisible by 2 or 3.",
		"  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {", "    return false;", "  }", "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).", "  for (var x = 6; x <= sqrt(n) + 1; x += 6) {", "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {", "      return false;", "    }", "  }", "  return true;", "}"
	]) + "(" + b + ")", Blockly.Arduino.ORDER_FUNCTION_CALL];
	switch (c) {
		case "EVEN":
			var d = b + " % 2 == 0";
			break;
		case "ODD":
			d = b + " % 2 == 1";
			break;
		case "WHOLE":
			d = b + " % 1 == 0";
			break;
		case "POSITIVE":
			d =
				b + " > 0";
			break;
		case "NEGATIVE":
			d = b + " < 0";
			break;
		case "DIVISIBLE_BY":
			a = Blockly.Arduino.valueToCode(a, "DIVISOR", Blockly.Arduino.ORDER_MODULUS) || "0", d = b + " % " + a + " == 0"
	}
	return [d, Blockly.Arduino.ORDER_EQUALITY]
};

Blockly.Arduino.math_change = function (a) {
	var b = Blockly.Arduino.valueToCode(a, "DELTA", Blockly.Arduino.ORDER_ADDITION) || "0";
	a = Blockly.Arduino.nameDB_.getName(a.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME);
	return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + b + ";\n"
};

Blockly.Arduino.math_round = Blockly.Arduino.math_single;

Blockly.Arduino.math_trig = Blockly.Arduino.math_single;

Blockly.Arduino.math_on_list = function (a) {
	var b = a.getFieldValue("OP");
	switch (b) {
		case "SUM":
			a = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_MEMBER) || "[]";
			a += ".reduce(function(x, y) {return x + y;})";
			break;
		case "MIN":
			a = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_NONE) || "[]";
			a = "min.apply(null, " + a + ")";
			break;
		case "MAX":
			a = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_NONE) || "[]";
			a = "max.apply(null, " + a + ")";
			break;
		case "AVERAGE":
			b = Blockly.Arduino.provideFunction_("mathMean", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(myList) {", "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;", "}"]);
			a = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_NONE) || "[]";
			a = b + "(" + a + ")";
			break;
		case "MEDIAN":
			b = Blockly.Arduino.provideFunction_("mathMedian", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(myList) {", "  var localList = myList.filter(function (x) {return typeof x == 'number';});", "  if (!localList.length) return null;",
				"  localList.sort(function(a, b) {return b - a;});", "  if (localList.length % 2 == 0) {", "    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;", "  } else {", "    return localList[(localList.length - 1) / 2];", "  }", "}"
			]);
			a = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_NONE) || "[]";
			a = b + "(" + a + ")";
			break;
		case "MODE":
			b = Blockly.Arduino.provideFunction_("mathModes", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(values) {", "  var modes = [];",
				"  var counts = [];", "  var maxCount = 0;", "  for (var i = 0; i < values.length; i++) {", "    var value = values[i];", "    var found = false;", "    var thisCount;", "    for (var j = 0; j < counts.length; j++) {", "      if (counts[j][0] === value) {", "        thisCount = ++counts[j][1];", "        found = true;", "        break;", "      }", "    }", "    if (!found) {", "      counts.push([value, 1]);", "      thisCount = 1;", "    }", "    maxCount = max(thisCount, maxCount);", "  }", "  for (var j = 0; j < counts.length; j++) {",
				"    if (counts[j][1] == maxCount) {", "        modes.push(counts[j][0]);", "    }", "  }", "  return modes;", "}"
			]);
			a = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_NONE) || "[]";
			a = b + "(" + a + ")";
			break;
		case "STD_DEV":
			b = Blockly.Arduino.provideFunction_("mathStandardDeviation", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(numbers) {", "  var n = numbers.length;", "  if (!n) return null;", "  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;", "  var variance = 0;",
				"  for (var j = 0; j < n; j++) {", "    variance += pow(numbers[j] - mean, 2);", "  }", "  variance = variance / n;", "  return sqrt(variance);", "}"
			]);
			a = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_NONE) || "[]";
			a = b + "(" + a + ")";
			break;
		case "RANDOM":
			b = Blockly.Arduino.provideFunction_("mathRandomList", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(list) {", "  var x = floor(random() * list.length);", "  return list[x];", "}"]);
			a = Blockly.Arduino.valueToCode(a,
				"LIST", Blockly.Arduino.ORDER_NONE) || "[]";
			a = b + "(" + a + ")";
			break;
		default:
			throw Error("Unknown operator: " + b);
	}
	return [a, Blockly.Arduino.ORDER_FUNCTION_CALL]
};

Blockly.Arduino.math_modulo = function (a) {
	var b = Blockly.Arduino.valueToCode(a, "DIVIDEND", Blockly.Arduino.ORDER_MODULUS) || "0";
	a = Blockly.Arduino.valueToCode(a, "DIVISOR", Blockly.Arduino.ORDER_MODULUS) || "0";
	return [b + " % " + a, Blockly.Arduino.ORDER_MODULUS]
};

Blockly.Arduino.math_constrain = function (a) {
	var b = Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_NONE) || "0",
		c = Blockly.Arduino.valueToCode(a, "LOW", Blockly.Arduino.ORDER_NONE) || "0";
	a = Blockly.Arduino.valueToCode(a, "HIGH", Blockly.Arduino.ORDER_NONE) || "Infinity";
	return ["min(max(" + b + ", " + c + "), " + a + ")", Blockly.Arduino.ORDER_FUNCTION_CALL]
};

Blockly.Arduino.math_random_int = function (a) {
	var b = Blockly.Arduino.valueToCode(a, "FROM", Blockly.Arduino.ORDER_NONE) || "0";
	a = Blockly.Arduino.valueToCode(a, "TO", Blockly.Arduino.ORDER_NONE) || "0";
	return ["random(" + b + ", " + a + ")", Blockly.Arduino.ORDER_FUNCTION_CALL];
};

Blockly.Arduino.math_random_float = function (a) {
	return ["random()", Blockly.Arduino.ORDER_FUNCTION_CALL]
};

Blockly.Arduino.math_atan2 = function (a) {
	var b = Blockly.Arduino.valueToCode(a, "X", Blockly.Arduino.ORDER_NONE) || "0";
	return ["atan2(" + (Blockly.Arduino.valueToCode(a, "Y", Blockly.Arduino.ORDER_NONE) || "0") + ", " + b + ") / PI * 180", Blockly.Arduino.ORDER_DIVISION]
};

Blockly.Blocks["math_inc"] = {
	init: function () {
		this.setStyle("math_blocks");
		this.appendValueInput("DATA", Number)
			.appendField(Blockly.Msg.MATH_INC_TITLE)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.MATH_INC_DEC_FIRST_AFTER), 'MODE')
			.appendField(" ");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.MATH_INC_TOOLTIP);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["math_inc"] = function (block) {
	var data = Blockly.Arduino.valueToCode(block, "DATA", Blockly.Arduino.ORDER_ATOMIC);
	var status = block.getFieldValue('MODE');
	var code = (status == "FIRST") ? ("++" + data) : (data + "++");
	return code + ";\n";
};

Blockly.Blocks["math_dec"] = {
	init: function () {
		this.setStyle("math_blocks");
		this.appendValueInput("DATA", Number)
			.appendField(Blockly.Msg.MATH_DEC_TITLE)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.MATH_INC_DEC_FIRST_AFTER), 'MODE')
			.appendField(" ");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.MATH_DEC_TOOLTIP);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["math_dec"] = function (block) {
	var data = Blockly.Arduino.valueToCode(block, "DATA", Blockly.Arduino.ORDER_ATOMIC);
	var status = block.getFieldValue('MODE');
	var code = (status == "FIRST") ? ("--" + data) : (data + "--");
	return code + ";\n";
};

/*
	map(value, fromLow, fromHigh, toLow, toHigh)
	return (value -fromLow) * (toHigh - toLow) / (fromHigh - fromLow) + toLow;
*/
Blockly.Blocks["math_map"] = {
	init: function () {
		this.setStyle("math_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.MATH_MAP);
		this.appendValueInput("VALUE")
			.setCheck("Number");
		this.appendValueInput("FROM_LOW")
			.appendField(Blockly.Msg.MATH_MAP_XMIN)
			.setCheck("Number");
		this.appendValueInput("FROM_HIGH")
			.appendField(Blockly.Msg.MATH_MAP_XMAX)
			.setCheck("Number");
		this.appendValueInput("TO_LOW")
			.appendField(Blockly.Msg.MATH_MAP_YMIN)
			.setCheck("Number");
		this.appendValueInput("TO_HIGH")
			.appendField(Blockly.Msg.MATH_MAP_YMAX)
			.setCheck("Number");
		this.appendDummyInput()
			.appendField(Blockly.Msg.MATH_MAP_END)
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setTooltip("Trasformazione lineare: y = map(X, Xmin, Xmax, Ymin, Ymax)");
		this.setHelpUrl("");
	}
};

Blockly.Arduino["math_map"] = function (block) {
	let value = Blockly.Arduino.valueToCode(block, "VALUE", Blockly.Arduino.ORDER_ATOMIC);
	let fromLow = Blockly.Arduino.valueToCode(block, "FROM_LOW", Blockly.Arduino.ORDER_ATOMIC);
	let fromHigh = Blockly.Arduino.valueToCode(block, "FROM_HIGH", Blockly.Arduino.ORDER_ATOMIC);
	let toLow = Blockly.Arduino.valueToCode(block, "TO_LOW", Blockly.Arduino.ORDER_ATOMIC);
	let toHigh = Blockly.Arduino.valueToCode(block, "TO_HIGH", Blockly.Arduino.ORDER_ATOMIC);
	let code = 'map(' + value + ',' + fromLow + ',' + fromHigh + ',' + toLow + ',' + toHigh + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};
