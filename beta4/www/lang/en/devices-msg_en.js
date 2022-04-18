/**
 * @package: UnoBlockly
 * @file devices-msg_en.js
 * @version 0.1 (15-04-2022)
 * @description Generic devices messages
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

 'use strict';

//--- Devices ---//
Blockly.Msg.CAT_DEVICES = "Devices";

Blockly.Msg.Devices_Led = "LED";
Blockly.Msg.Devices_Led_tooltip = "Turns the LED on / off";

Blockly.Msg.Devices_Button = "Button";
Blockly.Msg.Devices_Button_tooltip = "Detect button status";

Blockly.Msg.Devices_UltrasonicDistance = "Distance (cm)";
Blockly.Msg.Devices_UltrasonicDistance_trigger = "Trigger pin";
Blockly.Msg.Devices_UltrasonicDistance_echo = "Echo pin";
Blockly.Msg.Devices_UltrasonicDistance_tooltip = "Get the distance of an obstacle (cm)";

Blockly.Msg.Devices_Potenziometer = "Potenziometer  |"

Blockly.Msg.Devices_Servo = "Servo"

// Motors
Blockly.Msg.devices_l298n = "Motor controller (L298N)";
Blockly.Msg.devices_l298n_IN1 = "IN1";
Blockly.Msg.devices_l298n_IN2 = "IN2";
Blockly.Msg.devices_l298n_IN3 = "IN3";
Blockly.Msg.devices_l298n_IN4 = "IN4";
Blockly.Msg.devices_l298n_EN1 = "EN1";
Blockly.Msg.devices_l298n_EN2 = "EN2";
Blockly.Msg.devices_l298n_tooltip = "Set the pins of the L298N controller (2 motors)";
Blockly.Msg.devices_motors = "Motors  ";
Blockly.Msg.devices_motors_tooltip = "Drive motors";
Blockly.Msg.devices_motors_speed = "Speed (from 0 to 255)";
Blockly.Msg.devices_motors_dir = "Direction";

// MPU6050
Blockly.Msg.devices_mpu6050 = "MPU6050";
Blockly.Msg.devices_mpu6050_accel = "Acceleration";
Blockly.Msg.devices_mpu6050_gyro = "Angular velocity";
Blockly.Msg.devices_mpu6050_tooltip = "Acceleration (max ±2 g). Angular velocity (max ±500 deg/s)";

// Temperature sensor (DS18B20)
Blockly.Msg.devices_DS18B20 = "Temperature [DS18B20]  (°C)";
Blockly.Msg.devices_DS18B20_tooltip = "Temperature measurement with DS18B20 (°C)";
