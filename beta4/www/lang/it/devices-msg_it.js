/**
 * @package: UnoBlockly
 * @file devices-msg_it.js
 * @version 0.2 (18-04-2022)
 * @description Generic devices messages
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

 'use strict';

//--- Devices ---//
Blockly.Msg.CAT_DEVICES = "Dispositivi";

Blockly.Msg.Devices_Led = "LED";
Blockly.Msg.Devices_Led_tooltip = "Accende/Spegne il LED";

Blockly.Msg.Devices_Button = "Pulsante";
Blockly.Msg.Devices_Button_tooltip = "Rileva lo stato del Pulsante";

Blockly.Msg.Devices_UltrasonicDistance = "Distanza (cm)  |";
Blockly.Msg.Devices_UltrasonicDistance_trigger = "Trigger";
Blockly.Msg.Devices_UltrasonicDistance_echo = "Eco";
Blockly.Msg.Devices_UltrasonicDistance_tooltip = "Determina la distanza di un ostacolo in cm";

Blockly.Msg.Devices_Potenziometer = "Potenziometro  |"

Blockly.Msg.Devices_Servo = "Servo  |"

// Motors
Blockly.Msg.devices_l298n = "Controllore motori (L298N)";
Blockly.Msg.devices_l298n_IN1 = "IN1";
Blockly.Msg.devices_l298n_IN2 = "IN2";
Blockly.Msg.devices_l298n_IN3 = "IN3";
Blockly.Msg.devices_l298n_IN4 = "IN4";
Blockly.Msg.devices_l298n_EN1 = "EN1";
Blockly.Msg.devices_l298n_EN2 = "EN2";
Blockly.Msg.devices_l298n_tooltip = "Assegna i pin del controllore L298N (2 motori)";
Blockly.Msg.devices_motors = "Motori  ";
Blockly.Msg.devices_motors_tooltip = "Azionamento motori";
Blockly.Msg.devices_motors_speed = "Velocità (da 0 a 255)";
Blockly.Msg.devices_motors_dir = "Direzione";

// MPU6050
Blockly.Msg.devices_mpu6050 = "MPU6050";
Blockly.Msg.devices_mpu6050_accel = "Accelerazione";
Blockly.Msg.devices_mpu6050_gyro = "Velocità angolare";
Blockly.Msg.devices_mpu6050_tooltip = "Accelerazione (max ±2 g). Velocità angolare (max ±500 gradi/s)";

// Temperature sensor (DS18B20)
Blockly.Msg.devices_DS18B20 = "Temperatura [DS18B20]  (°C)";
Blockly.Msg.devices_DS18B20_tooltip = "Misura della temperatura con DS18B20 (°C)";
