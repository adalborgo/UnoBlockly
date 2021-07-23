/**
 * @package: UnoBlockly
 * @file ottodiy.js
 * @version 0.1 (03-06-2021)
 * @description Code for OttoDIY (Modified from 'OTTO9' of OttoBlockly, by adalborgo@gmail.com)
 */

'use strict';

// ottodiy_home
Blockly.Blocks['ottodiy_home'] = {
	init: function () {
		this.appendDummyInput("")
			.appendField(new Blockly.FieldImage('media/otto/otto_plus.png', 33, 33, "*"))
			.appendField(Blockly.Msg.OTTODIY_HOME_TEXT);
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setStyle("otto_blocks");
		this.setTooltip(Blockly.Msg.OTTODIY_HOME_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.OTTODIY_DIY_URL);
	}
};

Blockly.Arduino['ottodiy_home'] = function (block) {
	Blockly.Arduino.includes_['ottodiy_lib'] = '#include <Ottodiy.h>\n' + 'Ottodiy Otto;';
	Blockly.Arduino.setups_['ottodiy_legs'] = 'Otto.initLegs();';
	let code = 'Otto.home();\n';
	return code;
};

// ottodiy_step
Blockly.Blocks['ottodiy_step'] = {
	init: function () {
		this.setStyle("otto_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage('media/otto/otto_plus.png', 33, 33, "*"))
			.appendField(Blockly.Msg.OTTODIY_MOVE_TEXT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTODIY_STEP_CHOICE), "DIR");
		this.appendDummyInput()
			.appendField(" " + Blockly.Msg.OTTODIY_MOVE_SPEED_TEXT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTODIY_MOVE_SPEED_CHOICE), "SPEED");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip(Blockly.Msg.OTTODIY_MOVE_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.OTTODIY_DIY_URL);
	}
};

Blockly.Arduino['ottodiy_step'] = function (block) {
	let direction = block.getFieldValue('DIR');
	let speed = block.getFieldValue('SPEED');
	Blockly.Arduino.includes_['ottodiy_lib'] = '#include <Ottodiy.h>\n' + 'Ottodiy Otto;';
	Blockly.Arduino.setups_['ottodiy_legs'] = 'Otto.initLegs();';
	let code = '';
	switch (direction) {
		case 'FORWARD':
			code = 'Otto.walk(1,' + speed + ', 1); // FORWARD\n';
			break;
		case 'BACKWARD':
			code = 'Otto.walk(1,' + speed + ', -1); // BACKWARD\n';
			break;
	}
	return code;
};

Blockly.Blocks['ottodiy_turn'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage('media/otto/otto_plus.png', 33, 33, "*"))
			.appendField(Blockly.Msg.OTTODIY_TURN_TEXT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTODIY_TURN_CHOICE), "DIR");
		this.appendDummyInput()
			.appendField(" " + Blockly.Msg.OTTODIY_MOVE_SPEED_TEXT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTODIY_MOVE_SPEED_CHOICE), "SPEED");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setStyle("otto_blocks");
		this.setTooltip(Blockly.Msg.OTTODIY_MOVE_TOOLTIP);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['ottodiy_turn'] = function (block) {
	let direction = block.getFieldValue('DIR');
	let speed = block.getFieldValue('SPEED');
	Blockly.Arduino.includes_['ottodiy_lib'] = '#include <Ottodiy.h>\n' + 'Ottodiy Otto;';
	Blockly.Arduino.setups_['ottodiy_legs'] = 'Otto.initLegs();';
	let code = '';
	switch (direction) {
		case 'LEFT':
			code = 'Otto.turn(1,' + speed + ',1); // LEFT\n';
			break;
		case 'RIGHT':
			code = 'Otto.turn(1,' + speed + ',-1); // RIGHT\n';
			break;
	}
	return code;
};

// ottodiy_bend
Blockly.Blocks['ottodiy_bend'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage('media/otto/otto_plus.png', 33, 33, "*"))
			.appendField(Blockly.Msg.OTTODIY_BEND_TEXT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTODIY_BEND_CHOICE), "DIR");
		this.appendDummyInput()
			.appendField(" " + Blockly.Msg.OTTODIY_MOVE_SPEED_TEXT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTODIY_MOVE_SPEED_CHOICE), "SPEED");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setStyle("otto_blocks");
		this.setTooltip(Blockly.Msg.OTTODIY_MOVE_TOOLTIP);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['ottodiy_bend'] = function (block) {
	let direction = block.getFieldValue('DIR');
	let speed = block.getFieldValue('SPEED');
	Blockly.Arduino.includes_['ottodiy_lib'] = '#include <Ottodiy.h>\n' + 'Ottodiy Otto;';
	Blockly.Arduino.setups_['ottodiy_legs'] = 'Otto.initLegs();';
	let code = '';
	switch (direction) {
		case 'BENDLEFT':
			code = 'Otto.bend(1,' + speed + ',1);\n';
			break;
		case 'BENDRIGHT':
			code = 'Otto.bend(1,' + speed + ',-1);\n';
			break;
	}
	return code;
};

// ottodiy_shake
Blockly.Blocks['ottodiy_shake'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage('media/otto/otto_plus.png', 33, 33, "*"))
			.appendField(Blockly.Msg.OTTODIY_SHAKE_TEXT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTODIY_SHAKE_CHOICE), "DIR");
		this.appendDummyInput()
			.appendField(" " + Blockly.Msg.OTTODIY_MOVE_SPEED_TEXT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTODIY_MOVE_SPEED_CHOICE), "SPEED");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setStyle("otto_blocks");
		this.setTooltip(Blockly.Msg.OTTODIY_MOVE_TOOLTIP);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['ottodiy_shake'] = function (block) {
	let direction = block.getFieldValue('DIR');
	let speed = block.getFieldValue('SPEED');
	Blockly.Arduino.includes_['ottodiy_lib'] = '#include <Ottodiy.h>\n' + 'Ottodiy Otto;';
	Blockly.Arduino.setups_['ottodiy_legs'] = 'Otto.initLegs();';
	let code = '';
	switch (direction) {
		case 'SHAKELEFT':
			code = 'Otto.shakeLeg(1,' + speed + ',1); // LEFT\n';
			break;
		case 'SHAKERIGHT':
			code = 'Otto.shakeLeg(1,' + speed + ',-1); // RIGHT\n';
			break;
	}
	return code;
};

// ottodiy_up
Blockly.Blocks['ottodiy_up'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage('media/otto/otto_moonwalk.png', 33, 33, "*"))
			.appendField(Blockly.Msg.OTTODIY_UP_TEXT)
		this.appendDummyInput()
			.appendField(" " + Blockly.Msg.OTTODIY_MOVE_SPEED_TEXT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTODIY_MOVE_SPEED_CHOICE), "SPEED");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setStyle("otto_blocks");
		this.setTooltip(Blockly.Msg.OTTODIY_MOVE_TOOLTIP);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['ottodiy_up'] = function (block) {
	let speed = block.getFieldValue('SPEED');
	Blockly.Arduino.includes_['ottodiy_lib'] = '#include <Ottodiy.h>\n' + 'Ottodiy Otto;';
	Blockly.Arduino.setups_['ottodiy_legs'] = 'Otto.initLegs();';
	return 'Otto.jump(1,' + speed + ');\n';
};

Blockly.Blocks['ottodiy_dance'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage('media/otto/otto_moonwalk.png', 33, 33, "*"))
			.appendField(Blockly.Msg.OTTODIY_DANCE_TEXT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTODIY_DANCE_CHOICE), "otto_dance_movement");
		this.appendDummyInput()
			.appendField(Blockly.Msg.OTTODIY_MOVE_SPEED_TEXT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTODIY_MOVE_SPEED_CHOICE), "otto_move_speed");
		this.appendDummyInput()
			.appendField(Blockly.Msg.OTTODIY_DANCE_SIZE_TEXT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTODIY_DANCE_SIZE_CHOICE), "otto_dance_size");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setStyle("otto_blocks");
		this.setTooltip(Blockly.Msg.OTTODIY_DANCE_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.OTTODIY_DIY_URL);
	}
};

Blockly.Arduino['ottodiy_dance'] = function (block) {
	let dropdown_otto_dance_movement = block.getFieldValue('otto_dance_movement');
	let dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
	let dropdown_otto_dance_size = block.getFieldValue('otto_dance_size');
	Blockly.Arduino.includes_['ottodiy_lib'] = '#include <Ottodiy.h>\n' + 'Ottodiy Otto;';
	Blockly.Arduino.setups_['ottodiy_legs'] = 'Otto.initLegs();';
	let code = '';
	switch (dropdown_otto_dance_movement) {
		case 'moonwalkerLEFT':
			code = 'Otto.moonwalker(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', 1);\n';
			break;
		case 'moonwalkerRIGHT':
			code = 'Otto.moonwalker(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', -1);\n';
			break;
		case 'crusaitoLEFT':
			code = 'Otto.crusaito(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', 1);\n';
			break;
		case 'crusaitoRIGHT':
			code = 'Otto.crusaito(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', -1);\n';
			break;
		case 'flappingFRONT':
			code = 'Otto.flapping(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', 1);\n';
			break;
		case 'flappingBACK':
			code = 'Otto.flapping(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', -1);\n';
			break;
	}
	return code;
};

Blockly.Blocks['ottodiy_do'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage('media/otto/otto_do.png', 33, 33, "*"))
			.appendField(Blockly.Msg.OTTODIY_DO_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTODIY_DO_CHOICE), "otto_do_movement");
		this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.OTTODIY_MOVE_SPEED_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTODIY_MOVE_SPEED_CHOICE), "otto_move_speed");
		this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.OTTODIY_DANCE_SIZE_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTODIY_DANCE_SIZE_CHOICE), "otto_dance_size");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setStyle("otto_blocks");
		this.setTooltip(Blockly.Msg.OTTODIY_DO_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.OTTODIY_DIY_URL);
	}
};

Blockly.Arduino['ottodiy_do'] = function (block) {
	let dropdown_otto_do_movement = block.getFieldValue('otto_do_movement');
	let dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
	let dropdown_otto_dance_size = block.getFieldValue('otto_dance_size');
	Blockly.Arduino.includes_['ottodiy_lib'] = '#include <Ottodiy.h>\n' + 'Ottodiy Otto;';
	Blockly.Arduino.setups_['ottodiy_legs'] = 'Otto.initLegs();';
	let code = 'Otto.' + dropdown_otto_do_movement + '(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ');\n';
	return code;
};

Blockly.Blocks['ottodiy_sound'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage('media/otto/otto_music.png', 33, 33, "*"))
			.appendField(Blockly.Msg.OTTODIY_SOUND_TEXT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTODIY_SOUND_CHOICE), "otto_sound");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setStyle("otto_blocks");
		this.setTooltip(Blockly.Msg.OTTODIY_SOUND_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.OTTODIY_DIY_URL);
	}
};

Blockly.Arduino['ottodiy_sound'] = function (block) {
	let dropdown_otto_sound = block.getFieldValue('otto_sound');
	Blockly.Arduino.includes_['ottodiy_lib'] = '#include <Ottodiy.h>\n' + 'Ottodiy Otto;';
	Blockly.Arduino.setups_['ottodiy_sound'] = 'Otto.initSound();';
	let code = 'Otto.sing(' + dropdown_otto_sound + ');\n';
	return code;
};

Blockly.Blocks['ottodiy_tone'] = {
	init: function () {
		this.appendDummyInput().appendField("🎼")
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
		this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(" ")
			.appendField(new Blockly.FieldDropdown([
				["\u266B", "125"],
				["\u266A", "250"],
				["\u2669", "500"],
				["𝅗𝅥", "1000"],
				["𝅝", "2000"]
			]), "otto_note_duration");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setStyle("otto_blocks");
		this.setTooltip(Blockly.Msg.OTTODIY_SOUND_TOOLTIP1);
		this.setHelpUrl(Blockly.Msg.OTTODIY_DIY_URL);
	}
};

Blockly.Arduino['ottodiy_tone'] = function (block) {
	let dropdown_otto_note = block.getFieldValue('otto_note');
	let dropdown_otto_note_duration = block.getFieldValue('otto_note_duration');
	Blockly.Arduino.includes_['ottodiy_lib'] = '#include <Ottodiy.h>\n' + 'Ottodiy Otto;';
	Blockly.Arduino.setups_['ottodiy_sound'] = 'Otto.initSound();';
	let code = "Otto._tone( " + dropdown_otto_note + "," + dropdown_otto_note_duration + ",1);\n";
	return code;
};

Blockly.Blocks['ottodiy_tonehz'] = {
	init: function () {
		this.appendDummyInput().appendField("🎼 Hz")
		this.appendValueInput("Hz1")
		this.appendValueInput("duration").setCheck("Number").appendField("⏰");
		this.appendValueInput("silent").setCheck("Number").appendField("🔇");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setStyle("otto_blocks");
		this.setTooltip(Blockly.Msg.OTTODIY_SOUND_TOOLTIP2);
		this.setHelpUrl(Blockly.Msg.OTTODIY_DIY_URL);
	}
};

Blockly.Arduino['ottodiy_tonehz'] = function (block) {
	let Hz1 = Blockly.Arduino.valueToCode(block, 'Hz1', Blockly.Arduino.ORDER_ATOMIC);
	let duration = Blockly.Arduino.valueToCode(block, 'duration', Blockly.Arduino.ORDER_ATOMIC);
	let silent = Blockly.Arduino.valueToCode(block, 'silent', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.includes_['ottodiy_lib'] = '#include <Ottodiy.h>\n' + 'Ottodiy Otto;';
	Blockly.Arduino.setups_['ottodiy_sound'] = 'Otto.initSound();';
	let code = "Otto._tone( " + Hz1 + "," + duration + "," + silent + "); //(float noteFrequency, long noteDuration, int silentDuration)\n";
	return code;
};

// ottodiy_bendtone
Blockly.Blocks['ottodiy_bendtone'] = {
	init: function () {
		this.appendDummyInput().appendField("🎼 Hz1")
		this.appendValueInput("Hz1")
		this.appendValueInput("Hz2")
			.appendField("Hz2");
		this.appendValueInput("prop")
			.setCheck("Number").appendField("P");
		this.appendValueInput("duration")
			.setCheck("Number")
			.appendField("⏰");
		this.appendValueInput("silent")
			.setCheck("Number")
			.appendField("🔇");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setStyle("otto_blocks");
		this.setTooltip(Blockly.Msg.OTTODIY_SOUND_TOOLTIP3);
		this.setHelpUrl(Blockly.Msg.OTTODIY_DIY_URL);
	}
};

Blockly.Arduino['ottodiy_bendtone'] = function (block) {
	let Hz1 = Blockly.Arduino.valueToCode(block, 'Hz1', Blockly.Arduino.ORDER_ATOMIC);
	let Hz2 = Blockly.Arduino.valueToCode(block, 'Hz2', Blockly.Arduino.ORDER_ATOMIC);
	let prop = Blockly.Arduino.valueToCode(block, 'prop', Blockly.Arduino.ORDER_ATOMIC);
	let duration = Blockly.Arduino.valueToCode(block, 'duration', Blockly.Arduino.ORDER_ATOMIC);
	let silent = Blockly.Arduino.valueToCode(block, 'silent', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.includes_['ottodiy_lib'] = '#include <Ottodiy.h>\n' + 'Ottodiy Otto;';
	Blockly.Arduino.setups_['ottodiy_sound'] = 'Otto.initSound();';
	let code = "Otto.bendTones(" + Hz1 + "," + Hz2 + "," + prop + "," + duration + "," + silent + "); // (float initFrequency, float finalFrequency, float prop, long noteDuration, int silentDuration) \n";
	return code;
};

// ottodiy_getdistance
Blockly.Blocks['ottodiy_getdistance'] = {
	init: function () {
		this.setStyle("otto_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage('media/otto/sensor_ultrasound.png', 33, 33, "*"))
			.appendField(Blockly.Msg.OTTODIY_GETDISTANCE_TEXT);
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setTooltip(Blockly.Msg.OTTODIY_GETDISTANCE_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.OTTODIY_DIY_URL);
	}
};

Blockly.Arduino['ottodiy_getdistance'] = function (block) {
	const TRIGGER_PIN = 8,
		ECHO_PIN = 9;
	Blockly.Arduino.includes_['HCSR04_sensor'] = '#include "HCSR04.h"';
	Blockly.Arduino.variables_['HCSR04_sensor' + TRIGGER_PIN + ECHO_PIN] = 'HCSR04 hc_' + TRIGGER_PIN + ECHO_PIN + '(' + TRIGGER_PIN + ',' + ECHO_PIN + ');';
	let code = 'hc_' + TRIGGER_PIN + ECHO_PIN + '.dist()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// ottodiy_calibration
Blockly.Blocks['ottodiy_calibration'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(Blockly.Msg.OTTODIY_CALIBRATION)
			.setAlign(Blockly.ALIGN_CENTRE)
		this.appendDummyInput()
			.appendField(Blockly.Msg.OTTODIY_CALIBRATION_LEG + Blockly.Msg.left)
			.appendField(new Blockly.FieldNumber("0"), "LL")
			.appendField(Blockly.Msg.right)
			.appendField(new Blockly.FieldNumber("0"), "RL")
		this.appendDummyInput()
			.appendField(Blockly.Msg.OTTODIY_CALIBRATION_FOOT + Blockly.Msg.left)
			.appendField(new Blockly.FieldNumber("0"), "LF")
			.appendField(Blockly.Msg.right)
			.appendField(new Blockly.FieldNumber("0"), "RF");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setStyle("otto_blocks");
		this.setTooltip(Blockly.Msg.OTTODIY_CALIBRATION_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.OTTODIY_DIY_URL);
	}
};

Blockly.Arduino['ottodiy_calibration'] = function (block) {
	let valuell = block.getFieldValue('LL');
	let valuerl = block.getFieldValue('RL');
	let valuelf = block.getFieldValue('LF');
	let valuerf = block.getFieldValue('RF');
	Blockly.Arduino.includes_['ottodiy_lib'] = '#include <Ottodiy.h>\n' + 'Ottodiy Otto;';
	Blockly.Arduino.setups_['ottodiy_legs'] = 'Otto.initLegs();';
	Blockly.Arduino.setups_['ottodiy_cal'] = 'Otto.setTrims(' + valuell + ',' + valuerl + ',' + valuelf + ',' + valuerf + ');';
	return '';
};

// ottodiy_eeprom
Blockly.Blocks['ottodiy_eeprom'] = {
	init: function () {
		this.setStyle("otto_blocks");
		this.appendDummyInput("")
			.appendField(Blockly.Msg.OTTODIY_EEPROM_TEXT);
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip(Blockly.Msg.OTTODIY_EEPROM_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.OTTODIY_DIY_URL);
	}
};

Blockly.Arduino['ottodiy_eeprom'] = function (block) {
	Blockly.Arduino.setups_['ottodiy_eeprom'] = 'Otto.saveTrimsOnEEPROM();';
	return '';
};
