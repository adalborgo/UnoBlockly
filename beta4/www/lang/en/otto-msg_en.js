/**
 * @package: UnoBlockly
 * @file otto-msg_en.js
 * @version 0.1 (03-06-2021)
 * @description OttoDIY messages
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

 'use strict';

// OTTO DIY Robot //
// ONLY TRANSLATE THE LEFT PART INSIDE ["THIS YES", NOT]
Blockly.Msg.CAT_OTTO = "OttoDIY";
Blockly.Msg.CAT_ultrason = "⇣ Sensors";
Blockly.Msg.OTTODIY_HOME_TEXT = "Home";
Blockly.Msg.OTTODIY_HOME_TOOLTIP = "Otto goes to home position.";
Blockly.Msg.OTTODIY_DIY_URL = "https://www.ottodiy.com/academy"; // do not translate
Blockly.Msg.OTTODIY_CALIBRATION='Calibrate ';
Blockly.Msg.OTTODIY_CALIBRATION_LEG='Leg: ';
Blockly.Msg.OTTODIY_CALIBRATION_FOOT='Foot: ';
Blockly.Msg.OTTODIY_CALIBRATION_TOOLTIP='Use small positive and negative values iteratively,change gradually until is completely straight (90º)';
Blockly.Msg.OTTODIY_EEPROM_TEXT= 'Save Trims on EEPROM';
Blockly.Msg.OTTODIY_EEPROM_TOOLTIP= 'Use only after completely straight(90º) one time, delete this BLOCK after for further programming';
Blockly.Msg.OTTODIY_MOVE_TEXT = "Move";
Blockly.Msg.OTTODIY_MOVE_TOOLTIP = "Otto basic movements";
Blockly.Msg.OTTODIY_STEP_CHOICE = [["↑ forward", "FORWARD"], ["↓ indietro", "BACKWARD"]];
Blockly.Msg.OTTODIY_TURN_CHOICE = [["↺ left", "LEFT"], ["↻ right", "RIGHT"]];
Blockly.Msg.OTTODIY_BEND_CHOICE = [["left", "BENDLEFT"], ["right", "BENDRIGHT"]];
Blockly.Msg.OTTODIY_SHAKE_CHOICE = [["left", "SHAKELEFT"], ["right", "SHAKERIGHT"]];
Blockly.Msg.OTTODIY_JUMP = [["up", "jump"]];
Blockly.Msg.OTTODIY_MOVE_SPEED_TEXT = "Speed";
Blockly.Msg.OTTODIY_MOVE_SPEED_CHOICE = [["normal", "1000"],["slow", "2000"],["very slow", "3000"] , ["fast", "750"], ["very fast", "500"], ["way to fast", "250"]];
Blockly.Msg.OTTODIY_MOVEW_SPEED_CHOICE = [["normal", "45"],["slow", "20"],["very slow", "10"] , ["fast", "60"], ["very fast", "90"]];
Blockly.Msg.OTTODIY_DANCE_TEXT = "Dance";
Blockly.Msg.OTTODIY_DANCE_TOOLTIP = "Otto dance!";
Blockly.Msg.OTTODIY_DANCE_CHOICE = [["moonwalk ⟵", "moonwalkerLEFT"],  ["moonwalk ⟶", "moonwalkerRIGHT"],["crossing ⟵", "crusaitoLEFT"],["crossing ⟶", "crusaitoRIGHT"], ["flapping ↑", "flappingFRONT"], ["flapping ↓", "flappingBACK"]];
Blockly.Msg.OTTODIY_DANCE_SIZE_TEXT = "Size";
Blockly.Msg.OTTODIY_DANCE_SIZE_CHOICE = [["Normal", "25"], ["Little", "10"], ["Big", "40"]];
Blockly.Msg.OTTODIY_DO_TEXT = "Do";
Blockly.Msg.OTTODIY_DO_TOOLTIP = "Otto complex movements";
Blockly.Msg.OTTODIY_DO_CHOICE = [ ["swing", "swing"], ["updown", "updown"], ["tiptoeSwing", "tiptoeSwing"], ["jitter", "jitter"], ["ascendingTurn", "ascendingTurn"]];
Blockly.Msg.OTTODIY_SOUND_TEXT = "Sound";
Blockly.Msg.OTTODIY_SOUND_TOOLTIP = "Emotional sounds";
Blockly.Msg.OTTODIY_SOUND_CHOICE = [ ["😃 happy1", "S_superHappy"], ["🙂 happy2", "S_happy"], ["😊 happy3", "S_happy_short"], ["🙁 sad", "S_sad"], ["😕 confused", "S_confused"], ["🤗 cuddly", "S_cuddly"], ["😮 Oh", "S_OhOoh"], ["😯 OhOoh", "S_OhOoh2"], ["😲 surprise", "S_surprise"],["🤖 connect", "S_connection"], [" 🤖 disconnect", "S_disconnection"], ["👇 push", "S_buttonPushed"], ["❗ 1", "S_mode1"], ["❗❗ 2", "S_mode2"], ["❗❗❗ 3", "S_mode3"], ["💤 sleep", "S_sleeping"], ["💩 fart1", "S_fart1"], ["💩 fart2", "S_fart2"], ["💩 fart3", "S_fart3"],];
Blockly.Msg.OTTODIY_GETDISTANCE_TEXT = "Distance [cm]";
Blockly.Msg.OTTODIY_GETDISTANCE_TOOLTIP = "Ranging distance between 3 cm to 400 cm";

// Added in UnoBlockly
Blockly.Msg.OTTODIY_TURN_TEXT = "Turn";
Blockly.Msg.OTTODIY_BEND_TEXT = "Bend";
Blockly.Msg.OTTODIY_SHAKE_TEXT = "Shake";
Blockly.Msg.OTTODIY_UP_TEXT = "Up";
Blockly.Msg.OTTODIY_SOUND_TOOLTIP1 = "Play a note";
Blockly.Msg.OTTODIY_SOUND_TOOLTIP2 = "Play a note indicating frequency, duration and pause";
Blockly.Msg.OTTODIY_SOUND_TOOLTIP3 = "Play a sequence of sounds between two frequencies";
