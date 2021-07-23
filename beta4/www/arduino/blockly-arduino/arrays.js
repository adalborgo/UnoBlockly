/**
 * @package: UnoBlockly
 * @file arrays.js
 * @version 0.1 (21-07-2021)
 * @description Arrays of Blockly.Blocks & Blockly.Arduino
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 * @see https://developers.google.com/blockly/reference/js/Blockly.FieldVariable
 */

'use strict';

//--- array_create ---//
Blockly.Blocks["array_create"] = {
    init: function() {
		this.appendDummyInput().appendField(Blockly.Msg.ARRAY_CREATE)
            .appendField(new Blockly.FieldVariable(), 'VAR')
			.appendField(Blockly.Msg.VARIABLES_TYPE)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.VAR_TYPES), 'TYPE');

		this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.ARRAY_DIM)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.ARRAY_DIMS,
				function(option) {this.sourceBlock_.updateShape_(option)} ),"DIM");

		this.appendDummyInput("D0")
			.appendField(Blockly.Msg.ARRAY_DIM_ELEMENTS)
			.appendField(new Blockly.FieldNumber(2, 1, 100), "D0")

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("array_blocks");
        this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP2);
        this.setHelpUrl(Blockly.Msg.HELPURL)
    },
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) this.setFieldValue(newName, "VAR")
    },
    mutationToDom: function() {
        let container = document.createElement("mutation");
        container.setAttribute("DIM", this.getFieldValue("DIM"));
        return container
    },
    domToMutation: function(xmlElement) {
        this.updateShape_(xmlElement.getAttribute("DIM"))
    },
	updateShape_: function(option) {
		for (let i = 1; i <= Blockly.Msg.ARRAY_DIM.length; i++) {
			if (this.getInput("D"+i)) this.removeInput("D"+i) 
		}
		
		for (let i = 1; i<option; i++) {
			this.appendDummyInput("D" + i).appendField(new Blockly.FieldNumber(2, 1, 100), "D" + i);
		}
    }
};

Blockly.Arduino['array_create']=function(block){
	let varName = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	/*for (let name in Blockly.Arduino.nameDB_) {
		console.log("len =", Blockly.Arduino.nameDB_[name].length)
        console.log("name:", Blockly.Arduino.nameDB_[name])
	}*/
	let typeBlock = block.getFieldValue('TYPE');
	let dimension = block.getFieldValue("DIM");
	let k = '';
	for (let i = 0; i < dimension; i++) {
		k += "[" + block.getFieldValue("D" + i) + "]"
	}
	Blockly.Arduino.variables_[varName] = typeBlock + ' ' + varName + k + ';';
	return '';
};

//--- vector_create_with ---//
Blockly.Blocks["vector_create_with"] = {
     init: function() {
		 
		this.appendDummyInput()
			.appendField(Blockly.Msg.ARRAY_CREATE_VECTOR)
			.appendField(new Blockly.FieldVariable(), 'VAR')
			.appendField(Blockly.Msg.VARIABLES_TYPE)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.VAR_TYPES), 'TYPE');

		this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.ARRAY_WITH_ITEMS)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.ARRAY_DROPDOWN_ITEMS,
				function(option) {this.sourceBlock_.updateShape_(option)} ),"ITEMS")
			.appendField(Blockly.Msg.ARRAY_DIM_ITEMS)
			
		this.appendDummyInput("D0")
				.appendField(new Blockly.FieldTextInput(""), "D0")
				
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("array_blocks");
        this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP4);
        this.setHelpUrl(Blockly.Msg.HELPURL)
    },
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) this.setFieldValue(newName, "VAR")
    },
    mutationToDom: function() {
        let container = document.createElement("mutation");
        container.setAttribute("ITEMS", this.getFieldValue("ITEMS"));
        return container
    },
    domToMutation: function(xmlElement) {
        this.updateShape_(xmlElement.getAttribute("ITEMS"))
    },
    updateShape_: function(option) {
		for (let i = 1; i <= Blockly.Msg.ARRAY_DROPDOWN_ITEMS.length; i++) {
			if (this.getInput("D"+i)) this.removeInput("D"+i) 
		}
		
		for (let i = 1; i<option; i++) {
			this.appendDummyInput("D" + i).appendField(new Blockly.FieldTextInput(""), "D" + i);
		}
    }
};

Blockly.Arduino["vector_create_with"] = function (block) {
	let varName = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	let typeBlock = block.getFieldValue('TYPE');
	let isString = typeBlock== 'String'; // Check String
	let items = block.getFieldValue("ITEMS");
	let k = typeBlock + ' ' + varName + '[] = {';
	for (let i = 0; i < items; i++) {
		let data = block.getFieldValue("D" + i);
		k += (isString) ? '"' + data + '"' : data; 
		if (i < items-1) k +=','; else k +='}';
	}

	Blockly.Arduino.variables_[varName] = k + ';';
	return '';
};

//--- vector_create_with_string ---//
Blockly.Blocks["vector_create_with_string"] = {
     init: function() {
		 
		this.appendDummyInput()
			.appendField(Blockly.Msg.ARRAY_CREATE_VECTOR)
			.appendField(new Blockly.FieldVariable(), 'VAR')
			.appendField(Blockly.Msg.VARIABLES_TYPE)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.VAR_TYPES), 'TYPE');

		this.appendDummyInput()
			.appendField(Blockly.Msg.ARRAY_CREATE_SEPARATOR)
			.appendField(new Blockly.FieldTextInput(";"), "SEP")
		 
        this.appendDummyInput()
			.appendField(" " + Blockly.Msg.mBotLEDMatrixData)
			.appendField(new Blockly.FieldTextInput("        "), "DATA");
	 
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("array_blocks");
        this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP4);
        this.setHelpUrl(Blockly.Msg.HELPURL)
    },
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) this.setFieldValue(newName, "VAR")
    }
};

Blockly.Arduino["vector_create_with_string"] = function (block) {
	let varName = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	let typeBlock = block.getFieldValue('TYPE');
	let isString = typeBlock== 'String'; // Check String
	let sep = block.getFieldValue("SEP");
    let data = block.getFieldValue("DATA").trim();

	let vector = data.replaceAll('\"', '').split(sep); // Remove double quote and split
	let items = vector.length;
	let k = typeBlock + ' ' + varName + '[] = {';
	for (let i = 0; i < items; i++) {
		k += (isString) ? '"' + vector[i] + '"' : vector[i]; 
		if (i < items-1) k +=','; else k +='}';
	}
	
	Blockly.Arduino.variables_[varName] = k + ';';

	return '';
};

//--- array_create_with ---//
Blockly.Blocks["array_create_with"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setStyle("array_blocks");
		this.setInputsInline(true);
        this.itemCount_ = 2;
        this.updateShape_();
        this.setOutput(true, "Array");
        this.setMutator(new Blockly.Mutator("array_create_with_item"));
        this.setTooltip(Blockly.Msg.ARRAY_CREATE_WITH_TOOLTIP)
    },
    mutationToDom: function() {
        let container = document.createElement("mutation");
        container.setAttribute("items", this.itemCount_);
        return container
    },
    domToMutation: function(xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute("items"), 10);
        this.updateShape_()
    },
    decompose: function(workspace) {
        let containerBlock = workspace.newBlock("array_create_with_container");
        containerBlock.initSvg();
        let connection = containerBlock.getInput("STACK").connection;
        for (let i = 0; i < this.itemCount_; i++) {
            let itemBlock = workspace.newBlock( "array_create_with_item");
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection
        }
        return containerBlock
    },
    compose: function(containerBlock) {
        let itemBlock = containerBlock.getInputTargetBlock("STACK");
        let connections = [];
        let i = 0;
        while (itemBlock) {
            connections[i] = itemBlock.valueConnection_;
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
            i++
        }
        this.itemCount_ = i;
        this.updateShape_();
        for (let i = 0; i < this.itemCount_; i++)
            if (connections[i]) this.getInput("ADD" + i).connection.connect(connections[i])
    },
    saveConnections: function(containerBlock) {
        let itemBlock = containerBlock.getInputTargetBlock("STACK");
        let i = 0;
        while (itemBlock) {
            let input = this.getInput("ADD" + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
        }
    },
    updateShape_: function() {
        if (this.getInput("EMPTY")) this.removeInput("EMPTY");
        else {
            let i = 0;
            while (this.getInput("ADD" + i)) {
                this.removeInput("ADD" + i);
                i++
            }
        }
        if (this.itemCount_ == 0) this.appendDummyInput("EMPTY").appendField(Blockly.Msg.ARRAY_CREATE_EMPTY_TITLE);
        else
            for (let i = 0; i < this.itemCount_; i++) {
                let input = this.appendValueInput("ADD" + i);
                if (i == 0) input.appendField(Blockly.Msg.ARRAY_CREATE_WITH_INPUT_WITH)
            }
    }
};

Blockly.Blocks.array_create_with_item = {
    init: function() {
        this.setStyle("array_blocks");
        this.appendDummyInput()
			.appendField(Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks.array_create_with_container = {
    init: function() {
        this.setStyle("array_blocks");
        this.appendDummyInput()
			.appendField(Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Arduino["array_create_with"] = function (block) {
		for (let b = Array(block.itemCount_), c = 0; c < block.itemCount_; c++) b[c] = Blockly.Arduino.valueToCode(block, "ADD" + c, Blockly.Arduino.ORDER_NONE) || "null";
		return ["{" + b.join(", ") + "}", Blockly.Arduino.ORDER_ATOMIC]
};

// array_setIndex //
Blockly.Blocks["array_setIndex"] = {
    init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.ARRAY_SET_INDEX)
			.appendField(new Blockly.FieldVariable(), 'VAR')
			.appendField(Blockly.Msg.ARRAY_DIM)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.ARRAY_DIMS, function(option){
                this.sourceBlock_.updateShape_(option)
            }),"DIM");

		this.appendValueInput("VALUE")
			.appendField(Blockly.Msg.AT);

        this.appendValueInput("D0")
				.setCheck("Number")
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(Blockly.Msg.ARRAY_INDEX);

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("array_blocks");
        this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP3);
        this.setHelpUrl(Blockly.Msg.HELPURL)
    },
    mutationToDom: function() {
        let container = document.createElement("mutation");
        container.setAttribute("DIM", this.getFieldValue("DIM"));
        return container
    },
    domToMutation: function(xmlElement) {
        this.updateShape_(xmlElement.getAttribute("DIM"))
    },
	updateShape_: function(option) {
		for (let i = 1; i <= Blockly.Msg.ARRAY_DIMS.length; i++) {
			if (this.getInput("D"+i)) this.removeInput("D"+i) 
		}
		
		for (let i = 1; i<option; i++) {
			this.appendValueInput("D" + i).setCheck("Number");
		}
    }
};

Blockly.Arduino['array_setIndex']=function(block){
    let value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);
	let code = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	let dimension = block.getFieldValue("DIM");
	for (let i = 0; i < dimension; i++) {
		let j = Blockly.Arduino.valueToCode(block, "D" + i, Blockly.Arduino.ORDER_ASSIGNMENT);
		code += "[" + j + "]"
	}
	code += '=' + value +';\n';
    return code;
};

//--- array_getIndex ---//
Blockly.Blocks["array_getIndex"] = {
    init: function() {
        this.appendDummyInput()
			.appendField(Blockly.Msg.ARRAY_GETINDEX_ITEM)
			.appendField(new Blockly.FieldVariable(), 'VAR')
			.appendField(Blockly.Msg.ARRAY_DIM)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.ARRAY_DIMS,function(option) {
                this.sourceBlock_.updateShape_(option)
            } ),"DIM");
        this.appendValueInput("D0")
			.appendField(Blockly.Msg.ARRAY_index)
			.setCheck("Number")
			.setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true);
        this.setInputsInline(true);
        this.setStyle("array_blocks");
        this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP1);
        this.setHelpUrl(Blockly.Msg.HELPURL)
    },
    mutationToDom: function() {
        let container = document.createElement("mutation");
        container.setAttribute("DIM", this.getFieldValue("DIM"));
        return container;
    },
    domToMutation: function(xmlElement) {
        this.updateShape_(xmlElement.getAttribute("DIM"));
    },
	updateShape_: function(option) {
		for (let i = 1; i <= Blockly.Msg.ARRAY_DIMS.length; i++) {
			if (this.getInput("D"+i)) this.removeInput("D" + i);
		}
		
		for (let i = 1; i<option; i++) {
			this.appendValueInput("D" + i).setCheck("Number");
		}
    }
	
};

Blockly.Arduino["array_getIndex"]=function(block){
    let code = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	let dimension = block.getFieldValue("DIM");
	for (let i = 0; i < dimension; i++) {
		let j = Blockly.Arduino.valueToCode(block, "D" + i, Blockly.Arduino.ORDER_ASSIGNMENT);
		code += "[" + j + "]"
	}
	return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};

//--- array_getsize ---//
Blockly.Blocks["array_getSize"] = {
    init: function() {
        this.appendDummyInput()
			.appendField(Blockly.Msg.SIZE)
			.appendField(new Blockly.FieldVariable(), 'VAR');
        this.setOutput(true);
        this.setInputsInline(true);
        this.setStyle("array_blocks");
        this.setTooltip(Blockly.Msg.SIZE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};

Blockly.Arduino["array_getSize"]=function(block){ // array size
    var list = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = 'sizeof('+list+')/sizeof('+list+'[0])';
	return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};

//--- getArray ---//
Blockly.Blocks["getArray"] = {
    init: function() {
        this.appendDummyInput()
			.appendField("Matrice/Vettore") //Blockly.Msg.ARRAY_GETINDEX_ITEM)
			.appendField(new Blockly.FieldVariable(), 'VAR')
        this.setOutput(true);
        this.setInputsInline(true);
        this.setStyle("array_blocks");
        this.setTooltip("") //Blockly.Msg.ARRAY_GETINDEX_TOOLTIP1);
        this.setHelpUrl(Blockly.Msg.HELPURL);
    }
};

Blockly.Arduino["getArray"]=function(block){
    let code = Blockly.Arduino.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
