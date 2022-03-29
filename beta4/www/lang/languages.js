/**
 * @package: UnoBlockly
 * @file index-code.js
 * @version 0.1 (13-07-2021)
 * @description Manages language files
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

var Languages = {};

Languages.LANGUAGE_NAME = {
  'it': 'Italiano',
  //'es': 'Español',
  //'pt': 'Português',
  //'fr': 'Français',
  //'de': 'Deutsch',
  //'cz': 'Čeština',
  //'pl': 'Polski',
  //'hu': 'Magyar',
  //'tr': 'Türk',
  //'ru': 'Pусский',
  //'heb': 'עִברִית',
  //'cn': '中文',
  'en': 'English',
  'jp': '日本語'
};

Languages.LANGUAGE_RTL = ['ar', 'fa', 'he'];

Languages.getLang = function() {
  let lang = window.localStorage.lang;
  if (lang === undefined) {
    lang = 'en'; // Default language
	  window.localStorage.lang = lang;
  }
  return lang
};

Languages.isRtl = function() {
  return Languages.LANGUAGE_RTL.indexOf(Languages.LANG) != -1;
};

Languages.LANG = Languages.getLang();

Languages.init = function() {
  let rtl = Languages.isRtl();
  $("html").attr('dir', rtl ? 'rtl' : 'ltr');
  $("html").attr('lang', Languages.LANG);
  let languages = [];
  for (let lang in Languages.LANGUAGE_NAME) {
    languages.push([Languages.LANGUAGE_NAME[lang], lang]);
  }
  let comp = function(a, b) {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  };

  languages.sort(comp);

  var languageMenu = $('#languageMenu');

  languageMenu.empty();
  for (var i = 0; i < languages.length; i++) {
    var tuple = languages[i];
    var lang = tuple[tuple.length - 1];
    var option = new Option(tuple[0], lang);
    if (lang == Languages.LANG) option.selected = true;
    languageMenu.append(option);
  }

  $('#aboutBody').text(INDEX_MSG['aboutBody']);
  $('#updateBody').text(INDEX_MSG['updateBody']);
  $('#updateModalLabel').text(INDEX_MSG['updateModalLabel']);
  $('#span_update').text(INDEX_MSG['span_update']);
  $('#btn_update_download').text(INDEX_MSG['btn_update_download_msg']);
  $('#btn_update_close_msg').text(INDEX_MSG['btn_close']);
  $('#aboutModalLabel').text(INDEX_MSG['aboutModalLabel']);
  $('#configModalLabel').text(INDEX_MSG['configModalLabel']);
  $('#span_select_all').text(INDEX_MSG['span_select_all']);
  $('#span_languageMenu').text(INDEX_MSG['span_languageMenu']);
  $('#btn_valid_config').text(INDEX_MSG['btn_ok']);
  $('#btn_close_msg').text(INDEX_MSG['btn_close']);
  $('#btn_ok').text(INDEX_MSG['btn_ok']); // promptModal.html

  // Tooltips
  $('#btn_preview').attr('title', INDEX_MSG['btn_preview_ino']);
  $('#btn_about').attr('title', INDEX_MSG['btn_about']);
  $('#btn_saveino').attr('title', INDEX_MSG['btn_save_ino']);
  $('#btn_copy').attr('title', INDEX_MSG['btn_copy']);
  $('#btn_undo').attr('title', INDEX_MSG['btn_undo']);
  $('#btn_redo').attr('title', INDEX_MSG['btn_redo']);
  $('#btn_new').attr('title', INDEX_MSG['btn_new']);
  $('#btn_saveXML').attr('title', INDEX_MSG['btn_saveXML']);
  $('#btn_load').attr('title', INDEX_MSG['btn_load']);
  $('#btn_code').attr('title', INDEX_MSG['btn_code']);
  $('#btn_block').attr('title', INDEX_MSG['btn_block']);
  $('#btn_verify').attr('title', INDEX_MSG['btn_verify']);
  $('#btn_upload').attr('title', INDEX_MSG['btn_upload']);
  $('#btn_term').attr('title', INDEX_MSG['btn_term']);
  $('#btn_config').attr('title', INDEX_MSG['btn_config']);

  // Term buttons
  $('#btn_term_send').attr('title', INDEX_MSG['btn_term_send']);
  $('#btn_term_open').attr('title', INDEX_MSG['btn_term_open']);
  $('#btn_term_save').attr('title', INDEX_MSG['btn_term_save']);
  $('#btn_term_clear').attr('title', INDEX_MSG['btn_term_clear']);

  $("xml").find("category").each(function() {
	  if (!$(this).attr('id')) {
	    $(this).attr('id', $(this).attr('name'));
	    $(this).attr('name', Blockly.Msg[$(this).attr('name')]);
	  }
  });
};

Languages.getMessages = function(arduino) {
  document.write('<script src="lang/' + Languages.LANG + '/index-msg_' + Languages.LANG + '.js"></script>\n');
  if (arduino) {
    document.write('<script src="lang/' + Languages.LANG + '/blocks_' + Languages.LANG + '.js"></script>\n');
    document.write('<script src="lang/' + Languages.LANG + '/arduino_' + Languages.LANG + '.js"></script>\n');
    document.write('<script src="lang/' + Languages.LANG + '/devices-msg_' + Languages.LANG + '.js"></script>\n');
    document.write('<script src="lang/' + Languages.LANG + '/otto-msg_' + Languages.LANG + '.js"></script>\n');
    document.write('<script src="lang/' + Languages.LANG + '/grove_beginner-msg_' + Languages.LANG + '.js"></script>\n');
    document.write('<script src="lang/' + Languages.LANG + '/mBot-msg_' + Languages.LANG + '.js"></script>\n');
  }
};

