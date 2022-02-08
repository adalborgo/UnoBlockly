/**
 * @package: UnoBlockly
 * @file header.js
 * @version 0.2 (07-02-2022)
 * @description Header of Blockly.Arduino
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

;
(function (root, factory) {
	root.Blockly.Arduino = factory(root.Blockly);
}(this, function (Blockly) {
	'use strict';
	Blockly.Arduino = new Blockly.Generator("Arduino");
	Blockly.Arduino.addReservedWords("setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger,constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static,volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts," + Object.getOwnPropertyNames(Blockly.utils.global).join(","));

	Blockly.Arduino.ORDER_ATOMIC = 0;
	Blockly.Arduino.ORDER_NEW = 1.1;
	Blockly.Arduino.ORDER_MEMBER = 1.2;
	Blockly.Arduino.ORDER_FUNCTION_CALL = 2;
	Blockly.Arduino.ORDER_INCREMENT = 3;
	Blockly.Arduino.ORDER_DECREMENT = 3;
	Blockly.Arduino.ORDER_BITWISE_NOT = 4.1;
	Blockly.Arduino.ORDER_UNARY_PLUS = 4.2;
	Blockly.Arduino.ORDER_UNARY_NEGATION = 4.3;
	Blockly.Arduino.ORDER_LOGICAL_NOT = 4.4;
	Blockly.Arduino.ORDER_TYPEOF = 4.5;
	Blockly.Arduino.ORDER_VOID = 4.6;
	Blockly.Arduino.ORDER_DELETE = 4.7;
	Blockly.Arduino.ORDER_AWAIT = 4.8;
	Blockly.Arduino.ORDER_EXPONENTIATION = 5;
	Blockly.Arduino.ORDER_MULTIPLICATION = 5.1;
	Blockly.Arduino.ORDER_DIVISION = 5.2;
	Blockly.Arduino.ORDER_MODULUS = 5.3;
	Blockly.Arduino.ORDER_SUBTRACTION = 6.1;
	Blockly.Arduino.ORDER_ADDITION = 6.2;
	Blockly.Arduino.ORDER_BITWISE_SHIFT = 7;
	Blockly.Arduino.ORDER_RELATIONAL = 8;
	Blockly.Arduino.ORDER_IN = 8;
	Blockly.Arduino.ORDER_INSTANCEOF = 8;
	Blockly.Arduino.ORDER_EQUALITY = 9;
	Blockly.Arduino.ORDER_BITWISE_AND = 10;
	Blockly.Arduino.ORDER_BITWISE_XOR = 11;
	Blockly.Arduino.ORDER_BITWISE_OR = 12;
	Blockly.Arduino.ORDER_LOGICAL_AND = 13;
	Blockly.Arduino.ORDER_LOGICAL_OR = 14;
	Blockly.Arduino.ORDER_CONDITIONAL = 15;
	Blockly.Arduino.ORDER_ASSIGNMENT = 16;
	Blockly.Arduino.ORDER_YIELD = 17;
	Blockly.Arduino.ORDER_COMMA = 18;
	Blockly.Arduino.ORDER_NONE = 99;
	Blockly.Arduino.ORDER_OVERRIDES = [
		[Blockly.Arduino.ORDER_FUNCTION_CALL, Blockly.Arduino.ORDER_MEMBER],
		[Blockly.Arduino.ORDER_FUNCTION_CALL, Blockly.Arduino.ORDER_FUNCTION_CALL],
		[Blockly.Arduino.ORDER_MEMBER, Blockly.Arduino.ORDER_MEMBER],
		[Blockly.Arduino.ORDER_MEMBER, Blockly.Arduino.ORDER_FUNCTION_CALL],
		[Blockly.Arduino.ORDER_LOGICAL_NOT, Blockly.Arduino.ORDER_LOGICAL_NOT],
		[Blockly.Arduino.ORDER_MULTIPLICATION, Blockly.Arduino.ORDER_MULTIPLICATION],
		[Blockly.Arduino.ORDER_ADDITION, Blockly.Arduino.ORDER_ADDITION],
		[Blockly.Arduino.ORDER_LOGICAL_AND, Blockly.Arduino.ORDER_LOGICAL_AND],
		[Blockly.Arduino.ORDER_LOGICAL_OR, Blockly.Arduino.ORDER_LOGICAL_OR]
	];

	Blockly.Arduino.isInitialized = false;
	
	// Blockly.Arduino.init
	Blockly.Arduino.init = function (workspace) {
		Blockly.Arduino.definitions_ = Object.create(null);
		Blockly.Arduino.functionNames_ = Object.create(null);

		// Arduino: create a dictionary of definitions to be printed at the top of the sketch
		Blockly.Arduino.includes_ = Object.create(null);
		Blockly.Arduino.variables_ = Object.create(null);
		Blockly.Arduino.codeFunctions_ = Object.create(null);
		Blockly.Arduino.functionNames_ = Object.create(null);
		
		// Arduino:  create a dictionary of setups to be printed in the setup() function
		Blockly.Arduino.setups_ = Object.create(null);
		Blockly.Arduino.loops_ = Object.create(null);
		
		Blockly.Arduino.nameDB_ ?
			Blockly.Arduino.nameDB_.reset() : (Blockly.Arduino.nameDB_ = new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_));
		
		Blockly.Arduino.nameDB_.setVariableMap(workspace.getVariableMap());
		

		// Get all types from all variable in workspace
		Blockly.Arduino.definitions_.variables = "";
		let allTypes = IndexCode.workspace.getVariableTypes();
		for (let i = 0; i < allTypes.length - 1; i++) { // Get all variable for one of this type
			let defvars = [];
			let allVarOfType = IndexCode.workspace.getVariablesOfType(allTypes[i]);
			for (let j = 0; j < allVarOfType.length; j++) defvars.push(allVarOfType[j].name);
			if (allTypes[i].length==0 || defvars.length!=0) { // Types: int, long, float, String, boolean
				Blockly.Arduino.definitions_.variables += allTypes[i] + ' ' + defvars.join(', ') + ';\n'; // Example: int i, j;
			}
		}

		this.isInitialized = true;
	};

	/**
	  * Blockly.Arduino.finish
	  *
	  * @param {string} code (generated code)
	  * @return {string}  (completed code)
	  */
	Blockly.Arduino.finish = function (code) {
		let includes = [],
			definitions = [],
			// variables = [],
			functions = [];

		// includes space
		for (let name in Blockly.Arduino.includes_) {
			includes.push(Blockly.Arduino.includes_[name]);
		}

		// Definitions
		for (let name in Blockly.Arduino.definitions_) {
			let def_name = Blockly.Arduino.definitions_[name];
			// Removes lines containing strings '$define' or '$var_array'
			let s = stripDefineArray(def_name);
			if (s.length>0) definitions.push(s);
		}
		
		// variables space
		//for (let name in Blockly.Arduino.variables_) {variables.push(Blockly.Arduino.variables_[name]);}

		// Append variables_ to definitions
		//console.log("vlen: " + Object.keys(Blockly.Arduino.variables_).length);
		let i=0;
		for (let name in Blockly.Arduino.variables_) {
			definitions.push(Blockly.Arduino.variables_[name]);
			// console.log('vvv-len(' + i + ') ' +Blockly.Arduino.variables_[name].length + '=' + Blockly.Arduino.variables_[name]);
		}
	
		//  functions space (codeFunctions_)
		for (let name in Blockly.Arduino.codeFunctions_) {
			functions.push(Blockly.Arduino.codeFunctions_[name]);
		}

		// setup space
		let setups = [''];
		for (let name in Blockly.Arduino.setups_) {
			// Push code in the 'setup'
			let data = Blockly.Arduino.setups_[name];
			setups.push(data);
		}

		// Add any code to setup
		let codes = [''];
		let arcode = code.split(/\r?\n/); 
		let len = arcode.length;
		for (let i = 0; i<len; i++) {
			let s = arcode[i].replace(/\n/g, '').trim();
			codes.push(arcode[i]);
		}

		let all_setups = setups.join('\n  ') + codes.join('\n  ');
		
		// loop space
		let loops = [''];
		for (let name in Blockly.Arduino.loops_) {
			let data = Blockly.Arduino.loops_[name];
			loops.push(data);
		}
		
		delete Blockly.Arduino.includes_;
		delete Blockly.Arduino.definitions_;
		delete Blockly.Arduino.codeFunctions_;
		delete Blockly.Arduino.functionNames_;
		delete Blockly.Arduino.setups_;
		delete Blockly.Arduino.loops_;

		Blockly.Arduino.nameDB_.reset();
		
		// setup
		let s_setups = stripEmptyLine('void setup() {' + all_setups + '\n}\n');

		// loop
		let s_loops =  stripEmptyLine('void loop() {\n' + loops.join('\n') + '}\n');
		
		let s_includes = includes.join('\n');
		let inc_len = s_includes.length;
		let s_definitions = definitions.join('\n');
		let inc_def = s_definitions.length;

		let defs = '';
		if (inc_len) defs = s_includes + '\n';
		if (inc_def) defs += s_definitions + '\n';

		let s_defs = stripEmptyLine(defs);

		let s_functions = functions.join('\n');

		return s_defs + '\n' + s_setups + '\n' + s_loops + '\n' + functions.join('\n');

		/*
			Note:
				- code.replace(/\n/g, '\n  ')
				- setups.join('\n '): trasforma l'array setups in una stringa intercalando ad ogni elemento '\n'
				- su return deve essere passata una stringa
				- setups e loops sono array
				- code != vuoto solo se il codice e' fuori da setups e loops
				- str.split(/\r?\n/); // Split lines
			*/
	};

	function stripEmptyLine(str) {
		let ret = '';
		let sar = str.split(/\r?\n/);
		for (let i = 0; i<sar.length; i++) {
			let l = sar[i].trim().length;
			if (l) ret +=  sar[i] + '\n';
		}
		return ret;
	}
	
	/*
	  Removes lines containing strings '$define' or '$var_array'
	*/
	function stripDefineArray(str) {
		let ret = '';
		let sar = str.split(/\r?\n/);
		let isDefine, isArray = 0;
		for (let i = 0; i<sar.length; i++) {
			let l = sar[i].trim().length;
			if (l) {
				isDefine = sar[i].indexOf('$define')!=-1; // Found '$define'
				isArray = sar[i].indexOf('$var_array')!=-1; // Found '$var_array'
				if (!isDefine && !isArray) ret +=  sar[i] + '\n';
			}
		}
		return ret;
	}
    //==========================================================//
    
	Blockly.Arduino.scrubNakedValue = function (line) {
		return line + ";\n"
	};
    
    // Filter removed!
    Blockly.Arduino.quote_ = function (s) {
        //s = s.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
    return '\"' + s + '\"';
    };
    
	Blockly.Arduino.multiline_quote_ = function (a) {
		return a.split(/\n/g).map(Blockly.Arduino.quote_).join(" + '\\n' +\n")
	};

    /**
     * Common tasks for generating Arduino from blocks
     * Handles comments for the specified block and any connected value blocks
     * Calls any statements following this block
     * @param {!Blockly.Block} block The current block
     * @param {string} code The Arduino code created for this block
     * @param {boolean=} opt_thisOnly True to generate code for only this statement
     * @return {string} Arduino code with comments and subsequent blocks added
     */
	Blockly.Arduino.scrub_ = function (block, code, opt_thisOnly) {
		let d = "";
		if (!block.outputConnection || !block.outputConnection.targetConnection) {
			let e = block.getCommentText();
			e && (e = Blockly.utils.string.wrap(e, Blockly.Arduino.COMMENT_WRAP - 3), d += Blockly.Arduino.prefixLines(e + "\n", "// "));
			for (let f = 0; f < block.inputList.length; f++) block.inputList[f].type == Blockly.inputTypes.VALUE && (e = block.inputList[f].connection.targetBlock()) && (e = Blockly.Arduino.allNestedComments(e)) && (d += Blockly.Arduino.prefixLines(e, "// "))
		}
		block = block.nextConnection && block.nextConnection.targetBlock();
		opt_thisOnly = opt_thisOnly ? "" : Blockly.Arduino.blockToCode(block);
		return d + code + opt_thisOnly;
	};

	Blockly.Arduino.getAdjusted = function (a, b, c, d, e) {
		c = c || 0;
		e = e || Blockly.Arduino.ORDER_NONE;
		a.workspace.options.oneBasedIndex && c--;
		let f = a.workspace.options.oneBasedIndex ? "1" : "0";
		a = 0 < c ? Blockly.Arduino.valueToCode(a, b, Blockly.Arduino.ORDER_ADDITION) || f : 0 > c ? Blockly.Arduino.valueToCode(a, b, Blockly.Arduino.ORDER_SUBTRACTION) || f : d ? Blockly.Arduino.valueToCode(a, b, Blockly.Arduino.ORDER_UNARY_NEGATION) || f : Blockly.Arduino.valueToCode(a, b, e) || f;
		if (Blockly.isNumber(a)) a = Number(a) + c, d &&
			(a = -a);
		else {
			if (0 < c) {
				a = a + " + " + c;
				let g = Blockly.Arduino.ORDER_ADDITION
			} else 0 > c && (a = a + " - " + -c, g = Blockly.Arduino.ORDER_SUBTRACTION);
			d && (a = c ? "-(" + a + ")" : "-" + a, g = Blockly.Arduino.ORDER_UNARY_NEGATION);
			g = Math.floor(g);
			e = Math.floor(e);
			g && e >= g && (a = "(" + a + ")")
		}
		return a
	};

	//--- Procedures defined in the file 'procedures.js' ---//
	
	//--- Variables  defined in the file 'variables.js'  ---//
	
	Blockly.Arduino.variablesDynamic = {};
	Blockly.Arduino.variables_get_dynamic = Blockly.Arduino.variables_get;
	Blockly.Arduino.variables_set_dynamic = Blockly.Arduino.variables_set;

	//============ end ============//
	return Blockly.Arduino;
}));
