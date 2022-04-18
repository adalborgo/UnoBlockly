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
Blockly.Msg.CAT_OWLBOT_LEDMatrix = "LEDマトリックス"; // "LED Matrix";

// Ultrasonic distance sensor
Blockly.Msg.OwlBotDistance = "距離（mm）|"; //"Distance (mm)  |";
Blockly.Msg.OwlBotDistance_tooltip = "障害物との距離を測定します。";//"Get the distance of an obstacle (mm)";

Blockly.Msg.OwlBotBattery = "バッテリー";
Blockly.Msg.OwlBotBattery_tooltip = "バッテリー電圧を表示します";

// RGB LED
Blockly.Msg.OwlBotRgbled = "RGB LED";
Blockly.Msg.OwlBotRgbled_tooltip = "RGB LEDをコントロールします（0～255）。";//"Controls the lighting of the RGB LEDs (values from 0 to 255)";
Blockly.Msg.OwlBotRgbled_side_dropdown = [["All", "ALL"],["Left", "LEFT"], ["Center", "CENTER"], ["Right", "RIGHT"], ["Front", "FRONT"], ["Rear", "REAR"]];

// Buzzer pin
Blockly.Msg.OwlBotBuzzerPin = "Buzzer Pin";
Blockly.Msg.OwlBotBuzzerPin_tooltip = "Buzzer pin";

// Button
Blockly.Msg.OwlBotButton = "ボタン";//"Button";
Blockly.Msg.OwlBotButton_tooltip = "ボタン（押された：0が解放された：1）"; //"Button (pressed: 0; released: 1)";

// Motors
Blockly.Msg.OwlBotMotor = "モーター ";
Blockly.Msg.OwlBotMotor_tooltip = "モーターを駆動します。";
Blockly.Msg.OwlBotMotor_speed = "速度（0～100）";
Blockly.Msg.OwlBotMotor_dir = "方向";
Blockly.Msg.OwlBotMotor_dir_dropdown = [[Blockly.Msg.dir_forward, "前"], [Blockly.Msg.dir_backward, "後"]];
Blockly.Msg.OwlBotMotor_side_dropdown = [[Blockly.Msg.left_right, "左右"], [Blockly.Msg.left, "左"], [Blockly.Msg.right, "右"]];

// Linefollower sensor
Blockly.Msg.OwlBotLinefollower = "ラインセンサー"; //"Line follow sensor";
Blockly.Msg.OwlBotLinefollower_tooltip = "ラインセンサー (0: ⚫⚫⚫; 1: ⚪⚫⚫, 2: ⚫⚪⚫;  3: ⚪⚪⚫; 4: ⚫⚫⚪;  5: ⚪⚫⚪; 6:⚫⚪⚪; 7: ⚪⚪⚪)";

// LED matrix (category)
Blockly.Msg.OwlBotLEDMatrix = "LEDマトリックス";//"LED Matrix";
Blockly.Msg.OwlBotLEDMatrixClear = Blockly.Msg.mBotLEDMatrix + "  |  " + "クリア"; //": Clear";
Blockly.Msg.OwlBotLEDMatrixDraw = Blockly.Msg.mBotLEDMatrix +  "  |  " + "描画"; //": Draw";
Blockly.Msg.OwlBotLEDMatrixBright = "明るさ"; //"Brightness";

Blockly.Msg.OwlBotLEDMatrixSmileys_dropdown = [
    ['目1'/*'Eyes 1'*/, '0'],
    ['目2'/*'Eyes 2'*/, '1'],
    ['楽'/*'Happy'*/, '2'],
    ['怒'/*'Angry'*/, '3'],
    ['愛'/*'In love'*/,'4'],
    ['眠'/*'Asleep'*/, '5'],
    ['眼鏡'/*'Glasses'*/, '6'],
    ['O  O', '7']
];

Blockly.Msg.OwlBotLEDMatrix_tooltip = Blockly.Msg.OwlBotLEDMatrix + "描画";//": draw an image";
Blockly.Msg.OwlBotLEDMatrixClear_tooltip = Blockly.Msg.OwlBotLEDMatrix + "すべてクリア";//": Clear all pixels";
Blockly.Msg.OwlBotLEDMatrixNumber_tooltip = Blockly.Msg.OwlBotLEDMatrix + "数値(max4桁)を表示";//": Show a number (maximum 4 digits)";
Blockly.Msg.OwlBotLEDMatrixSmileys_tooltip = Blockly.Msg.OwlBotLEDMatrix + "絵を表示";//": draw a picture (from a list)";
Blockly.Msg.OwlBotLEDMatrixData_tooltip = Blockly.Msg.OwlBotLEDMatrix + "バイトデータで描画";//": draw an image with data bytes (e.g. 0,0,60,98,94,94,60,1,1,60,94,94,98,60,0,0)";
