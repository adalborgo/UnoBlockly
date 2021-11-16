/**
 * @package: UnoBlockly
 * @file arduino_en.js
 * @version 0.1 (12-11-2021)
 * @description Arduino messages
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

// Selection Arduino boards (IndexCode.getBoards)
Blockly.Msg.optgroup = 'Arduino boards';
Blockly.Msg.option_texts = ["Arduino Uno", "Arduino Nano", "Arduino Nano (old bootloader)", "mBot", "OttoDIY"];

// Common to all blocks
Blockly.Msg.HELPURL = "";
Blockly.Msg.parenthesis_open = "(";
Blockly.Msg.parenthesis_closed = ")";
Blockly.Msg.separator = "|";
Blockly.Msg.dash = "-";
Blockly.Msg.AV = "Forward";
Blockly.Msg.AR = "Backward";
Blockly.Msg.high = "HIGH"; // do not translate
Blockly.Msg.low = "LOW"; // do not translate
Blockly.Msg.right = "Right";
Blockly.Msg.left = "Left";
Blockly.Msg.LetR = "Blockly.Msg.LetR";
Blockly.Msg.left_right = "Right & Left";
Blockly.Msg.direction = "Direction";
Blockly.Msg.speed = "Speed";
Blockly.Msg.values = "[0-90]";
Blockly.Msg.yes = "Yes";
Blockly.Msg.no = "No";
Blockly.Msg.angle = "Angle";
Blockly.Msg.red = "Red"
Blockly.Msg.green = "Green"
Blockly.Msg.blue = "Blue"
Blockly.Msg.dir_forward = "Forward";
Blockly.Msg.dir_backward = "Backward";

//----- Arduino base -----//

// Structures
Blockly.Msg.ArduinoDefine = "Declarations";
Blockly.Msg.ArduinoDefine_tooltip = "All blocks placed here will be executed only once";
Blockly.Msg.ArduinoRemark = "Comment";
Blockly.Msg.ArduinoRemark_tooltip = "Enter a comment";
Blockly.Msg.ArduinoRemarkHeader = "Header comment";
Blockly.Msg.ArduinoRemarkHeader_tooltip = "Enter a comment at the top of the code";
Blockly.Msg.ArduinoSetup = "Setup";
Blockly.Msg.ArduinoLoop = "Loop ∞";
Blockly.Msg.ArduinoLoop_tooltip = "All blocks placed here will run in a loop and indefinitely";
Blockly.Msg.ArduinoSetupLoop_tooltip = "The blocks placed in 'Setup' will be executed only once.\nThe blocks placed in 'Loop' will be executed in a loop and indefinitely.";
Blockly.Msg.code_tooltip = "Type an instruction that is not in blocks";
Blockly.Msg.data_tooltip = "Enter some data that is not in blocks";

// Arduino board
Blockly.Msg.CAT_ARDUINO_BASE = "Arduino";
Blockly.Msg.ArduinobaseDropdown_hl = [["HIGH", Blockly.Msg.high], ["LOW", Blockly.Msg.low]];
Blockly.Msg.ArduinobaseTime_units = [["milliseconds", "m"], ["seconds", "s"], ["microseconds", "u"]];
Blockly.Msg.ArduinobaseValue = "to the value";
Blockly.Msg.pin = "pin";
Blockly.Msg.Pin = "Pin";
Blockly.Msg.ArduinobaseDPins_tooltip = "Digital pin";
Blockly.Msg.ArduinobaseAPins_tooltip = "Analog pin";

// Arduino UNO (digital pins = 0..13)
Blockly.Msg.digitalPins = [["D2", "2"], ["D3", "3"], ["D4", "4"], ["D5", "5"], ["D6", "6"], ["D7", "7"],
    ["D8", "8"], ["D9", "9"], ["D10", "10"], ["D11", "11"], ["D12", "12"], ["D13", "13"], ["D0", "0"], ["D1", "1"]];

// Arduino UNO (analog pins: #define PIN_A0 14; (...) #define PIN_A7 21)
Blockly.Msg.analogPins = [["A0", "14"], ["A1", "15"], ["A2", "16"], ["A3", "17"], ["A4", "18"], ["A5", "19"], ["A6", "20"], ["A7", "21"]  ];
Blockly.Msg.grove_analogPins = [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"]];

// LED buildin
Blockly.Msg.ArduinobaseLed = "LED on board scheda";
Blockly.Msg.ArduinobaseLled_tooltip = "Switch on / off the LED on the board";
Blockly.Msg.FIELDDROPDOWN_ON_OFF = [["ACCESO", Blockly.Msg.high], ["SPENTO", Blockly.Msg.low]];

// Arduino base: digital input
Blockly.Msg.ArduinobaseDigitalRead = "Logic state  |";
Blockly.Msg.Arduinobase_pullup = "  Pullup";
Blockly.Msg.ArduinobaseDigitalRead_tooltip = "Reads the logic state of a pin; if pullup is enabled, it inserts an internal resistor connected to + 5V";

// Arduino base: digital write
Blockly.Msg.ArduinobaseDigitalWrite = "Set a logic state  |";
Blockly.Msg.ArduinobaseDigitalWrite_tooltip = "Write a logic state 0 or 1 on the indicated pin";

// Arduino base: analog input
Blockly.Msg.ArduinobaseAnalogRead = "Value of the analog pin";
Blockly.Msg.ArduinobaseAnalogRead_tooltip = "Returns a value between 0 and 1023";

// Arduino base: analog write (pwm)
Blockly.Msg.ArduinobaseAnalogWrite = "Set the value (PWM)";
Blockly.Msg.ArduinobaseAnalogWrite_tooltip = "Set a value between 0 and 1023 on the analog pin (PWM)";

// Interrupt
Blockly.Msg.ArduinobaseAttachInterrupt = "Enable the interrupt on the pin";
Blockly.Msg.ArduinobaseAttachInterrupt_tooltip = "Assigns the action to be taken when an external interrupt occurs (4 possible ways) on pins 2 or 3";
Blockly.Msg.ArduinobaseAttachInterrupt_with = "with";
Blockly.Msg.ArduinobaseAttachInterrupt_mode = [['rising edge', 'RISING'], ['falling edge', 'FALLING'], ['changing state', 'CHANGE'], ['low state', 'LOW']];
Blockly.Msg.ArduinobaseDetachInterrupt = "Disable interrupt on pin";
Blockly.Msg.ArduinobaseDetachInterrupt_tooltip = "Disable the previously assigned external interrupt";

//--- Arduino base: time ---//
Blockly.Msg.CAT_ARDUINO_TIME = "Time";

// Arduino base: delay
Blockly.Msg.ArduinobaseDelay = "Wait";
Blockly.Msg.ArduinobaseDelay_tooltip = "Specifies the wait time in seconds, milliseconds, or microseconds.\nThe program does nothing else during this time";

// Arduino base: millis
Blockly.Msg.ArduinobaseMillis = "elapsed milliseconds";
Blockly.Msg.ArduinobaseMillis_tooltip = "Returns the number of milliseconds (unsigned long) elapsed since the Arduino board started running the current program (returns to 0 after about 50 days)";

// Arduino base: micros
Blockly.Msg.ArduinobaseMicros = "elapsed microseconds";
Blockly.Msg.ArduinobaseMicros_tooltip = "Returns the time (in microseconds) elapsed since the Arduino board started running the current program (returns to 0 after about 70 minutes)";

// ArduinobasePulsein
Blockly.Msg.ArduinobasePulsein = "Pulse duration on the pin";
Blockly.Msg.ArduinobasePulsein_begin = "with initial state";
Blockly.Msg.ArduinobasePulsein_tooltip = "Returns the duration of a pulse (in microseconds) starting with the assigned state.\nIf the indicated value is HIGH, timing starts when the signal goes HIGH and ends when it returns LOW";

//--- Serial port ---//
Blockly.Msg.CAT_ARDUINO_SERIAL = "Serial port";
Blockly.Msg.com1 = "USB port selection";
Blockly.Msg.com2 = "🔔 Select the USB port!";
Blockly.Msg.bitrate = "b/s";
Blockly.Msg.serialSpeed = [['9600','9600'],['300','300'],['600','600'],['1200','1200'],['2400','2400'],['4800','4800'],['14400','14400'],['19200','19200'],['28800','28800'],['31250','31250'],['38400','38400'],['57600','57600'],['115200','115200']];
Blockly.Msg.ArduinoSerialBegin = "Connection speed (b/s)";
Blockly.Msg.ArduinoSerialBegin_tooltip = "Sets the connection speed for the serial port in bits per second (b/s)";

Blockly.Msg.ArduinoSerialRead = "Data read";
Blockly.Msg.ArduinoSerialRead_tooltip = "Returns the first byte of data available on the serial port (-1 if there is no data available)"; 

Blockly.Msg.ArduinoSerialPrint = "Send data";
Blockly.Msg.ArduinoSerialPrint_tooltip = "Send the data to the serial port";
Blockly.Msg.ArduinoSerialPrintln = " newline";

Blockly.Msg.ArduinoSerialAvailable = "Bytes (characters) available";
Blockly.Msg.ArduinoSerialAvailable_tooltip = "Get the number of bytes (characters) available for reading from the serial port.";

Blockly.Msg.ArduinoSerialFlush = "Waits for the transmission to end";
Blockly.Msg.ArduinoSerialFlush_tooltip = "Waits for the transmission of outgoing serial data to complete.";

Blockly.Msg.ArduinoSerialTimeout = "Max time to wait for data (ms)";
Blockly.Msg.ArduinoSerialTimeout_tooltip = "Set the maximum time to wait for data (in milliseconds)";

//--- Tone ---//
Blockly.Msg.CAT_SOUND = "Sound"
Blockly.Msg.ArduinobaseTone = "Play a note  |";
Blockly.Msg.ArduinobaseTone_freq = "Frequency (Hz)";
Blockly.Msg.ArduinobaseTone_time = "Duration (ms)";
Blockly.Msg.ArduinobaseTone_tooltip = "Play a note indicating frequency (Hz) and duration (ms)";
Blockly.Msg.ArduinobaseTone1_tooltip = "Play a note indicating frequency (Hz)";

Blockly.Msg.ArduinobaseNotone = "Stop the sound  |";
Blockly.Msg.ArduinobaseNotone_tooltip = "Stop the sound on the indicated pin";

//--- Music ---//
Blockly.Msg.Music_NOTE_TOOLTIP = "Play a note with duration and pin";
Blockly.Msg.Music_REST_TOOLTIP = "Rest (musical notation)";

Blockly.Msg.Melody = "Play a melody  |";
Blockly.Msg.Melody_time = "Tempo";
Blockly.Msg.Melody_code = "Code";
Blockly.Msg.Melody_tooltip = "Play the melody contained in the assigned string with the MELO notation";
Blockly.Msg.Melody_Examples_dropdown = [
    ['Mozart', "g<<r-d- | g<< r-d-(g<dg<b)-d<*r | c*<<r-a-c*<<r-a- |(c*<af#<a)-d<r"],
    ['Scale', "c>>> d>> e>f g< a<< b<<< c*<<<<"],
    ['Brother John', "(cdec)x2   (efgr)x2   ((gagf)-ec)x2     (c g_ c+)x2"],
    ['Moonlight Sonata', "( (cccde+dr  ceddc+.r)x2  dddd (a+ar)_ dc(b a g+.r)_ cccde+dr ceddc+.r )*"],
    ['Bach', "(((ce,ga,b_)+rg(f#fee,.)+  dd,c (ba-g-)_ c f e,+d+c+))>>+"],
    ['Star Wars: The Imperial March', "(ggg e,-. b,-- | g e,-. b,-- g+ (ddde,-.)* b,--  | g, e,-. b,-- g+ | g* g-.g--  (g g,-. f-- (ed#)-- e-)* r- g#- c#* b#-.b-- |  (b,a)-- b,- r- e,- g, e,-. g,-- | b, g-. b,-- d*+  | g* g-.g--  (g g,-. f-- (ed#)-- e-)* r- g#- c#* b#-.b-- |  (b,a)-- b,- r- e,- g, e,-. b,-- | g e,-. b,-- g+ |)<<_"]
];
Blockly.Msg.Melody_Examples_dropdown_tooltip = "Examples of melody with the MELO notation";

// Compiler
Blockly.Msg.no_code = "🔔 No code to compile!" ;
Blockly.Msg.check = "Verify. ";
Blockly.Msg.check_tooltip = "Check the code"; 
Blockly.Msg.upload = "Upload. ";
Blockly.Msg.upload_tootip = "Upload the code";
Blockly.Msg.verif = "🔔 Check the code first ";
Blockly.Msg.save = "Save as format";
Blockly.Msg.State = "State";
