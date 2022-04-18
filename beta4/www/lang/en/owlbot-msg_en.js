/**
 * @package: UnoBlockly
 * @file mbot-msg_it.js
 * @version 0.1 (18-04-2022)
 * @description OwlBot messages
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

//--- OwlBot ---//
Blockly.Msg.CAT_OWLBOT = "OwlBot";
Blockly.Msg.CAT_OWLBOT_LEDMatrix = "LED Matrix";

// Ultrasonic distance sensor
Blockly.Msg.OwlBotDistance = "Distance (cm)";
Blockly.Msg.OwlBotDistance_tooltip = "Get the distance of an obstacle (mm)";

Blockly.Msg.OwlBotBattery = "Battery";
Blockly.Msg.OwlBotBattery_tooltip = "Displays the battery voltage";

// RGB LED
Blockly.Msg.OwlBotRgbled = "RGB LED";
Blockly.Msg.OwlBotRgbled_tooltip = "Controls the lighting of the RGB LEDs (values from 0 to 255)";
Blockly.Msg.OwlBotRgbled_side_dropdown = [["All", "ALL"],["Left", "LEFT"], ["Center", "CENTER"], ["Right", "RIGHT"], ["Front", "FRONT"], ["Rear", "REAR"]];

// Buzzer pin
Blockly.Msg.OwlBotBuzzerPin = "Buzzer Pin";
Blockly.Msg.OwlBotBuzzerPin_tooltip = "Buzzer pin";

// Button
Blockly.Msg.OwlBotButton = "Button";
Blockly.Msg.OwlBotButton_tooltip = "Button (pressed: 0; released: 1)";

// Motors
Blockly.Msg.OwlBotMotor = "Motors  ";
Blockly.Msg.OwlBotMotor_tooltip = "Drive motors";
Blockly.Msg.OwlBotMotor_speed = "Speed (from 0 to 100)";
Blockly.Msg.OwlBotMotor_dir = "Direction";
Blockly.Msg.OwlBotMotor_side_dropdown = [["All", "ALL"],["Left", "LEFT"], ["Right", "RIGHT"]];
Blockly.Msg.OwlBotMotor_dir_dropdown = [[Blockly.Msg.dir_forward, "FORWARD"], [Blockly.Msg.dir_backward, "BACKWARD"]];

// Linefollower sensor
Blockly.Msg.OwlBotLinefollower = "Line follow sensor";
Blockly.Msg.OwlBotLinefollower_tooltip = "Line follow sensor (0: ⚫⚫⚫; 1: ⚪⚫⚫, 2: ⚫⚪⚫;  3: ⚪⚪⚫; 4: ⚫⚫⚪;  5: ⚪⚫⚪; 6:⚫⚪⚪; 7: ⚪⚪⚪)";

// LED matrix (category)
Blockly.Msg.OwlBotLEDMatrix = "LED Matrix";
Blockly.Msg.OwlBotLEDMatrixClear = Blockly.Msg.OwlBotLEDMatrix + "  |  Clear";
Blockly.Msg.OwlBotLEDMatrixDraw = Blockly.Msg.OwlBotLEDMatrix  + "  |  Draw";
Blockly.Msg.OwlBotLEDMatrixBright = "Brightness";

Blockly.Msg.OwlBotLEDMatrixSmileys_dropdown = [
    ['Eyes 1', '0'],
    ['Eyes 2', '1'],
    ['Happy', '2'],
    ['Angry', '3'],
    ['In love','4'],
    ['Asleep', '5'],
    ['Glasses', '6'],
    ['O  O', '7']
];

Blockly.Msg.OwlBotLEDMatrix_tooltip = Blockly.Msg.OwlBotLEDMatrix + ": draw an image";
Blockly.Msg.OwlBotLEDMatrixClear_tooltip = Blockly.Msg.OwlBotLEDMatrix + ": Clear all pixels";
Blockly.Msg.OwlBotLEDMatrixNumber_tooltip = Blockly.Msg.OwlBotLEDMatrix + ": Show a number (maximum 4 digits)";
Blockly.Msg.OwlBotLEDMatrixSmileys_tooltip = Blockly.Msg.OwlBotLEDMatrix + ": draw a picture (from a list)";
Blockly.Msg.OwlBotLEDMatrixData_tooltip = Blockly.Msg.OwlBotLEDMatrix + ": draw an image with data bytes (e.g. 0,0,60,98,94,94,60,1,1,60,94,94,98,60,0,0)";
