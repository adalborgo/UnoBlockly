/**
 * @package: UnoBlockly
 * @file lists.js
 * @version 0.1 (08-07-2021)
 * @description Blockly.Arduino.lists
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

Blockly.Arduino.lists = {};

Blockly.Arduino.lists_create_empty = function (a) {
		return ["[]", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.lists_create_with = function (a) {
		for (let b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.Arduino.valueToCode(a, "ADD" + c, Blockly.Arduino.ORDER_NONE) || "null";
		return ["[" + b.join(", ") + "]", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.lists_repeat = function (a) {
		let b = Blockly.Arduino.provideFunction_("listsRepeat", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(value, n) {", "  let array = [];", "  for (let i = 0; i < n; i++) {", "    array[i] = value;", "  }", "  return array;", "}"]),
			c = Blockly.Arduino.valueToCode(a, "ITEM", Blockly.Arduino.ORDER_NONE) || "null";
		a = Blockly.Arduino.valueToCode(a, "NUM", Blockly.Arduino.ORDER_NONE) || "0";
		return [b + "(" + c + ", " + a + ")", Blockly.Arduino.ORDER_FUNCTION_CALL]
};

Blockly.Arduino.lists_length = function (a) {
		return [(Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_MEMBER) || "[]") + ".length", Blockly.Arduino.ORDER_MEMBER]
};

Blockly.Arduino.lists_isEmpty = function (a) {
		return ["!" + (Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_MEMBER) || "[]") + ".length", Blockly.Arduino.ORDER_LOGICAL_NOT]
};

Blockly.Arduino.lists_indexOf = function (a) {
		let b = "FIRST" == a.getFieldValue("END") ? "indexOf" : "lastIndexOf",
			c = Blockly.Arduino.valueToCode(a, "FIND", Blockly.Arduino.ORDER_NONE) || "''";
		b = (Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_MEMBER) || "[]") + "." + b + "(" + c + ")";
		return a.workspace.options.oneBasedIndex ? [b + " + 1", Blockly.Arduino.ORDER_ADDITION] : [b, Blockly.Arduino.ORDER_FUNCTION_CALL]
};

Blockly.Arduino.lists_getIndex = function (a) {
		let b = a.getFieldValue("MODE") || "GET",
			c = a.getFieldValue("WHERE") || "FROM_START",
			d = Blockly.Arduino.valueToCode(a, "VALUE", "RANDOM" == c ? Blockly.Arduino.ORDER_NONE : Blockly.Arduino.ORDER_MEMBER) || "[]";
		switch (c) {
			case "FIRST":
				if ("GET" == b) return [d + "[0]", Blockly.Arduino.ORDER_MEMBER];
				if ("GET_REMOVE" == b) return [d + ".shift()", Blockly.Arduino.ORDER_MEMBER];
				if ("REMOVE" == b) return d + ".shift();\n";
				break;
			case "LAST":
				if ("GET" == b) return [d + ".slice(-1)[0]", Blockly.Arduino.ORDER_MEMBER];
				if ("GET_REMOVE" == b) return [d + ".pop()", Blockly.Arduino.ORDER_MEMBER];
				if ("REMOVE" == b) return d + ".pop();\n";
				break;
			case "FROM_START":
				a = Blockly.Arduino.getAdjusted(a, "AT");
				if ("GET" == b) return [d + "[" + a + "]", Blockly.Arduino.ORDER_MEMBER];
				if ("GET_REMOVE" == b) return [d + ".splice(" + a + ", 1)[0]", Blockly.Arduino.ORDER_FUNCTION_CALL];
				if ("REMOVE" == b) return d + ".splice(" + a + ", 1);\n";
				break;
			case "FROM_END":
				a = Blockly.Arduino.getAdjusted(a, "AT", 1, !0);
				if ("GET" == b) return [d + ".slice(" + a + ")[0]", Blockly.Arduino.ORDER_FUNCTION_CALL];
				if ("GET_REMOVE" == b) return [d + ".splice(" + a + ", 1)[0]", Blockly.Arduino.ORDER_FUNCTION_CALL];
				if ("REMOVE" == b) return d + ".splice(" + a + ", 1);";
				break;
			case "RANDOM":
				d = Blockly.Arduino.provideFunction_("listsGetRandomItem", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(list, remove) {", "  let x = Math.floor(Math.random() * list.length);", "  if (remove) {", "    return list.splice(x, 1)[0];", "  } else {", "    return list[x];", "  }", "}"]) + "(" + d + ", " + ("GET" != b) + ")";
				if ("GET" == b || "GET_REMOVE" == b) return [d,
					Blockly.Arduino.ORDER_FUNCTION_CALL
				];
				if ("REMOVE" == b) return d + ";\n"
		}
		throw Error("Unhandled combination (lists_getIndex).");
};

Blockly.Arduino.lists_setIndex = function (a) {
		function b() {
			if (c.match(/^\w+$/)) return "";
			let g = Blockly.Arduino.nameDB_.getDistinctName("tmpList", Blockly.VARIABLE_CATEGORY_NAME),
				h = "let " + g + " = " + c + ";\n";
			c = g;
			return h
		}
		let c = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_MEMBER) || "[]",
			d = a.getFieldValue("MODE") || "GET",
			e = a.getFieldValue("WHERE") || "FROM_START",
			f = Blockly.Arduino.valueToCode(a, "TO", Blockly.Arduino.ORDER_ASSIGNMENT) || "null";
		switch (e) {
			case "FIRST":
				if ("SET" == d) return c +
					"[0] = " + f + ";\n";
				if ("INSERT" == d) return c + ".unshift(" + f + ");\n";
				break;
			case "LAST":
				if ("SET" == d) return a = b(), a + (c + "[" + c + ".length - 1] = " + f + ";\n");
				if ("INSERT" == d) return c + ".push(" + f + ");\n";
				break;
			case "FROM_START":
				e = Blockly.Arduino.getAdjusted(a, "AT");
				if ("SET" == d) return c + "[" + e + "] = " + f + ";\n";
				if ("INSERT" == d) return c + ".splice(" + e + ", 0, " + f + ");\n";
				break;
			case "FROM_END":
				e = Blockly.Arduino.getAdjusted(a, "AT", 1, !1, Blockly.Arduino.ORDER_SUBTRACTION);
				a = b();
				if ("SET" == d) return a + (c + "[" + c + ".length - " + e +
					"] = " + f + ";\n");
				if ("INSERT" == d) return a + (c + ".splice(" + c + ".length - " + e + ", 0, " + f + ");\n");
				break;
			case "RANDOM":
				a = b();
				e = Blockly.Arduino.nameDB_.getDistinctName("tmpX", Blockly.VARIABLE_CATEGORY_NAME);
				a += "let " + e + " = Math.floor(Math.random() * " + c + ".length);\n";
				if ("SET" == d) return a + (c + "[" + e + "] = " + f + ";\n");
				if ("INSERT" == d) return a + (c + ".splice(" + e + ", 0, " + f + ");\n")
		}
		throw Error("Unhandled combination (lists_setIndex).");
};

Blockly.Arduino.lists.getIndex_ = function (a, b, c) {
		return "FIRST" == b ? "0" : "FROM_END" == b ? a + ".length - 1 - " + c : "LAST" == b ? a + ".length - 1" : c
};

Blockly.Arduino.lists_getSublist = function (a) {
		let b = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_MEMBER) || "[]",
			c = a.getFieldValue("WHERE1"),
			d = a.getFieldValue("WHERE2");
		if ("FIRST" == c && "LAST" == d) b += ".slice(0)";
		else if (b.match(/^\w+$/) || "FROM_END" != c && "FROM_START" == d) {
			switch (c) {
				case "FROM_START":
					let e = Blockly.Arduino.getAdjusted(a, "AT1");
					break;
				case "FROM_END":
					e = Blockly.Arduino.getAdjusted(a, "AT1", 1, !1, Blockly.Arduino.ORDER_SUBTRACTION);
					e = b + ".length - " + e;
					break;
				case "FIRST":
					e =
						"0";
					break;
				default:
					throw Error("Unhandled option (lists_getSublist).");
			}
			switch (d) {
				case "FROM_START":
					a = Blockly.Arduino.getAdjusted(a, "AT2", 1);
					break;
				case "FROM_END":
					a = Blockly.Arduino.getAdjusted(a, "AT2", 0, !1, Blockly.Arduino.ORDER_SUBTRACTION);
					a = b + ".length - " + a;
					break;
				case "LAST":
					a = b + ".length";
					break;
				default:
					throw Error("Unhandled option (lists_getSublist).");
			}
			b = b + ".slice(" + e + ", " + a + ")"
		} else {
			e = Blockly.Arduino.getAdjusted(a, "AT1");
			a = Blockly.Arduino.getAdjusted(a, "AT2");
			let f = Blockly.Arduino.lists.getIndex_,
				g = {
					FIRST: "First",
					LAST: "Last",
					FROM_START: "FromStart",
					FROM_END: "FromEnd"
				};
			b = Blockly.Arduino.provideFunction_("subsequence" + g[c] + g[d], ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(sequence" + ("FROM_END" == c || "FROM_START" == c ? ", at1" : "") + ("FROM_END" == d || "FROM_START" == d ? ", at2" : "") + ") {", "  let start = " + f("sequence", c, "at1") + ";", "  let end = " + f("sequence", d, "at2") + " + 1;", "  return sequence.slice(start, end);", "}"]) + "(" + b + ("FROM_END" == c || "FROM_START" == c ? ", " + e : "") + ("FROM_END" == d || "FROM_START" ==
				d ? ", " + a : "") + ")"
		}
		return [b, Blockly.Arduino.ORDER_FUNCTION_CALL]
};

Blockly.Arduino.lists_sort = function (a) {
		let b = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_FUNCTION_CALL) || "[]",
			c = "1" === a.getFieldValue("DIRECTION") ? 1 : -1;
		a = a.getFieldValue("TYPE");
		let d = Blockly.Arduino.provideFunction_("listsGetSortCompare", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(type, direction) {", "  let compareFuncs = {", '    "NUMERIC": function(a, b) {', "        return Number(a) - Number(b); },", '    "TEXT": function(a, b) {', "        return a.toString() > b.toString() ? 1 : -1; },",
			'    "IGNORE_CASE": function(a, b) {', "        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },", "  };", "  let compare = compareFuncs[type];", "  return function(a, b) { return compare(a, b) * direction; }", "}"
		]);
		return [b + ".slice().sort(" + d + '("' + a + '", ' + c + "))", Blockly.Arduino.ORDER_FUNCTION_CALL]
};

Blockly.Arduino.lists_split = function (a) {
		let b = Blockly.Arduino.valueToCode(a, "INPUT", Blockly.Arduino.ORDER_MEMBER),
			c = Blockly.Arduino.valueToCode(a, "DELIM", Blockly.Arduino.ORDER_NONE) || "''";
		a = a.getFieldValue("MODE");
		if ("SPLIT" == a) b || (b = "''"), a = "split";
		else if ("JOIN" == a) b || (b = "[]"), a = "join";
		else throw Error("Unknown mode: " + a);
		return [b + "." + a + "(" + c + ")", Blockly.Arduino.ORDER_FUNCTION_CALL]
};

Blockly.Arduino.lists_reverse = function (a) {
		return [(Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_FUNCTION_CALL) || "[]") + ".slice().reverse()", Blockly.Arduino.ORDER_FUNCTION_CALL]
};
