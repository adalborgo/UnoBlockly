/**
 * @package: UnoBlockly
 * @file music.js
 * @version 0.1 (11-05-2021)
 * @description Play melody of Blockly.Blocks & Blockly.Arduino
	https://github.com/dualB/Melody;
	https://github.com/dualB/Musician
	Libraries: UnoSound, Melody, Musician
	Melody(String score);
	Melody(String score, unsigned int tempo);
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

Blockly.Blocks['music_tone'] = {
	init: function () {
		this.setStyle("sound_blocks");
		this.appendDummyInput()
			.appendField("\u{1D11E}")
			.appendField(new Blockly.FieldDropdown([
				["C₄ | Do₄", "262"],
				["D₄ | Re₄", "294"],
				["E₄ | Mi₄", "330"],
				["F₄ | Fa₄", "349"],
				["G₄ | Sol₄", "392"],
				["A₄ | La₄", "440"],
				["B₄ | Si₄", "494"],
				["C₅ | Do₅", "523"],
				["D₅ | Re₅", "587"],
				["E₅ | Mi₅", "659"],
				["F₅ | Fa₅", "698"],
				["G₅ | Sol₅", "784"],
				["A₅ | La₅", "880"],
				["B₅ | Si₅", "988"],
				["C₆ | Do₆", "1047"],
				["D₆ | Re₆", "1175"],
				["E₆ | Mi₆", "1319"],
				["F₆ | Fa₆", "1397"],
				["G₆ | Sol₆", "1568"],
				["A₆ | La₆", "1760"],
				["B₆ | Si₆", "1976"]
			]), "otto_note");
		// https://www.unicodepedia.com/groups/musical-symbols/
		this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(" ")
			.appendField(new Blockly.FieldDropdown([
				["\u{1D161}", "125"],
				["\u{1D160}", "250"],
				["\u{1D15F}", "500"],
				["\u{1D15E}", "1000"],
				["\u{1D15D}", "2000"]
			]), "note_duration");
		this.appendValueInput("PIN")
			.appendField(" " + Blockly.Msg.Pin)
			.setCheck("Number");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip(Blockly.Msg.Music_NOTE_TOOLTIP);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['music_tone'] = function (block) {
	let pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	let dropdown_note = block.getFieldValue('otto_note');
	let dropdown_note_duration = block.getFieldValue('note_duration');
	let dropdown_note_rest = block.getFieldValue('note_rest');
	Blockly.Arduino.includes_['music_lib'] = '#include <UnoSound.h>\n' + 'UnoSound sound;';
	let code = "sound.tone(" + pin + "," + dropdown_note + "," + dropdown_note_duration + ");\n";
	return code;
};

Blockly.Blocks['music_rest'] = {
	init: function () {
		this.setStyle("sound_blocks");
		this.appendDummyInput()
			.appendField("\u{1D11E}")
		this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(" ")
			.appendField(new Blockly.FieldDropdown([
				["\u{1D13F}", "125"],
				["\u{1D13E}", "250"],
				["\u{1D13D}", "500"],
				["\u{1D13C}", "1000"],
				["\u{1D13B}", "2000"]
			]), "REST");

		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip(Blockly.Msg.Music_REST_TOOLTIP);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['music_rest'] = function (block) {
	let dropdown_rest = block.getFieldValue('REST');
	let code = "delay(" + dropdown_rest + ");\n";
	return code;
};

//=== MelodyPlayer ===//
Blockly.Blocks["MelodyPlayer"] = {
	init: function () {
		this.setStyle("sound_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.Melody)
		this.appendDummyInput()
			.appendField(Blockly.Msg.Melody_time)
			.appendField(new Blockly.FieldNumber(120, 30, 960), "TIME");
		this.appendValueInput('MELODY')
			.appendField(" " + Blockly.Msg.Melody_code)
		this.appendValueInput("PIN")
			.appendField(Blockly.Msg.Pin)
			.setCheck("Number");
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
		this.setStyle("sound_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.Melody)
		this.appendDummyInput()
			.appendField(Blockly.Msg.Melody_time)
			.appendField(new Blockly.FieldNumber(120, 30, 960), "TIME");
		this.appendDummyInput()
			.appendField("  ")
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.Melody_Examples_dropdown), "MELODY");
		this.appendValueInput("PIN")
			.appendField(Blockly.Msg.Pin)
			.setCheck("Number");
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
