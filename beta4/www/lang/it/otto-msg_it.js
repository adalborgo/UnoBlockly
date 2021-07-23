/**
 * @package: UnoBlockly
 * @file otto-msg_it.js
 * @version 0.1 (03-06-2021)
 * @description OttoDIY messages
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

 'use strict';

// OTTO DIY Robot //
// ONLY TRANSLATE THE LEFT PART INSIDE ["THIS YES", NOT]
Blockly.Msg.CAT_OTTO = "OttoDIY";
Blockly.Msg.CAT_ultrason = "Sensori";
Blockly.Msg.OTTODIY_HOME_TEXT = "Riposo";
Blockly.Msg.OTTODIY_HOME_TOOLTIP = "Otto si ferma in posizione di riposo.";
Blockly.Msg.OTTODIY_DIY_URL = "https://www.ottodiy.com/academy"; // do not translate
Blockly.Msg.OTTODIY_CALIBRATION='Calibra ';
Blockly.Msg.OTTODIY_CALIBRATION_LEG='Gamba: ';
Blockly.Msg.OTTODIY_CALIBRATION_FOOT='Piede: ';
Blockly.Msg.OTTODIY_CALIBRATION_TOOLTIP='Usa piccoli valori positivi e negativi in modo iterativo, cambia gradualmente fino a quando non va ben dritto (90º)';
Blockly.Msg.OTTODIY_EEPROM_TEXT= 'Salva Trims su EEPROM';
Blockly.Msg.OTTODIY_EEPROM_TOOLTIP= 'Usare solo una volta dopo che va ben dritto (90º), cancellare questo BLOCCO in seguito per continuare la programmazione';
Blockly.Msg.OTTODIY_MOVE_TEXT = "Sposta";
Blockly.Msg.OTTODIY_MOVE_TOOLTIP = "Movimenti base di Otto";
Blockly.Msg.OTTODIY_STEP_CHOICE = [["↑ avanti", "FORWARD"], ["↓ indietro", "BACKWARD"]];
Blockly.Msg.OTTODIY_TURN_CHOICE = [["↺ a sinistra", "LEFT"], ["↻ a destra", "RIGHT"]];
Blockly.Msg.OTTODIY_BEND_CHOICE = [["sinistra", "BENDLEFT"], ["destra", "BENDRIGHT"]];
Blockly.Msg.OTTODIY_SHAKE_CHOICE = [["sinistra", "SHAKELEFT"], ["destra", "SHAKERIGHT"]];
Blockly.Msg.OTTODIY_JUMP = [["su", "jump"]];
Blockly.Msg.OTTODIY_MOVE_SPEED_TEXT = "Velocità";
Blockly.Msg.OTTODIY_MOVE_SPEED_CHOICE = [["normale", "1000"],["lento", "2000"],["molto lento", "3000"] , ["veloce", "750"], ["molto veloce", "500"], ["velocissimo", "250"]];
Blockly.Msg.OTTODIY_MOVEW_SPEED_CHOICE = [["normale", "45"],["lento", "20"],["molto lento", "10"] , ["veloce", "60"], ["molto veloce", "90"]];
Blockly.Msg.OTTODIY_DANCE_TEXT = "Balla";
Blockly.Msg.OTTODIY_DANCE_TOOLTIP = "Otto balla!";
Blockly.Msg.OTTODIY_DANCE_CHOICE = [["moonwalk ⟵", "moonwalkerLEFT"],  ["moonwalk ⟶", "moonwalkerRIGHT"],["crossing ⟵", "crusaitoLEFT"],["crossing ⟶", "crusaitoRIGHT"], ["flapping ↑", "flappingFRONT"], ["flapping ↓", "flappingBACK"]];
Blockly.Msg.OTTODIY_DANCE_SIZE_TEXT = "Ampiezza";
Blockly.Msg.OTTODIY_DANCE_SIZE_CHOICE = [["Normale", "25"], ["Piccolo", "10"], ["Grande", "40"]];
Blockly.Msg.OTTODIY_DO_TEXT = "Fare";
Blockly.Msg.OTTODIY_DO_TOOLTIP = "Movimenti complessi di Otto";
Blockly.Msg.OTTODIY_DO_CHOICE = [ ["dondola", "swing"], ["su e giù", "updown"], ["in punta di piedi", "tiptoeSwing"], ["irrequieto", "jitter"], ["ascendente", "ascendingTurn"]];
Blockly.Msg.OTTODIY_SOUND_TEXT = "Suono";
Blockly.Msg.OTTODIY_SOUND_TOOLTIP = "Suoni emotivi";
Blockly.Msg.OTTODIY_SOUND_CHOICE = [ ["😃 felice 1", "S_superHappy"], ["🙂 felice 2", "S_happy"], ["😊 felice 3", "S_happy_short"], ["🙁 triste", "S_sad"], ["😕 confuso", "S_confused"], ["🤗 coccolone", "S_cuddly"], ["😮 Oh", "S_OhOoh"], ["😯 OhOoh", "S_OhOoh2"], ["😲 sorpresa", "S_surprise"],["🤖 connetti", "S_connection"], [" 🤖 disconnetti", "S_disconnection"], ["👇 pulsante", "S_buttonPushed"], ["❗ 1", "S_mode1"], ["❗❗ 2", "S_mode2"], ["❗❗❗ 3", "S_mode3"], ["💤 dorme", "S_sleeping"], ["💩 fart1", "S_fart1"], ["💩 fart2", "S_fart2"], ["💩 fart3", "S_fart3"],];
Blockly.Msg.OTTODIY_GETDISTANCE_TEXT = "Distanza (cm)";
Blockly.Msg.OTTODIY_GETDISTANCE_TOOLTIP = "Distanza compresa tra 3 cm e 400 cm";

// Added in UnoBlockly
Blockly.Msg.OTTODIY_TURN_TEXT = "Gira";
Blockly.Msg.OTTODIY_BEND_TEXT = "Piega a";
Blockly.Msg.OTTODIY_SHAKE_TEXT = "Scuoti la gamba";
Blockly.Msg.OTTODIY_UP_TEXT = "Piedi in su";
Blockly.Msg.OTTODIY_SOUND_TOOLTIP1 = "Suona una nota";
Blockly.Msg.OTTODIY_SOUND_TOOLTIP2 = "Emette un suono indicando la frequenza, la durata e la pausa";
Blockly.Msg.OTTODIY_SOUND_TOOLTIP3 = "Emette una sequenza di suoni compresi tra due frequenze";
