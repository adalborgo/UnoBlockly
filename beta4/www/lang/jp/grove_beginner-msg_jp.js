/**
 * @package: UnoBlockly
 * @file grove_beginner-msg_en.js
 * @version 0.1 (21-06-2021)
 * @description Grove Beginner Kit messages
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

 'use strict';

//--- Grove Beginner Kit ---//
Blockly.Msg.CAT_SEEED_BEG = "ビギナーキット";//"Beginner Kit";

Blockly.Msg.GroveseeedLed = "LED  |";
Blockly.Msg.FIELDDROPDOWN_LED_STATUS = [["ON", Blockly.Msg.high], ["OFF", Blockly.Msg.low]];
Blockly.Msg.GroveseeedLedtooltip = "LEDをON/OFFします。";//"Turns the LED on/off";

Blockly.Msg.GroveseeedButton = "ボタン |";//"Button  |";
Blockly.Msg.GroveseeedButton_tooltip = "ボタンの状態を調べます。";//"Detect button status";

Blockly.Msg.GroveseeedPotentiometer = "エンコーダ (0..300°)  |";//"Encoder (0..300°)  |";
Blockly.Msg.GroveseeedPotentiometer_tooltip = "回転角度(0..300°)";//"Angle of rotation (0..300°)";

Blockly.Msg.GroveseeedLightsensor="明るさセンサー |";//"Ambient brightness  |";
Blockly.Msg.GroveseeedLightsensor_pins = [["A6", "A6"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A7", "A7"]];
Blockly.Msg.GroveseeedLightsensor_tooltip="周囲の明るさ";//"Ambient brightness";

Blockly.Msg.GroveseeedMicrophone = "マイク |";//"Microphone  |";
Blockly.Msg.GroveseeedMicrophone_pins = [["A2", "A2"], ["A0", "A0"], ["A1", "A1"],  ["A3", "A3"], ["A4", "A4"], ["A5", "A5"],["A6", "A6"],["A7", "A7"]];
Blockly.Msg.GroveseeedMicrophone_tooltip = "周囲の音量（パーセント）";//"Ambient sound intensity (percentage)";

Blockly.Msg.GroveseeedToneTime = "音階を再生 |";//"Play a note  |";
Blockly.Msg.GroveseeedToneTime_freq = "周波数（Hz）";//"Frequency (Hz)";
Blockly.Msg.GroveseeedToneTime_time = "長さ（ミリ秒）";//"Duration (ms)";
Blockly.Msg.GroveseeedToneTime_tooltip = "設定した周波数と長さの音階を再生します。";//"Play a note indicating frequency (Hz) and duration (ms)";

Blockly.Msg.GroveseeedTone = "音階を再生 |";//"Play a note  |";
Blockly.Msg.GroveseeedTone_freq = "周波数（Hz）";//"Frequency (Hz)";
Blockly.Msg.GroveseeedTone_tooltip = "設定した周波数の音階を再生します。";//"Play a note indicating frequency (Hz) and duration (ms)";

Blockly.Msg.GroveseeedNotone = "再生を止める |";//"Stop the sound  |";
Blockly.Msg.GroveseeedNotone_tooltip = "設定したピンの再生を止めます。";//"Stop the sound on the indicated pin";

//--- BMP280 ---//
Blockly.Msg.Groveseeed_bmp280_pressure="気圧";//"Atmospheric pressure";
Blockly.Msg.Groveseeed_bmp280_pressure_tooltip="BMP280:大気圧を測ります。";//"BMP280: return the atmospheric pressure (hPa)";

//--- LIS3DHTR ---//
Blockly.Msg.Groveseeed_lis3dhtr_values="加速度";//Acceleration";
Blockly.Msg.Groveseeed_lis3dhtr_values_tooltip="LIS3DHTR: x、y、z軸の加速度(m/s^2)を測定します。";//"LIS3DHTR: return the component (x, y, z) of the acceleration (m/s^2)";

//--- OLED_SSD1315 ---//
Blockly.Msg.Groveseeed_ssd1315_init="有機ELディスプレイを初期化";//"Initialize the Grove - OLED Display  |";
Blockly.Msg.Groveseeed_ssd1315_flip="反転";//"Flip the screen";
Blockly.Msg.Groveseeed_ssd1315_flip_tooltip="画像を縦方向に反転します。";//"Flip the vertical writing orientation of the screen";
Blockly.Msg.Groveseeed_ssd1315_init_tooltip="OLED Display 0.96\" SSD1315 (I2C: 0x78)を初期化します。";//"Initialize Grove - OLED Display 0.96\" SSD1315 (I2C: 0x78) ";
Blockly.Msg.Groveseeed_ssd1315_clear = "画面をクリア";//"Clear the screen";
Blockly.Msg.Groveseeed_ssd1315_clear_tooltip = "画面をクリアします。";//"Clear the screen";

Blockly.Msg.Groveseeed_ssd1315_print = "文字列を描画";//"Print the text";
Blockly.Msg.Groveseeed_ssd1315_print_sep = "文字列を描画 |";//"Print a text |";
Blockly.Msg.Groveseeed_ssd1315_print_tooltip = "現在座標から文字列をプリントします。";//"Print a string from the current cursor position";

Blockly.Msg.Groveseeed_ssd1315_setcursor="カーソルをセット |";//"Set the cursor  |";
Blockly.Msg.Groveseeed_ssd1315_setcursor_tooltip="設定位置にカーソルをセットします。";//"Set the cursor in the indicated location";

Blockly.Msg.Groveseeed_ssd1315_setcursor_draw="カーソルをセット |";//"Set the cursor  |";
Blockly.Msg.Groveseeed_ssd1315_row="行";//"Row";
Blockly.Msg.Groveseeed_ssd1315_column="列";//"Column";
Blockly.Msg.Groveseeed_ssd1315_text="文字";//"Text";
Blockly.Msg.Groveseeed_ssd1315_setcursor_draw_tooltip="設定位置から文字列を描画します。";//"Print a string starting from the indicated position";

Blockly.Msg.GroveseeedDTH_type = "タイプ";//"Type";
Blockly.Msg.GroveseeedDTH_tooltip = "DHTxx センサー (測定時間 ~250 ms)で気温と湿度を測定します。";//"Measurement of temperature and humidity with a DHTxx sensor (reading time ~250 ms)";
Blockly.Msg.GroveseeedDTH_type11 = "DHT11";
Blockly.Msg.GroveseeedDTH_type21 = "DHT21";
Blockly.Msg.GroveseeedDTH_type22 = "DHT22";
Blockly.Msg.GroveseeedDTH_temp = "温度 (°C)";//"Temperature (°C)";
Blockly.Msg.GroveseeedDTH_humi = "湿度 (%)";//"Humidity (%)";
Blockly.Msg.GroveseeedDTH_head = "Heat index (°C)";
