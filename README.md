<p align="center">
  <img src="https://github.com/adalborgo/UnoBlockly/blob/beta4/images/appIcon.png" alt="logo" width="8%"/>
</p>

<h1 align="center">UnoBlockly</h1>

UnoBlockly is a visual programming language, based on Google&#39;s Blockly, for programming Arduino boards and devices based on the Atmega328 microcontroller, such as Arduino UNO, Arduino Nano. In particular, some modules dedicated to Seeed Studio Grove Beginner Kit, Makeblock mBot, OttoDIY are available.

Block programming is particularly useful for those who undertake a learning path, moreover, the possibility of being able to work at the same time even with the generated code, facilitates the transition to programming with traditional languages.

<p align="center"><img src="https://github.com/adalborgo/UnoBlockly/blob/beta4/images/example-block1.png" alt="Block" width="80%"/></p>

The software uses visual blocks that connect to each other and automatically generates the Arduino code, which can be shown through a convenient preview window or edited directly by switching from graphics to text mode.

The Arduino code can be edited and saved on files with the standard extension **.ino** , but any changes in &#39;text&#39; mode will be deleted by switching to &#39;block&#39; mode, if they have not been previously saved on file.
UnoBlockly supports direct connection to the Arduino board via USB port, so the product code can be compiled and uploaded directly to the board.
 The software also integrates a simple monitor for communications with the serial port.

<p align="center"><img src="https://github.com/adalborgo/UnoBlockly/blob/beta4/images/example-code1.png" alt="Code" width="80%"/></p>

This project has been inspired by **OttoBlockly** , of which he uses some pieces of code. Compared to OttoBlockly, however, it has some significant differences: while OttoBlockly inserts by default the instructions in the **loop ()** function, UnoBlockly inserts them in the **setup ()** function, an optional block is still available to insert the instructions inside the chosen function.

UnoBlockly supports drag and drop and automatic opening by clicking on the program file (only if UnoBlockly is closed).

Program files use the **.ubk** extension.

UnoBlockly is especially aimed at beginners who use Arduino UNO, Arduino Nano with simple learning kits like the Seeed Studio Grove Beginner Kit or simple robots like mBot, OttoDIY (base), for this it has more limited resources than other similar software, however it uses updated versions (to 2021) of the packages on which it is based (Blockly, Electron, Bootstrap, SerialPort, etc.) while the most common open source software for Arduino based on Blockly use particularly dated versions.

UnoBlockly is still under development and some features will be implemented in future versions.

**Installation**

UnoBlockly has been developed and tested on Windows 10. It can be installed by unzipping the zipped file or using the **.exe** file for installation, this second option is the recommended one.

The software integrates the Arduino compiler and the necessary libraries, so once installed it is ready for use; only if the computer does not automatically recognize the USB port is it necessary to install the appropriate driver, in this case it is advisable to download it from the following link:

**Multilingual version**

At the moment UnoBlockly only supports English and Italian languages, I hope soon to have the possibility to add other languages with the help of the international community. All the words used in the interfaces are localized and for each language a specific folder is reserved which contains all the files that need to be translated. Thanks to all those who want to contribute.

**Examples**

For immediate use and educational purposes, some sample sketches are available.

**Generic examples** (examples.zip)
1. Blink the LED on the board (blink.ubk)
2. Blink a LED connected to digital pin 4 (blink-pin4.ubk)
3. Repeat a two-tone sound 5 times (sound\_two-tone.ubk)
4. Play a short melody using Melody notation (melody.ubk)

**Examples for the Grove Beginner Kit** (examples-sbk.zip)
1. Blink the red LED (sbk-blink.ubk)
2. Generate a variable sound (sbk-variable\_sound.ubk)
3. By pressing the button, the LED turns on and a two-tone sound is generated (sbk-button-led-buzzer.ubk)
4. Clear the display (sbk-cleardisplay.ubk)
5. Fill the display with the &#39;X&#39; character (sbk-display\_fill.ubk)
6. Shows the rotation angle of the potentiometer on the display (sbk-encoder-display.ubk)
7. Shows the temperature, humidity and pressure data on the display (sbk-meteo.ubk)
8. Shows the values ??detected by the accelerometer on the display (sbk-acceleration.ubk)
9. Gives an indication of the light intensity of the environment (sbk-light\_intensity.ubk)
10. Gives an indication of the ambient noise (sbk-microphone.ubk)

**Makeblock mBot examples** (examples-mBot.zip)
1. Generate a sequence of sounds from 300 to 1800 Hz (mBot-sound300-1800.ubk)
2. Measure the distance to an object via the ultrasonic sensor and send the data to the serial port (mBot-distance.ubk)
3. Generates sounds with a frequency that varies according to the distance measured by the ultrasonic sensor (mBot-Theremin.ubk)
4. Turn on RGB LEDs with different colors (mBot-RGB.ubk)
5. By pressing the button, the LEDs emit red light otherwise green light (mBot-button.ubk)
6. Gives an indication of the ambient light intensity (mBot-light\_intensity.ubk)

**Examples for OttoDIY** (examples-ottodiy.zip)
1. Checking the position of legs and feet (ottodiy-check.ubk)
2. Leg and foot calibration (ottodiy-calibrate.ubk)
3. Ottodiy starts dancing if you put your hand at a distance of less than 20 cm (ottodiy-distance\_dance.ubk)
4. Various movements (ottodiy-dance1.ubk)
5. Various movements (ottodiy-dance2.ubk)
6. Various movements (ottodiy-dance3.ubk)
7. If Ottodiy encounters an obstacle at a distance of not less than 10 cm it rotates to the left, if the obstacle is too close it stops (ottodiy-avoid\_obstacle.ubk).

**Acknowledgments**

UnoBlockly development was only possible thanks to these software tools:

- [Blockly](https://developers.google.com/blockly)
- [OttoBlockly](https://github.com/OttoDIY/blockly)
- [Electron](https://www.electronjs.org/)
- [Node.js](https://nodejs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [ACE](https://ace.c9.io/)
- [Fork Awesome](https://forkaweso.me/)
- [JQuery](https://jquery.com/)
- [Serialport](https://serialport.io/)
- [arduino-cli](https://github.com/arduino/arduino-cli)
- [ArduinoAVR](https://github.com/arduino/ArduinoCore-avr)

and many others.
