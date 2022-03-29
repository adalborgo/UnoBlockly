/**
 * @package: UnoBlockly
 * @file board.js
 * @version 0.2 (28-03-2022)
 * @description Arduino base board command of Blockly.Blocks & Blockly.Arduino
 * @see https://arduino.cc/en/Reference/HomePage
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

// ArduinobaseLed
Blockly.Blocks['ArduinobaseLed'] = {
    init: function () {
		this.setStyle("arduino_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinobaseLed)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.ArduinobaseDropdown_hl), 'STATUS');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.ArduinobaseLed_tooltip);
		this.setHelpUrl("");
    }
};

Blockly.Arduino['ArduinobaseLed'] = function (block) {
	let status = block.getFieldValue('STATUS');
	Blockly.Arduino.setups_['ArduinobaseLed'] = 'pinMode(LED_BUILTIN'+',OUTPUT);';
    return 'digitalWrite(LED_BUILTIN' + ', '+ status +');\n'
};

// ArduinobaseDelay
Blockly.Blocks["ArduinobaseDelay"]={
	init:function(){
        this.setStyle("time_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinobaseDelay)
        this.appendValueInput('DELAY', 'Number')
			.setCheck('Number')
		this.appendDummyInput()
			.appendField(" ")
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.ArduinobaseTime_units), "UNIT")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ArduinobaseDelay_tooltip);
	this.setHelpUrl("");
  }
};

Blockly.Arduino['ArduinobaseDelay'] = function (block) {
	let unit = block.getFieldValue('UNIT');
	let delayTime = Blockly.Arduino.valueToCode(block, 'DELAY', Blockly.Arduino.ORDER_ATOMIC);
	let code;
	if (unit=='s') code = 'delay(' + 1000*delayTime + ')';
	else if (unit=='m') code = 'delay(' + delayTime + ')';
	else if (unit=='u') code = 'delayMicroseconds(' + delayTime + ')';
    return code+';\n';
};

// ArduinobaseMillis
Blockly.Blocks["ArduinobaseMillis"]={
	init:function(){
    this.setStyle("time_blocks");
	this.appendDummyInput()
		.appendField(Blockly.Msg.ArduinobaseMillis);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.ArduinobaseMillis_tooltip);
	this.setHelpUrl("");
	}
};

Blockly.Arduino['ArduinobaseMillis'] = function (block) {
    return ["millis()", Blockly.Arduino.ORDER_ATOMIC];
};

// ArduinobaseMicros
Blockly.Blocks["ArduinobaseMicros"]={
	init:function(){
    this.setStyle("time_blocks");
	this.appendDummyInput()
		.appendField(Blockly.Msg.ArduinobaseMicros);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.ArduinobaseMicros_tooltip);
	this.setHelpUrl("");
	}
};

Blockly.Arduino['ArduinobaseMicros'] = function (block) {
    return ["micros()", Blockly.Arduino.ORDER_ATOMIC];
};

// ArduinobasePulsein
Blockly.Blocks["ArduinobasePulsein"]={
	init:function(){
		this.setStyle("time_blocks");
		this.appendValueInput("PIN")
			.appendField(Blockly.Msg.ArduinobasePulsein)
			.setCheck("Number");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinobasePulsein_begin)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.ArduinobaseDropdown_hl), 'STATUS');
		this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.ArduinobasePulsein_tooltip);
		this.setHelpUrl("");
	}
};

// ArduinobasePulsein
Blockly.Arduino['ArduinobasePulsein'] = function (block) {
	let pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	let status = block.getFieldValue('STATUS');
	Blockly.Arduino.setups_["pinmode_" + pin] = 'pinMode(' + pin + ',INPUT);';
    return ["pulseIn(" + pin + "," + status + ")", Blockly.Arduino.ORDER_ATOMIC];
};

// ArduinobaseToneTime
Blockly.Blocks["ArduinobaseToneTime"]={
	init:function(){ 
	this.setStyle("sound_blocks");
    this.appendDummyInput()
	    .appendField(Blockly.Msg.ArduinobaseTone)
	this.appendValueInput("PIN")
		.appendField(Blockly.Msg.Pin)
		.setCheck("Number");
	this.appendValueInput("FREQ")
		.appendField(" " + Blockly.Msg.ArduinobaseTone_freq)
		.setCheck("Number");
	this.appendValueInput("TIME")
		.appendField(Blockly.Msg.ArduinobaseTone_time)
		.setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ArduinobaseTone_tooltip);
	this.setHelpUrl("");
	}
};

Blockly.Arduino['ArduinobaseToneTime'] = function(block) {
	let pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	let frequency = Blockly.Arduino.valueToCode(block, 'FREQ', Blockly.Arduino.ORDER_ATOMIC);
	if (frequency <31) frequency = 31;
	if (frequency >65535) frequency = 65535;

	let time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
	if (time <0) time = 1;
	if (time>65535) time = 65535;

	return 'tone(' + pin + ',' + frequency + ',' + time +');\n';
};

// ArduinobaseTone
Blockly.Blocks["ArduinobaseTone"]={
	init:function(){ 
	this.setStyle("sound_blocks");
    this.appendDummyInput()
	    .appendField(Blockly.Msg.ArduinobaseTone)
	this.appendValueInput("PIN")
		.appendField(Blockly.Msg.Pin)
		.setCheck("Number");
	this.appendValueInput("FREQ")
		.appendField(Blockly.Msg.ArduinobaseTone_freq)
		.setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ArduinobaseTone1_tooltip);
	this.setHelpUrl("");
	}
};

Blockly.Arduino['ArduinobaseTone'] = function(block) {
	let pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	let frequency = Blockly.Arduino.valueToCode(block, 'FREQ', Blockly.Arduino.ORDER_ATOMIC);
	if (frequency <31) frequency = 31;
	if (frequency >65535) frequency = 65535;

	return 'tone(' + pin + ',' + frequency +');\n';
};

// ArduinobaseNotone
Blockly.Blocks['ArduinobaseNotone'] = {
    init: function () {
		this.setStyle("sound_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinobaseNotone)
		this.appendValueInput("PIN")
			.appendField(Blockly.Msg.Pin)
			.setCheck("Number");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.ArduinobaseNotone_tooltip);
		this.setHelpUrl("");
    }
};

Blockly.Arduino['ArduinobaseNotone'] = function (block) {
	let pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    let code = "noTone(" + pin + ");\n";
    return code;
};

// ArduinobaseDigitalRead
Blockly.Blocks["ArduinobaseDigitalRead"]={
	init:function(){
        this.setStyle("arduino_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinobaseDigitalRead)
		this.appendValueInput("PIN")
			.appendField(Blockly.Msg.Pin)
			.setCheck("Number");
		this.appendDummyInput()
			.appendField(Blockly.Msg.Arduinobase_pullup)
			.appendField(new Blockly.FieldCheckbox("FALSE"), "PULLUP");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.ArduinobaseDigitalRead_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["ArduinobaseDigitalRead"]=function(block){
	let pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	let pullup = (block.getFieldValue('PULLUP')=='TRUE') ?  '_PULLUP' : '';
	Blockly.Arduino.setups_["pinmode_" + pin] =  "pinMode(" + pin + ",INPUT" + pullup + ");";
    let code="digitalRead(" +pin + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};

// ArduinobaseDigitalWrite
Blockly.Blocks["ArduinobaseDigitalWrite"]={
	init:function(){
        this.setStyle("arduino_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinobaseDigitalWrite)
		this.appendValueInput("PIN")
			.appendField(Blockly.Msg.Pin)
			.setCheck("Number");
		this.appendDummyInput()
			.appendField(Blockly.Msg["EQUAL"])
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.ArduinobaseDropdown_hl), 'STATUS');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
		this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ArduinobaseDigitalWrite_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['ArduinobaseDigitalWrite'] = function (block) {
	let pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	let dropdown = block.getFieldValue('STATUS');
	Blockly.Arduino.setups_["pinmode_" + pin] = 'pinMode('+ pin + ',OUTPUT);';
    return 'digitalWrite(' + pin + ', ' + dropdown + ');\n';
};

// ArduinobaseAnalogRead
Blockly.Blocks["ArduinobaseAnalogRead"]={
	init:function(){
		this.setStyle("arduino_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinobaseAnalogRead)
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.analogPins), "PIN");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.ArduinobaseAnalogRead_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["ArduinobaseAnalogRead"]=function(block){
    let pin = block.getFieldValue('PIN');
    let code="analogRead(" + pin + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// ArduinobaseAnalogWrite (PWM)
Blockly.Blocks["ArduinobaseAnalogWrite"]={
	init:function(){
		this.setStyle("arduino_blocks");
        this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinobaseAnalogWrite)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.PWMPins), "PIN");
        this.appendValueInput('VALUE', 'Number')
			.appendField(Blockly.Msg.EQUAL)
			.setCheck('Number');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ArduinobaseAnalogWrite_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["ArduinobaseAnalogWrite"]=function(block){
    let pin=block.getFieldValue("PIN");
    let value=Blockly.Arduino.valueToCode(block, "VALUE", Blockly.Arduino.ORDER_ATOMIC);
    return "analogWrite(" + pin + ", " + value + ");\n";
};

// ArduinobaseAttachInterrupt
Blockly.Blocks["ArduinobaseAttachInterrupt"]={
	init:function(){
		let index = $("#boards").val(); // int
		let boardType = IndexCode.getBoardName(index);
		this.setStyle("arduino_blocks");
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.ArduinobaseAttachInterrupt)
			.appendField(new Blockly.FieldDropdown(profile[boardType].interrupt), 'PIN');
		this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinobaseAttachInterrupt_with)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.ArduinobaseAttachInterrupt_mode), "MODE");
        this.appendStatementInput('DO');
        this.setInputsInline(true);
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip(Blockly.Msg.ArduinobaseAttachInterrupt_tooltip);
		this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt");
	}
};

Blockly.Arduino["ArduinobaseAttachInterrupt"]=function(block){
	let pin=block.getFieldValue('PIN');
	let mode=block.getFieldValue('MODE');
	let funcISR='interrupt_'+pin;
	Blockly.Arduino.setups_['setup_Interrupt_'+pin]='pinMode('+pin+', INPUT);\n  attachInterrupt(digitalPinToInterrupt('+pin+'),'+funcISR+','+mode+');';
	let branch=Blockly.Arduino.statementToCode(block, 'DO' );
	Blockly.Arduino.codeFunctions_[funcISR] ='void ' + funcISR+ '() {\n' + branch + '}';
	return "";
};

// ArduinobaseDetachInterrupt
Blockly.Blocks["ArduinobaseDetachInterrupt"]={
	init:function(){
		let index = $("#boards").val(); // int
		let boardType = IndexCode.getBoardName(index);
		this.setStyle("arduino_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinobaseDetachInterrupt)
			.appendField(new Blockly.FieldDropdown(profile[boardType].interrupt), 'PIN')
		this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.ArduinobaseDetachInterrupt_tooltip);
		this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/external-interrupts/detachinterrupt");
	}
};
Blockly.Arduino["ArduinobaseDetachInterrupt"]=function(block){
	let pin=block.getFieldValue('PIN');
	return 'detachInterrupt('+pin+');\n';
};

// Pulse
Blockly.Blocks['ArduinobasePulse'] = {
	init: function () {
		this.setStyle("arduino_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinobasePulse)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.ArduinobasePulseMode), "MODE")
		this.appendDummyInput().appendField(" " + Blockly.Msg.ArduinobasePulseWidth)
		this.appendValueInput('WIDTH', 'Number')
			.setCheck('Number')
		this.appendDummyInput()
			.appendField(" ")
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.ArduinobaseTime_units), "UNIT")
			.appendField(" " + Blockly.Msg.ArduinobasePulsePreset)
			.appendField(new Blockly.FieldCheckbox("FALSE"), "PRESET")
		this.appendValueInput("PIN")
			.appendField(" " + Blockly.Msg.Pin)
			.setCheck("Number")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.ArduinobasePulse_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino['ArduinobasePulse'] = function (block) {
	let dropdown = block.getFieldValue('MODE');
	let width = Blockly.Arduino.valueToCode(block, 'WIDTH', Blockly.Arduino.ORDER_ATOMIC);
	let unit = block.getFieldValue('UNIT');
	let pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	let dtime = "";
	if (unit=='s') dtime = 'delay(' + 1000*width + ')';
	else if (unit=='m') dtime = 'delay(' + width + ')';
	else if (unit=='u') dtime = 'delayMicroseconds(' + width + ')';
	Blockly.Arduino.setups_["pinmode_" + pin] = 'pinMode(' + pin + ',OUTPUT);';
	let preset = (block.getFieldValue('PRESET')=='TRUE');
	let code = "";
	if (dropdown=="RISING") {
		if (preset) code = "digitalWrite(" + pin + ",LOW);\ndelayMicroseconds(2);\n";
		code += "digitalWrite(" + pin + ",HIGH);\n" + dtime + ";\ndigitalWrite(" + pin + ",LOW);\n";
	} else {
		if (preset) code = "digitalWrite(" + pin + ",HIGH);\ndelayMicroseconds(2);\n";
		code += "digitalWrite(" + pin + ",LOW);\n" + dtime + ";\ndigitalWrite(" + pin + ",HIGH);\n";
	}
	return code;
};

