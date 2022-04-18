/**
 * @package: UnoBlockly
 * @file grove_beginner-msg_it.js
 * @version 0.1 (21-06-2021)
 * @description Grove Beginner Kit messages
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

//--- Grove Beginner Kit ---//
Blockly.Msg.CAT_SEEED_BEG = "Beginner Kit";

Blockly.Msg.GroveseeedLed = "LED  |";
Blockly.Msg.FIELDDROPDOWN_LED_STATUS = [["ACCESO", Blockly.Msg.high], ["SPENTO", Blockly.Msg.low]];
Blockly.Msg.GroveseeedLedtooltip = "Accende/Spegne il LED";

Blockly.Msg.GroveseeedButton = "Pulsante  |";
Blockly.Msg.GroveseeedButton_tooltip = "Rileva lo stato del Pulsante";

Blockly.Msg.GroveseeedPotentiometer = "Encoder (0..300°)  |";
Blockly.Msg.GroveseeedPotentiometer_tooltip = "Misura l'angolo di rotazione (0..300°)";

Blockly.Msg.GroveseeedLightsensor="Luminosità ambientale  |";
Blockly.Msg.GroveseeedLightsensor_pins = [["A6", "A6"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A7", "A7"]];
Blockly.Msg.GroveseeedLightsensor_tooltip="Luminosità ambientale";

Blockly.Msg.GroveseeedMicrophone = "Microfono  |";
Blockly.Msg.GroveseeedMicrophone_pins = [["A2", "A2"], ["A0", "A0"], ["A1", "A1"],  ["A3", "A3"], ["A4", "A4"], ["A5", "A5"],["A6", "A6"],["A7", "A7"]];
Blockly.Msg.GroveseeedMicrophone_tooltip = "Misura l\'intensità del suono ambientale in percentuale";

Blockly.Msg.GroveseeedToneTime = "Suona una nota  |";
Blockly.Msg.GroveseeedToneTime_freq = "Frequenza (Hz)";
Blockly.Msg.GroveseeedToneTime_time = "Durata (ms)";
Blockly.Msg.GroveseeedToneTime_tooltip = "Suona una nota indicando la frequenza (Hz) e la durata (ms)";

Blockly.Msg.GroveseeedTone = "Suona una nota  |";
Blockly.Msg.GroveseeedTone_freq = "Frequenza (Hz)";
Blockly.Msg.GroveseeedTone_tooltip = "Suona una nota indicando la frequenza (Hz) e la durata (ms)";

Blockly.Msg.GroveseeedNotone = "Ferma il suono  |";
Blockly.Msg.GroveseeedNotone_tooltip = "Ferma il suono sul pin indicato";

//--- BMP280 ---//
Blockly.Msg.Groveseeed_bmp280_pressure="Pressione atmosferica";
Blockly.Msg.Groveseeed_bmp280_pressure_tooltip="BMP280: restituisce la pressione atmosferica (in hPa)";

//--- LIS3DHTR ---//
Blockly.Msg.Groveseeed_lis3dhtr_values="Accelerazione";
Blockly.Msg.Groveseeed_lis3dhtr_values_tooltip="LIS3DHTR: restituisce la componente (x,y,z) dell'accelerazione (in m/s^2)";

//--- OLED_SSD1315 ---//
Blockly.Msg.Groveseeed_ssd1315_init="Inizializza il Grove - OLED Display  |";
Blockly.Msg.Groveseeed_ssd1315_flip="Inverti lo schermo";
Blockly.Msg.Groveseeed_ssd1315_flip_tooltip="Scambia l'orientazione verticale di scrittura dello schermo";
Blockly.Msg.Groveseeed_ssd1315_init_tooltip="Inizializza Grove - OLED Display 0.96\" SSD1315 (I2C: 0x78) ";
Blockly.Msg.Groveseeed_ssd1315_clear = "Cancella lo schermo";
Blockly.Msg.Groveseeed_ssd1315_clear_tooltip = "Cancella lo schermo";

Blockly.Msg.Groveseeed_ssd1315_print = "Visualizza il testo";
Blockly.Msg.Groveseeed_ssd1315_print_sep = "Visualizza un testo  |";
Blockly.Msg.Groveseeed_ssd1315_print_tooltip = "Visualizza una stringa dalla posizione corrente del cursore";

Blockly.Msg.Groveseeed_ssd1315_setcursor="Imposta il cursore  |";
Blockly.Msg.Groveseeed_ssd1315_setcursor_tooltip="Imposta il cursore nella posizione indicata";

Blockly.Msg.Groveseeed_ssd1315_setcursor_draw="Imposta il cursore  |";
Blockly.Msg.Groveseeed_ssd1315_row="Riga";
Blockly.Msg.Groveseeed_ssd1315_column="Colonna";
Blockly.Msg.Groveseeed_ssd1315_text="Testo";
Blockly.Msg.Groveseeed_ssd1315_setcursor_draw_tooltip="Scrive una stringa a partire dalla posizione indicata";

Blockly.Msg.GroveseeedDTH_type = "Tipo";
Blockly.Msg.GroveseeedDTH_tooltip = "Misura la temperatura e l\'umidità con un sensore DHTxx (tempo di lettura ~250 ms)";
Blockly.Msg.GroveseeedDTH_type11 = "DHT11";
Blockly.Msg.GroveseeedDTH_type21 = "DHT21";
Blockly.Msg.GroveseeedDTH_type22 = "DHT22";
Blockly.Msg.GroveseeedDTH_temp = "Temperatura (°C)";
Blockly.Msg.GroveseeedDTH_humi = "Umidità (%)";
Blockly.Msg.GroveseeedDTH_head = "Indice di calore (°C)";
