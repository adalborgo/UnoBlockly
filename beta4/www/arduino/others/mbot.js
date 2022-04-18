/**
 * @package: UnoBlockly
 * @file mbot.js
 * @version 0.2 (14-04-2022)
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 * @description Code for Makeblock mBot

	Pin-mapping:
		A6 light sensor
		A7 button
		D2 IR RCV
		D3 IR TX
		D4 DIR2 - direction motor2
		D5 PWM2 - pwm motor2
		D6 PWM1 - pwn motor1
		D7 DIR1 - direction motor1
		D8 buzzer
		D9 RJ25 plug 2 linefollower
		D10 RJ25 plug 2 linefollower

	Libraries: Makeblock-Libraries-master
	
	Include: ["mBotMeMCore"]='#include <MeMCore.h>';

	Variables:
		["mBotDistance"] = 'MeUltrasonicSensor ultraSensor(PORT_' + code + ');';
		["mBotLinefollower"] = 'MeLineFollower lineFinder(PORT_' + code + ');';
		["mBotBuzzer"] =  'MeBuzzer buzzer;';
		["mBotSound"] = 'MeSoundSensor soundSensor(PORT_' + port + ');';
		["mBotSeg7"] = 'Me7SegmentDisplay seg7_' + port + '(' + port + ');';
	
	Setups:
		["mBotRgbled"] = 'rgbled.reset(' + port + ',' + slot+');';
		["mBotMotor"]   = "pinMode(" + pin_dir1 + ",OUTPUT);\n" + "  pinMode(" + pin_dir2 + ",OUTPUT);\n";

	Messages: lang/xx/mbot-msg_xx.js

	Resources:
		https://github.com/Makeblock-official/mBot/blob/master/mBot-default-program/mBot-default-program.ino
 */

'use strict';

// Read ultrasonic distance
Blockly.Blocks["mBot_Distance"] = {
	init: function () {
		this.setStyle("mBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/mBot-bianco.png",32, 28))
			.appendField(Blockly.Msg.mBotDistance)
			.appendField(Blockly.Msg.mbot_port)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.mbot_port_dropdown), "PORT");
		this.setInputsInline(false);
		this.setOutput(true, "Number");
		this.setTooltip(Blockly.Msg.mBotDistance);
		this.setTooltip(Blockly.Msg.mBotDistance_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["mBot_Distance"] = function (block) {
	let port = mBotSub.port(block);

	Blockly.Arduino.includes_["mBotMeMCore"]='#include <MeMCore.h>';
	Blockly.Arduino.variables_["mBotDistance"] = 'MeUltrasonicSensor ultraSensor(PORT_' + port + ');';
	return ["ultraSensor.distanceCm()", Blockly.Arduino.ORDER_ATOMIC]
};

// MeRgbLed
Blockly.Blocks['mBot_Rgbled'] = {
	init: function () {
		this.setStyle("mBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/mBot-bianco.png",32, 28))
			.appendField(Blockly.Msg.mBotRgbled)
			.appendField("|  ");
		mBotSub.block_side(this);
		this.appendDummyInput().appendField(" ");
		this.appendValueInput("IRED", "Number").setCheck("Number")
			.appendField(Blockly.Msg.red);
		this.appendValueInput("IGREEN", "Number").setCheck("Number")
			.appendField(Blockly.Msg.green);
		this.appendValueInput("IBLUE", "Number").setCheck("Number")
			.appendField(Blockly.Msg.blue);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setInputsInline(true);
		this.setOutput(false, "Number");
		this.setTooltip(Blockly.Msg.mBotRgbled_tooltip);
	}
};

Blockly.Arduino['mBot_Rgbled'] = function (block) {
	let PORT = 7;
	let SLOT = 2;

	let sideCode = this.getFieldValue('SIDE');
	let side;
	if (sideCode == 'LEFT')
		side = 2;
	else if (sideCode == 'RIGHT')
		side = 1;
	else // all
		side = 0;

	let red = Blockly.Arduino.valueToCode(this, "IRED", Blockly.Arduino.ORDER_NONE);
	let green= Blockly.Arduino.valueToCode(this, "IGREEN", Blockly.Arduino.ORDER_NONE);
	let blue = Blockly.Arduino.valueToCode(this, "IBLUE", Blockly.Arduino.ORDER_NONE);

	Blockly.Arduino.includes_["mBotMeMCore"] = '#include <MeMCore.h>';
	Blockly.Arduino.variables_["mBotRgbled"] = 'MeRGBLed rgbled(' + PORT + ',' + SLOT + ');';
	Blockly.Arduino.setups_["mBotRgbled"] = 'rgbled.reset(' + PORT + ',' + SLOT +');';

	return 'rgbled.setColor(' + side + ',' + red + ',' + green + ',' + blue + ');\n' + 'rgbled.show();\n';
};

// Buzzer(frequency, time)
Blockly.Blocks['mBot_Tone'] = {
	init: function () {
		this.setStyle("mBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/mBot-bianco.png",32, 28))
			.appendField(Blockly.Msg.mBotTone);
		this.appendValueInput("FREQUENCY").setCheck("Number")
			.appendField(Blockly.Msg.mBotTone_freq);
		this.appendValueInput("TIME").setCheck("Number")
			.appendField(" " + Blockly.Msg.mBotTone_time);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setOutput(false, null);
		this.setTooltip(Blockly.Msg.mBotTone_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['mBot_Tone'] = function (block) {
	let frequency = Blockly.Arduino.valueToCode(this, "FREQUENCY", Blockly.Arduino.ORDER_NONE);
	let time = Blockly.Arduino.valueToCode(this, "TIME", Blockly.Arduino.ORDER_NONE);

	Blockly.Arduino.includes_["mBotMeMCore"] =  '#include <MeMCore.h>';
	Blockly.Arduino.variables_["mBotBuzzer"] =  'MeBuzzer buzzer;';

	return 'buzzer.tone(' + frequency + ',' + time + ');\n';
};

// mBotNotone
Blockly.Blocks['mBot_Notone'] = {
    init: function () {
		this.setStyle("mBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/mBot-bianco.png",32, 28))
			.appendField(Blockly.Msg.mBotNotone);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.mBotNotone_tooltip);
		this.setHelpUrl("");
    }
};

Blockly.Arduino['mBot_Notone'] = function (block) {
	Blockly.Arduino.includes_["mBotMeMCore"] =  '#include <MeMCore.h>';
	Blockly.Arduino.variables_["mBotBuzzer"] =  'MeBuzzer buzzer;';
    return "buzzer.noTone();\n";
};

// Button
Blockly.Blocks['mBot_Button'] = {
	init: function () {
		this.setStyle("mBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/mBot-bianco.png",32, 28))
			.appendField(Blockly.Msg.mBotButton);
		this.setInputsInline(true);
		this.setOutput(true, "Boolean");
		this.setTooltip(Blockly.Msg.mBotButton_tooltip);
	}
};

Blockly.Arduino['mBot_Button'] = function (block) {
	const pin = 'A7';
	return ['(analogRead(' + pin + ')>10?false:true)', Blockly.Arduino.ORDER_ATOMIC];
};

// Ambient light
Blockly.Blocks['mBot_LightSensor'] = {
	init: function () {
		this.setStyle("mBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/mBot-bianco.png",32, 28))
			.appendField(Blockly.Msg.mBotLightSensor);
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setTooltip(Blockly.Msg.mBotLightSensor_tooltip);
	}
};

Blockly.Arduino['mBot_LightSensor'] = function (block) {
	const pin = 'A6';
	return [ 'map(analogRead(' + pin + '),0,1023,0,100)', Blockly.Arduino.ORDER_ATOMIC];
};

// Motor
Blockly.Blocks['mBot_Motor'] = {
	init: function () {
		this.setStyle("mBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/mBot-bianco.png",32, 28))
			.appendField(Blockly.Msg.mBotMotor);
		mBotSub.block_side(this);
		this.appendDummyInput()
			.appendField("  " + Blockly.Msg.mBotMotor_dir)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.mBotMotor_dir_dropdown), "DIR");
		this.appendValueInput("SPEED", "Number").setCheck("Number")
			.appendField("  " + Blockly.Msg.mBotMotor_speed);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setInputsInline(true);
		this.setOutput(false, "Number");
		this.setTooltip(Blockly.Msg.mBotMotor_tooltip)
	}
};

Blockly.Arduino['mBot_Motor'] = function (block) {
	let pin_dir1 = 7; // direction motor 1
	let pin_power1 = 6; // power motor 1

	let pin_dir2 = 4; // direction motor 2
	let pin_power2 = 5; // power motor 2

	// Speed (0..255)
	let speed = Blockly.Arduino.valueToCode(block, "SPEED", Blockly.Arduino.ORDER_ATOMIC);

	// Direction
	let dirCode = this.getFieldValue('DIR');
	let dir = (dirCode == 'FORWARD') ? true : false;

	let motor1 = "digitalWrite(" + pin_dir1 + "," + !dir + ");\n" + "analogWrite(" + pin_power1 + "," + speed + ");\n";
	let motor2 = "digitalWrite(" + pin_dir2 + "," + dir + ");\n" + "analogWrite(" + pin_power2 + "," + speed + ");\n";

	let code;

	// Side: select the motors
	let sideCode = this.getFieldValue('SIDE');
	if (sideCode == 'LEFT') {
		Blockly.Arduino.setups_["mBotMotor1"] = "pinMode(" + pin_dir1 + ",OUTPUT);";
		code = motor1;
	} else if (sideCode == 'RIGHT') {
		Blockly.Arduino.setups_["mBotMotor2"] = "pinMode(" + pin_dir2 + ",OUTPUT);";
		code = motor2;
	} else { // all
		Blockly.Arduino.setups_["mBotMotor1"] = "pinMode(" + pin_dir1 + ",OUTPUT);";
		Blockly.Arduino.setups_["mBotMotor2"] = "pinMode(" + pin_dir2 + ",OUTPUT);";
		code = motor1 + motor2;
	}
	
	return code;
};

// Linefollower sensor
Blockly.Blocks["mBot_Linefollower"] = {
	init: function () {
		this.setStyle("mBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/mBot-bianco.png",32, 28))
			.appendField(Blockly.Msg.mBotLinefollower)
			.appendField(Blockly.Msg.mbot_port)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.mbot_port_dropdown), "PORT");
		this.setInputsInline(false);
		this.setOutput(true, "Number");
		this.setTooltip(Blockly.Msg.mBotLinefollower);
		this.setTooltip(Blockly.Msg.mBotLinefollower_tooltip);
		this.setHelpUrl();
	}
};

Blockly.Arduino["mBot_Linefollower"] = function (block) {
	let port = mBotSub.port(block);

	Blockly.Arduino.includes_["mBotMeMCore"]='#include <MeMCore.h>';
	Blockly.Arduino.variables_["mBotLinefollower"] = 'MeLineFollower lineFinder(PORT_' + port + ');';
	
	return ["lineFinder.readSensors()", Blockly.Arduino.ORDER_NONE]
};

// Remote IR
Blockly.Blocks['mBot_RemoteIR'] = {
	init: function () {
		this.setStyle("mBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/mBot-bianco.png",32, 28))
			.appendField(Blockly.Msg.mbot_remoteIR);

		this.appendDummyInput()
			.appendField("|  " + Blockly.Msg.mbot_key1)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.mbot_remoteIR_dropdown), "KEY");

		this.appendDummyInput()
			.appendField(" " + Blockly.Msg.mbot_key2);

		this.setInputsInline(true);
		this.setOutput(true, "Boolean");
		this.setTooltip(Blockly.Msg.mbot_remoteIR_tooltip);
	}
};

Blockly.Arduino['mBot_RemoteIR'] = function (block) {
	Blockly.Arduino.includes_["mBotMeMCore"]='#include <MeMCore.h>';

	Blockly.Arduino.variables_["mBot_RemoteIR"] = 'MeIR ir;\n';
	Blockly.Arduino.setups_["mBot_RemoteIR"] = 'ir.begin();\n';

	let key = block.getFieldValue('KEY');
	let code = 'ir.keyPressed(' + key + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// Read temperature sensor
Blockly.Blocks["mBot_Temperature"] = {
	init: function () {
		this.setStyle("mBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/mBot-bianco.png",32, 28))
			.appendField(Blockly.Msg.mBotTemperature)
			.appendField("|  " + Blockly.Msg.mbot_port)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.mbot_port_dropdown), "PORT");

		this.appendDummyInput()
			.appendField(" " + Blockly.Msg.mbot_slot)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.mbot_slot_dropdown), "SLOT");

		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setTooltip(Blockly.Msg.mBotTemperature);
		this.setTooltip(Blockly.Msg.mBotTemperature_tooltip);
		this.setHelpUrl("https://www.makeblock.com/project/temperature-sensor-waterproofds18b20");
	}
};

Blockly.Arduino["mBot_Temperature"] = function (block) {
	let port = this.getFieldValue('PORT');
	let slot = this.getFieldValue('SLOT');
	let slotId = (slot=='1') ? 1 : 2;
	Blockly.Arduino.includes_["mBotMeMCore"]='#include <MeMCore.h>';
	Blockly.Arduino.variables_["mBotTemperature_" + port + "_" + slotId] = 'MeTemperature temperature_' + port + '_' + slotId + '(' + port + ',' + slotId +');\n'
	let code = 'temperature_' + port + '_' + slotId + '.temperature()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// Sound sensor (microphone)
// https://www.makeblock.com/project/me-sound-sensor
// Connect on J3(pin A3) or J4(pin A1)
Blockly.Blocks["mBot_Sound"] = {
	init: function () {
		this.setStyle("mBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/mBot-bianco.png",32, 28))
			.appendField(Blockly.Msg.mBotSound)
			.appendField(Blockly.Msg.mbot_port)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.mbot_port_dropdown), "PORT");
		this.setInputsInline(false);
		this.setOutput(true, "Number");
		this.setTooltip(Blockly.Msg.mBotSound);
		this.setTooltip(Blockly.Msg.mBotSound_tooltip);
		this.setHelpUrl("https://www.makeblock.com/project/me-sound-sensor");
	}
};

Blockly.Arduino["mBot_Sound"] = function (block) {
	let port = mBotSub.port(block);
	let sound = 0;
	Blockly.Arduino.includes_["mBotMeMCore"]='#include <MeMCore.h>';
	Blockly.Arduino.variables_["mBotSound"] = 'MeSoundSensor soundSensor_' + port + '(' + port + ');';
	sound = 'soundSensor_' + port + '.strength()'; // Quiet: 0-483; noisy: 483-980
	return [ 'map(' + 'soundSensor_' + port + '.strength()' + ',0,1023,0,100)', Blockly.Arduino.ORDER_ATOMIC];
};

// Show data on 7-segment display
Blockly.Blocks["mBot_Seg7"] = {
	init: function () {
		this.setStyle("mBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/mBot-bianco.png",32, 28))
			.appendField(Blockly.Msg.mBotSeg7)
			.appendField(Blockly.Msg.mbot_port)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.mbot_port_dropdown), "PORT");

		this.appendValueInput("DATA")
			.appendField("  " + Blockly.Msg.Number)
			.setCheck("Number");

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.mBotSeg7);
		this.setTooltip(Blockly.Msg.mBotSeg7_tooltip);
		this.setHelpUrl("https://www.makeblock.com/project/me-7-segment-display");
	}
};

Blockly.Arduino["mBot_Seg7"] = function (block) {
	let port = mBotSub.port(block);
	let data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.includes_["mBotMeMCore"]='#include <MeMCore.h>';
	Blockly.Arduino.variables_["mBotSeg7"] = 'Me7SegmentDisplay seg7_' + port + '(' + port + ');';
	return 'seg7_' + port + '.display(' + data + ');\n';
};

//----- MeLEDMatrix -----//
Blockly.Blocks["mBot_LEDMatrixDraw"] = {
	init: function () {
		this.setStyle("mBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/mBot-bianco.png",32, 28))
			.appendField(Blockly.Msg.mBotLEDMatrixDraw)
			.appendField("                                    " + Blockly.Msg.mbot_port)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.mbot_port_dropdown), "PORT");

		mBotSub.block_bright_coord(this, Blockly.ALIGN_RIGHT);

		Blockly.FieldCheckbox.CHECK_CHAR = "⚪"; // "⚫" "▉" "🔲"

		this.appendDummyInput().appendField('   ')
			.appendField('1    2    3    4  ').appendField('5    6    7    8   ')
			.appendField('9  10  11  12').appendField('13  14  15  16')
	
		// 8 rows, 16 columns
		for (let row = 1; row<=8; row++) {
			this.appendDummyInput().appendField('' + row + ' ')  // 1st row (128)
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (9-row) + '_1')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (9-row) + '_2')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (9-row) + '_3')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (9-row) + '_4')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (9-row) + '_5')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (9-row) + '_6')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (9-row) + '_7')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (9-row) + '_8')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (9-row) + '_9')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (9-row) + '_10')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (9-row) + '_11')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (9-row) + '_12')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (9-row) + '_13')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (9-row) + '_14')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (9-row) + '_15')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (9-row) + '_16')
		}

		this.setInputsInline(false);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.mBotLEDMatrix_tooltip);
		this.setHelpUrl("https://www.makeblock.com/project/me-led-matrix-8x16");
	}
};

Blockly.Arduino["mBot_LEDMatrixDraw"] = function (block) {
	let port = this.getFieldValue('PORT');
	let brightness = mBotSub.bright(block);
	let coord_x = mBotSub.coord_x(block);
	let coord_y = mBotSub.coord_y(block);

	Blockly.Arduino.includes_["mBotMeMCore"]='#include <MeMCore.h>';
	Blockly.Arduino.variables_["mBotLEDMatrix"] = 
		'MeLEDMatrix ledMtx_' + port + '(' + port + ');\n' +
		'unsigned char drawBuffer[16];\n' +
		'unsigned char *drawTemp;';

	Blockly.Arduino.setups_["mBotLEDMatrix"] = 'ledMtx_' + port + '.setColorIndex(1);\n';

	let code =
		'ledMtx_' + port + '.setBrightness(' + brightness + ');\n';

	// Set matrix
	let bb = new Array(16).fill(0);
	for (let i=8; i>=1; i--) {
		for (let j=1; j<=16; j++) {
			if (this.getFieldValue('PIXEL' + i + '_' + j) == 'TRUE') {
				bb[j-1] += 2**(i-1);
			}
		}
	}

	code += 'drawTemp = new unsigned char[16]{';
	for (let j=0; j<bb.length; j++) {
		code += bb[j] + ((j<bb.length-1) ? ',': '};\n');
	}

    code += 'memcpy(drawBuffer,drawTemp,16);\n' +
    		'free(drawTemp);\n' +
    		'ledMtx_' + port + '.drawBitmap(' + coord_x + ',' + coord_y + ',16,drawBuffer);\n';

	return  code;
}

Blockly.Blocks["mBot_LEDMatrixClear"] = {
	init: function () {
		this.setStyle("mBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/mBot-bianco.png",32, 28))
			.appendField(Blockly.Msg.mBotLEDMatrixClear)
			.appendField(" |")

		mBotSub.block_port(this);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.mBotLEDMatrixClear_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["mBot_LEDMatrixClear"] = function (block) {
	let port = this.getFieldValue('PORT');
	Blockly.Arduino.includes_["mBotMeMCore"]='#include <MeMCore.h>';
	Blockly.Arduino.variables_["mBotLEDMatrix"] = 
		'MeLEDMatrix ledMtx_' + port + '(' + port + ');\n' +
		'unsigned char drawBuffer[16];\n' +
		'unsigned char *drawTemp;';

	Blockly.Arduino.setups_["mBotRgbled"] = 'ledMtx_' + port + '.setColorIndex(1);\n';

	let code =
		'ledMtx_' + port + '.setBrightness(0);\n' +
		'drawTemp = new unsigned char[16]{0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};\n' +
		'memcpy(drawBuffer,drawTemp,16);\n' +
    	'free(drawTemp);\n' +
    	'ledMtx_' + port + '.drawBitmap(0,0,16,drawBuffer);\n';

	return  code;
}

Blockly.Blocks["mBot_LEDMatrixNumber"] = {
	init: function () {
		this.setStyle("mBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/mBot-bianco.png",32, 28))
			.appendField(Blockly.Msg.mBotLEDMatrix)
			.appendField(" |");

		mBotSub.block_port(this);

		this.appendValueInput("BRIGHTNESS")
			.appendField(" " +Blockly.Msg.mBotLEDMatrixBright)
			.setCheck("Number");

		this.appendValueInput("DATA")
			.appendField("  " + Blockly.Msg.Number)
			.setCheck("Number");

			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip(Blockly.Msg.mBotLEDMatrixNumber_tooltip);
			this.setHelpUrl("");
		}
};

Blockly.Arduino["mBot_LEDMatrixNumber"] = function (block) {
	let port = this.getFieldValue('PORT');
	let brightness = mBotSub.bright(block);
	let data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);

	Blockly.Arduino.includes_["mBotMeMCore"]='#include <MeMCore.h>';
	Blockly.Arduino.variables_["mBotLEDMatrix"] = 'MeLEDMatrix ledMtx_' + port + '(' + port + ');\n';

	Blockly.Arduino.variables_["mBotLEDMatrix"] = 
	'MeLEDMatrix ledMtx_' + port + '(' + port + ');\n' +
	'unsigned char drawBuffer[16];\n' +
	'unsigned char *drawTemp;';

	Blockly.Arduino.setups_["mBotRgbled"] = 'ledMtx_' + port + '.setColorIndex(1);\n';

	let code =
		'ledMtx_' + port + '.setBrightness(' + brightness + ');\n' +
		'ledMtx_' + port + '.showNum(' + data + ');\n';

	return  code;
}

Blockly.Blocks["mBot_LEDMatrixText"] = {
	init: function () {
		this.setStyle("mBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/mBot-bianco.png",32, 28))
			.appendField(Blockly.Msg.mBotLEDMatrix)
			.appendField(" |");

		mBotSub.block_port(this);
		mBotSub.block_bright_coord(this);

		this.appendDummyInput()
			.appendField("  " + Blockly.Msg.Text)
			.appendField(new Blockly.FieldTextInput("  "), "TEXT")

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.mBotTemperature_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["mBot_LEDMatrixText"] = function (block) {
	let port = this.getFieldValue('PORT');
	let brightness = mBotSub.bright(block);
	let coord_x = mBotSub.coord_x(block);
	let coord_y = mBotSub.coord_y(block);

	//let text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
	let text = block.getFieldValue("TEXT");
	console.log(text);

	Blockly.Arduino.includes_["mBotMeMCore"]='#include <MeMCore.h>';
	Blockly.Arduino.variables_["mBotLEDMatrix"] = 'MeLEDMatrix ledMtx_' + port + '(' + port + ');\n';

	Blockly.Arduino.variables_["mBotLEDMatrix"] = 
	'MeLEDMatrix ledMtx_' + port + '(' + port + ');\n' +
	'unsigned char drawBuffer[16];\n' +
	'unsigned char *drawTemp;';

	Blockly.Arduino.setups_["mBotRgbled"] = 'ledMtx_' + port + '.setColorIndex(1);\n';

	// ledMtx_1.drawStr(2,5+7,"Hi"); // x=2, y=5
	let code =
		'ledMtx_' + port + '.setBrightness(' + brightness + ');\n' +
		'ledMtx_' + port + '.drawStr(' + coord_x + ',7+' + coord_y + ', \"' + text + '\");\n';

	return  code;
}

Blockly.Blocks["mBot_LEDMatrixSmileys"] = {
	init: function () {

		this.setStyle("mBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/mBot-bianco.png",32, 28))
			.appendField(Blockly.Msg.mBotLEDMatrix)
			.appendField(" |");

		mBotSub.block_port(this);
		mBotSub.block_bright_coord(this);

		this.appendDummyInput()
			.appendField("  ")
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.mBotLEDMatrixSmileys_dropdown), "SMILE");

			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip(Blockly.Msg.mBotLEDMatrixSmileys_tooltip);
			this.setHelpUrl("");
		}
};

Blockly.Arduino["mBot_LEDMatrixSmileys"] = function (block) {
	let port = mBotSub.port(block);
	let brightness = mBotSub.bright(block);
	let coord_x = mBotSub.coord_x(block);
	let coord_y = mBotSub.coord_y(block);
	let smile = this.getFieldValue('SMILE');

	Blockly.Arduino.includes_["mBotMeMCore"]='#include <MeMCore.h>';
	Blockly.Arduino.variables_["mBotLEDMatrix"] = 
		'MeLEDMatrix ledMtx_' + port + '(' + port + ');\n' +
		'unsigned char drawBuffer[16];\n' +
		'unsigned char *drawTemp;';

	Blockly.Arduino.setups_["mBotRgbled"] = 'ledMtx_' + port + '.setColorIndex(1);\n';

	let code =
		'ledMtx_' + port + '.setBrightness(' + brightness + ');\n' +
		'drawTemp = new unsigned char[16]{' + smile + '};\n' +
		'memcpy(drawBuffer,drawTemp,16);\n' +
    	'free(drawTemp);\n' +
		'ledMtx_' + port + '.drawBitmap(' + coord_x + ',' + coord_y + ',16,drawBuffer);\n';

	return  code;
}

// Draw LED matrix with data bytes
Blockly.Blocks["mBot_LEDMatrixData"] = {
	init: function () {

		this.setStyle("mBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/mBot-bianco.png",32, 28))
			.appendField(Blockly.Msg.mBotLEDMatrix)
			.appendField(" |");

		mBotSub.block_port(this);
		mBotSub.block_bright_coord(this);

		this.appendDummyInput()
			.appendField(" " + Blockly.Msg.Data)
			.appendField(new Blockly.FieldTextInput("        "), "DATA");

			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip(Blockly.Msg.mBotLEDMatrixData_tooltip);
			this.setHelpUrl("");
		}
};

Blockly.Arduino["mBot_LEDMatrixData"] = function (block) {
	let port = mBotSub.port(block);
	let brightness = mBotSub.bright(block);
	let coord_x = mBotSub.coord_x(block);
	let coord_y = mBotSub.coord_y(block);
	let data = block.getFieldValue("DATA").trim();

	Blockly.Arduino.includes_["mBotMeMCore"]='#include <MeMCore.h>';
	Blockly.Arduino.variables_["mBotLEDMatrix"] = 
		'MeLEDMatrix ledMtx_' + port + '(' + port + ');\n' +
		'unsigned char drawBuffer[16];\n' +
		'unsigned char *drawTemp;';

	Blockly.Arduino.setups_["mBotRgbled"] = 'ledMtx_' + port + '.setColorIndex(1);\n';

	let code =
		'ledMtx_' + port + '.setBrightness(' + brightness + ');\n' +
		'drawTemp = new unsigned char[16]{' + data + '};\n' +
		'memcpy(drawBuffer,drawTemp,16);\n' +
    	'free(drawTemp);\n' +
		'ledMtx_' + port + '.drawBitmap(' + coord_x + ',' + coord_y + ',16,drawBuffer);\n';

	return  code;
}

//----- mBotSub -----//
let mBotSub = {};

mBotSub.block_port = function(block, align) {
	if (!align) align = Blockly.ALIGN_LEFT;
	block.appendDummyInput()
		.appendField(Blockly.Msg.mbot_port)
		.setAlign(align)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.mbot_port_dropdown), "PORT");
}

mBotSub.block_side = function(block, align) {
	if (!align) align = Blockly.ALIGN_LEFT;
	block.appendDummyInput()
		.setAlign(align)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.mBotMotor_side_dropdown), "SIDE");
}

mBotSub.block_bright_coord = function(block, align) {
	if (!align) align = Blockly.ALIGN_LEFT;

	block.appendValueInput("BRIGHTNESS")
		.appendField(" ")
		.appendField(Blockly.Msg.mBotLEDMatrixBright) // ("Brightness");
		.setAlign(align)
		.setCheck("Number");

	block.appendValueInput("COORD_X", "Number").setCheck("Number")
		.setAlign(align)
		.appendField(Blockly.Msg.coordX);

	block.appendValueInput("COORD_Y", "Number").setCheck("Number")
		.setAlign(align)
		.appendField(Blockly.Msg.coordY);
};

mBotSub.port = function(block) {
	return block.getFieldValue('PORT');
}

mBotSub.bright = function(block) {
	return Blockly.Arduino.valueToCode(block, "BRIGHTNESS", Blockly.Arduino.ORDER_NONE);
}

mBotSub.coord_x = function(block) {
	return Blockly.Arduino.valueToCode(block, "COORD_X", Blockly.Arduino.ORDER_NONE);
}

mBotSub.coord_y = function(block) {
	return Blockly.Arduino.valueToCode(block, "COORD_Y", Blockly.Arduino.ORDER_NONE);
}
