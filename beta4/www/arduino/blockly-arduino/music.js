/**
 * @package: UnoBlockly
 * @file music.js
 * @version 0.1 (11-05-2021)
 * @description Play melody of Blockly.Blocks & Blockly.Arduino
	https://github.com/dualB/Melody;
	https://github.com/dualB/Musician
	Libraries: Melody, Musician
	Melody(String score);
	Melody(String score, unsigned int tempo);
	Melody melody(" ( (cccde+dr  ceddc+.r)x2  dddd (a+ar)_ dc(b a g+.r)_ cccde+dr ceddc+.r )*");
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

Blockly.Blocks["MelodyPlayer"] = {
	init: function () {
		this.setStyle("arduino_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.Melody)
		this.appendValueInput("PIN")
			.appendField(Blockly.Msg.Pin)
			.setCheck("Number");
		this.appendDummyInput()
			.appendField(Blockly.Msg.Melody_time)
			.appendField(new Blockly.FieldNumber(120, 30, 960), "TIME");
		this.appendValueInput('MELODY')
			.appendField(" " + Blockly.Msg.Melody_code)
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.Melody_tooltip);
		this.setHelpUrl("https://github.com/dualB/Melody");
	}
};

Blockly.Arduino["MelodyPlayer"] = function (block) {
	let pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	let time = block.getFieldValue('TIME');
	let text = Blockly.Arduino.valueToCode(block, "MELODY", Blockly.Arduino.ORDER_NONE) || "''";
	Blockly.Arduino.includes_["MelodyPlayer1"]='#include <Melody.h>';
	Blockly.Arduino.includes_["MelodyPlayer2"]='#include <Musician.h>';
	Blockly.Arduino.variables_['MelodyPlayerPinBuzzer'] = 'Musician musician(' + pin + ');';
	Blockly.Arduino.setups_['MelodyPlayerMelody'] = 'musician.setMelody(&melody);';
	Blockly.Arduino.variables_['MelodyPlayerMelo'] = 'Melody melody(' + text + ',' + time + ');';
	let code = 'musician.playSync();\n';
	return  code;
};

Blockly.Blocks["MelodyPlayerExamples"] = {
	init: function () {
		this.setStyle("arduino_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.Melody)
		this.appendValueInput("PIN")
			.appendField(Blockly.Msg.Pin)
			.setCheck("Number");
		this.appendDummyInput()
			.appendField(Blockly.Msg.Melody_time)
			.appendField(new Blockly.FieldNumber(120, 30, 960), "TIME");

		this.appendDummyInput()
			.appendField("  ")
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.Melody_Examples_dropdown), "MELODY");

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.Melody_Examples_dropdown_tooltip);
		this.setHelpUrl("https://github.com/dualB/Melody");
	}
};

Blockly.Arduino["MelodyPlayerExamples"] = function (block) {
	let pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	let time = block.getFieldValue('TIME');
	let text = this.getFieldValue('MELODY');

	Blockly.Arduino.includes_["MelodyPlayer1"]='#include <Melody.h>';
	Blockly.Arduino.includes_["MelodyPlayer2"]='#include <Musician.h>';
	Blockly.Arduino.variables_['MelodyPlayerPinBuzzer'] = 'Musician musician(' + pin + ');';
	Blockly.Arduino.setups_['MelodyPlayerMelody'] = 'musician.setMelody(&melody);';
	Blockly.Arduino.variables_['MelodyPlayerMelo'] = 'Melody melody(\"' + text + '\",' + time + ');';
	let code = 'musician.playSync();\n';
	return  code;
};
