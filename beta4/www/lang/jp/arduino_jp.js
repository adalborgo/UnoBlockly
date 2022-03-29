/**
 * @package: UnoBlockly
 * @file arduino_en.js
 * @version 0.2 (28-03-2022)
 * @description Arduino messages
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

// Selection Arduino boards (IndexCode.getBoards)
Blockly.Msg.optgroup = 'Arduino ボード';
Blockly.Msg.option_texts = ["Arduino Uno", "Arduino Nano", "Arduino Nano (old bootloader)", "mBot", "OttoDIY"];

// Common to all blocks
Blockly.Msg.HELPURL = "";
Blockly.Msg.parenthesis_open = "(";
Blockly.Msg.parenthesis_closed = ")";
Blockly.Msg.separator = "|";
Blockly.Msg.dash = "-";
Blockly.Msg.AV = "前進";
Blockly.Msg.AR = "後退";
Blockly.Msg.high = "HIGH"; // do not translate
Blockly.Msg.low = "LOW"; // do not translate
Blockly.Msg.right = "右";
Blockly.Msg.left = "左";
Blockly.Msg.LetR = "Blockly.Msg.LetR";
Blockly.Msg.left_right = "右 & 左";
Blockly.Msg.direction = "方向";
Blockly.Msg.speed = "スピード";
Blockly.Msg.values = "[0-90]";
Blockly.Msg.yes = "Yes";
Blockly.Msg.no = "No";
Blockly.Msg.angle = "角度";
Blockly.Msg.red = "赤"
Blockly.Msg.green = "緑"
Blockly.Msg.blue = "青"
Blockly.Msg.dir_forward = "前";
Blockly.Msg.dir_backward = "後";

//----- Arduino base -----//

// Structures
Blockly.Msg.ArduinoDefine = "宣言";
Blockly.Msg.ArduinoDefine_tooltip = "ここに置かれたブロックは1回だけ実行されます";//"All blocks placed here will be executed only once";
Blockly.Msg.ArduinoRemark = "コメント";//"Comment";
Blockly.Msg.ArduinoRemark_tooltip = "コメントを入れる";//"Enter a comment";
Blockly.Msg.ArduinoRemarkHeader = "ヘッダーコメント";//"Header comment";
Blockly.Msg.ArduinoRemarkHeader_tooltip = "コードの先頭にコメントを入れます";//"Enter a comment at the top of the code";
Blockly.Msg.ArduinoSetup = "セットアップ";//"Setup";
Blockly.Msg.ArduinoLoop = "ループ";//"Loop ∞";
Blockly.Msg.ArduinoLoop_tooltip = "ここに置かれたブロックは繰り返し実行されます";//"All blocks placed here will run in a loop and indefinitely";
Blockly.Msg.ArduinoSetupLoop_tooltip = "セットアップに置かれたブロックは１回だけ実行され、ループに置かれたブロックは繰り返し実行されます";//"The blocks placed in 'Setup' will be executed only once.\nThe blocks placed in 'Loop' will be executed in a loop and indefinitely.";
Blockly.Msg.code_tooltip = "ブロックにないコードを記入";//"Type an instruction that is not in blocks";
Blockly.Msg.data_tooltip = "ブロックにないデータを記入";//"Enter some data that is not in blocks";

// Arduino board
Blockly.Msg.CAT_ARDUINO_BASE = "Arduino";
Blockly.Msg.ArduinobaseDropdown_hl = [["HIGH", Blockly.Msg.high], ["LOW", Blockly.Msg.low]];
Blockly.Msg.ArduinobaseTime_units = [["ミリ秒", "m"], ["秒", "s"], ["マイクロ秒", "u"]];//[["milliseconds", "m"], ["seconds", "s"], ["microseconds", "u"]];
Blockly.Msg.ArduinobaseValue = "値に";//"to the value";
Blockly.Msg.pin = "ピン";//"pin";
Blockly.Msg.Pin = "ピン";//"Pin";
Blockly.Msg.ArduinobaseDPins_tooltip = "デジタルピン";//"Digital pin";
Blockly.Msg.ArduinobaseAPins_tooltip = "アナログピン";//"Analog pin";

// Arduino UNO (digital pins = 0..13)
Blockly.Msg.digitalPins = [["D2", "2"], ["D3", "3"], ["D4", "4"], ["D5", "5"], ["D6", "6"], ["D7", "7"],
    ["D8", "8"], ["D9", "9"], ["D10", "10"], ["D11", "11"], ["D12", "12"], ["D13", "13"], ["D0", "0"], ["D1", "1"]];

// Arduino UNO (analog pins: #define PIN_A0 14; (...) #define PIN_A7 21)
Blockly.Msg.analogPins = [["A0", "14"], ["A1", "15"], ["A2", "16"], ["A3", "17"], ["A4", "18"], ["A5", "19"], ["A6", "20"], ["A7", "21"]  ];

// PWM pins (Uno, Nano, Mini): 3, 5, 6, 9, 10, 11
Blockly.Msg.PWMPins = [["D3", "3"], ["D5", "5"], ["D6", "6"], ["D9", "9"], ["D10", "10"], ["D11", "11"]];

// LED buildin
Blockly.Msg.ArduinobaseLed = "オンボードLED"; //"LED on board";
Blockly.Msg.ArduinobaseLled_tooltip = "オンボードLEDをオン・オフ";//"Switch on / off the LED on the board";
Blockly.Msg.FIELDDROPDOWN_ON_OFF = [["ACCESO", Blockly.Msg.high], ["SPENTO", Blockly.Msg.low]];

// Arduino base: digital input
Blockly.Msg.ArduinobaseDigitalRead = "ピンの値を読む  |";//"Logic state  |";
Blockly.Msg.Arduinobase_pullup = "  プルアップ";//"  Pullup";
Blockly.Msg.ArduinobaseDigitalRead_tooltip = "ピンの論理状態を読む プルアップされていない場合5V電源との間に抵抗を挿入します";//"Reads the logic state of a pin; if pullup is enabled, it inserts an internal resistor connected to + 5V";

// Arduino base: digital write
Blockly.Msg.ArduinobaseDigitalWrite = "ピンに出力  |";//"Set a logic state  |";
Blockly.Msg.ArduinobaseDigitalWrite_tooltip = "ピンに0か1の値を書き込みます";//"Write a logic state 0 or 1 on the indicated pin";

// Arduino base: analog input
Blockly.Msg.ArduinobaseAnalogRead = "アナログピンの値";//"Value of the analog pin";
Blockly.Msg.ArduinobaseAnalogRead_tooltip = "0から1023の間の値を返します";//"Returns a value between 0 and 1023";

// Arduino base: analog write (pwm)
Blockly.Msg.ArduinobaseAnalogWrite = "PWM値をセット";//"Set the value (PWM)";
Blockly.Msg.ArduinobaseAnalogWrite_tooltip = "アナログピンに0から1023の間の値(PWM)をセットします";//"Set a value between 0 and 1023 on the analog pin (PWM)";

// Interrupt
Blockly.Msg.ArduinobaseAttachInterrupt = "割り込みを有効化　ピン";//"Enable the interrupt on the pin";
Blockly.Msg.ArduinobaseAttachInterrupt_tooltip = "ピン２，３への外部割込みを設定します";//"Assigns the action to be taken when an external interrupt occurs (4 possible ways) on pins 2 or 3";
Blockly.Msg.ArduinobaseAttachInterrupt_with = "きっかけ";//"with";
Blockly.Msg.ArduinobaseAttachInterrupt_mode = [['立ち上がり', 'RISING'], ['立ち下がり', 'FALLING'], ['変化', 'CHANGE'], ['LOW状態', 'LOW']];//[['rising edge', 'RISING'], ['falling edge', 'FALLING'], ['changing state', 'CHANGE'], ['low state', 'LOW']];
Blockly.Msg.ArduinobaseDetachInterrupt = "割り込みを無効化　ピン";//"Disable interrupt on pin";
Blockly.Msg.ArduinobaseDetachInterrupt_tooltip = "外部割込みを無効化します";//"Disable the previously assigned external interrupt";

// Pulse
Blockly.Msg.ArduinobasePulse = "パルス";//"Pulse";
Blockly.Msg.ArduinobasePulseMode = [["立ち上がり", "RISING"], ["立ち下がり", "FALLING"]];//[["rising", "RISING"], ["falling", "FALLING"]];
Blockly.Msg.ArduinobasePulseWidth = "幅";//"Width";
Blockly.Msg.ArduinobasePulsePreset = "プリセット";//"Preset";
Blockly.Msg.ArduinobasePulse_tooltip = "パルスを発生します　もしプリセットがアクティブならピンを事前に2マイクロ秒間初期状態にします";//"Generate a pulse. If 'preset' is active, before generating the pulse bring the pin to the initial state for 2 microseconds";

//--- Arduino base: time ---//
Blockly.Msg.CAT_ARDUINO_TIME = "時間";//"Time";

// Arduino base: delay
Blockly.Msg.ArduinobaseDelay = "待つ";//"Wait";
Blockly.Msg.ArduinobaseDelay_tooltip = "待ち時間を秒、ミリ秒、マイクロ秒でせっていします\nこの間プログラムは何もしません";//"Specifies the wait time in seconds, milliseconds, or microseconds.\nThe program does nothing else during this time";

// Arduino base: millis
Blockly.Msg.ArduinobaseMillis = "経過ミリ秒";//"elapsed milliseconds";
Blockly.Msg.ArduinobaseMillis_tooltip = "プログラム開始からの経過時間をミリ秒で返します（0～50日）";//"Returns the number of milliseconds (unsigned long) elapsed since the Arduino board started running the current program (returns to 0 after about 50 days)";

// Arduino base: micros
Blockly.Msg.ArduinobaseMicros = "経過マイクロ秒";//"elapsed microseconds";
Blockly.Msg.ArduinobaseMicros_tooltip = "プログラム開始からの経過時間をマイクロ秒で返します（0～70分）";"Returns the time (in microseconds) elapsed since the Arduino board started running the current program (returns to 0 after about 70 minutes)";

// ArduinobasePulsein
Blockly.Msg.ArduinobasePulsein = "パルス長さ　ピン";//"Pulse duration on the pin";
Blockly.Msg.ArduinobasePulsein_begin = "初期状態";//"with initial state";
Blockly.Msg.ArduinobasePulsein_tooltip = "初期状態からのパルス長さ（マイクロ秒）を返します\n初期状態がHIGHならばLOWに下がるまでの時間を返します";//"Returns the duration of a pulse (in microseconds) starting with the assigned state.\nIf the indicated value is HIGH, timing starts when the signal goes HIGH and ends when it returns LOW";

//--- Serial port ---//
Blockly.Msg.CAT_ARDUINO_SERIAL = "シリアルポート";//"Serial port";
Blockly.Msg.com1 = "USBポート選択";//"USB port selection";
Blockly.Msg.com2 = "🔔 USBポートを選択してください";//"🔔 Select the USB port!";
Blockly.Msg.bitrate = "b/s";
Blockly.Msg.serialSpeed = [['9600','9600'],['300','300'],['600','600'],['1200','1200'],['2400','2400'],['4800','4800'],['14400','14400'],['19200','19200'],['28800','28800'],['31250','31250'],['38400','38400'],['57600','57600'],['115200','115200']];
Blockly.Msg.ArduinoSerialBegin = "通信速度（b/s）";//"Connection speed (b/s)";
Blockly.Msg.ArduinoSerialBegin_tooltip = "シリアルポートの通信速度（ビット/秒）を設定します";//"Sets the connection speed for the serial port in bits per second (b/s)";

Blockly.Msg.ArduinoSerialRead = "受信";//"Data read";
Blockly.Msg.ArduinoSerialRead_tooltip = "シリアルポートの最初のデータを返します（なければ-1を返します）";//"Returns the first byte of data available on the serial port (-1 if there is no data available)"; 

Blockly.Msg.ArduinoSerialPrint = "送信";//"Send data";
Blockly.Msg.ArduinoSerialPrint_tooltip = "シリアルポートにデータを送信します";//"Send the data to the serial port";
Blockly.Msg.ArduinoSerialPrintln = "改行";//" newline";

Blockly.Msg.ArduinoSerialAvailable = "受信可能";//"Bytes (characters) available";
Blockly.Msg.ArduinoSerialAvailable_tooltip = "シリアルポートから読み込み可能なバイト数を返します";//"Get the number of bytes (characters) available for reading from the serial port.";

Blockly.Msg.ArduinoSerialFlush = "送信完了待ち";//"Waits for the transmission to end";
Blockly.Msg.ArduinoSerialFlush_tooltip = "送信データの完了を待ちます";//"Waits for the transmission of outgoing serial data to complete.";

Blockly.Msg.ArduinoSerialTimeout = "最大待ち時間(ミリ秒)";//"Max time to wait for data (ms)";
Blockly.Msg.ArduinoSerialTimeout_tooltip = "最大待ち時間（ミリ秒）をセットします";//"Set the maximum time to wait for data (in milliseconds)";

//--- Tone ---//
Blockly.Msg.CAT_SOUND = "音声";//"Sound"
Blockly.Msg.ArduinobaseTone = "音階を再生 |";//"Play a note  |";
Blockly.Msg.ArduinobaseTone_freq = "周波数(Hz)";//"Frequency (Hz)";
Blockly.Msg.ArduinobaseTone_time = "長さ(ms)";//"Duration (ms)";
Blockly.Msg.ArduinobaseTone_tooltip = "設定した周波数と時間の音階を再生します";//"Play a note indicating frequency (Hz) and duration (ms)";
Blockly.Msg.ArduinobaseTone1_tooltip = "設定した周波数の音階を再生します";//"Play a note indicating frequency (Hz)";

Blockly.Msg.ArduinobaseNotone = "音声を止める |";//"Stop the sound  |";
Blockly.Msg.ArduinobaseNotone_tooltip = "設定したピンの音声を止めます";//"Stop the sound on the indicated pin";

//--- Music ---//
Blockly.Msg.Music_NOTE_TOOLTIP = "設定した長さとピンで音声を再生します";//"Play a note with duration and pin";
Blockly.Msg.Music_REST_TOOLTIP = "休符";//"Rest (musical notation)";

Blockly.Msg.Melody = "メロディを再生 |";//"Play a melody  |";
Blockly.Msg.Melody_time = "テンポ";//"Tempo";
Blockly.Msg.Melody_code = "コード";//"Code";
Blockly.Msg.Melody_tooltip = "MELOで指定したメロディを再生します";//"Play the melody contained in the assigned string with the MELO notation";
Blockly.Msg.Melody_Examples_dropdown = [
    ['モーツァルト'/*'Mozart'*/, "g<<r-d- | g<< r-d-(g<dg<b)-d<*r | c*<<r-a-c*<<r-a- |(c*<af#<a)-d<r"],
    ['スケール'/*'Scale'*/, "c>>> d>> e>f g< a<< b<<< c*<<<<"],
    ['ブラザージョン'/*'Brother John'*/, "(cdec)x2   (efgr)x2   ((gagf)-ec)x2     (c g_ c+)x2"],
    ['月光ソナタ'/*'Moonlight Sonata'*/, "( (cccde+dr  ceddc+.r)x2  dddd (a+ar)_ dc(b a g+.r)_ cccde+dr ceddc+.r )*"],
    ['バッハ'/*'Bach'*/, "(((ce,ga,b_)+rg(f#fee,.)+  dd,c (ba-g-)_ c f e,+d+c+))>>+"],
    ['スターウォーズ'/*'Star Wars: The Imperial March'*/, "(ggg e,-. b,-- | g e,-. b,-- g+ (ddde,-.)* b,--  | g, e,-. b,-- g+ | g* g-.g--  (g g,-. f-- (ed#)-- e-)* r- g#- c#* b#-.b-- |  (b,a)-- b,- r- e,- g, e,-. g,-- | b, g-. b,-- d*+  | g* g-.g--  (g g,-. f-- (ed#)-- e-)* r- g#- c#* b#-.b-- |  (b,a)-- b,- r- e,- g, e,-. b,-- | g e,-. b,-- g+ |)<<_"]
];
Blockly.Msg.Melody_Examples_dropdown_tooltip = "MELO記法によるサンプルメロディ";//"Examples of melody with the MELO notation";

// Compiler
Blockly.Msg.no_code = "🔔 コードがありません";//"🔔 No code to compile!" ;
Blockly.Msg.check = "チェック";//"Verify. ";
Blockly.Msg.check_tooltip = "コードをチェックします";//"Check the code"; 
Blockly.Msg.upload = "アップロード";//"Upload. ";
Blockly.Msg.upload_tootip = "コードをアップロードします";//"Upload the code";
Blockly.Msg.verif = "🔔 最初にコードをチェックしてください";//"🔔 Check the code first ";
Blockly.Msg.save = "保存";//"Save as format";
Blockly.Msg.State = "状態";//"State";
