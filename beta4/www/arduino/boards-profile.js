/**
 * @package: UnoBlockly
 * @file boards-profile.js
 * @version 0.1 (25-06-2021)
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
	}
};