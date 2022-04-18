/**
 * @package: UnoBlockly
 * @file mbot-msg_en.js
 * @version 0.1 (14-04-2022)
 * @description Makeblock mBot messages
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

 'use strict';

//--- mBot ---//
Blockly.Msg.CAT_MBOT = "mBot";
Blockly.Msg.CAT_MBOT_LEDMatrix = "LEDマトリックス";//"LED Matrix";

Blockly.Msg.mbot_slot = "スロット";//"Slot";
Blockly.Msg.mbot_slot_dropdown = [['1', '1'],['2', '2']];

Blockly.Msg.mbot_port = "ポート";//"Port";
Blockly.Msg.mbot_port_dropdown = [['1', '1'],['2', '2'],['3', '3'],['4', '4']];

// Ultrasonic distance sensor
Blockly.Msg.mBotDistance = "距離（cm）|";//"Distance (cm)  |";
Blockly.Msg.mBotDistance_tooltip = "障害物との距離を測定します。";//"Get the distance of an obstacle (cm)";

// RGB LED
Blockly.Msg.mBotRgbled = "RGB LED";
Blockly.Msg.mBotRgbled_tooltip = "RGB LEDをコントロールします（0～255）。";//"Controls the lighting of the RGB LEDs (values from 0 to 255)";

// Button
Blockly.Msg.mBotButton = "ボタン";//"Button";
Blockly.Msg.mBotButton_tooltip = "ボタン（押された：true 離された：false）";//"Button (pressed: true; released: false)";

// Buzzer
Blockly.Msg.mBotTone = "音階を再生 |";//"Play a note  |";
Blockly.Msg.mBotTone_freq = "周波数（Hz）";//"Frequency (Hz)";
Blockly.Msg.mBotTone_time = "長さ（ミリ秒）";//"Duration (ms)";
Blockly.Msg.mBotTone_tooltip = "設定した周波数、長さの音階を再生します。";//"Play a note indicating frequency (Hz) and duration (ms)";

Blockly.Msg.mBotNotone = "音声を止める";//"Stop the sound";
Blockly.Msg.mBotNotone_tooltip = "設定したピンの音を止めます。";//"Stop the sound on the indicated pin";

// Ambient light sensor
Blockly.Msg.mBotLightSensor = "明るさ（%）";//"Ambient brightness (%)";
Blockly.Msg.mBotLightSensor_tooltip = "周囲の明るさ（%）を測定します。";//"Returns the ambient brightness (%)";

// Motors
Blockly.Msg.mBotMotor = "モーター";//"Motors  ";
Blockly.Msg.mBotMotor_tooltip = "モーターを駆動します。";//"Drive motors";
Blockly.Msg.mBotMotor_speed = "速度（0～255）";//"Speed (from 0 to 255)";
Blockly.Msg.mBotMotor_dir = "方向";//"Direction";
Blockly.Msg.mBotMotor_dir_dropdown = [[Blockly.Msg.dir_forward, "前"], [Blockly.Msg.dir_backward, "後"]];
Blockly.Msg.mBotMotor_side_dropdown = [[Blockly.Msg.left_right, "左右"], [Blockly.Msg.left, "左"], [Blockly.Msg.right, "右"]];

// Linefollower sensor
Blockly.Msg.mBotLinefollower = "ラインセンサー |";//"Line follow sensor  |";
Blockly.Msg.mBotLinefollower_tooltip = "ラインセンサー(0: 両側黒; 1: 左側黒, 2: 右側白; 3: 両側白)";//"Line follow sensor (0: both black; 1: black left, 2: white right; 3: both white)";

// Temperature sensor
Blockly.Msg.mBotTemperature = "温度(°C)";//"Temperature (°C)";
Blockly.Msg.mBotTemperature_tooltip = "温度測定";//"Temperature measurement (°C)";

// Sound sensor
Blockly.Msg.mBotSound = "マイク（%）";//"Microphone (%)";
Blockly.Msg.mBotSound_tooltip = "周囲の音量（パーセント）";//"Ambient sound intensity (percentage)";

// 7-segment display
Blockly.Msg.mBotSeg7 = "7セグメントディスプレイ";//"7-segment display";
Blockly.Msg.mBotSeg7_tooltip = "7セグメントディスプレイに数値を表示します。";//"Shows a numeric value on the 7-segment display";

// Remote IR
Blockly.Msg.mbot_remoteIR = "赤外線リモコン";//"Remote IR";
Blockly.Msg.mbot_key1 = "キー";//"Key";
Blockly.Msg.mbot_key2 = "押された";//"pressed";
Blockly.Msg.mbot_remoteIR_dropdown = [
	['A', '69'], ['B', '70'], ['C', '71'], ['D', '68'],['E', '67'], ['F', '13'],
	['↑', '64'], ['↓', '25'],['⟵', '7'], ['⟶', '9'],['⚙️', '21'],
	['R0', '22'],['R1', '12'],['R2', '24'],['R3', '94'],['R4', '8'],['R5', '28'],
	['R6', '90'],['R7', '66'],['R8', '82'],['R9', '74']
];
Blockly.Msg.mbot_remoteIR_tooltip = "赤外線リモコンのキーが押されるのを待ちます。";//"Remote IR: waits for the selected key to be pressed";

// LED matrix (category)
Blockly.Msg.mBotLEDMatrix = "LEDマトリックス";//"LED Matrix";
Blockly.Msg.mBotLEDMatrixClear = Blockly.Msg.mBotLEDMatrix +": クリア";//": Clear";
Blockly.Msg.mBotLEDMatrixDraw = Blockly.Msg.mBotLEDMatrix +": 描画";//": Draw";
Blockly.Msg.mBotLEDMatrixBright = "明るさ";//"Brightness";

Blockly.Msg.mBotLEDMatrixSmileys_dropdown = [
    ['目1'/*'Eyes 1'*/, '0,0,60,98,94,94,60,1,1,60,94,94,98,60,0,0'],
    ['目2'/*'Eyes 2'*/, '0,60,66,74,66,66,60,0,0,60,66,74,66,66,60,0'],
    ['楽'/*'Happy'*/, '0,16,32,64,68,34,19,3,3,19,34,68,64,32,16,0'],
    ['怒'/*'Angry'*/, '0,30,60,120,112,32,0,0,0,0,32,112,120,60,30,0'],
    ['愛'/*'In love'*/, '0,12,30,60,60,30,12,0,0,12,30,60,60,30,12,0'],
    ['眠'/*'Asleep'*/, '0,34,50,42,38,34,0,0,0,0,34,50,42,38,34,0']
];

Blockly.Msg.mBotLEDMatrix_tooltip = Blockly.Msg.mBotLEDMatrix + "描画";//": draw an image";
Blockly.Msg.mBotLEDMatrixClear_tooltip = Blockly.Msg.mBotLEDMatrix + "すべてクリア";//": Clear all pixels";
Blockly.Msg.mBotLEDMatrixNumber_tooltip = Blockly.Msg.mBotLEDMatrix + "数値(max4桁)を表示";//": Show a number (maximum 4 digits)";
Blockly.Msg.mBotLEDMatrixText_tooltip = Blockly.Msg.mBotLEDMatrix + "文字(max 3文字)を表示";//": Show a text (maximum 3 characters)";
Blockly.Msg.mBotLEDMatrixSmileys_tooltip = Blockly.Msg.mBotLEDMatrix + "絵を表示";//": draw a picture (from a list)";
Blockly.Msg.mBotLEDMatrixData_tooltip = Blockly.Msg.mBotLEDMatrix + "バイトデータで描画";//": draw an image with data bytes (e.g. 0,0,60,98,94,94,60,1,1,60,94,94,98,60,0,0)";
