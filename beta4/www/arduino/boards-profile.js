/**
 * @package: UnoBlockly
 * @file boards-profile.js
 * @version 0.2 (09-03-2022)
 * @description Boards data
 */

'use strict'

var profile = {
	nano_old: {
	    description: "Arduino Nano (Old Bootloader)",
		interrupt: [["2", "2"], ["3", "3"]],
		upload_arg: "arduino:avr:nano:cpu=atmega328old",
		cpu: "atmega328p"
	},
	nano: {
	    description: "Arduino Nano",
		interrupt: [["2", "2"], ["3", "3"]],
		upload_arg: "arduino:avr:nano",
		cpu: "atmega328p"
	},
	uno: {
	    description: "Arduino Uno",
		interrupt: [["2", "2"], ["3", "3"]],
		upload_arg: "arduino:avr:uno",
		cpu: "atmega328p"
	},
	bt: {
	    description: "Arduino BT",
		interrupt: [["2", "2"], ["3", "3"]],
		upload_arg: "arduino:avr:bt",
		cpu: "atmega328p"
	}
};