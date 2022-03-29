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
Blockly.Msg.CAT_ultrason = "⇣ センサー";//"⇣ Sensors";
Blockly.Msg.OTTODIY_HOME_TEXT = "ホーム";//"Home";
Blockly.Msg.OTTODIY_HOME_TOOLTIP = "Ottoがホームに帰還します。";//"Otto goes to home position.";
Blockly.Msg.OTTODIY_DIY_URL = "https://www.ottodiy.com/academy"; // do not translate
Blockly.Msg.OTTODIY_CALIBRATION="キャリブレーション";//'Calibrate ';
Blockly.Msg.OTTODIY_CALIBRATION_LEG='脚: ';
Blockly.Msg.OTTODIY_CALIBRATION_FOOT='足: ';
Blockly.Msg.OTTODIY_CALIBRATION_TOOLTIP="小さな正負の値を使って少しづつ垂直にしてください。";//'Use small positive and negative values iteratively,change gradually until is completely straight (90º)';
Blockly.Msg.OTTODIY_EEPROM_TEXT= "EEPROMを保存";//'Save Trims on EEPROM';
Blockly.Msg.OTTODIY_EEPROM_TOOLTIP= "完全に垂直になってから使用してください。その後このブロックは削除してください。";//'Use only after completely straight(90º) one time, delete this BLOCK after for further programming';
Blockly.Msg.OTTODIY_MOVE_TEXT = "移動";//"Move";
Blockly.Msg.OTTODIY_MOVE_TOOLTIP = "Ottoの基本動作";//"Otto basic movements";
Blockly.Msg.OTTODIY_STEP_CHOICE = [["↑ 前", "FORWARD"], ["↓ 後", "BACKWARD"]];
Blockly.Msg.OTTODIY_TURN_CHOICE = [["↺ 左", "LEFT"], ["↻ 右", "RIGHT"]];
Blockly.Msg.OTTODIY_BEND_CHOICE = [["左曲げ", "BENDLEFT"], ["右曲げ", "BENDRIGHT"]];
Blockly.Msg.OTTODIY_SHAKE_CHOICE = [["左振る", "SHAKELEFT"], ["右振る", "SHAKERIGHT"]];
Blockly.Msg.OTTODIY_JUMP = [["上", "ジャンプ"]];
Blockly.Msg.OTTODIY_MOVE_SPEED_TEXT = "速度";
Blockly.Msg.OTTODIY_MOVE_SPEED_CHOICE = [["ノーマル", "1000"],["ゆっくり", "2000"],["とてもゆっくり", "3000"] , ["速い", "750"], ["とても速い", "500"], ["超速い", "250"]];
Blockly.Msg.OTTODIY_MOVEW_SPEED_CHOICE = [["ノーマル", "45"],["ゆっくり", "20"],["とてもゆっくり", "10"] , ["速い", "60"], ["とても速い", "90"]];
Blockly.Msg.OTTODIY_DANCE_TEXT = "ダンス";//"Dance";
Blockly.Msg.OTTODIY_DANCE_TOOLTIP = "Ottoダンス！";//"Otto dance!";
Blockly.Msg.OTTODIY_DANCE_CHOICE = [["ムーンウォーク ⟵", "ムーンウォークLEFT"],  ["ムーンウォーク ⟶", "ムーンウォークRIGHT"],["crossing ⟵", "crusaitoLEFT"],["crossing ⟶", "crusaitoRIGHT"], ["flapping ↑", "flappingFRONT"], ["flapping ↓", "flappingBACK"]];
Blockly.Msg.OTTODIY_DANCE_SIZE_TEXT = "サイズ";
Blockly.Msg.OTTODIY_DANCE_SIZE_CHOICE = [["ノーマル", "25"], ["小", "10"], ["大", "40"]];
Blockly.Msg.OTTODIY_DO_TEXT = "実行";
Blockly.Msg.OTTODIY_DO_TOOLTIP = "Ottoの複雑な動き";//"Otto complex movements";
Blockly.Msg.OTTODIY_DO_CHOICE = [ ["swing", "swing"], ["updown", "updown"], ["tiptoeSwing", "tiptoeSwing"], ["jitter", "jitter"], ["ascendingTurn", "ascendingTurn"]];
Blockly.Msg.OTTODIY_SOUND_TEXT = "音声";
Blockly.Msg.OTTODIY_SOUND_TOOLTIP = "感情表現";//"Emotional sounds";
Blockly.Msg.OTTODIY_SOUND_CHOICE = [ ["😃 楽しい1", "S_superHappy"], ["🙂 楽しい2", "S_happy"], ["😊 楽しい3", "S_happy_short"], ["🙁 悲しい", "S_sad"], ["😕 困惑", "S_confused"], ["🤗 かわいい", "S_cuddly"], ["😮 オー", "S_OhOoh"], ["😯 オーーー", "S_OhOoh2"], ["😲 びっくり", "S_surprise"],["🤖 接続", "S_connection"], [" 🤖 切断", "S_disconnection"], ["👇 押す", "S_buttonPushed"], ["❗ 1", "S_mode1"], ["❗❗ 2", "S_mode2"], ["❗❗❗ 3", "S_mode3"], ["💤 眠り", "S_sleeping"], ["💩 ブー1", "S_fart1"], ["💩 ブー2", "S_fart2"], ["💩 ブー3", "S_fart3"],];
Blockly.Msg.OTTODIY_GETDISTANCE_TEXT = "距離 [cm]";
Blockly.Msg.OTTODIY_GETDISTANCE_TOOLTIP = "3cmから400cmまでの距離";//"Ranging distance between 3 cm to 400 cm";

// Added in UnoBlockly
Blockly.Msg.OTTODIY_TURN_TEXT = "曲がる";//"Turn";
Blockly.Msg.OTTODIY_BEND_TEXT = "曲げる";//"Bend";
Blockly.Msg.OTTODIY_SHAKE_TEXT = "シェイク";//"Shake";
Blockly.Msg.OTTODIY_UP_TEXT = "上";//"Up";
