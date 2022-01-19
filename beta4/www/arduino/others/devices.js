/**
 * @package: UnoBlockly
 * @file devices.js
 * @version 0.1 (18-01-2022)
 * @description Code for generic devices

 	Libraries:
	- HCSR04_ultrasonic_sensor-2.0.2 (https://github.com/gamegine/HCSR04-ultrasonic-sensor-lib)
	- servo
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

 'use strict';

// LED
Blockly.Blocks['Devices_Led'] = {
	init: function () {
		this.setStyle("devices_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.Devices_Led)
			.appendField(Blockly.Msg.pin)
			.appendField(new Blockly.FieldNumber(4, 2, 12), "PIN")
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ON_OFF), 'STATUS');
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.Devices_Led_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['Devices_Led'] = function (block) {
	let pin = block.getFieldValue('PIN');
	let dropdown = block.getFieldValue('STATUS');
	Blockly.Arduino.setups_["pinmode_" + pin] = 'pinMode(' + pin + ',OUTPUT);';
	return 'digitalWrite(' + pin + ', ' + dropdown + ');\n'
};

// Button
Blockly.Blocks['Devices_Button'] = {
	helpUrl: '',
	init: function () {
		this.setStyle("devices_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.Devices_Button)
		this.appendValueInput("PIN")
			.appendField(Blockly.Msg.Pin)
			.setCheck("Number");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setTooltip(Blockly.Msg.GroveseeedButton_tooltip)
	}
};

Blockly.Arduino['Devices_Button'] = function (block) {
	let pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_["pinmode_" + pin] = 'pinMode(' + pin + ',INPUT);';
	let code = 'digitalRead(' + pin + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// Potenziometer potenziometer
Blockly.Blocks['Devices_Potentiometer'] = {
	init: function () {
		this.setStyle("devices_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.Devices_Potenziometer)
		this.appendDummyInput()
			.appendField(Blockly.Msg.Pin)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.analogPins), 'PIN');
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setTooltip(Blockly.Msg.Devices_Potentiometer_tooltip)
	}
};

Blockly.Arduino['Devices_Potentiometer'] = function (block) {
	let pin = block.getFieldValue('PIN');
	let code = '0.29326*analogRead(' + pin + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// ultrasonic_distance_sensor
Blockly.Blocks['HCSR04_sensor'] = {
  init: function() {
    this.setStyle("devices_blocks");
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("media/devices/distance_ultrasound_sensor.png",45,38))
	    .appendField(Blockly.Msg.Devices_UltrasonicDistance)
	this.appendValueInput("TRIGGER") // 3
			.appendField(Blockly.Msg.Devices_UltrasonicDistance_trigger)
			.setCheck("Number");
	this.appendValueInput("ECHO") // 4
			.appendField(Blockly.Msg.Devices_UltrasonicDistance_echo)
			.setCheck("Number");
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.Devices_UltrasonicDistance_tooltip);
  }
};

// Library: HCSR04_ultrasonic_sensor-2.0.2
// https://github.com/gamegine/HCSR04-ultrasonic-sensor-lib
Blockly.Arduino['HCSR04_sensor'] = function(block) {
	let trigger = Blockly.Arduino.valueToCode(block, 'TRIGGER', Blockly.Arduino.ORDER_ATOMIC);
	let echo = Blockly.Arduino.valueToCode(block, 'ECHO', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.includes_['HCSR04_sensor'] = '#include "HCSR04.h"';
	Blockly.Arduino.variables_['HCSR04_sensor' + trigger + echo] = 'HCSR04 hc_' + trigger + echo + '(' + trigger + ',' + echo + ');';
	let code = 'hc_' + trigger + echo + '.dist()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// Servo
// https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/angle#range
// Blockly.FieldAngle.CLOCKWISE=1; Blockly.FieldAngle.OFFSET=90;Blockly.FieldAngle.HALF=20; Blockly.FieldAngle.WRAP=180;
Blockly.Blocks['Devices_Servo'] = {
  init: function() {
    this.setStyle("devices_blocks");
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("media/devices/servo.png",45,38))
	    .appendField(Blockly.Msg.Devices_Servo)
	this.appendValueInput("PIN")
			.appendField(Blockly.Msg.Pin)
			.setCheck("Number");
	this.appendDummyInput('')
		.appendField(' ' + Blockly.Msg.angle)
		.appendField(new Blockly.FieldAngle("90",
			function(angle) {
				Blockly.FieldAngle.CLOCKWISE=1;
				if (angle>180) return 180;
			}),
			"ANGLE");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.Devices_Servo_tooltip);
	this.setHelpUrl("");
  }
};

Blockly.Arduino['Devices_Servo'] = function (block) {
	let pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	let angle = block.getFieldValue('ANGLE');
	Blockly.Arduino.includes_['Devices_Servo'] = '#include "Servo.h"';
	Blockly.Arduino.variables_['Devices_Servo' + pin] = 'Servo servo_' + pin + ';';
	Blockly.Arduino.setups_['Devices_Servo_' + pin] = 'servo_' + pin +'.attach(' + pin + ');';
	if (!((angle-0)*(angle-180) <= 0)) angle = 90;
	return 'servo_' + pin +'.write(' + angle + ');\n';
};

Blockly.Blocks['Devices_Servo_var'] = {
  init: function() {
    this.setStyle("devices_blocks");
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("media/devices/servo.png",45,38))
	    .appendField(Blockly.Msg.Devices_Servo)
	this.appendValueInput("PIN")
			.appendField(Blockly.Msg.Pin)
			.setCheck("Number");
    this.appendValueInput("ANGLE")
		.appendField(' ' + Blockly.Msg.angle)
		.setCheck("Number");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.Devices_Servo_tooltip);
	this.setHelpUrl("");
  }
};

Blockly.Arduino['Devices_Servo_var'] = function (block) {
	let pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	let angle = Blockly.Arduino.valueToCode(block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.includes_['Devices_Servo'] = '#include "Servo.h"';
	Blockly.Arduino.variables_['Devices_Servo' + pin] = 'Servo servo_' + pin + ';';
	Blockly.Arduino.setups_['Devices_Servo_' + pin] = 'servo_' + pin +'.attach(' + pin + ');';
	return 'servo_' + pin +'.write(' + angle + ');\n';
};

/*
	Control for 2 motors (left-right) with L298N controller
	Tested with Elegoo Robot Car V2.0
 */
Blockly.Blocks["L298N_Motorx2_init"]={init:function() {
	this.setStyle("devices_blocks");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage('media/devices/motorDC.png', 33, 33, "*"))
		.appendField(Blockly.Msg.devices_l298n);
	// Direction pins
	this.appendValueInput("IN1", 'Number')
		.appendField(Blockly.Msg.devices_l298n_IN1)
		.setCheck('Number')
	this.appendValueInput("IN2", 'Number')
	.appendField(Blockly.Msg.devices_l298n_IN2)
		.setCheck('Number')
    this.appendValueInput("IN3", 'Number')
	.appendField(Blockly.Msg.devices_l298n_IN3)
		.setCheck('Number')
    this.appendValueInput("IN4", 'Number')
	.appendField(Blockly.Msg.devices_l298n_IN4)
		.setCheck('Number')
	// Power pins (PWM)
	this.appendValueInput("EN1", 'Number')
		.appendField("  ")
		.appendField(Blockly.Msg.devices_l298n_EN1)
		.setCheck('Number')
    this.appendValueInput("EN2", 'Number')
	.appendField(Blockly.Msg.devices_l298n_EN2)
		.setCheck('Number')

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.devices_l298n_tooltip);
    this.setHelpUrl("");
	}
};

Blockly.Arduino["L298N_Motorx2_init"]=function(block) {
    let in1 = Blockly.Arduino.valueToCode(this, 'IN1', Blockly.Arduino.ORDER_ATOMIC);
    let in2 = Blockly.Arduino.valueToCode(this, 'IN2', Blockly.Arduino.ORDER_ATOMIC);
    let in3 = Blockly.Arduino.valueToCode(this, 'IN3', Blockly.Arduino.ORDER_ATOMIC);
    let in4 = Blockly.Arduino.valueToCode(this, 'IN4', Blockly.Arduino.ORDER_ATOMIC);
	let en1 = Blockly.Arduino.valueToCode(this, 'EN1', Blockly.Arduino.ORDER_ATOMIC);
	let en2 = Blockly.Arduino.valueToCode(this, 'EN2', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['L298N_Motorx2'] = 
    	'#define l298n_in1 '+ in1 +'\n' + '#define l298n_in2 ' + in2 + '\n' +
    	'#define l298n_in3 '+ in3 +'\n' + '#define l298n_in4 ' + in4 + '\n' +
		'#define l298_en1 '+ en1 +'\n' + '#define l298_en2 ' + en2 + '\n';
	Blockly.Arduino.setups_["pinmode_" + in1] = 'pinMode(' + in1 + ',OUTPUT);';
	Blockly.Arduino.setups_["pinmode_" + in2] = 'pinMode(' + in2 + ',OUTPUT);';
	Blockly.Arduino.setups_["pinmode_" + in3] = 'pinMode(' + in3 + ',OUTPUT);';
	Blockly.Arduino.setups_["pinmode_" + in4] = 'pinMode(' + in4 + ',OUTPUT);';
	/*Blockly.Arduino.setups_["pinmode_" + in1] = 'pinMode(l298n_in1,OUTPUT);';
	Blockly.Arduino.setups_["pinmode_" + in2] = 'pinMode(l298n_in2,OUTPUT);';
	Blockly.Arduino.setups_["pinmode_" + in3] = 'pinMode(l298n_in3,OUTPUT);';
	Blockly.Arduino.setups_["pinmode_" + in4] = 'pinMode(l298n_in4,OUTPUT);';*/
    return '';
};

Blockly.Blocks['L298N_Motorx2'] = {
	init: function () {
		this.setStyle("devices_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage('media/devices/motorDC.png', 33, 33, "*"))
			.appendField(Blockly.Msg.devices_motors);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg.left_right, "all"],
				[Blockly.Msg.left, "left"],
				[Blockly.Msg.right, "right"]
			]), "SIDE");
		this.appendDummyInput()
			.appendField("  " + Blockly.Msg.devices_motors_dir)
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg.dir_forward, "forward"],
				[Blockly.Msg.dir_backward, "backward"]
			]), "DIR");
		this.appendValueInput("SPEED", "Number").setCheck("Number")
			.appendField("  " + Blockly.Msg.devices_motors_speed);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setInputsInline(true);
		this.setOutput(false, "Number");
		this.setTooltip(Blockly.Msg.devices_motors_tooltip);
	}
};

Blockly.Arduino["L298N_Motorx2"]=function(block) {

	// Speed (0..255)
	let speed = Blockly.Arduino.valueToCode(block, "SPEED", Blockly.Arduino.ORDER_ATOMIC);
    if (speed<0) speed = 0; else if (speed>255) speed = 255;

	// Direction
	let dirCode = this.getFieldValue('DIR');
	let dir = (dirCode == 'forward') ? true : false;

	let motor1, motor2;
	if (dir) { // Forward
		motor1 = "digitalWrite(l298n_in1,HIGH);\n" + "digitalWrite(l298n_in2,LOW);\n" + "analogWrite(l298_en1," + speed + ");\n";
		motor2 = "digitalWrite(l298n_in3,LOW);\n" + "digitalWrite(l298n_in4,HIGH);\n" + "analogWrite(l298_en2," + speed + ");\n";
	} else { // Backward
		motor1 = "digitalWrite(l298n_in1,LOW);\n" + "digitalWrite(l298n_in2,HIGH);\n" + "analogWrite(l298_en1," + speed + ");\n";
		motor2 = "digitalWrite(l298n_in3,HIGH);\n" + "digitalWrite(l298n_in4,LOW);\n" + "analogWrite(l298_en2," + speed + ");\n";
	}

	let code;

	// Side: select the motors
	let sideCode = this.getFieldValue('SIDE');
	if (sideCode == 'left') code = motor1;
	else if (sideCode == 'right')
		code = motor2;
	else // all
		code = motor1 + motor2;
	
	return code;
};
