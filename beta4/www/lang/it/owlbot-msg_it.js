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
Blockly.Msg.CAT_OWLBOT_LEDMatrix = "Matrice LED";

// Ultrasonic distance sensor
Blockly.Msg.OwlBotDistance = "Distanza (mm)";
Blockly.Msg.OwlBotDistance_tooltip = "Misura della distanza (in cm) con sensore ad ultrasuoni (da 3 cm a 150 cm)";

Blockly.Msg.OwlBotBattery = "Batteria";
Blockly.Msg.OwlBotBattery_tooltip = "Mostra la tensione della batteria";

// RGB LED
Blockly.Msg.OwlBotRgbled = "RGB LED";
Blockly.Msg.OwlBotRgbled_tooltip = "Controlla l\'accensione dei 5 LED RGB (valori da 0 a 255)";
Blockly.Msg.OwlBotRgbled_side_dropdown = [["Tutti", "ALL"],["Sinistra", "LEFT"], ["Centro", "CENTER"], ["Destra", "RIGHT"], ["Davanti", "FRONT"], ["Dietro", "REAR"] ];

// Buzzer pin
Blockly.Msg.OwlBotBuzzerPin = "Buzzer Pin";
Blockly.Msg.OwlBotBuzzerPin_tooltip = "Buzzer pin";

// Button
Blockly.Msg.OwlBotButton = "Pulsante";
Blockly.Msg.OwlBotButton_tooltip = "Pulsante (premuto: 0; rilasciato: 1)";

// Motors
Blockly.Msg.OwlBotMotor = "Motori  ";
Blockly.Msg.OwlBotMotor_speed = "Velocità (da 0 a 100)";
Blockly.Msg.OwlBotMotor_tooltip = "Azionamento motori";
Blockly.Msg.OwlBotMotor_side_dropdown = [["Tutti", "ALL"],["Sinistra", "LEFT"], ["Destra", "RIGHT"]];
Blockly.Msg.OwlBotMotor_dir = "Direzione";
Blockly.Msg.OwlBotMotor_dir_dropdown = [[Blockly.Msg.dir_forward, "FORWARD"], [Blockly.Msg.dir_backward, "BACKWARD"]];

// Linefollower sensor
Blockly.Msg.OwlBotLinefollower = "Sensore seguilinea";
Blockly.Msg.OwlBotLinefollower_tooltip = "Sensore seguilinea (0: ⚫⚫⚫; 1: ⚪⚫⚫, 2: ⚫⚪⚫;  3: ⚪⚪⚫; 4: ⚫⚫⚪;  5: ⚪⚫⚪; 6:⚫⚪⚪; 7: ⚪⚪⚪)";

// LED matrix (category)
Blockly.Msg.OwlBotLEDMatrix = "Matrice LED";
Blockly.Msg.OwlBotLEDMatrixClear = Blockly.Msg.OwlBotLEDMatrix + "  |  Cancella";
Blockly.Msg.OwlBotLEDMatrixDraw = Blockly.Msg.OwlBotLEDMatrix  + "  |  Disegna";
Blockly.Msg.OwlBotLEDMatrixBright = "Luminosità";

Blockly.Msg.OwlBotLEDMatrixSmileys_dropdown = [
    ['Occhi 1', '0'],
    ['Occhi 2', '1'],
    ['Felice', '2'],
    ['Arrabbiato', '3'],
    ['Innamorato','4'],
    ['Addormentato', '5'],
    ['Occhiali', '6'],
    ['O  O', '7']
];

Blockly.Msg.OwlBotLEDMatrix_tooltip = Blockly.Msg.OwlBotLEDMatrix + ": disegna un'immagine";
Blockly.Msg.OwlBotLEDMatrixClear_tooltip = Blockly.Msg.OwlBotLEDMatrix + ": Cancella tutti i pixel";
Blockly.Msg.OwlBotLEDMatrixNumber_tooltip = Blockly.Msg.OwlBotLEDMatrix + ": Mostra un numero (massimo 4 cifre)";
Blockly.Msg.OwlBotLEDMatrixSmileys_tooltip = Blockly.Msg.OwlBotLEDMatrix + ": disegna un'immagine (da un elenco)";
Blockly.Msg.OwlBotLEDMatrixData_tooltip = Blockly.Msg.OwlBotLEDMatrix + ": disegna un'immagine con byte di dati. (es. 0,0,60,98,94,94,60,1,1,60,94,94,98,60,0,0)";
