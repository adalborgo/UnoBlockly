/**
 * @package: UnoBlockly
 * @file mbot-msg_it.js
 * @version 0.1 (18-01-2022)
 * @description Makeblock mBot messages
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

//--- mBot ---//
Blockly.Msg.CAT_MBOT = "mBot";
Blockly.Msg.CAT_MBOT_LEDMatrix = "Matrice LED";

Blockly.Msg.mbot_slot = "Connettore";
Blockly.Msg.mbot_slot_dropdown = [['1', '1'],['2', '2']];

Blockly.Msg.mbot_port = "Porta";
Blockly.Msg.mbot_port_dropdown = [['1', '1'],['2', '2'],['3', '3'],['4', '4']];

Blockly.Msg.mbot_number = "Numero";
Blockly.Msg.mbot_text = "Testo";
Blockly.Msg.mbot_data = "Dati";

Blockly.Msg.mbot_coordX = "x"
Blockly.Msg.mbot_coordY = "y"

// Ultrasonic distance sensor
Blockly.Msg.mBotDistance = "Distanza (cm)  |";
Blockly.Msg.mBotDistance_tooltip = "Misura della distanza (in cm) con sensore ad ultrasuoni (da 3 cm a 4 m)";

// RGB LED
Blockly.Msg.mBotRgbled = "RGB LED";
Blockly.Msg.mBotRgbled_tooltip = "Controlla l\'accensione dei 2 LED RGB (valori da 0 a 255)";

// Button
Blockly.Msg.mBotButton = "Pulsante";
Blockly.Msg.mBotButton_tooltip = "Pulsante (premuto: true; rilasciato: false)";

// Buzzer
Blockly.Msg.mBotTone = "Suona una Nota  |";
Blockly.Msg.mBotTone_freq = "Frequenza (Hz)";
Blockly.Msg.mBotTone_time = "Durata (ms)";
Blockly.Msg.mBotTone_tooltip = "Suona una nota indicando la frequenza (Hz) e la durata (ms)";

Blockly.Msg.mBotNotone = "Ferma il suono";
Blockly.Msg.mBotNotone_tooltip = "Ferma il suono avviato in precedenza";

// Ambient light sensor
Blockly.Msg.mBotLightSensor = "Luminosità ambientale (%)";
Blockly.Msg.mBotLightSensor_tooltip = "Restituisce la luminosità ambientale in valore percentuale";

// Motors
Blockly.Msg.mBotMotor = "Motori  ";
Blockly.Msg.mBotMotor_speed = "Velocità (da 0 a 255)";
Blockly.Msg.mBotMotor_tooltip = "Azionamento motori";
Blockly.Msg.mBotMotor_dir = "Direzione";
Blockly.Msg.mBotMotor_dir_dropdown = [[Blockly.Msg.dir_forward, "FORWARD"], [Blockly.Msg.dir_backward, "BACKWARD"]];
Blockly.Msg.mBotMotor_side_dropdown = [[Blockly.Msg.left_right, "ALL"], [Blockly.Msg.left, "LEFT"], [Blockly.Msg.right, "RIGHT"]];

// Linefollower sensor
Blockly.Msg.mBotLinefollower = "Sensore seguilinea  |";
Blockly.Msg.mBotLinefollower_tooltip = "Sensore seguilinea (0: entrambi neri; 1: nero a sinistra, 2: bianco a destra; 3: entrambi bianchi)";

// Temperature sensor
Blockly.Msg.mBotTemperature = "Temperatura (°C)";
Blockly.Msg.mBotTemperature_tooltip = "Misura della temperatura (°C)";

// Sound sensor
Blockly.Msg.mBotSound = "Microfono (%)";
Blockly.Msg.mBotSound_tooltip = "Misura l\'intensità del suono ambientale in percentuale";

// 7-segment display
Blockly.Msg.mBotSeg7 = "Display 7 segmenti";
Blockly.Msg.mBotSeg7_tooltip = "Mostra un valore numerico sul display a 7 segmenti";

// Remote IR
Blockly.Msg.mbot_remoteIR = "Telecomando IR";
Blockly.Msg.mbot_key1 = "Tasto";
Blockly.Msg.mbot_key2 = "premuto";
Blockly.Msg.mbot_remoteIR_dropdown = [
	['A', '69'], ['B', '70'], ['C', '71'], ['D', '68'],['E', '67'], ['F', '13'],
	['↑', '64'], ['↓', '25'],['⟵', '7'], ['⟶', '9'],['⚙️', '21'],
	['R0', '22'],['R1', '12'],['R2', '24'],['R3', '94'],['R4', '8'],['R5', '28'],
	['R6', '90'],['R7', '66'],['R8', '82'],['R9', '74']
];
Blockly.Msg.mbot_remoteIR_tooltip = "Telecomando IR: attende la pressione del tasto selezionato";

// LED matrix (category)
Blockly.Msg.mBotLEDMatrix = "Matrice LED";
Blockly.Msg.mBotLEDMatrixClear = Blockly.Msg.mBotLEDMatrix +": Cancella";
Blockly.Msg.mBotLEDMatrixDraw = Blockly.Msg.mBotLEDMatrix +": Disegna";
Blockly.Msg.mBotLEDMatrixBright = "Luminosità";

Blockly.Msg.mBotLEDMatrixSmileys_dropdown = [
    ['Occhi 1', '0,0,60,98,94,94,60,1,1,60,94,94,98,60,0,0'],
    ['Occhi 2', '0,60,66,74,66,66,60,0,0,60,66,74,66,66,60,0'],
    ['Felice', '0,16,32,64,68,34,19,3,3,19,34,68,64,32,16,0'],
    ['Arrabbiato', '0,30,60,120,112,32,0,0,0,0,32,112,120,60,30,0'],
    ['Innamorato', '0,12,30,60,60,30,12,0,0,12,30,60,60,30,12,0'],
    ['Addormentato', '0,34,50,42,38,34,0,0,0,0,34,50,42,38,34,0']
];

Blockly.Msg.mBotLEDMatrix_tooltip = Blockly.Msg.mBotLEDMatrix + ": disegna un'immagine";
Blockly.Msg.mBotLEDMatrixClear_tooltip = Blockly.Msg.mBotLEDMatrix + ": Cancella tutti i pixel";
Blockly.Msg.mBotLEDMatrixNumber_tooltip = Blockly.Msg.mBotLEDMatrix + ": Mostra un numero (massimo 4 cifre)";
Blockly.Msg.mBotLEDMatrixText_tooltip = Blockly.Msg.mBotLEDMatrix + ": Mostra un testo (massimo 3 caratteri)";
Blockly.Msg.mBotLEDMatrixSmileys_tooltip = Blockly.Msg.mBotLEDMatrix + ": disegna un'immagine (da un elenco)";
Blockly.Msg.mBotLEDMatrixData_tooltip = Blockly.Msg.mBotLEDMatrix + ": disegna un'immagine con byte di dati. (es. 0,0,60,98,94,94,60,1,1,60,94,94,98,60,0,0)";
