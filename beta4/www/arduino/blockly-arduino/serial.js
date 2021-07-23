/**
 * @package: UnoBlockly
 * @file serial.js
 * @version 0.1 (18-03-2021)
 * @description Serial port on board
 * @see https://www.arduino.cc/reference/en/language/functions/communication/serial/
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

// ArduinoSerialBegin
Blockly.Blocks["ArduinoSerialBegin"]={
	init:function(){
		this.setStyle("arduino_blocks");
		var card=window.localStorage.card;
 		this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinoSerialBegin)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.serialSpeed), "SPEED");
		this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ArduinoSerialBegin_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["ArduinoSerialBegin"]=function(block){
    var speed=block.getFieldValue("SPEED");
	window.localStorage.baudrate=speed;
	Blockly.Arduino.setups_['ArduinoSerialBegin'] = "Serial.begin(" + speed + ");";
  return ''
};

Blockly.Blocks["ArduinoSerialRead"]={
	init:function(){
		this.setStyle("arduino_blocks");
		var card=window.localStorage.card;
		this.appendDummyInput().appendField(Blockly.Msg.ArduinoSerialRead); // Blockly.Msg.ArduinoSerialRead
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.ArduinoSerialRead_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["ArduinoSerialRead"]=function(block){
    var code="Serial.read()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};

// ArduinoSerialWrite
Blockly.Blocks["ArduinoSerialPrint"]={
	init:function(){
        this.setStyle("arduino_blocks");
        this.appendValueInput("DATA", String)
			.appendField(Blockly.Msg.ArduinoSerialPrint)
			.appendField(Blockly.Msg.ArduinoSerialPrintln)
			.appendField(new Blockly.FieldCheckbox("FALSE"), "NEWLINE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ArduinoSerialPrint_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["ArduinoSerialPrint"]=function(block){
	var newline = (block.getFieldValue('NEWLINE')=='TRUE') ?  'ln' : '';
    var data=Blockly.Arduino.valueToCode(block, "DATA", Blockly.Arduino.ORDER_ATOMIC);
    return "Serial.print" + newline + "(" + data + ");\n"
};

// ArduinoSerialAvailable
Blockly.Blocks["ArduinoSerialAvailable"]={
	init:function(){
        this.setStyle("arduino_blocks");
        this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinoSerialAvailable);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.ArduinoSerialAvailable_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["ArduinoSerialAvailable"]=function(block){
    return ["Serial.available()", Blockly.Arduino.ORDER_ATOMIC]
};

// ArduinoSerialFlush
Blockly.Blocks["ArduinoSerialFlush"]={
	init:function(){
        this.setStyle("arduino_blocks");
        this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinoSerialFlush);
        this.setInputsInline(true);
        //this.setOutput(true, "Number");
		
		this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ArduinoSerialFlush_tooltip);
		this.setHelpUrl("");
	}
};

Blockly.Arduino["ArduinoSerialFlush"]=function(block){
    return "Serial.flush();\n";
};

// ArduinoSerialTimeout
Blockly.Blocks['ArduinoSerialTimeout'] = {
    init: function () {
		this.setStyle("arduino_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ArduinoSerialTimeout)
			.appendField(new Blockly.FieldNumber(1000, 1, 100000), "TIME");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.Msg.ArduinoSerialTimeout_tooltip);
		this.setHelpUrl("");
    }
};

Blockly.Arduino['ArduinoSerialTimeout'] = function (block) {
	var time = block.getFieldValue('TIME');
    return "Serial.setTimeout(" + time + ");\n";
};
