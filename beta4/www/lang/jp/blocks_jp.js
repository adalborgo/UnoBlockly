/**
 * @package: UnoBlockly
 * @file blocks_en.js
 * @version 0.2 (12-04-2022)
 * @description Blockly messages
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

 'use strict';

//--- Miscellaneous ---//
Blockly.Msg["error"] = "エラー：ブロックが接続されていません";//"Error: Blocks not connected!";
Blockly.Msg["ADD_COMMENT"] = "コメントを追加";//"Add a comment";
Blockly.Msg["CHANGE_VALUE_TITLE"] = "値を変える：";//"Change value:";
Blockly.Msg["CLEAN_UP"] = "ブロックを整理する";//"Pulisci i blocchi";
Blockly.Msg["COLLAPSED_WARNINGS_WARNING"] = "折りたたんだブロックには警告が入っています。";//"Collapsed blocks contain warnings.";
Blockly.Msg["COLLAPSE_ALL"] = "すべてのブロックを折りたたむ";//"Collapse Blocks";
Blockly.Msg["COLLAPSE_BLOCK"] = "ブロックを折りたたむ";//"Collapse Block";
Blockly.Msg["WORKSPACE_ARIA_LABEL"] = "Blocklyワークスペース";//"Blockly Workspace";
Blockly.Msg["WORKSPACE_COMMENT_DEFAULT_TEXT"] = "ここへ入力";//"Say something...";
Blockly.Msg["TODAY"] = "今日";//"Today";
Blockly.Msg["UNDO"] = "取り消す";//"Undo";
Blockly.Msg["UNNAMED_KEY"] = "名前なし";//"unnamed";
Blockly.Msg["REDO"] = "やり直し";//"Redo";
Blockly.Msg["DELETE_X_BLOCKS"] = "%1個のブロックを削除";//"Delete %1 Blocks";
Blockly.Msg["DISABLE_BLOCK"] = "ブロックを無効にする";//"Disable Block";
Blockly.Msg["DUPLICATE_BLOCK"] = "複製";//"Duplicate";
Blockly.Msg["DUPLICATE_COMMENT"] = "コメントを複製";//"Duplicate Comment";
Blockly.Msg["ENABLE_BLOCK"] = "ブロックを有効にする";//"Enable Block";
Blockly.Msg["EXPAND_ALL"] = "すべてのブロックを展開する";//"Expand Blocks";
Blockly.Msg["EXPAND_BLOCK"] = "ブロックを展開する";//"Expand Block";
Blockly.Msg["DELETE_ALL_BLOCKS"] = "%1個あるすべてのブロックを削除しますか？";//"Delete all %1 blocks?";
Blockly.Msg["DELETE_BLOCK"] = "ブロックを削除";//"Delete Block";
Blockly.Msg["EXTERNAL_INPUTS"] = "外部入力";//"External Inputs";
Blockly.Msg["HELP"] = "ヘルプ";//"Help";
Blockly.Msg["INLINE_INPUTS"] = "インライン入力";"Inline Inputs";
Blockly.Msg["AT"] = "に";//"to";
Blockly.Msg["EQUAL"] = " = ";

//--- Controls ---//
Blockly.Msg["CAT_LOOPS"] = "繰り返し";//"Loops";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK"] = "ループから抜け出す";//"break out of loop";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE"] = "ループの次の反復処理を続行します";//"continue with next iteration of loop";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK"] = "入っているループから抜け出します。";//"Break out of the containing loop.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE"] = "このループの残りの部分をスキップして、ループの繰り返しを続けます。";//"Skip the rest of this loop, and continue with the next iteration.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_WARNING"] = "注意: このブロックは、ループ内でのみ使用できます。";//"Warning: This block may only be used within a loop.";
Blockly.Msg["CONTROLS_FOREACH_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#for-each";
Blockly.Msg["CONTROLS_FOREACH_TITLE"] = "リスト%2の各項目%1について";//"for each item %1 in list %2";
Blockly.Msg["CONTROLS_FOREACH_TOOLTIP"] = "リストの各項目について、その項目を変数'%1'として、いくつかのステートメントを実行します。";//"For each item in a list, set the variable '%1' to the item, and then do some statements.";
Blockly.Msg["CONTROLS_FOR_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#count-with";
Blockly.Msg["CONTROLS_FOR_TITLE"] = "%1 を %2 から %3 まで %4 ずつカウントする";//"count with %1 from %2 to %3 by %4";
Blockly.Msg["CONTROLS_FOR"] = "カウント";//"Count with";
Blockly.Msg["CONTROLS_FOR_FROM"] = "を";//"from";
Blockly.Msg["CONTROLS_FOR_TO"] = "から";//"to";
Blockly.Msg["CONTROLS_FOR_BY"] = "まで 増分：";//"by";
Blockly.Msg["CONTROLS_FOR_TOOLTIP"] = "変数 '%1' が開始番号から終了番号まで指定した間隔での値をとって、指定したブロックを実行する。";//"The variable that controls the cycle takes all the values between the initial and final one with a 'step' equal to the indicated value, in this way the internal block is repeatedly executed for each value of the 'counter' variable.";
Blockly.Msg["CONTROLS_IF_ELSEIF_TOOLTIP"] = "「もしも」のブロックに条件を追加します。";//"Add a condition to the if block.";
Blockly.Msg["CONTROLS_IF_ELSE_TOOLTIP"] = "Ifブロックに、すべてをキャッチする条件を追加。";//"Add a final, catch-all condition to the if block.";
Blockly.Msg["CONTROLS_IF_HELPURL"] = "https://github.com/google/blockly/wiki/IfElse";
Blockly.Msg["CONTROLS_IF_IF_TOOLTIP"] = "追加、削除、またはセクションを順序変更して、ブロックをこれを再構成します。";//"Add, remove, or reorder sections to reconfigure this if block.";
Blockly.Msg["CONTROLS_IF_MSG_ELSE"] = "そうでなければ";//"else";
Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"] = "そうでなくもし";//"else if";
Blockly.Msg["CONTROLS_IF_MSG_IF"] = "もし";//"if";
Blockly.Msg["CONTROLS_IF_TOOLTIP_1"] = "値が true の場合、ステートメントを実行します。";//"If a value is true, then do some statements.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_2"] = "値が true の場合は、最初のステートメントのブロックを実行します。それ以外の場合は、2番目のステートメントのブロックを実行します。";//"If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_3"] = "最初の値が true の場合は、最初のステートメントのブロックを実行します。それ以外の場合で、2番目の値が true の場合は、2番目のステートメントのブロックを実行します。";//"If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_4"] = "最初の値が true の場合は、最初のステートメントのブロックを実行します。それ以外の場合で、2番目の値が true の場合は、2番目のステートメントのブロックを実行します。すべての値が true でない場合は、最後のステートメントのブロックを実行します。";//"If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
Blockly.Msg["CONTROLS_REPEAT_HELPURL"] = "https://ja.wikipedia.org/wiki/For文";
Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"] = "実行";//"do";
Blockly.Msg["CONTROLS_REPEAT_TITLE"] = "%1 回繰り返す";//"repeat %1 times";
Blockly.Msg["CONTROLS_REPEAT_TOOLTIP"] = "いくつかのステートメントを数回実行します。";//"Do some statements several times.";
Blockly.Msg["CONTROLS_WHILEUNTIL_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#repeat";
Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_UNTIL"] = "繰り返す 終わる条件";//"repeat until";
Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_WHILE"] = "繰り返す 続ける条件";//"repeat while";
Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL"] = "値がfalseの間、いくつかのステートメントを実行する。";//"While a value is false, then do some statements.";
Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_WHILE"] = "値がtrueの間、いくつかのステートメントを実行する。";//"While a value is true, then do some statements.";
Blockly.Msg["CONTROLS_FOREACH_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["CONTROLS_FOR_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["CONTROLS_IF_ELSEIF_TITLE_ELSEIF"] = Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"];
Blockly.Msg["CONTROLS_IF_ELSE_TITLE_ELSE"] = Blockly.Msg["CONTROLS_IF_MSG_ELSE"];
Blockly.Msg["CONTROLS_IF_IF_TITLE_IF"] = Blockly.Msg["CONTROLS_IF_MSG_IF"];
Blockly.Msg["CONTROLS_IF_MSG_THEN"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["CONTROLS_WHILEUNTIL_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];

//--- Logic ---//
Blockly.Msg["CAT_LOGIC"] = "論理";//"Logic";
Blockly.Msg["LOGIC_BOOLEAN_FALSE"] = "false";
Blockly.Msg["LOGIC_BOOLEAN_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#values";
Blockly.Msg["LOGIC_BOOLEAN_TOOLTIP"] = "true または false を返します。";//"Returns either true or false.";
Blockly.Msg["LOGIC_BOOLEAN_TRUE"] = "true";
Blockly.Msg["LOGIC_COMPARE_HELPURL"] = "https://ja.wikipedia.org/wiki/不等式";//"https://en.wikipedia.org/wiki/Inequality_(mathematics)";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_EQ"] = "両方の入力が互いに等しい場合に true を返します。";//"Return true if both inputs equal each other.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GT"] = "最初の入力が 2 番目の入力よりも大きい場合は true を返します。";//"Return true if the first input is greater than the second input.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GTE"] = "最初の入力が 2 番目の入力以上の場合に true を返します。";//"Return true if the first input is greater than or equal to the second input.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LT"] = "最初の入力が 2 番目の入力よりも小さい場合は true を返します。";//"Return true if the first input is smaller than the second input.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LTE"] = "最初の入力が 2 番目の入力以下の場合に true を返します。";//"Return true if the first input is smaller than or equal to the second input.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_NEQ"] = "両方の入力が互いに等しくない場合に true を返します。";//"Return true if both inputs are not equal to each other.";
Blockly.Msg["LOGIC_NEGATE_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#not";
Blockly.Msg["LOGIC_NEGATE_TITLE"] = "%1ではない";//"not %1";
Blockly.Msg["LOGIC_NEGATE_TOOLTIP"] = "入力が false の場合は、true を返します。入力が true の場合は false を返します。";//"Returns true if the input is false. Returns false if the input is true.";
Blockly.Msg["LOGIC_NULL"] = "null";
Blockly.Msg["LOGIC_NULL_HELPURL"] = "https://ja.wikipedia.org/wiki/Nullable型";//"https://en.wikipedia.org/wiki/Nullable_type";
Blockly.Msg["LOGIC_NULL_TOOLTIP"] = "nullを返します";//"Returns null.";
Blockly.Msg["LOGIC_OPERATION_AND"] = "かつ";//"and";
Blockly.Msg["LOGIC_OPERATION_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#logical-operations";
Blockly.Msg["LOGIC_OPERATION_OR"] = "または";//"or";
Blockly.Msg["LOGIC_OPERATION_TOOLTIP_AND"] = "両方の入力が true のときに true を返します。";//"Return true if both inputs are true.";
Blockly.Msg["LOGIC_OPERATION_TOOLTIP_OR"] = "少なくとも 1 つの入力が true のときに true を返します。";//"Return true if at least one of the inputs is true.";
Blockly.Msg["LOGIC_TERNARY_CONDITION"] = "テスト";//"test";
Blockly.Msg["LOGIC_TERNARY_HELPURL"] = "https://ja.wikipedia.org/wiki/条件演算子";//"https://en.wikipedia.org/wiki/%3F:";
Blockly.Msg["LOGIC_TERNARY_IF_FALSE"] = "false の場合";//"if false";
Blockly.Msg["LOGIC_TERNARY_IF_TRUE"] = "true の場合";//"if true";
Blockly.Msg["LOGIC_TERNARY_TOOLTIP"] = "'テスト' の条件をチェックします。条件が true の場合、'true' の値を返します。それ以外の場合 'false' のを返します。";//"Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";

//--- Math ---//
Blockly.Msg["CAT_MATH"] = "数学";//"Math";
Blockly.Msg["MATH_ADDITION_SYMBOL"] = "+";
Blockly.Msg["MATH_ARITHMETIC_HELPURL"] = "https://ja.wikipedia.org/wiki/算術";//"https://en.wikipedia.org/wiki/Arithmetic";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_ADD"] = "2 つの数の合計を返します。";//"Return the sum of the two numbers.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_DIVIDE"] = "2 つの数の商を返します。";//"Return the quotient of the two numbers.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MINUS"] = "2 つの数の差を返します。";//"Return the difference of the two numbers.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MULTIPLY"] = "2 つの数の積を返します。";//"Return the product of the two numbers.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_POWER"] = "最初の数を2 番目の値で累乗した結果を返します。";//"Return the first number raised to the power of the second number.";
Blockly.Msg["MATH_ATAN2_HELPURL"] = "https://ja.wikipedia.org/wiki/Atan2";//"https://en.wikipedia.org/wiki/Atan2";
Blockly.Msg["MATH_ATAN2_TITLE"] = "X:%1 Y:%2のaran2";
Blockly.Msg["MATH_ATAN2_TOOLTIP"] = "点 (X, Y) のアークタンジェントを -180 度から 180度まで返します。";//"Return the arctangent of point (X, Y) in degrees from -180 to 180.";
Blockly.Msg["MATH_CHANGE_HELPURL"] = "https://ja.wikipedia.org/wiki/イディオム_(プログラミング)";//"https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
Blockly.Msg["MATH_CHANGE_TITLE"] = "%1 を %2 増やす";//"change %1 by %2";
Blockly.Msg["MATH_CHANGE_TOOLTIP"] = "変数'%1'に数をたす。";//"Add a number to variable '%1'.";
Blockly.Msg["MATH_CONSTANT_HELPURL"] = "https://ja.wikipedia.org/wiki/数学定数";//"https://en.wikipedia.org/wiki/Mathematical_constant";
Blockly.Msg["MATH_CONSTANT_TOOLTIP"] = "いずれかの共通の定数のを返す: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (無限).";//"Return one of the common constants: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (infinity).";
Blockly.Msg["MATH_CONSTRAIN_HELPURL"] = "https://en.wikipedia.org/wiki/Clamping_(graphics)";
Blockly.Msg["MATH_CONSTRAIN_TITLE"] = "%1 を %2 以上 %3 以下の範囲に制限";//"constrain %1 low %2 high %3";
Blockly.Msg["MATH_CONSTRAIN_TOOLTIP"] = "指定した上限と下限の間に値を制限する（上限と下限の値を含む）。";//"Constrain a number to be between the specified limits (inclusive).";
Blockly.Msg["MATH_DIVISION_SYMBOL"] = "÷";
Blockly.Msg["MATH_IS_DIVISIBLE_BY"] = "は以下で割りきれる：";//"is divisible by";
Blockly.Msg["MATH_IS_EVEN"] = "は偶数";//"is even";
Blockly.Msg["MATH_IS_NEGATIVE"] = "は負";//"is negative";
Blockly.Msg["MATH_IS_ODD"] = "は奇数";//"is odd";
Blockly.Msg["MATH_IS_POSITIVE"] = "は正";//"is positive";
Blockly.Msg["MATH_IS_PRIME"] = "は素数";//"is prime";
Blockly.Msg["MATH_IS_TOOLTIP"] = "数字が、偶数、奇数、素数、整数、正数、負数、または特定の数で割り切れるかどうかを判定し、true か false を返します。";//"Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";
Blockly.Msg["MATH_IS_WHOLE"] = "は整数";//"is whole";
Blockly.Msg["MATH_MODULO_HELPURL"] = "https://ja.wikipedia.org/wiki/剰余演算";//"https://en.wikipedia.org/wiki/Modulo_operation";
Blockly.Msg["MATH_MODULO_TITLE"] = "%1÷%2の余り";//"remainder of %1 ÷ %2";
Blockly.Msg["MATH_MODULO_TOOLTIP"] = "2つの数値の割り算の余りを返す。";//"Return the remainder from dividing the two numbers.";
Blockly.Msg["MATH_MULTIPLICATION_SYMBOL"] = "×";
Blockly.Msg["MATH_NUMBER_HELPURL"] = "https://en.wikipedia.org/wiki/数";//"https://en.wikipedia.org/wiki/Number";
Blockly.Msg["MATH_NUMBER_TOOLTIP"] = "数です。";//"A number.";
Blockly.Msg["MATH_ONLIST_HELPURL"] = "";
Blockly.Msg["MATH_ONLIST_OPERATOR_AVERAGE"] = "リストの平均";//"average of list";
Blockly.Msg["MATH_ONLIST_OPERATOR_MAX"] = "リストの最大値値";//"max of list";
Blockly.Msg["MATH_ONLIST_OPERATOR_MEDIAN"] = "リストの中央値";//"median of list";
Blockly.Msg["MATH_ONLIST_OPERATOR_MIN"] = "リストの最小値値";//"min of list";
Blockly.Msg["MATH_ONLIST_OPERATOR_MODE"] = "リストの最頻値";//"modes of list";
Blockly.Msg["MATH_ONLIST_OPERATOR_RANDOM"] = "リストからランダムに選ばれた項目";//"random item of list";
Blockly.Msg["MATH_ONLIST_OPERATOR_STD_DEV"] = "リストの標準偏差";//"standard deviation of list";
Blockly.Msg["MATH_ONLIST_OPERATOR_SUM"] = "リストの合計";//"sum of list";
Blockly.Msg["MATH_ONLIST_TOOLTIP_AVERAGE"] = "リストの数値の平均 (算術平均) を返す。";//"Return the average (arithmetic mean) of the numeric values in the list.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MAX"] = "リストの最大値を返す。";//"Return the largest number in the list.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MEDIAN"] = "リストの中央値を返す。";//"Return the median number in the list.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MIN"] = "リストの最小値を返す。";//"Return the smallest number in the list.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MODE"] = "リスト中の最頻項目のリストを返す。";//"Return a list of the most common item(s) in the list.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_RANDOM"] = "リストからランダムに選ばれた要素を返す。";//"Return a random element from the list.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_STD_DEV"] = "リストの標準偏差を返す。";//"Return the standard deviation of the list.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_SUM"] = "リストの数値を足して返す。";//"Return the sum of all the numbers in the list.";
Blockly.Msg["MATH_POWER_SYMBOL"] = "^";
Blockly.Msg["MATH_RANDOM_FLOAT_HELPURL"] = "https://en.wikipedia.org/wiki/Random_number_generation";
Blockly.Msg["MATH_RANDOM_FLOAT_TITLE_RANDOM"] = "1未満の正の乱数";//"random fraction";
Blockly.Msg["MATH_RANDOM_FLOAT_TOOLTIP"] = "0.0以上で1.0未満の範囲の乱数を返します。";//"Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
Blockly.Msg["MATH_RANDOM_INT_HELPURL"] = "https://en.wikipedia.org/wiki/Random_number_generation";
Blockly.Msg["MATH_RANDOM_INT_TITLE"] = "%1から%2までのランダムな整数";//"random integer from %1 to %2";
Blockly.Msg["MATH_RANDOM_INT_TOOLTIP"] = "指定された（上下限を含む）範囲のランダムな整数を返します。";//"Return a random integer between the two specified limits, inclusive.";
Blockly.Msg["MATH_ROUND_HELPURL"] = "https://ja.wikipedia.org/wiki/端数処理";//"https://en.wikipedia.org/wiki/Rounding";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUND"] = "四捨五入";//"round";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDDOWN"] = "切り下げ";//"round down";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDUP"] = "切り上げ";//"round up";
Blockly.Msg["MATH_ROUND_TOOLTIP"] = "数値を切り上げるか切り捨てる";//"Round a number up or down.";
Blockly.Msg["MATH_SINGLE_HELPURL"] = "https://ja.wikipedia.org/wiki/平方根";//"https://en.wikipedia.org/wiki/Square_root";
Blockly.Msg["MATH_SINGLE_OP_ABSOLUTE"] = "絶対値";//"absolute";
Blockly.Msg["MATH_SINGLE_OP_ROOT"] = "平方根";//"square root";
Blockly.Msg["MATH_SINGLE_TOOLTIP_ABS"] = "絶対値を返す。";//"Return the absolute value of a number.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_EXP"] = "ネイピア数eの数値乗を返す。";//"Return e to the power of a number.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_LN"] = "数値の自然対数を返す。";//"Return the natural logarithm of a number.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_LOG10"] = "底が10の対数を返す。";//"Return the base 10 logarithm of a number.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_NEG"] = "負の数を返す。";//"Return the negation of a number.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_POW10"] = "10の数値乗を返す。";//"Return 10 to the power of a number.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_ROOT"] = "平方根を返す。";//"Return the square root of a number.";
Blockly.Msg["MATH_SUBTRACTION_SYMBOL"] = "-";
Blockly.Msg["MATH_TRIG_ACOS"] = "acos";
Blockly.Msg["MATH_TRIG_ASIN"] = "asin";
Blockly.Msg["MATH_TRIG_ATAN"] = "atan";
Blockly.Msg["MATH_TRIG_COS"] = "cos";
Blockly.Msg["MATH_TRIG_HELPURL"] = "https://ja.wikipedia.org/wiki/三角関数";//"https://en.wikipedia.org/wiki/Trigonometric_functions";
Blockly.Msg["MATH_TRIG_SIN"] = "sin";
Blockly.Msg["MATH_TRIG_TAN"] = "tan";
Blockly.Msg["MATH_TRIG_TOOLTIP_ACOS"] = "アークコサイン（arccosin）を返す。";//"Return the arccosine of a number.";
Blockly.Msg["MATH_TRIG_TOOLTIP_ASIN"] = "アークサイン（arcsin）を返す。";//"Return the arcsine of a number.";
Blockly.Msg["MATH_TRIG_TOOLTIP_ATAN"] = "アークタンジェント（arctan）を返す。";//"Return the arctangent of a number.";
Blockly.Msg["MATH_TRIG_TOOLTIP_COS"] = "（ラジアンではなく）度数の余弦（cosin）を返す。";//"Return the cosine of a degree (not radian).";
Blockly.Msg["MATH_TRIG_TOOLTIP_SIN"] = "（ラジアンではなく）度数の正弦（sin）を返す。";//"Return the sine of a degree (not radian).";
Blockly.Msg["MATH_TRIG_TOOLTIP_TAN"] = "（ラジアンではなく）度数の正接（tan）を返す。";//"Return the tangent of a degree (not radian).";
Blockly.Msg["MATH_INC_TITLE"] = "加算";//"Increment ";
Blockly.Msg["MATH_INC_DEC_FIRST_AFTER"] = [["先に", "FIRST"], ["後から", "AFTER"]];//[["first", "FIRST"], ["after", "AFTER"]];
Blockly.Msg["MATH_INC_TOOLTIP"] = "読む前（あと）に加算します";//"Increment an integer variable before or after reading.";
Blockly.Msg["MATH_DEC_TITLE"] = "減算";//"Decrement ";
Blockly.Msg["MATH_DEC_TOOLTIP"] = "読む前（あと）に減算します";//"Decrement an integer variable before or after reading.";
Blockly.Msg["MATH_MAP"] = "マップ ( X =";//"map ( X =";
Blockly.Msg["MATH_MAP_XMIN"] = " Xmin =";
Blockly.Msg["MATH_MAP_XMAX"] = "Xmax =";
Blockly.Msg["MATH_MAP_YMIN"] = "Ymin =";
Blockly.Msg["MATH_MAP_YMAX"] = "Ymax =";
Blockly.Msg["MATH_MAP_END"] = ")"; 
Blockly.Msg["MATH_MAP_TOOLTIP"] = "線形写像: y = map(X, Xmin, Xmax, Ymin, Ymax)";//"Linear transformation: y = map(X, Xmin, Xmax, Ymin, Ymax)";
Blockly.Msg["MATH_CHANGE_TITLE_ITEM"] = "要素";//"item";
Blockly.Msg["MATH_FREE_FIELD_TOOLTIP"] = "自由領域です";//"Free field for expressions";

// Arrays
Blockly.Msg["CAT_ARRAYS"] = "配列";//"Arrays";
Blockly.Msg["ARRAY_CREATE_EMPTY_TITLE"] = "クリア";//'clear';
Blockly.Msg["ARRAY_CREATE_WITH"] = "作成";//"Create with";
Blockly.Msg["ARRAY_WITH_ITEMS"] = "要素";//"with";
Blockly.Msg["VARIABLES_TYPE"] = "型";//"Type";
Blockly.Msg["ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD"] = "配列";//"Array";
Blockly.Msg["ARRAY_CREATE_WITH_CONTAINER_TOOLTIP"] = "追加、削除、並べ替え";//"Add, remove, or reorder";
Blockly.Msg["ARRAY_CREATE_WITH_INPUT_WITH"] = "要素";//"items";
Blockly.Msg["ARRAY_CREATE_WITH_ITEM_TITLE"] = "要素";//"item";
Blockly.Msg["ARRAY_CREATE_WITH_TOOLTIP"] = "任意の要素数の配列を返します";//"Return an array with any number of items";
Blockly.Msg["ARRAY_GETINDEX_ITEM"] = "配列の要素";//"Item of array";
Blockly.Msg["ARRAY_GETINDEX_ITEM2"] = "配列";//"Array";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP1"] = "配列の要素の値を返します";//"Returns the value stored in the array element";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP2"] = "選択された型の配列を作成します";//"Creates an array of the selected type";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP3"] = "配列要素に値をセットします";//"Sets an element of the array to the value";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP4"] = "選択された型のベクトルを作成します";//"Creates a vector of the selected type";
Blockly.Msg["ARRAY_CREATE"] = "配列を作成";//"Create the array";
Blockly.Msg["ARRAY_CREATE_VECTOR"] = "ベクトルを作成";//"Create the vector";
Blockly.Msg["ARRAY_CREATE_SEPARATOR"] = "区切り";//"Separator";
Blockly.Msg["ARRAY_SET_INDEX"] = "配列の要素をセット";//"Set the element of the array";
Blockly.Msg["ARRAY_DIM"] = "次元";//"Dimensions";
Blockly.Msg["ARRAY_DIM_ITEMS"] = "要素";//"item(s)";
Blockly.Msg["ARRAY_DIM_ELEMENTS"] = "要素数";//"with number of items";
Blockly.Msg["ARRAY_INDEX"] = "インデックス";//"with index";
Blockly.Msg["SIZE"] = "ベクトル　サイズ";//"Vector size";
Blockly.Msg["SIZE_TOOLTIP"] = "ベクトルのサイズを返します";//"Return the vector size";
Blockly.Msg["ARRAY_DIMS"] = [["1", "1"],["2", "2"],["3", "3"]];
Blockly.Msg["ARRAY_DROPDOWN_ITEMS"] = [["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"],["8", "8"],["9", "9"],["10", "10"],["11", "11"],["12", "12"]];
Blockly.Msg["ARRAY_GET_ARRAY_VECTOR"] = "配列/ベクトル";//"Array/Vector";
Blockly.Msg["ARRAY_GET_ARRAY_VECTOR_TOOLTIP"] = "配列あるいはベクトルを返します";//"Returns an array or vector";

//--- Procedures ---//
Blockly.Msg["CAT_FUNCTIONS"] = "関数";//"Functions";
Blockly.Msg["PROCEDURES_ALLOW_STATEMENTS"] = "ステートメントを許可";//"allow statements";
Blockly.Msg["PROCEDURES_BEFORE_PARAMS"] = "引数：";//"with:";
Blockly.Msg["PROCEDURES_CALLNORETURN_HELPURL"] = "https://jp.wikipedia.org/wiki/サブルーチン";//"https://en.wikipedia.org/wiki/Subroutine";
Blockly.Msg["PROCEDURES_CALLNORETURN_TOOLTIP"] = "ユーザー定義関数 '%1' を実行します。";//"Run the user-defined function '%1'.";
Blockly.Msg["PROCEDURES_CALLRETURN_HELPURL"] = "https://jp.wikipedia.org/wiki/サブルーチン";//"https://en.wikipedia.org/wiki/Subroutine";
Blockly.Msg["PROCEDURES_CALLRETURN_TOOLTIP"] = "ユーザー定義関数 '%1' を実行し、その出力を使用します。";//"Run the user-defined function '%1' and use its output.";
Blockly.Msg["PROCEDURES_CALL_BEFORE_PARAMS"] = "引数：";//"with:";
Blockly.Msg["PROCEDURES_CREATE_DO"] = "'%1' を作成";//"Create '%1'";
Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"] = "この関数を説明...";//"Describe this function...";
Blockly.Msg["PROCEDURES_DEFNORETURN_DO"] = "";
Blockly.Msg["PROCEDURES_DEFNORETURN_HELPURL"] = "https://jp.wikipedia.org/wiki/サブルーチン";//"https://en.wikipedia.org/wiki/Subroutine";
Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "何かする";//"do something";
Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"] = "関数";//"to";
Blockly.Msg["PROCEDURES_DEFNORETURN_TOOLTIP"] = "出力なしの関数を作成します。";//"Creates a function with no output.";
Blockly.Msg["PROCEDURES_DEFRETURN_HELPURL"] = "https://jp.wikipedia.org/wiki/サブルーチン";//"https://en.wikipedia.org/wiki/Subroutine";
Blockly.Msg["PROCEDURES_DEFRETURN_RETURN"] = "返す";//"return";
Blockly.Msg["PROCEDURES_DEFRETURN_TOOLTIP"] = "一つの出力を持つ関数を作成します。";//"Creates a function with an output.";
Blockly.Msg["PROCEDURES_DEF_DUPLICATE_WARNING"] = "警告：この関数には重複するパラメータがあります";//"Warning: This function has duplicate parameters.";
Blockly.Msg["PROCEDURES_HIGHLIGHT_DEF"] = "関数の内容を強調表示します。";//"Highlight function definition";
Blockly.Msg["PROCEDURES_IFRETURN_HELPURL"] = "http://c2.com/cgi/wiki?GuardClause";
Blockly.Msg["PROCEDURES_IFRETURN_TOOLTIP"] = "1番目の値が true の場合、2番目の値を返します。";//"If a value is true, then return a second value.";
Blockly.Msg["PROCEDURES_IFRETURN_WARNING"] = "警告: このブロックは、関数定義内でのみ使用できます。";//"Warning: This block may be used only within a function definition.";
Blockly.Msg["PROCEDURES_MUTATORARG_TITLE"] = "入力名:";//"input name:";
Blockly.Msg["PROCEDURES_MUTATORARG_TOOLTIP"] = "関数への入力の追加。";//"Add an input to the function.";
Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TITLE"] = "入力";//"inputs";
Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TOOLTIP"] = "この関数への入力の追加、削除、順番変更。";//"Add, remove, or reorder inputs to this function.";
Blockly.Msg["PROCEDURES_DEFRETURN_COMMENT"] = "この関数の説明...";//"Describe this function...";
Blockly.Msg["PROCEDURES_DEFRETURN_DO"]  = "";
Blockly.Msg["PROCEDURES_DEFRETURN_PROCEDURE"] = "関数";//"function";
Blockly.Msg["PROCEDURES_DEFRETURN_TITLE"] = "to";

//--- Text ---//
Blockly.Msg["CAT_TEXT"] = "文字";//"Text";
Blockly.Msg["TEXT_APPEND_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";
Blockly.Msg["TEXT_APPEND_TITLE"] = "項目 %1 へテキストを追加 %2";//"to %1 append text %2";
Blockly.Msg["TEXT_APPEND_TOOLTIP"] = "変数 '%1' にテキストを追加。";//"Append some text to variable '%1'.";
Blockly.Msg["TEXT_CHANGECASE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_LOWERCASE"] = "小文字に";//"to lower case";
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_TITLECASE"] = "タイトル ケースに";//"to Title Case";
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_UPPERCASE"] = "大文字に";//"to UPPER CASE";
Blockly.Msg["TEXT_CHANGECASE_TOOLTIP"] = "別のケースに、テキストのコピーを返します。";//"Return a copy of the text in a different case.";
Blockly.Msg["TEXT_CHARAT_FIRST"] = "最初の文字を得る";//"get first letter";
Blockly.Msg["TEXT_CHARAT_FROM_END"] = "の、後ろから以下の数字番目の文字：";//"get letter # from end";
Blockly.Msg["TEXT_CHARAT_FROM_START"] = "の、以下の数字番目の文字：";//"get letter #";
Blockly.Msg["TEXT_CHARAT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-text";
Blockly.Msg["TEXT_CHARAT_LAST"] = "最後の文字を得る";//"get last letter";
Blockly.Msg["TEXT_CHARAT_RANDOM"] = "ランダムな文字を得る";//"get random letter";
Blockly.Msg["TEXT_CHARAT_TAIL"] = "";
Blockly.Msg["TEXT_CHARAT_TITLE"] = "テキスト %1 %2";//"in text %1 %2";
Blockly.Msg["TEXT_CHARAT_TOOLTIP"] = "指定された位置に文字を返します。";//"Returns the letter at the specified position.";
Blockly.Msg["TEXT_COUNT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#counting-substrings";
Blockly.Msg["TEXT_COUNT_MESSAGE0"] = "%2に含まれる%1の数を数える";//"count %1 in %2";
Blockly.Msg["TEXT_COUNT_TOOLTIP"] = "とある文が別の文のなかに使われた回数を数える。";//"Count how many times some text occurs within some other text.";
Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TOOLTIP"] = "テキストへ項目を追加。";//"Add an item to the text.";
Blockly.Msg["TEXT_CREATE_JOIN_TITLE_JOIN"] = "結合";//"join";
Blockly.Msg["TEXT_CREATE_JOIN_TOOLTIP"] = "セクションを追加、削除、または順序変更して、ブロックを再構成。";//"Add, remove, or reorder sections to reconfigure this text block.";
Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_END"] = "終了位置：後ろから";//"to letter # from end";
Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_START"] = "終了位置：";//"to letter #";
Blockly.Msg["TEXT_GET_SUBSTRING_END_LAST"] = "最後のの文字";//"to last letter";
Blockly.Msg["TEXT_GET_SUBSTRING_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
Blockly.Msg["TEXT_GET_SUBSTRING_INPUT_IN_TEXT"] = "テキスト";//"in text";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FIRST"] = "の部分文字列を取得；最初から";//"get substring from first letter";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_END"] = "の部分文字列を取得；開始位置：後ろから";//"get substring from letter # from end";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_START"] = "の部分文字列を取得；開始位置：";//"get substring from letter #";
Blockly.Msg["TEXT_GET_SUBSTRING_TAIL"] = "";
Blockly.Msg["TEXT_GET_SUBSTRING_TOOLTIP"] = "テキストの指定部分を返します。";//"Returns a specified portion of the text.";
Blockly.Msg["TEXT_INDEXOF_HELPURL"] = "https://github.com/google/blockly/wiki/Text#finding-text";
Blockly.Msg["TEXT_INDEXOF_OPERATOR_FIRST"] = "で以下のテキストの最初の出現箇所を検索：";//"find first occurrence of text";
Blockly.Msg["TEXT_INDEXOF_OPERATOR_LAST"] = "で以下のテキストの最後の出現箇所を検索：";//"find last occurrence of text";
Blockly.Msg["TEXT_INDEXOF_TITLE"] = "テキスト %1 %2 %3";//"in text %1 %2 %3";
Blockly.Msg["TEXT_INDEXOF_TOOLTIP"] = "二番目のテキストの中で一番目のテキストが最初／最後に出現したインデックスを返す。テキストが見つからない場合は%1を返す。";//"Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.";
Blockly.Msg["TEXT_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
Blockly.Msg["TEXT_ISEMPTY_TITLE"] = "%1が空";//"%1 is empty";
Blockly.Msg["TEXT_ISEMPTY_TOOLTIP"] = "与えられたテキストが空の場合は true を返す。";//"Returns true if the provided text is empty.";
Blockly.Msg["TEXT_JOIN_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-creation";
Blockly.Msg["TEXT_JOIN_TITLE_CREATEWITH"] = "テキストの作成：";//"create text with";
Blockly.Msg["TEXT_JOIN_TOOLTIP"] = "任意の数の項目一部を一緒に接合してテキストを作成。";//"Create a piece of text by joining together any number of items.";
Blockly.Msg["TEXT_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";
Blockly.Msg["TEXT_LENGTH_TITLE"] = "%1の長さ";//"length of %1";
Blockly.Msg["TEXT_LENGTH_TOOLTIP"] = "与えられたテキストの(スペースを含む)文字数を返す。";//"Returns the number of letters (including spaces) in the provided text.";
Blockly.Msg["TEXT_PRINT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#printing-text";
Blockly.Msg["TEXT_PRINT_TITLE"] = "%1 を表示";//"print %1";
Blockly.Msg["TEXT_PRINT_TOOLTIP"] = "指定したテキスト、番号または他の値を印刷します。";//"Print the specified text, number or other value.";
Blockly.Msg["TEXT_PROMPT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
Blockly.Msg["TEXT_PROMPT_TOOLTIP_NUMBER"] = "ユーザーに数値のインプットを求める。";//"Prompt for user for a number.";
Blockly.Msg["TEXT_PROMPT_TOOLTIP_TEXT"] = "ユーザーにテキスト入力を求める。";//"Prompt for user for some text.";
Blockly.Msg["TEXT_PROMPT_TYPE_NUMBER"] = "メッセージで番号の入力を求める";//"prompt for number with message";
Blockly.Msg["TEXT_PROMPT_TYPE_TEXT"] = "メッセージでテキスト入力を求める";//"prompt for text with message";
Blockly.Msg["TEXT_REPLACE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#replacing-substrings";
Blockly.Msg["TEXT_REPLACE_MESSAGE0"] = "%3に含まれる%1を%2に置換";//"replace %1 with %2 in %3";
Blockly.Msg["TEXT_REPLACE_TOOLTIP"] = "文に含まれるキーワードを置換する。";//"Replace all occurances of some text within some other text.";
Blockly.Msg["TEXT_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#reversing-text";
Blockly.Msg["TEXT_REVERSE_MESSAGE0"] = "%1を逆順に";//"reverse %1";
Blockly.Msg["TEXT_REVERSE_TOOLTIP"] = "文の文字を逆順にする。";//"Reverses the order of the characters in the text.";
Blockly.Msg["TEXT_TEXT_HELPURL"] = "https://en.wikipedia.org/wiki/String_(computer_science)";
Blockly.Msg["TEXT_TEXT_TOOLTIP"] = "文字、単語、または行のテキスト。";//"A letter, word, or line of text.";
Blockly.Msg["TEXT_TRIM_HELPURL"] = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
Blockly.Msg["TEXT_TRIM_OPERATOR_BOTH"] = "両端のスペースを取り除く";//"trim spaces from both sides of";
Blockly.Msg["TEXT_TRIM_OPERATOR_LEFT"] = "左端のスペースを取り除く";//"trim spaces from left side of";
Blockly.Msg["TEXT_TRIM_OPERATOR_RIGHT"] = "右端のスペースを取り除く";//"trim spaces from right side of";
Blockly.Msg["TEXT_TRIM_TOOLTIP"] = "スペースを 1 つまたは両方の端から削除したのち、テキストのコピーを返します。";//"Return a copy of the text with spaces removed from one or both ends.";
Blockly.Msg["TEXT_APPEND_VARIABLE"] = "item";
Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TITLE_ITEM"] = "item";
Blockly.Msg["TEXT_FROM_NUMBER"] = "String(x)";
Blockly.Msg["TEXT_FROM_NUMBER_TOOLTIP"] = "Convert from number to string";
Blockly.Msg["TEXT_FROM_FLOAT"] = "String(x, dec)";
Blockly.Msg["TEXT_FROM_FLOAT_DECIMAL"] = "decimals";

//--- Variables ---//
Blockly.Msg["CAT_VARIABLES"] = "変数";//"Variables";
Blockly.Msg["CAT_VAR_NUM"] = "数値";//"Numeric";
Blockly.Msg["CAT_VAR_TEXT"] = "文字";//"Text";
Blockly.Msg["CAT_VAR_BOOLEAN"] = "真偽値";//"Boolean";
Blockly.Msg["CAT_VAR_DEFINE"] = "宣言";//"Define";
Blockly.Msg["VAR_CREATE_INT"] = "integer";
Blockly.Msg["VAR_CREATE_LONG"] = "long";
Blockly.Msg["VAR_CREATE_FLOAT"] = "float";
Blockly.Msg["VAR_CREATE_BOOLEAN"] = "boolean";
Blockly.Msg["VAR_CREATE_STRING"] = "String";
Blockly.Msg["VAR_CREATE_CHAR"] = "char";
Blockly.Msg["VAR_TYPES"] = [["int", "int"],["long", "long"],["float", "float"],["bool", "bool"],["String", "String"],["char", "char"]];
Blockly.Msg["VAR_CREATE_DEFINE"] = "宣言";//"Define";
Blockly.Msg["VARIABLES_DEFAULT_NAME"] = "項目";//"item";
Blockly.Msg["VARIABLES_GET_CREATE_SET"] = "'セット%1を作成します。";//"Create 'set %1'";
Blockly.Msg["VARIABLES_GET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#get";
Blockly.Msg["VARIABLES_GET_TOOLTIP"] = "この変数の値を返します。";//"Returns the value of this variable.";
Blockly.Msg["VARIABLES_INIT"] = "初期化";//"Initialize";
Blockly.Msg["VARIABLES_INIT_TOOLTIP"] = "変数に初期値をセットします。";//"Set an initial value for the variable.";
Blockly.Msg["VARIABLES_CONST_SET"] = "定数をセット";//"Set the costant";
Blockly.Msg["VARIABLES_SET"] = "変数をセット";//"Set";
Blockly.Msg["VARIABLES_SET_TOOLTIP"] = "この入力を変数と等しくなるように設定します。";//"Set a value for the variable.";
Blockly.Msg["VAR_CREATE_DEFINE_TOOLTIP"] = "Substitutes the value assigned to a name";
Blockly.Msg["VARIABLES_SET_CREATE_GET"] = "'%1 を取得' を作成します。";//"Create 'get %1'";
Blockly.Msg["VARIABLES_SET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#set";  // untranslated
Blockly.Msg["VARIABLE_ALREADY_EXISTS"] = "変数名 '%1' は既に存在しています。";//"A variable named '%1' already exists.";
Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE"] = "'%2' 型の '%1' という名前の変数が既に存在します。";//"A variable named '%1' already exists for another type.";
Blockly.Msg["REMOVE_COMMENT"] = "コメントを削除";//"Remove Comment";
Blockly.Msg["RENAME_VARIABLE"] = "変数の名前を変える…";//"Rename variable...";
Blockly.Msg["RENAME_VARIABLE_TITLE"] = "選択した%1個すべての変数の名前を変える：";//"Rename all '%1' variables to:";
Blockly.Msg["CANNOT_DELETE_VARIABLE_PROCEDURE"] = "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
Blockly.Msg["DELETE_VARIABLE"] = "変数 '%1' を削除";//"Delete the '%1' variable";
Blockly.Msg["DELETE_VARIABLE_CONFIRMATION"] = "%1か所で使われている変数 '%2' を削除しますか？";//"Delete %1 uses of the '%2' variable?";
Blockly.Msg["NEW_COLOUR_VARIABLE"] = "色の変数を作る...";//"Create colour variable...";
Blockly.Msg["NEW_NUMBER_VARIABLE"] = "数の変数を作る...";//"Create number variable...";
Blockly.Msg["NEW_STRING_VARIABLE"] = "文字列の変数を作る...";//"Create string variable...";
Blockly.Msg["NEW_VARIABLE"] = "変数の作成…";//"Create variable...";
Blockly.Msg["NEW_VARIABLE_TITLE"] = "新しい変数の名前:";//"New variable name:";
Blockly.Msg["NEW_VARIABLE_TYPE_TITLE"] = "新しい変数の型:";//"New variable type:";
Blockly.Msg["ORDINAL_NUMBER_SUFFIX"] = "";

//--- Colours HUE ---//
Blockly.Msg["MATH_HUE"] = "230";
Blockly.Msg["LOOPS_HUE"] = "120";
Blockly.Msg["LISTS_HUE"] = "260";
Blockly.Msg["LOGIC_HUE"] = "210";
Blockly.Msg["VARIABLES_HUE"] = "330";
Blockly.Msg["TEXTS_HUE"] = "160";
Blockly.Msg["PROCEDURES_HUE"] = "290";
Blockly.Msg["COLOUR_HUE"] = "20";
Blockly.Msg["VARIABLES_DYNAMIC_HUE"] = "310";
