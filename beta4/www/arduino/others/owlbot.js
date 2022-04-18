/**
 * @package: UnoBlockly
 * @file owlbot.js
 * @version 0.1 (18-04-2022)
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 * @description Code for Elegoo OwlBot

	Connectors:
		RJ25#1 (J3: S1=A0 ; S2=A1)  [Line follower]
		RJ25#2 (J5: S1=A2 ; S2=D4)  [Ultrasound]
		RJ25#3 (J4: S1=D13; S2=D12) [Matrix 128 LED (TM1640)]
		RJ25#4 (J6: S1=D11 ; S2=D3) [Not used]
	
    Switch Mode: D2
    Buzzer: D5

	Libraries: OwlBot
	   OwlBot_TrackSensor:
	    void init();
    	int getDataInt();
    	int *getDataArray();

	   OwlBot_DistanceSensor:
		void init();
		int getDistance_mm();

	   OwlBot_Motor:
	    void init();
    	void stop();
    	void run255(bool rightSide, bool dir, int speed);
    	void run100(bool rightSide, bool dir, int speed);

	   OwlBot_MatrixDisplay:
    	void TM1640Init();
    	void TM1640Init(byte clockPin, byte dataPin, byte bright);
    	void TM1640ClearDisplay(void);
    	void TM1640SetBrightness(byte bright);
    	void TM1640SetAllColumns(byte bval);
    	void TM1640Draw(byte x, byte cx[], byte width);
    	void TM1640PrintInt(int value);
    	void TM1640PrintFloat(float value, byte dec);

	   OwlBot_MPU6050:
	    void begin(byte accelRange, byte gyrRng);
    	int16_t *getAccelRaw(void); // Get acceleration[x, y, z] as array[3]
    	float *getAccel(byte accRng);
		float getAccel(byte i, byte accRng);
    	int16_t *getGyroRaw(void); // Get gyro[x, y, z] as array[3]
    	float *getGyro(byte gyroRng);
		float getGyro(byte i, byte accRng);
 */

'use strict';

// Buzzer pin: D5
Blockly.Blocks['OwlBot_BuzzerPin'] = {
	init: function () {
		this.setStyle("owlBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/OwlBot.png",32, 28))
			.appendField(Blockly.Msg.OwlBotBuzzerPin);
		this.setOutput(true);
		this.setTooltip(Blockly.Msg.OwlBotBuzzerPin_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['OwlBot_BuzzerPin'] = function (block) {
	return ['5', Blockly.Arduino.ORDER_ATOMIC];
};

// Button pin: D2
Blockly.Blocks['OwlBot_Button'] = {
	init: function () {
		this.setStyle("OwlBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/OwlBot.png",32, 28))
			.appendField(Blockly.Msg.Devices_Button);
		this.setInputsInline(true);
		this.setOutput(true, "Boolean");
		this.setTooltip(Blockly.Msg.OwlBotButton_tooltip);
	}
};

Blockly.Arduino['OwlBot_Button'] = function (block) {
	Blockly.Arduino.setups_['OwlBot_Button'] = 'pinMode(2,INPUT);';
	return ['digitalRead(2)', Blockly.Arduino.ORDER_ATOMIC];
};

// Read ultrasonic distance
Blockly.Blocks["OwlBot_Distance"] = {
	init: function () {
		this.setStyle("owlBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/OwlBot.png",32, 28))
			.appendField(Blockly.Msg.OwlBotDistance);
		this.setInputsInline(false);
		this.setOutput(true, "Number");
		this.setTooltip(Blockly.Msg.OwlBotDistance_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["OwlBot_Distance"] = function (block) {
	Blockly.Arduino.includes_["OwlBotDistance"]='#include <OwlBot_DistanceSensor.h>';
	Blockly.Arduino.variables_["OwlBotDistance"] = "OwlBot_DistanceSensor distance;";
	Blockly.Arduino.setups_["OwlBotDistance"] = "distance.init();";
	let code = 'distance.getDistance_mm()/10';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// OwlBot_RgbLed
Blockly.Blocks['OwlBot_Rgbled'] = {
	init: function () {
		this.setStyle("owlBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/OwlBot.png",32, 28))
			.appendField(Blockly.Msg.OwlBotRgbled)
			.appendField("|  ");
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_LEFT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.OwlBotRgbled_side_dropdown), "POS");

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
		this.setTooltip(Blockly.Msg.OwlBotRgbled_tooltip);
	}
};

Blockly.Arduino['OwlBot_Rgbled'] = function (block) {
	// RGB_PIN = 10; LED_TYPE = NEOPIXEL (aka WS2812); NUM_LEDS = 5
	let pos = this.getFieldValue('POS');
	let inx;
	// 0: rear; 1: right; 2: front; 3: left; 4: center
	if (pos == 'REAR') inx = 0;
	else if (pos == 'RIGHT') inx = 1;
	else if (pos == 'FRONT') inx = 2;
	else if (pos == 'LEFT') inx = 3;
	else if (pos == 'CENTER') inx = 4;
	else inx = 5; // ALL
		
	let red = Blockly.Arduino.valueToCode(this, "IRED", Blockly.Arduino.ORDER_NONE);
	let green= Blockly.Arduino.valueToCode(this, "IGREEN", Blockly.Arduino.ORDER_NONE);
	let blue = Blockly.Arduino.valueToCode(this, "IBLUE", Blockly.Arduino.ORDER_NONE);

	Blockly.Arduino.includes_["OwlRGBLED"] = '#include <FastLED.h>';
	Blockly.Arduino.variables_["OwlRGBLED"] = 'CRGB leds[5];'; // 5 LEDs

	// FastLED.addLeds<NEOPIXEL, RGB_PIN>(leds, NUM_LEDS);  FastLED.setBrightness(BRIGHTNESS);
	Blockly.Arduino.setups_["OwlRGBLED"] = 'FastLED.addLeds<NEOPIXEL, 10>(leds, 5);';
	let code = '';
	if (inx==5) { // Set all LEDs
		for (let i=0; i<5; i++) {
			code += 'leds[' + i + '] = CRGB(' + red + ',' + green + ',' + blue + ');\n';
		}
	} else {
		code  = 'leds[' + inx + '] = CRGB(' + red + ',' + green + ',' + blue + ');';
	}
	
	code += '\nFastLED.show();\n';
	return code;
};

// Button
Blockly.Blocks['OwlBot_Button'] = {
	init: function () {
		this.setStyle("owlBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/OwlBot.png",32, 28))
			.appendField(Blockly.Msg.OwlBotButton);
		this.setInputsInline(true);
		this.setOutput(true, "Boolean");
		this.setTooltip(Blockly.Msg.OwlBotButton_tooltip);
	}
};

Blockly.Arduino['OwlBot_Button'] = function (block) {
	let pin = '2';
	Blockly.Arduino.setups_['OwlBotButton'] = 'pinMode(' + pin + ',INPUT);';
	let code = 'digitalRead(' + pin + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// Motor
Blockly.Blocks['OwlBot_Motor'] = {
	init: function () {
		this.setStyle("owlBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/OwlBot.png",32, 28))
			.appendField(Blockly.Msg.OwlBotMotor);

		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.OwlBotMotor_side_dropdown), "SIDE");

		this.appendDummyInput()
			.appendField("  " + Blockly.Msg.OwlBotMotor_dir)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.OwlBotMotor_dir_dropdown), "DIR");
		this.appendValueInput("SPEED", "Number").setCheck("Number")
			.appendField("  " + Blockly.Msg.OwlBotMotor_speed);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setInputsInline(true);
		this.setOutput(false, "Number");
		this.setTooltip(Blockly.Msg.OwlBotMotor_tooltip)
	}
};

Blockly.Arduino['OwlBot_Motor'] = function (block) {
	Blockly.Arduino.includes_["OwlBotMotor"]='#include <OwlBot_Motor.h>';
	Blockly.Arduino.variables_["OwlBotMotor"] = "OwlBot_Motor motor;";
	Blockly.Arduino.setups_["OwlBotMotor"] = "motor.init();";

	// Speed (0..100)
	let speed = Blockly.Arduino.valueToCode(block, "SPEED", Blockly.Arduino.ORDER_ATOMIC);

	// Direction
	let dirCode = this.getFieldValue('DIR');
	let dir = (dirCode == 'FORWARD') ? true : false;

	let motor1 = "motor.run100(true, " + dir  + ", " + speed + ");\n";
	let motor2 = "motor.run100(false, " + dir  + ", " + speed + ");\n";

	let code;

	// Side: select the motors
	let sideCode = this.getFieldValue('SIDE');
	if (sideCode == 'LEFT') {
		code = motor2;
	} else if (sideCode == 'RIGHT') {
		code = motor1;
	} else { // all
		code = motor1 + motor2;
	}
	
	return code;
};

// Linefollower sensor
Blockly.Blocks["OwlBot_IRTrack"] = {
	init: function () {
		this.setStyle("owlBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/OwlBot.png",32, 28))
			.appendField(Blockly.Msg.OwlBotLinefollower)
		this.setInputsInline(false);
		this.setOutput(true, "Number");
		this.setTooltip(Blockly.Msg.OwlBotLinefollower);
		this.setTooltip(Blockly.Msg.OwlBotLinefollower_tooltip);
		this.setHelpUrl();
	}
};

Blockly.Arduino["OwlBot_IRTrack"] = function (block) {
	Blockly.Arduino.includes_["OwlBotIRTrack"]='#include "OwlBot_TrackSensor.h";';
	Blockly.Arduino.variables_["OwlBotIRTrack"] = "OwlBot_TrackSensor trackSensor;";
	Blockly.Arduino.setups_["OwlBotIRTrack"] = "trackSensor.init();";
	let code = 'trackSensor.getDataInt();';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//----- MatrixDisplay -----//
Blockly.Blocks["OwlBot_LEDMatrixClear"] = {
	init: function () {
		this.setStyle("owlBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/OwlBot.png",32, 28))
			.appendField(Blockly.Msg.OwlBotLEDMatrixClear);
			
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip(Blockly.Msg.OwlBotLEDMatrixClear_tooltip);
			this.setHelpUrl("");
	}
};

Blockly.Arduino["OwlBot_LEDMatrixClear"] = function (block) {
	Blockly.Arduino.includes_["OwlBotMxDisplay"]='#include <OwlBot_MatrixDisplay.h>';
	Blockly.Arduino.variables_["OwlBotMxDisplay"] = 'OwlBot_MatrixDisplay mxDisplay;';
	Blockly.Arduino.setups_["OwlBotMxDisplay"] = 'mxDisplay.TM1640Init();\n';

	return 'mxDisplay.TM1640ClearDisplay();\n';
}

Blockly.Blocks["OwlBot_LEDMatrixSmileys"] = {
	init: function () {
		this.setStyle("owlBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/OwlBot.png",32, 28))
			.appendField(Blockly.Msg.OwlBotLEDMatrix);

		this.appendDummyInput()
			.appendField("  ")
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.OwlBotLEDMatrixSmileys_dropdown), "SMILE");

			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip(Blockly.Msg.OwlBotLEDMatrixSmileys_tooltip);
			this.setHelpUrl("");
		}
};

Blockly.Arduino["OwlBot_LEDMatrixSmileys"] = function (block) {
	let smile = this.getFieldValue('SMILE');
	Blockly.Arduino.includes_["OwlBotMxDisplay"]='#include <OwlBot_MatrixDisplay.h>';
	Blockly.Arduino.variables_["OwlBotMxDisplay"] = 'OwlBot_MatrixDisplay mxDisplay;';
	Blockly.Arduino.setups_["OwlBotMxDisplay"] = 'mxDisplay.TM1640Init();\n';
	let code = 'mxDisplay.TM1640Draw(0, mxDisplay.EXPRESSIONS[' + smile + '], 16);\n';
	return  code;
}

Blockly.Blocks["OwlBot_LEDMatrixBrightness"] = {
	init: function () {
		this.setStyle("owlBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/OwlBot.png",32, 28))
			.appendField(Blockly.Msg.OwlBotLEDMatrix)
			.appendField(" |");

		this.appendValueInput("BRIGHTNESS")
			.appendField(" ")
			.appendField(Blockly.Msg.OwlBotLEDMatrixBright)
			.setCheck('Number')
			.setAlign(Blockly.ALIGN_RIGHT);

			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip(Blockly.Msg.OwlBotLEDMatrixNumber_tooltip);
			this.setHelpUrl("");
	}
};

Blockly.Arduino["OwlBot_LEDMatrixBrightness"] = function (block) {
	let brightness = Blockly.Arduino.valueToCode(block, 'BRIGHTNESS', Blockly.Arduino.ORDER_NONE);

	Blockly.Arduino.includes_["OwlBotMxDisplay"]='#include <OwlBot_MatrixDisplay.h>';
	Blockly.Arduino.variables_["OwlBotMxDisplay"] = 'OwlBot_MatrixDisplay mxDisplay;';
	Blockly.Arduino.setups_["OwlBotMxDisplay"] = 'mxDisplay.TM1640Init();\n';

	return  'mxDisplay.TM1640SetBrightness(' + brightness + ');\n';
}

// OwlBot_LEDMatrixNumber
Blockly.Blocks["OwlBot_LEDMatrixNumber"] = {
	init: function () {
		this.setStyle("owlBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/OwlBot.png",32, 28))
			.appendField(Blockly.Msg.OwlBotLEDMatrix)
			.appendField(" |");

		this.appendValueInput("DATA")
			.appendField("  " + Blockly.Msg.Number)
			.setCheck("Number");

			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip(Blockly.Msg.OwlBotLEDMatrixNumber_tooltip);
			this.setHelpUrl("");
		}
};

Blockly.Arduino["OwlBot_LEDMatrixNumber"] = function (block) {
	let brightness = Blockly.Arduino.valueToCode(block, 'BRIGHTNESS', Blockly.Arduino.ORDER_NONE);
	let data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);

	Blockly.Arduino.includes_["OwlBotMxDisplay"]='#include <OwlBot_MatrixDisplay.h>';
	Blockly.Arduino.variables_["OwlBotMxDisplay"] = 'OwlBot_MatrixDisplay mxDisplay;';
	Blockly.Arduino.setups_["OwlBotMxDisplay"] = 'mxDisplay.TM1640Init();\n';

	return 'mxDisplay.TM1640PrintNumber(' +  data + ');\n';
}

Blockly.Blocks["OwlBot_LEDMatrixFloat"] = {
	init: function () {
		this.setStyle("owlBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/OwlBot.png",32, 28))
			.appendField(Blockly.Msg.OwlBotLEDMatrix)
			.appendField(" |");

		this.appendValueInput("DATA")
			.appendField("  " + Blockly.Msg.Number)
			.setCheck("Number");

		this.appendDummyInput()
			.appendField(Blockly.Msg.TEXT_FROM_FLOAT_DECIMAL)

		this.appendValueInput("DEC")
			.setCheck("Number")
			.setAlign(Blockly.ALIGN_RIGHT);

			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip(Blockly.Msg.OwlBotLEDMatrixNumber_tooltip);
			this.setHelpUrl("");
		}
};

Blockly.Arduino["OwlBot_LEDMatrixFloat"] = function (block) {
	let dec = Blockly.Arduino.valueToCode(this, "DEC", Blockly.Arduino.ORDER_NONE);
	let data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);

	Blockly.Arduino.includes_["OwlBotMxDisplay"]='#include <OwlBot_MatrixDisplay.h>';
	Blockly.Arduino.variables_["OwlBotMxDisplay"] = 'OwlBot_MatrixDisplay mxDisplay;';
	Blockly.Arduino.setups_["OwlBotMxDisplay"] = 'mxDisplay.TM1640Init();\n';

	return 'mxDisplay.TM1640PrintFloat(' +  data + ','+ dec + ');\n';
}

//----- OwlBot_LEDMatrixDraw -----//
Blockly.Blocks["OwlBot_LEDMatrixDraw"] = {
	init: function () {
		this.setStyle("owlBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/OwlBot.png",32, 28))
			.appendField(Blockly.Msg.OwlBotLEDMatrixDraw);

	this.appendValueInput("COORD_X")
		.appendField(Blockly.Msg.OwlBotCoordX)
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT);
		
		Blockly.FieldCheckbox.CHECK_CHAR = "⚪"; // "⚫" "▉" "🔲"

		this.appendDummyInput().appendField('   ')
			.appendField('1    2    3    4  ').appendField('5    6    7    8   ')
			.appendField('9  10  11  12').appendField('13  14  15  16')
	
		// 8 rows, 16 columns
		for (let row = 1; row<=8; row++) {
			this.appendDummyInput().appendField('' + row + ' ')  // 1st row (128)
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (row) + '_1')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (row) + '_2')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (row) + '_3')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (row) + '_4')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (row) + '_5')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (row) + '_6')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (row) + '_7')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (row) + '_8')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (row) + '_9')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (row) + '_10')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (row) + '_11')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (row) + '_12')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (row) + '_13')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (row) + '_14')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (row) + '_15')
				.appendField(new Blockly.FieldCheckbox("FALSE"), 'PIXEL' + (row) + '_16')
		}

		this.setInputsInline(false);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.OwlBotLEDMatrix_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["OwlBot_LEDMatrixDraw"] = function (block) {
	let coord_x = Blockly.Arduino.valueToCode(block, "COORD_X", Blockly.Arduino.ORDER_NONE);
	
	Blockly.Arduino.includes_["OwlBotMxDisplay"]='#include <OwlBot_MatrixDisplay.h>';
	Blockly.Arduino.variables_["OwlBotMxDisplay"] = 'OwlBot_MatrixDisplay mxDisplay;';
	Blockly.Arduino.setups_["OwlBotMxDisplay"] = 'mxDisplay.TM1640Init();\n';

	let code = 'mxDisplay.TM1640Draw(' +  coord_x + ', new unsigned uint8_t[16]{';

	// Set matrix
	let bb = new Array(16).fill(0);
	for (let i=8; i>=1; i--) {
		for (let j=1; j<=16; j++) {
			if (this.getFieldValue('PIXEL' + i + '_' + j) == 'TRUE') {
				bb[j-1] += 2**(i-1);
			}
		}
	}

	for (let j=0; j<bb.length; j++) {
		code += bb[j] + ((j<bb.length-1) ? ',': '}');
	}

	code += ', 16);\n';

	return  code;
}

// Draw LED matrix with data bytes
Blockly.Blocks["OwlBot_LEDMatrixData"] = {
	init: function () {

		this.setStyle("owlBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/OwlBot.png",32, 28))
			.appendField(Blockly.Msg.OwlBotLEDMatrix)
			.appendField(" |");

		this.appendValueInput("COORD_X")
			.appendField(Blockly.Msg.coordX)
			.setCheck("Number")
			.setAlign(Blockly.ALIGN_RIGHT);

		this.appendDummyInput()
			.appendField(" " + Blockly.Msg.Data)
			.appendField(new Blockly.FieldTextInput("        "), "DATA");

			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip(Blockly.Msg.OwlBotLEDMatrixData_tooltip);
			this.setHelpUrl("");
		}
};

Blockly.Arduino["OwlBot_LEDMatrixData"] = function (block) {
	let coord_x = Blockly.Arduino.valueToCode(block, "COORD_X", Blockly.Arduino.ORDER_NONE);
	let data = block.getFieldValue("DATA").trim();
	
	Blockly.Arduino.includes_["OwlBotMxDisplay"]='#include <OwlBot_MatrixDisplay.h>';
	Blockly.Arduino.variables_["OwlBotMxDisplay"] = 'OwlBot_MatrixDisplay mxDisplay;';
	Blockly.Arduino.setups_["OwlBotMxDisplay"] = 'mxDisplay.TM1640Init();\n';

	return 'mxDisplay.TM1640Draw(' +  coord_x + ', new unsigned uint8_t[16]{' + data + '}, 16);\n';
}

//--- MPU6050 ---//
Blockly.Blocks["OwlBot_MPU6050_values"] = {
	init: function () {
		this.setStyle("owlBot_blocks");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/devices/OwlBot.png",32, 28))
		.appendField(Blockly.Msg.devices_mpu6050)
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.devices_mpu6050_accel, '0'],
			[Blockly.Msg.devices_mpu6050_gyro, '1']
		]), "TYPE")
		.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg.coordX, '0'],
				[Blockly.Msg.coordY, '1'],
				[Blockly.Msg.coordZ, '2']
			]), "AXIS");
		this.setHelpUrl("");
		this.setOutput(true, "Number");
		this.setTooltip(Blockly.Msg.devices_mpu6050_tooltip);
	}
};

Blockly.Arduino["OwlBot_MPU6050_values"] = function (block) {
	Blockly.Arduino.includes_["OwlBotMPU6050"]='#include "OwlBot_MPU6050.h"';
	Blockly.Arduino.variables_["OwlBotMPU6050"] = "MPU6050 mpu;";
	Blockly.Arduino.setups_["OwlBotMPU6050"] = "mpu.begin(0, 0);";

	let type = this.getFieldValue('TYPE');
	let axis = this.getFieldValue('AXIS');
	let code;
	switch (axis) {
		case '0':
			if (type==0) code = 'mpu.getAccel(0, 0)';
			else code = 'mpu.getGyro(0, 0)';
			break;
		case '1':
			if (type==0) code = 'mpu.getAccel(1, 0)';
			else code = 'mpu.getGyro(1, 0)';
			break;
		case '2':
			if (type==0) code = 'mpu.getAccel(2, 0)';
			else code = 'mpu.getGyro(2, 0)';
			break;
		default:
			code = 'mpu.getAccel(0, 0)';
			break;
	}

	return [code, Blockly.Arduino.ORDER_ATOMIC]
};

// Read battery voltage
Blockly.Blocks["OwlBot_Battery"] = {
	init: function () {
		this.setStyle("owlBot_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/devices/OwlBot.png",32, 28))
			.appendField(Blockly.Msg.OwlBotBattery);
		this.setInputsInline(false);
		this.setOutput(true, "Number");
		this.setTooltip(Blockly.Msg.OwlBotBattery_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["OwlBot_Battery"] = function (block) {
	return ['0.03747149 * analogRead(17)', Blockly.Arduino.ORDER_ATOMIC];
};
