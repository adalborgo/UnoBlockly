/**
 * @package: UnoBlockly
 * @file override-toolbox.js
 * @version 0.1 (25-05-2021)
 * @description Toolbox modification: extends Blockly.ToolboxCategory (⚙)
 * @see www/arduino/blockly-arduino/themes.js
 	https://blocklycodelabs.dev/codelabs/custom-toolbox
  	https://blocklycodelabs.dev/codelabs/custom-toolbox/index.html#0
 	https://github.com/google/blockly/blob/master/core/theme/dark.js#L17
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 * 
 */

 'use strict';

const CAT_TEXT_COLOR = '#FFF';
const CAT_SELECTED_BKG_COLOR = '#DCE0E5';

class TweakCategories extends Blockly.ToolboxCategory {
	
	// Constructor for a custom category
	constructor(categoryDef, toolbox, opt_parent) {
		super(categoryDef, toolbox, opt_parent);
	}

	// Extend category color to background category and set default values
	addColourBorder_(colour) {
		var labelDom = this.rowDiv_.getElementsByClassName('blocklyTreeLabel')[0];

		this.rowDiv_.style.backgroundColor = this.colour_; // Set default background color
		labelDom.style.color = CAT_TEXT_COLOR; // Set text color
		this.iconDom_.style.color = CAT_TEXT_COLOR; // If used
	}

	// https://blocklycodelabs.dev/codelabs/custom-toolbox/index.html?index=..%2F..index#4
	setSelected(isSelected) {
		// We do not store the label span on the category, so use getElementsByClassName.
		var labelDom = this.rowDiv_.getElementsByClassName('blocklyTreeLabel')[0];
		if (isSelected) {
			// Change the background and text color of the div
			this.rowDiv_.style.backgroundColor = CAT_SELECTED_BKG_COLOR; // Change the background color
			labelDom.style.color = this.colour_; // Set the colour of the text to the colour of the category
			this.iconDom_.style.color = this.colour_; // If used

		} else {
			// Reset original colours
			this.rowDiv_.style.backgroundColor = this.colour_; // Set background color
			labelDom.style.color = CAT_TEXT_COLOR; // Set text color
			this.iconDom_.style.color = CAT_TEXT_COLOR; // If used
		}

		// This is used for accessibility purposes.
		Blockly.utils.aria.setState((this.htmlDiv_),
			Blockly.utils.aria.State.SELECTED, isSelected);
	}

}

Blockly.registry.register(
	Blockly.registry.Type.TOOLBOX_ITEM,
	Blockly.ToolboxCategory.registrationName,
	TweakCategories, true);

function classMixin(target, src) {
	for (var key of Object.getOwnPropertyNames(src.prototype)) {
		target.prototype[key] = src.prototype[key];
	}
}

classMixin(Blockly.CollapsibleToolboxCategory, TweakCategories);
