/**
 * @package: UnoBlockly
 * @file mbot-msg_en.js
 * @version 0.1 (18-01-2022)
 * @description Makeblock mBot messages
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

 'use strict';

//--- mBot ---//
Blockly.Msg.CAT_MBOT = "mBot";
Blockly.Msg.CAT_MBOT_LEDMatrix = "LED Matrix";

Blockly.Msg.mbot_slot = "Slot";
Blockly.Msg.mbot_slot_dropdown = [['1', '1'],['2', '2']];

Blockly.Msg.mbot_port = "Port";
Blockly.Msg.mbot_port_dropdown = [['1', '1'],['2', '2'],['3', '3'],['4', '4']];

Blockly.Msg.mbot_number = "Number";
Blockly.Msg.mbot_text = "Text";
Blockly.Msg.mbot_data = "Data";

Blockly.Msg.mbot_coordX = "x"
Blockly.Msg.mbot_coordY = "y"

// Ultrasonic distance sensor
Blockly.Msg.mBotDistance = "Distance (cm)  |";
Blockly.Msg.mBotDistance_tooltip = "Get the distance of an obstacle (cm)";

// RGB LED
Blockly.Msg.mBotRgbled = "RGB LED";
Blockly.Msg.mBotRgbled_tooltip = "Controls the lighting of the RGB LEDs (values from 0 to 255)";

// Button
Blockly.Msg.mBotButton = "Button";
Blockly.Msg.mBotButton_tooltip = "Button (pressed: true; released: false)";

// Buzzer
Blockly.Msg.mBotTone = "Play a note  |";
Blockly.Msg.mBotTone_freq = "Frequency (Hz)";
Blockly.Msg.mBotTone_time = "Duration (ms)";
Blockly.Msg.mBotTone_tooltip = "Play a note indicating frequency (Hz) and duration (ms)";

Blockly.Msg.mBotNotone = "Stop the sound";
Blockly.Msg.mBotNotone_tooltip = "Stop the sound on the indicated pin";

// Ambient light sensor
Blockly.Msg.mBotLightSensor = "Ambient brightness (%)";
Blockly.Msg.mBotLightSensor_tooltip = "Returns the ambient brightness (%)";

// Motors
Blockly.Msg.mBotMotor = "Motors  ";
Blockly.Msg.mBotMotor_tooltip = "Drive motors";
Blockly.Msg.mBotMotor_speed = "Speed (from 0 to 255)";
Blockly.Msg.mBotMotor_dir = "Direction";
Blockly.Msg.mBotMotor_dir_dropdown = [[Blockly.Msg.dir_forward, "FORWARD"], [Blockly.Msg.dir_backward, "BACKWARD"]];
Blockly.Msg.mBotMotor_side_dropdown = [[Blockly.Msg.left_right, "ALL"], [Blockly.Msg.left, "LEFT"], [Blockly.Msg.right, "RIGHT"]];

// Linefollower sensor
Blockly.Msg.mBotLinefollower = "Line follow sensor  |";
Blockly.Msg.mBotLinefollower_tooltip = "Line follow sensor (0: both black; 1: black left, 2: white right; 3: both white)";

// Temperature sensor
Blockly.Msg.mBotTemperature = "Temperature (°C)";
Blockly.Msg.mBotTemperature_tooltip = "Temperature measurement (°C)";

// Sound sensor
Blockly.Msg.mBotSound = "Microphone (%)";
Blockly.Msg.mBotSound_tooltip = "Ambient sound intensity (percentage)";

// 7-segment display
Blockly.Msg.mBotSeg7 = "7-segment display";
Blockly.Msg.mBotSeg7_tooltip = "Shows a numeric value on the 7-segment display";

// Remote IR
Blockly.Msg.mbot_remoteIR = "Remote IR";
Blockly.Msg.mbot_key1 = "Key";
Blockly.Msg.mbot_key2 = "pressed";
Blockly.Msg.mbot_remoteIR_dropdown = [
	['A', '69'], ['B', '70'], ['C', '71'], ['D', '68'],['E', '67'], ['F', '13'],
	['↑', '64'], ['↓', '25'],['⟵', '7'], ['⟶', '9'],['⚙️', '21'],
	['R0', '22'],['R1', '12'],['R2', '24'],['R3', '94'],['R4', '8'],['R5', '28'],
	['R6', '90'],['R7', '66'],['R8', '82'],['R9', '74']
];
Blockly.Msg.mbot_remoteIR_tooltip = "Remote IR: waits for the selected key to be pressed";

// LED matrix (category)
Blockly.Msg.mBotLEDMatrix = "LED Matrix";
Blockly.Msg.mBotLEDMatrixClear = Blockly.Msg.mBotLEDMatrix +": Clear";
Blockly.Msg.mBotLEDMatrixDraw = Blockly.Msg.mBotLEDMatrix +": Draw";
Blockly.Msg.mBotLEDMatrixBright = "Brightness";

Blockly.Msg.mBotLEDMatrixSmileys_dropdown = [
    ['Eyes 1', '0,0,60,98,94,94,60,1,1,60,94,94,98,60,0,0'],
    ['Eyes 2', '0,60,66,74,66,66,60,0,0,60,66,74,66,66,60,0'],
    ['Happy', '0,16,32,64,68,34,19,3,3,19,34,68,64,32,16,0'],
    ['Angry', '0,30,60,120,112,32,0,0,0,0,32,112,120,60,30,0'],
    ['In love', '0,12,30,60,60,30,12,0,0,12,30,60,60,30,12,0'],
    ['Asleep', '0,34,50,42,38,34,0,0,0,0,34,50,42,38,34,0']
];

Blockly.Msg.mBotLEDMatrix_tooltip = Blockly.Msg.mBotLEDMatrix + ": draw an image";
Blockly.Msg.mBotLEDMatrixClear_tooltip = Blockly.Msg.mBotLEDMatrix + ": Clear all pixels";
Blockly.Msg.mBotLEDMatrixNumber_tooltip = Blockly.Msg.mBotLEDMatrix + ": Show a number (maximum 4 digits)";
Blockly.Msg.mBotLEDMatrixText_tooltip = Blockly.Msg.mBotLEDMatrix + ": Show a text (maximum 3 characters)";
Blockly.Msg.mBotLEDMatrixSmileys_tooltip = Blockly.Msg.mBotLEDMatrix + ": draw a picture (from a list)";
Blockly.Msg.mBotLEDMatrixData_tooltip = Blockly.Msg.mBotLEDMatrix + ": draw an image with data bytes (e.g. 0,0,60,98,94,94,60,1,1,60,94,94,98,60,0,0)";
