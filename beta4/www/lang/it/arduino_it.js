/**
 * @package: UnoBlockly
 * @file arduino_it.js
 * @version 0.1 (22-07-2021)
 * @description Arduino messages
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

// Selection Arduino boards (IndexCode.getBoards)
Blockly.Msg.optgroup = 'Schede Arduino';
Blockly.Msg.option_texts = ["Arduino Uno", "Arduino Nano", "Arduino Nano (old bootloader)", "mBot", "OttoDIY"];

// Common to all blocks
Blockly.Msg.HELPURL = "";
Blockly.Msg.parenthesis_open = "(";
Blockly.Msg.parenthesis_closed = ")";
Blockly.Msg.separator = "|";
Blockly.Msg.dash = "-";
Blockly.Msg.AV = "Avanti";
Blockly.Msg.AR = "Indietro";
Blockly.Msg.high = "HIGH"; // do not translate
Blockly.Msg.low = "LOW"; // do not translate
Blockly.Msg.right = "Destra";
Blockly.Msg.left = "Sinistra";
Blockly.Msg.LetR = "Blockly.Msg.LetR";
Blockly.Msg.left_right = "Destra & Sinistra";
Blockly.Msg.direction = "Direzione";
Blockly.Msg.speed = "Velocità";
Blockly.Msg.values = "[0-90]";
Blockly.Msg.yes = "Sì";
Blockly.Msg.no = "No";
Blockly.Msg.angle = "Angolo";
Blockly.Msg.red = "Rosso"
Blockly.Msg.green = "Verde"
Blockly.Msg.blue = "Blu"
Blockly.Msg.dir_forward = "Avanti";
Blockly.Msg.dir_backward = "Indietro";

//----- Arduino base -----//

// Structures
Blockly.Msg.ArduinoDefine = "Dichiarazioni";
Blockly.Msg.ArduinoDefine_tooltip = "Tutti i blocchi messi qui saranno eseguiti una sola volta";
Blockly.Msg.ArduinoRemark = "Commento";
Blockly.Msg.ArduinoRemark_tooltip = "Inserisce un commento";
Blockly.Msg.ArduinoRemarkHeader = "Commento di intestazione";
Blockly.Msg.ArduinoRemarkHeader_tooltip = "Inserisce un commento nella parte alta del codice";
Blockly.Msg.ArduinoSetup = "Impostazioni";
Blockly.Msg.ArduinoLoop = "Ciclo ∞";
Blockly.Msg.ArduinoLoop_tooltip = "Le istruzioni contenute in queto blocco sono eseguite ripetutamente in un ciclo senza fine";
Blockly.Msg.ArduinoSetupLoop_tooltip = "Le istruzioni contenute in 'Impostazioni' vengono eseguite solo una volta.\nLe istruzioni contenute in 'Ciclo' sono eseguite ripetutamente in un ciclo senza fine";
Blockly.Msg.code_tooltip = "Digita qui un'istruzione che non sia presente nei blocchi";

// Arduino board
Blockly.Msg.CAT_ARDUINO_BASE = "Arduino";
Blockly.Msg.ArduinobaseDropdown_hl = [["ALTO", Blockly.Msg.high], ["BASSO", Blockly.Msg.low]];
Blockly.Msg.ArduinobaseTime_units = [["millisecondi", "m"], ["secondi", "s"], ["microsecondi", "u"]];
Blockly.Msg.ArduinobaseValue = "al valore";
Blockly.Msg.pin = "pin";
Blockly.Msg.Pin = "Pin";
Blockly.Msg.ArduinobaseDPins_tooltip = "Pin digitale";
Blockly.Msg.ArduinobaseAPins_tooltip = "Pin analogico";

// Arduino UNO (digital pins = 0..13)
Blockly.Msg.digitalPins = [["D2", "2"], ["D3", "3"], ["D4", "4"], ["D5", "5"], ["D6", "6"], ["D7", "7"],
    ["D8", "8"], ["D9", "9"], ["D10", "10"], ["D11", "11"], ["D12", "12"], ["D13", "13"], ["D0", "0"], ["D1", "1"]];

// Arduino UNO (analog pins: #define PIN_A0 14; (...) #define PIN_A7 21)
Blockly.Msg.analogPins = [["A0", "14"], ["A1", "15"], ["A2", "16"], ["A3", "17"], ["A4", "18"], ["A5", "19"], ["A6", "20"], ["A7", "21"]  ];
Blockly.Msg.grove_analogPins = [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"]];

// LED buildin
Blockly.Msg.ArduinobaseLed = "LED su scheda";
Blockly.Msg.ArduinobaseLled_tooltip = "Accende/spegne il Led su scheda";
Blockly.Msg.FIELDDROPDOWN_ON_OFF = [["ACCESO", Blockly.Msg.high], ["SPENTO", Blockly.Msg.low]];

// Arduino base: digital input
Blockly.Msg.ArduinobaseDigitalRead = "Stato logico  |";
Blockly.Msg.Arduinobase_pullup = "  Pullup";
Blockly.Msg.ArduinobaseDigitalRead_tooltip = "Legge lo stato logico di un pin; se pullup è abilitato, inserisce una resistenza interna collegata al +5V";

// Arduino base: digital write
Blockly.Msg.ArduinobaseDigitalWrite = "Imposta uno stato logico  |";
Blockly.Msg.ArduinobaseDigitalWrite_tooltip = "Scrivi uno stato logico 0 o 1 sul pin indicato";

// Arduino base: analog input
Blockly.Msg.ArduinobaseAnalogRead = "Valore del pin analogico";
Blockly.Msg.ArduinobaseAnalogRead_tooltip = "Restituisce un valore compreso tra 0 e 1023";

// Arduino base: analog write (pwm)
Blockly.Msg.ArduinobaseAnalogWrite = "Imposta il valore (PWM)";
Blockly.Msg.ArduinobaseAnalogWrite_tooltip = "Imposta sul pin analogico (PWM) un valore compreso tra 0 e 1023";

// Interrupt
Blockly.Msg.ArduinobaseAttachInterrupt = "Abilita l'interrupt sul pin";
Blockly.Msg.ArduinobaseAttachInterrupt_tooltip = "Assegna un'azione da intraprendere quando si verifica un interrupt esterno (4 modi possibili) sui pin 2 o 3";
Blockly.Msg.ArduinobaseAttachInterrupt_with = "con";
Blockly.Msg.ArduinobaseAttachInterrupt_mode = [["fronte ascendente", "RISING"], ["fronte discendente", "FALLING"], ["cambiamento di stato", "CHANGE"], ["livello BASSO", Blockly. Msg.low]];
Blockly.Msg.ArduinobaseDetachInterrupt = "Disabilita l'interrupt sul pin";
Blockly.Msg.ArduinobaseDetachInterrupt_tooltip = "Disabilita l'interrupt esterno precedentemente assegnato";

//--- Arduino base: time ---//
Blockly.Msg.CAT_ARDUINO_TIME = "Tempo";

// Arduino base: delay
Blockly.Msg.ArduinobaseDelay = "Attendi";
Blockly.Msg.ArduinobaseDelay_tooltip = "Specifica il tempo di attesa in secondi, millisecondi o microsecondi. \nIl programma non fa altro durante questo intervallo di tempo";

// Arduino base: millis
Blockly.Msg.ArduinobaseMillis = "millisecondi trascorsi";
Blockly.Msg.ArduinobaseMillis_tooltip = "Restituisce il numero di millisecondi (unsigned long) trascorsi da quando la scheda Arduino ha iniziato a eseguire il programma corrente (ritorna a 0 dopo circa 50 giorni)";

// Arduino base: micros
Blockly.Msg.ArduinobaseMicros = "microsecondi trascorsi";
Blockly.Msg.ArduinobaseMicros_tooltip = "Restituisce il tempo (in microsecondi) trascorso da quando la scheda Arduino ha iniziato a eseguire il programma corrente (ritorna a 0 dopo circa 70 minuti)";

// ArduinobasePulsein
Blockly.Msg.ArduinobasePulsein = "Durata impulso sul pin";
Blockly.Msg.ArduinobasePulsein_begin = "con stato iniziale";
Blockly.Msg.ArduinobasePulsein_tooltip = "Restituisce la durata di un impulso (in microsecondi) che inizia con lo stato assegnato.\nSe il valore indicato è ALTO, la temporizzazione inizia quando il segnale diventa ALTO e termina quando ritorna BASSO";

//--- Serial port ---//
Blockly.Msg.CAT_ARDUINO_SERIAL = "Porta seriale";
Blockly.Msg.com1 = "Selezione porta USB";
Blockly.Msg.com2 = "🔔 Selezionare la porta USB!";
Blockly.Msg.bitrate = "b/s";
Blockly.Msg.serialSpeed = [['9600','9600'],['300','300'],['600','600'],['1200','1200'],['2400','2400'],['4800','4800'],['14400','14400'],['19200','19200'],['28800','28800'],['31250','31250'],['38400','38400'],['57600','57600'],['115200','115200']];
Blockly.Msg.ArduinoSerialBegin = "Velocità di connessione (b/s)";
Blockly.Msg.ArduinoSerialBegin_tooltip = "Imposta la velocità di connessione per la porta seriale in bit per secondo (b/s)";

Blockly.Msg.ArduinoSerialRead = "Dati letti";
Blockly.Msg.ArduinoSerialRead_tooltip = "Restituisce il primo byte di dati disponibile nella porta seriale (-1 se non ci sono dati disponibili)"; 

Blockly.Msg.ArduinoSerialPrint = "Invia i dati";
Blockly.Msg.ArduinoSerialPrint_tooltip = "Invia i dati assegnati alla porta seriale";
Blockly.Msg.ArduinoSerialPrintln = " vai a capo";

Blockly.Msg.ArduinoSerialAvailable = "Numero di byte disponibili";
Blockly.Msg.ArduinoSerialAvailable_tooltip = "Restituisce il numero di byte disponibili nella coda della porta seriale";

Blockly.Msg.ArduinoSerialFlush = "Attendi fine invio dati";
Blockly.Msg.ArduinoSerialFlush_tooltip = "Attende il completamento della trasmissione dei dati sulla porta seriale";

Blockly.Msg.ArduinoSerialTimeout = "Tempo massimo attesa dati (ms)";
Blockly.Msg.ArduinoSerialTimeout_tooltip = "Imposta il tempo massimo per l'attesa dei dati (in millisecondi)";

//--- Tone ---//
Blockly.Msg.CAT_SOUND = "Suono"
Blockly.Msg.ArduinobaseTone = "Suona una nota  |";
Blockly.Msg.ArduinobaseTone_freq = "Frequenza (Hz)";
Blockly.Msg.ArduinobaseTone_time = "Durata (ms)";
Blockly.Msg.ArduinobaseTone_tooltip = "Suona una nota indicando la frequenza (Hz) e la durata (ms)";
Blockly.Msg.ArduinobaseTone1_tooltip = "Suona una nota indicando la frequenza (Hz)";

Blockly.Msg.ArduinobaseNotone = "Ferma il suono  |";
Blockly.Msg.ArduinobaseNotone_tooltip = "Ferma il suono sul pin indicato";

Blockly.Msg.Melody = "Suona una melodia  |";
Blockly.Msg.Melody_time = "Tempo";
Blockly.Msg.Melody_code = "Codice";
Blockly.Msg.Melody_tooltip = "Suona la melodia contenuta nella stringa assegnata con notazione MELO";
Blockly.Msg.Melody_Examples_dropdown = [
    ['Mozart', "g<<r-d- | g<< r-d-(g<dg<b)-d<*r | c*<<r-a-c*<<r-a- |(c*<af#<a)-d<r | (gr)- g. (bag | (gag)/3:1 f#)- f#. (ac*f# | ag)- g.  (bag | (gag)/3:1 f#)- f#. (ac*f#)- | ((grgr)-- (gf#ef#)--)>> ((grgr)-- (baga)--)> | (brbr)-- (d*c*bc*)-- d*< r | ((de)+  | (d-c.)-c (c-b_.)-  b_ | (( b-a.)- a (gf#ef# | (grarbr)>)- r )_)>"],
    ['Scala', "c>>> d>> e>f g< a<< b<<< c*<<<<"],
    ['Fra Martino', "(cdec)x2   (efgr)x2   ((gagf)-ec)x2     (c g_ c+)x2"],
    ['Al chiaro di luna', "( (cccde+dr  ceddc+.r)x2  dddd (a+ar)_ dc(b a g+.r)_ cccde+dr ceddc+.r )*"],
    ['Bach', "(((ce,ga,b_)+rg(f#fee,.)+  dd,c (ba-g-)_ c f e,+d+c+))>>+"],
    ['Star Wars: Marcia imperiale', "(ggg e,-. b,-- | g e,-. b,-- g+ (ddde,-.)* b,--  | g, e,-. b,-- g+ | g* g-.g--  (g g,-. f-- (ed#)-- e-)* r- g#- c#* b#-.b-- |  (b,a)-- b,- r- e,- g, e,-. g,-- | b, g-. b,-- d*+  | g* g-.g--  (g g,-. f-- (ed#)-- e-)* r- g#- c#* b#-.b-- |  (b,a)-- b,- r- e,- g, e,-. b,-- | g e,-. b,-- g+ |)<<_"]
];
Blockly.Msg.Melody_Examples_dropdown_tooltip = "Esempi di melodie con notazione MELO";

// Compiler
Blockly.Msg.no_code = "🔔 Nessun codice da compilare!" ;
Blockly.Msg.check = "Verifica. ";
Blockly.Msg.check_tooltip = "Verifica il codice"; 
Blockly.Msg.upload = "Caricamento. ";
Blockly.Msg.upload_tootip = "Carica il codice";
Blockly.Msg.verif = "🔔 Controlla prima il codice ";
Blockly.Msg.save = "Salva come formato";
Blockly.Msg.State = "Stato";
