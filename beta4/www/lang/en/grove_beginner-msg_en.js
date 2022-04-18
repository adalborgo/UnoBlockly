/**
 * @package: UnoBlockly
 * @file grove_beginner-msg_en.js
 * @version 0.1 (21-06-2021)
 * @description Grove Beginner Kit messages
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

 'use strict';

//--- Grove Beginner Kit ---//
Blockly.Msg.CAT_SEEED_BEG = "Beginner Kit";

Blockly.Msg.GroveseeedLed = "LED  |";
Blockly.Msg.FIELDDROPDOWN_LED_STATUS = [["ON", Blockly.Msg.high], ["OFF", Blockly.Msg.low]];
Blockly.Msg.GroveseeedLedtooltip = "Turns the LED on/off";

Blockly.Msg.GroveseeedButton = "Button  |";
Blockly.Msg.GroveseeedButton_tooltip = "Detect button status";

Blockly.Msg.GroveseeedPotentiometer = "Encoder (0..300°)  |";
Blockly.Msg.GroveseeedPotentiometer_tooltip = "Angle of rotation (0..300°)";

Blockly.Msg.GroveseeedLightsensor="Ambient brightness  |";
Blockly.Msg.GroveseeedLightsensor_pins = [["A6", "A6"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A7", "A7"]];
Blockly.Msg.GroveseeedLightsensor_tooltip="Ambient brightness";

Blockly.Msg.GroveseeedMicrophone = "Microphone  |";
Blockly.Msg.GroveseeedMicrophone_pins = [["A2", "A2"], ["A0", "A0"], ["A1", "A1"],  ["A3", "A3"], ["A4", "A4"], ["A5", "A5"],["A6", "A6"],["A7", "A7"]];
Blockly.Msg.GroveseeedMicrophone_tooltip = "Ambient sound intensity (percentage)";

Blockly.Msg.GroveseeedToneTime = "Play a note  |";
Blockly.Msg.GroveseeedToneTime_freq = "Frequency (Hz)";
Blockly.Msg.GroveseeedToneTime_time = "Duration (ms)";
Blockly.Msg.GroveseeedToneTime_tooltip = "Play a note indicating frequency (Hz) and duration (ms)";

Blockly.Msg.GroveseeedTone = "Play a note  |";
Blockly.Msg.GroveseeedTone_freq = "Frequency (Hz)";
Blockly.Msg.GroveseeedTone_tooltip = "Play a note indicating frequency (Hz) and duration (ms)";

Blockly.Msg.GroveseeedNotone = "Stop the sound  |";
Blockly.Msg.GroveseeedNotone_tooltip = "Stop the sound on the indicated pin";

//--- BMP280 ---//
Blockly.Msg.Groveseeed_bmp280_pressure="Atmospheric pressure";
Blockly.Msg.Groveseeed_bmp280_pressure_tooltip="BMP280: return the atmospheric pressure (hPa)";

//--- LIS3DHTR ---//
Blockly.Msg.Groveseeed_lis3dhtr_values="Acceleration";
Blockly.Msg.Groveseeed_lis3dhtr_values_tooltip="LIS3DHTR: return the component (x, y, z) of the acceleration (m/s^2)";

//--- OLED_SSD1315 ---//
Blockly.Msg.Groveseeed_ssd1315_init="Initialize the Grove - OLED Display  |";
Blockly.Msg.Groveseeed_ssd1315_flip="Flip the screen";
Blockly.Msg.Groveseeed_ssd1315_flip_tooltip="Flip the vertical writing orientation of the screen";
Blockly.Msg.Groveseeed_ssd1315_init_tooltip="Initialize Grove - OLED Display 0.96\" SSD1315 (I2C: 0x78) ";
Blockly.Msg.Groveseeed_ssd1315_clear = "Clear the screen";
Blockly.Msg.Groveseeed_ssd1315_clear_tooltip = "Clear the screen";

Blockly.Msg.Groveseeed_ssd1315_print = "Print the text";
Blockly.Msg.Groveseeed_ssd1315_print_sep = "Print a text |";
Blockly.Msg.Groveseeed_ssd1315_print_tooltip = "Print a string from the current cursor position";

Blockly.Msg.Groveseeed_ssd1315_setcursor="Set the cursor  |";
Blockly.Msg.Groveseeed_ssd1315_setcursor_tooltip="Set the cursor in the indicated location";

Blockly.Msg.Groveseeed_ssd1315_setcursor_draw="Set the cursor  |";
Blockly.Msg.Groveseeed_ssd1315_row="Row";
Blockly.Msg.Groveseeed_ssd1315_column="Column";
Blockly.Msg.Groveseeed_ssd1315_text="Text";
Blockly.Msg.Groveseeed_ssd1315_setcursor_draw_tooltip="Print a string starting from the indicated position";

Blockly.Msg.GroveseeedDTH_type = "Type";
Blockly.Msg.GroveseeedDTH_tooltip = "Measurement of temperature and humidity with a DHTxx sensor (reading time ~250 ms)";
Blockly.Msg.GroveseeedDTH_type11 = "DHT11";
Blockly.Msg.GroveseeedDTH_type21 = "DHT21";
Blockly.Msg.GroveseeedDTH_type22 = "DHT22";
Blockly.Msg.GroveseeedDTH_temp = "Temperature (°C)";
Blockly.Msg.GroveseeedDTH_humi = "Humidity (%)";
Blockly.Msg.GroveseeedDTH_head = "Heat index (°C)";
