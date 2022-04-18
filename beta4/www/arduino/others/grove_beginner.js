/**
 * @package: UnoBlockly
 * @file grove_beginner.js
 * @version 0.1 (20-07-2021)
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 * @description Code for Grove Beginner Kit

 	Board: Seeeduino Lotus
	
	Pin-mapping:
		D4 Red LED
		D5 Buzzer
		D6 Button
		A0 Potenziometer
		A6 Light sensor
		A2 Sound sensor
		D3 DHT11
	
	I2C addresses:
		0x19 Accelerometer
		0x77 Barometer
		0x78 OLED Display

 	Libraries:
		Grove_-_Barometer_Sensor_BMP280
		DHT_sensor_library
		Grove_Accelerometer_Sensor_LIS3DHTR
		U8g2

	Include:
		['GroveseeedDTH'] = '#include "DHT.h"';
		["bmp280init"] = '#include <Seeed_BMP280.h>';
		["lis3dhtr"] = '#include <LIS3DHTR.h>';
		["ssd1315"] = '#include <U8x8lib.h>';
	
	Variables:
		["bmp280init"] = "BMP280 bmp;";
		["lis3dhtr"] = "LIS3DHTR<TwoWire> lis;";
		["ssd1315"] = "U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(U8X8_PIN_NONE);";
		['begin_dht_' + pin] = 'DHT dht_' + pin + '(' + pin + ',DHT11);';
	
	Setups:
		['bmp280init'] = "bmp.init();";
		["lis3dhtr"] = 'lis.begin(Wire, 0x19);\n  lis.setFullScaleRange(LIS3DHTR_RANGE_2G);\n  lis.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);\n  lis.setHighSolution(true);';
		["setup_u8x8"] = 'u8x8.begin();\n  u8x8.setFont(u8x8_font_amstrad_cpc_extended_f);\n  u8x8.setFlipMode(' + flip + ');\n';
		['Led_grove'] = 'pinMode(' + pinLed + ',OUTPUT);';
		['Button_grove'] = 'pinMode(' + pin + ',INPUT);';
		['setup_input_' + pin] = 'dht_' + pin + '.begin();';

 */

"use strict";

// LED (D4)
Blockly.Blocks['GroveseeedLed'] = {
	init: function () {
		this.setStyle("seeedbeg_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.GroveseeedLed)
			.appendField(Blockly.Msg.Pin)
		this.appendValueInput("PIN")
			.setCheck(['Number','String']);
		this.appendDummyInput()
			.appendField(Blockly.Msg.State)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_LED_STATUS), 'STATUS');
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.GroveseeedLedtooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['GroveseeedLed'] = function (block) {
	let dropdown = block.getFieldValue('STATUS');
	let pinLed = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['devices_Led'] = 'pinMode(' + pinLed + ',OUTPUT);';
	return 'digitalWrite(' + pinLed + ', ' + dropdown + ');\n'
};

// Button (D6)
Blockly.Blocks['GroveseeedButton'] = {
	init: function () {
		this.setStyle("seeedbeg_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.GroveseeedButton)
			.appendField(Blockly.Msg.Pin)
		this.appendValueInput("PIN")
			.setCheck(['Number','String']);
		this.setInputsInline(true);
		this.setOutput(true, "Boolean");
		this.setTooltip(Blockly.Msg.GroveseeedButton_tooltip)
	}
};

Blockly.Arduino['GroveseeedButton'] = function (block) {
	let pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['GroveseeedButton'] = 'pinMode(' + pin + ',INPUT);';
	let code = 'digitalRead(' + pin + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// Potenziometer encoder (A0)
Blockly.Blocks['GroveseeedPotentiometer'] = {
	helpUrl: '',
	init: function () {
		this.setStyle("seeedbeg_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.GroveseeedPotentiometer)
			.appendField(Blockly.Msg.Pin)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.analogPins), 'PIN');
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setTooltip(Blockly.Msg.GroveseeedPotentiometer_tooltip)
	}
};

Blockly.Arduino['GroveseeedPotentiometer'] = function (block) {
	let pin = block.getFieldValue('PIN');
	let code = '0.29326*analogRead(' + pin + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// Ambient light (A6)
Blockly.Blocks['GroveseeedLightsensor'] = {
	helpUrl: '',
	init: function () {
		this.setStyle("seeedbeg_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.GroveseeedLightsensor)
			.appendField(Blockly.Msg.Pin)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.GroveseeedLightsensor_pins), 'PIN');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setTooltip(Blockly.Msg.GroveseeedLightsensor_tooltip);
	}
};

Blockly.Arduino['GroveseeedLightsensor'] = function (block) {
	let pin = block.getFieldValue('PIN');
	let code = 'map(analogRead(' + pin + '),0,1023,0,100)';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// Microphone (A2)
Blockly.Blocks['GroveseeedMicrophone'] = {
	init: function () {
		this.setStyle("seeedbeg_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.GroveseeedMicrophone)
			.appendField(Blockly.Msg.Pin)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.GroveseeedMicrophone_pins), 'PIN');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setTooltip(Blockly.Msg.GroveseeedMicrophone_tooltip);
	}
};

Blockly.Arduino['GroveseeedMicrophone'] = function (block) {
	let pin = block.getFieldValue('PIN');
	let code = 'map(analogRead(' + pin + '),0,1023,0,100)';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// GroveseeedToneTime (D5)
Blockly.Blocks["GroveseeedToneTime"]={
	init:function(){ 
	this.setStyle("seeedbeg_blocks");
    this.appendDummyInput()
	    .appendField(Blockly.Msg.GroveseeedToneTime)
		.appendField(Blockly.Msg.Pin)
	this.appendValueInput("PIN")
			.setCheck(['Number','String']);
	this.appendValueInput("FREQ")
		.appendField(Blockly.Msg.GroveseeedToneTime_freq)
		.setCheck("Number");
	this.appendValueInput("TIME")
		.appendField(Blockly.Msg.GroveseeedToneTime_time)
		.setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GroveseeedToneTime_tooltip);
	this.setHelpUrl("");
	}
};

Blockly.Arduino["GroveseeedToneTime"] = function(block) {
	let pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	let frequency = Blockly.Arduino.valueToCode(block, 'FREQ', Blockly.Arduino.ORDER_ATOMIC);
	if (frequency <31) frequency = 31;
	if (frequency >65535) frequency = 65535;

	let time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
	if (time <0) time = 1;
	if (time>65535) time = 65535;

	return 'tone(' + pin + ',' + frequency + ',' + time +');\n';
};

// GroveseeedTone (D5)
Blockly.Blocks["GroveseeedTone"]={
	init:function(){ 
	this.setStyle("seeedbeg_blocks");
    this.appendDummyInput()
	    .appendField(Blockly.Msg.GroveseeedTone)
		.appendField(Blockly.Msg.Pin)
	this.appendValueInput("PIN")
			.setCheck(['Number','String']);
	this.appendValueInput("FREQ")
		.appendField(Blockly.Msg.GroveseeedTone_freq)
		.setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GroveseeedTone_tooltip);
	this.setHelpUrl("");
	}
};

Blockly.Arduino["GroveseeedTone"] = function(block) {
	let pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	let frequency = Blockly.Arduino.valueToCode(block, 'FREQ', Blockly.Arduino.ORDER_ATOMIC);
	if (frequency <31) frequency = 31;
	if (frequency >65535) frequency = 65535;

	return 'tone(' + pin + ',' + frequency +');\n';
};

// GroveseeedNotone (D5)
Blockly.Blocks['GroveseeedNotone'] = {
    init: function () {
		this.setStyle("seeedbeg_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.GroveseeedNotone)
			.appendField(Blockly.Msg.Pin)
 		this.appendValueInput("PIN")
			.setCheck(['Number','String']);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.GroveseeedseNotone_tooltip);
		this.setHelpUrl("");
    }
};

Blockly.Arduino["GroveseeedNoTone"] = function (block) {
	let pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    let code = "noTone(" + pin + ");\n";
    return code;
};

// DHT11/22
Blockly.Blocks['GroveseeedDTH'] = {
	helpUrl: '',
	init: function () {
		this.setStyle("seeedbeg_blocks");
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg.GroveseeedDTH_temp, "0"],
				[Blockly.Msg.GroveseeedDTH_humi, "1"],
				[Blockly.Msg.GroveseeedDTH_head, "2"]
			]), "OUTPUT_VALUE")
			.appendField("  " + Blockly.Msg.GroveseeedDTH_type)
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg.GroveseeedDTH_type11, "11"],
				[Blockly.Msg.GroveseeedDTH_type21, "21"],
				[Blockly.Msg.GroveseeedDTH_type22, "22"]
			]), "OUTPUT_TYPE");
		this.appendDummyInput()
			.appendField("  " + Blockly.Msg.Pin)
			.appendField(new Blockly.FieldNumber(3, 2, 12), "PIN");
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setTooltip(Blockly.Msg.GroveseeedDTH_tooltip);
	}
};

Blockly.Arduino['GroveseeedDTH'] = function (block) {
	let pin = block.getFieldValue('PIN');
	let TypeDHT = this.getFieldValue('OUTPUT_TYPE');
	let Status = this.getFieldValue('OUTPUT_VALUE');

	Blockly.Arduino.includes_['GroveseeedDTH'] = '#include "DHT.h"';

	// Variables
	if (TypeDHT == '11') {
		Blockly.Arduino.variables_['begin_dht11_' + pin] = 'DHT dht11_' + pin + '(' + pin + ',DHT11);';
	} else if (TypeDHT == '21') {
		Blockly.Arduino.variables_['begin_dht21_' + pin] = 'DHT dht21_' + pin + '(' + pin + ',DHT21);';
	} else {
		Blockly.Arduino.variables_['begin_dht22_' + pin] = 'DHT dht22_' + pin + '(' + pin + ',DHT22);';
	}

	// Setups
	if (TypeDHT == '11') {
		Blockly.Arduino.setups_['setup_input11_' + pin] = 'dht11_' + pin + '.begin();';
	} else if (TypeDHT == '21') {
		Blockly.Arduino.setups_['setup_input21_' + pin] = 'dht21_' + pin + '.begin();';
	} else {
		Blockly.Arduino.setups_['setup_input22_' + pin] = 'dht22_' + pin + '.begin();';
	}

	let code;
	if (Status == '0')
		code = 'dht' + TypeDHT + '_' + pin + '.readTemperature()';
	else if (Status == '1')
		code = 'dht' + TypeDHT + '_'  + pin + '.readHumidity()';
	else
		code = 'dht' + TypeDHT + '_'  + pin + '.computeHeatIndex(dht' + TypeDHT  +
			'_'  + pin + '.readTemperature(),dht' + TypeDHT  + '_'  + pin + '.readHumidity(),true)';

	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//--- BMP280 ---//
// Pressure
Blockly.Blocks["bmp280_pressure"] = {
	init: function () {
		this.setStyle("seeedbeg_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.Groveseeed_bmp280_pressure);
		this.setHelpUrl("");
		this.setOutput(true, "Number");
		this.setTooltip(Blockly.Msg.Groveseeed_bmp280_pressure_tooltip)
	}
};

Blockly.Arduino["bmp280_pressure"] = function (block) {
	Blockly.Arduino.includes_["bmp280init"] = '#include <Seeed_BMP280.h>';
	Blockly.Arduino.variables_["bmp280init"] = "BMP280 bmp;";
	Blockly.Arduino.setups_['bmp280init'] = "bmp.init();";

	return ["bmp.getPressure()", Blockly.Arduino.ORDER_ATOMIC]
};

//--- LIS3DHTR ---//
// lis3dhtr_values
Blockly.Blocks["lis3dhtr_values"] = {
	init: function () {
		this.setStyle("seeedbeg_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.Groveseeed_lis3dhtr_values)
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg.coordX, '0'],
				[Blockly.Msg.coordY, '1'],
				[Blockly.Msg.coordZ, '2']
			]), "AXIS");
		this.setHelpUrl("");
		this.setOutput(true, "Number");
		this.setTooltip(Blockly.Msg.Groveseeed_lis3dhtr_values_tooltip)
	}
};

Blockly.Arduino["lis3dhtr_values"] = function (block) {
	Blockly.Arduino.includes_["lis3dhtr"] = '#include <LIS3DHTR.h>';
	Blockly.Arduino.variables_["lis3dhtr"] = "LIS3DHTR<TwoWire> lis;";
	Blockly.Arduino.setups_["lis3dhtr"] = 'lis.begin(Wire, 0x19);\n  lis.setFullScaleRange(LIS3DHTR_RANGE_2G);\n  lis.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);\n  lis.setHighSolution(true);';

	let axis = this.getFieldValue('AXIS');
	let code;
	switch (axis) {
		case '0':
			code = 'lis.getAccelerationX()';
			break;
		case '1':
			code = 'lis.getAccelerationY()';
			break;
		case '2':
			code = 'lis.getAccelerationZ()';
			break;
		default:
			code = 'lis.getAccelerationX()';
			break;
	}

	return ['10 * ' + code, Blockly.Arduino.ORDER_ATOMIC]
};

//--- OLED SSD131 ---//
// Displays 8 raws x 16 columns
Blockly.Blocks['SSD1315_init'] = {
	init: function () {
		this.setStyle("seeedbeg_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.Groveseeed_ssd1315_init);

		this.appendDummyInput()
			.appendField(Blockly.Msg.Groveseeed_ssd1315_flip)
			.appendField(new Blockly.FieldCheckbox('TRUE'), 'LOGIC');

		this.setHelpUrl("");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.Groveseeed_ssd1315_init_tooltip)
	}
};

Blockly.Arduino["SSD1315_init"] = function (block) {
	Blockly.Arduino.includes_["ssd1315"] = '#include <U8x8lib.h>';
	Blockly.Arduino.variables_["ssd1315"] = "U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(U8X8_PIN_NONE);";
	let flip = 0;
	if (this.getFieldValue('LOGIC') == 'TRUE') flip = 1;
	Blockly.Arduino.setups_["setup_u8x8"] = 'u8x8.begin();\n  u8x8.setFont(u8x8_font_amstrad_cpc_extended_f);\n  u8x8.setFlipMode(' + flip + ');\n';
	return '';
};

// Clear
Blockly.Blocks['SSD1315_clear'] = {
	init: function () {
		this.setStyle("seeedbeg_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.Groveseeed_ssd1315_clear);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
		this.setTooltip(Blockly.Msg.Groveseeed_ssd1315_clear_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['SSD1315_clear'] = function (block) {
	return 'u8x8.clear();\n';
};

// Print
Blockly.Blocks['SSD1315_print'] = {
	init: function () {
		this.setStyle("seeedbeg_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.Groveseeed_ssd1315_print);
		this.appendValueInput("TEXT_TO_PRINT")
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
		this.setTooltip(Blockly.Msg.Groveseeed_ssd1315_print_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['SSD1315_print'] = function (block) {
	let value_texttoprint = Blockly.Arduino.valueToCode(block, 'TEXT_TO_PRINT', Blockly.Arduino.ORDER_ATOMIC);
	return 'u8x8.print(' + value_texttoprint + ');\n';
};

// Set cursor
Blockly.Blocks['SSD1315_setcursor'] = {
	init: function () {
		this.setStyle("seeedbeg_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.Groveseeed_ssd1315_setcursor);
		this.appendValueInput("ROW")
			.setCheck("Number")
			.appendField(Blockly.Msg.Groveseeed_ssd1315_row);
		this.appendValueInput("COLUMN")
			.setCheck("Number")
			.appendField(Blockly.Msg.Groveseeed_ssd1315_column);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setHelpUrl('https://github.com/olikraus/u8g2/wiki/u8x8reference');
		this.setTooltip(Blockly.Msg.Groveseeed_ssd1315_setcursor_tooltip);
	}
};

Blockly.Arduino['SSD1315_setcursor'] = function (block) {
	// 16 columns (from 0 to 15)
	let value_column = Blockly.Arduino.valueToCode(block, 'COLUMN', Blockly.Arduino.ORDER_ATOMIC);

	// 8 raws (from 0 to 7)
	let value_row = Blockly.Arduino.valueToCode(block, 'ROW', Blockly.Arduino.ORDER_ATOMIC);

	return 'u8x8.setCursor(' + value_column + ', ' + value_row + ');\n';
};

// Set cursor and draw line
Blockly.Blocks['SSD1315_setcursor_draw'] = {
	init: function () {
		this.setStyle("seeedbeg_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.Groveseeed_ssd1315_print_sep);
		this.appendValueInput("ROW")
			.setCheck("Number")
			.appendField(Blockly.Msg.Groveseeed_ssd1315_row);
		this.appendValueInput("COLUMN")
			.setCheck("Number")
			.appendField(Blockly.Msg.Groveseeed_ssd1315_column);
		this.appendValueInput("TEXT_TO_PRINT")
			.setCheck(null)
			.appendField(Blockly.Msg.Groveseeed_ssd1315_text);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.Groveseeed_ssd1315_setcursor_draw_tooltip);
		this.setHelpUrl('https://github.com/olikraus/u8g2/wiki/u8x8reference');
	}
};

Blockly.Arduino['SSD1315_setcursor_draw'] = function (block) {
	let value_column = Blockly.Arduino.valueToCode(block, 'COLUMN', Blockly.Arduino.ORDER_ATOMIC);
	let value_row = Blockly.Arduino.valueToCode(block, 'ROW', Blockly.Arduino.ORDER_ATOMIC);
	let value_texttoprint = Blockly.Arduino.valueToCode(block, 'TEXT_TO_PRINT', Blockly.Arduino.ORDER_ATOMIC);

	//return 'u8x8.drawUTF8(' + value_column + ', ' + value_row + ', ' + value_texttoprint + ');\n';
	return 'u8x8.setCursor(' + value_column + ', ' + value_row + ');\n' + 'u8x8.print(' + value_texttoprint + ');\n';
};
