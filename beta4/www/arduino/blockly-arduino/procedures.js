/**
 * @package: UnoBlockly
 * @file procedures.js
 * @version 0.1 (08-07-2021)
 * @description Blockly.Blocks.procedures
 * @author Antonio Dal Borgo <adalborgo@gmail.com>
 */

'use strict';

//--- procedures ---//
Blockly.Blocks.procedures = {};

//----- (1) procedures_defnoreturn
Blockly.Blocks["procedures_defnoreturn"] = {
    init: function() {
		this.setStyle("procedure_blocks");
		
        var nameField = new Blockly.FieldTextInput(Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE, Blockly.Procedures.rename);
        nameField.setSpellcheck(false);
		
        this.appendDummyInput()
			.appendField(nameField, "NAME").appendField("", "PARAMS");
		
		this.appendStatementInput("STACK");
        
		this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));

        this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HELPURL);

        this.arguments_ = [];
        this.argumentstype_ = []
    },
    updateParams_: function() {
        var badArg = false;
        var hash = {};
        for (var i = 0; i < this.arguments_.length; i++) {
            if (hash["arg_" + this.arguments_[i].toLowerCase()]) {
                badArg = true;
                break
            }
            hash["arg_" + this.arguments_[i].toLowerCase()] = true
        }
        if (badArg) {
			this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING);
		} else {
			this.setWarningText(null);
		}
        var paramString = "";
        if (this.arguments_.length) paramString = "(" + this.arguments_.join(",") + ")";
        Blockly.Events.disable();
        this.setFieldValue(paramString, "PARAMS")
        Blockly.Events.enable()
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        for (var i = 0; i < this.arguments_.length; i++) {
            var parameter = document.createElement("arg");
            parameter.setAttribute("name", this.arguments_[i]);
			parameter.setAttribute('vartype', this.argumentstype_[i]);
            container.appendChild(parameter)
        }
        return container
    },
    domToMutation: function(xmlElement) {
        this.arguments_ = [];
		this.argumentstype_ = [];
        for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++){
            if (childNode.nodeName.toLowerCase() == "arg") {
				this.arguments_.push(childNode.getAttribute("name"));
				this.argumentstype_.push(childNode.getAttribute('vartype'));
			}
		}
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this);
    },
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock("procedures_mutatorcontainer");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 0; i < this.arguments_.length; i++) {
            var paramBlock = workspace.newBlock("procedures_mutatorarg");
            paramBlock.initSvg();
            paramBlock.setFieldValue(this.arguments_[i], "NAME");
			paramBlock.setFieldValue(this.argumentstype_[i], 'TYPEVAR');
            paramBlock.oldLocation = i;
            connection.connect(paramBlock.previousConnection);
            connection = paramBlock.nextConnection
        }
        Blockly.Procedures.mutateCallers(this);
        return containerBlock
    },
    compose: function(containerBlock) {
        this.arguments_ = [];
        this.argumentstype_ = [];
        this.paramIds_ = [];
        var paramBlock = containerBlock.getInputTargetBlock("STACK");
        while (paramBlock) {
            this.arguments_.push(paramBlock.getFieldValue("NAME"));
            this.argumentstype_.push(paramBlock.getFieldValue('TYPEVAR'));
            this.paramIds_.push(paramBlock.id);
            paramBlock = paramBlock.nextConnection && paramBlock.nextConnection.targetBlock()
        }
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this)
    },
    getProcedureDef: function() {
        return [this.getFieldValue("NAME"), this.arguments_, false]
    },
    renameVar: function(oldName, newName) {
        var change = false;
        for (var i = 0; i < this.arguments_.length; i++){
            if (Blockly.Names.equals(oldName, this.arguments_[i])) {
                this.arguments_[i] = newName;
                change = true
            }
		}
        if (change) {
            this.updateParams_();
            if (this.mutator.isVisible()) {
                var blocks = this.mutator.workspace_.getAllBlocks();
                for (var i = 0, block; block = blocks[i]; i++)
                    if (block.type == "procedures_mutatorarg" && Blockly.Names.equals(oldName, block.getFieldValue("NAME"))) block.setFieldValue(newName, "NAME")
            }
        }
    },
    customContextMenu: function(options) {
        var option = {enabled:true};
        var name = this.getFieldValue("NAME");
        option.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace("%1", name);
        var xmlMutation = Blockly.utils.xml.createElement("mutation");
        xmlMutation.setAttribute("name", name);
        for (var i = 0; i < this.arguments_.length; i++) {
			var xmlArg =  Blockly.utils.xml.createElement("arg");
            xmlArg.setAttribute("name", this.arguments_[i]);
			xmlArg.setAttribute('type', this.argumentstype_[i]);
            xmlMutation.appendChild(xmlArg)
        }

		var xmlBlock = Blockly.utils.xml.createElement("block", null, xmlMutation);
        xmlBlock.setAttribute("type", this.callType_);
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);
        if (!this.isCollapsed()){
            for (var i = 0; i < this.arguments_.length; i++) {
                var option = {enabled:true};
                var name = this.arguments_[i];
                option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", name);
                var xmlField = Blockly.utils.xml.createElement("field", null, name);
                xmlField.setAttribute("name", "VAR");
				xmlField.setAttribute('type', 'TYPEVAR');
                var xmlBlock = Blockly.utils.xml.createElement("block", null, xmlField);
                xmlBlock.setAttribute("type", "variables_get");
                option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
                options.push(option)
            }
		}
    },
    callType_: "procedures_callnoreturn"
};

//  procedures_defnoreturn (1)
Blockly.Arduino['procedures_defnoreturn'] = function(block){
	var funcName = Blockly.Arduino.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
	var branch = Blockly.Arduino.statementToCode(block, 'STACK');
	if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + block.id + '\'') + branch;
    }

	var args = [];
	for (var x = 0; x < block.arguments_.length; x++) {
		args[x] =block.argumentstype_[x] + ' ' + block.arguments_[x]; // ELIMINATO: Blockly.Arduino.getArduinoType_(...)
	}

	var code = 'void ' + funcName + '(' + args.join(',') + ') {\n' + branch + '}\n';
    code = Blockly.Arduino.scrub_(block, code);
    Blockly.Arduino.codeFunctions_[funcName] = code;
    return "";
};

//----- (2) procedures_defreturn -----//
Blockly.Blocks["procedures_defreturn"] = {
	init: function() {
		this.setStyle("procedure_blocks");
		var nameField = new Blockly.FieldTextInput(Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, Blockly.Procedures.rename);
		nameField.setSpellcheck(false);
		
		this.appendDummyInput()
			.appendField(nameField, "NAME")
			.appendField("", "PARAMS");
		
		this.appendStatementInput("STACK");
		
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TYPE)
			.appendField(new Blockly.FieldDropdown([[INT, INT],[LONG, LONG],
                [FLOAT, FLOAT],[STRING, STRING],[BOOLEAN, BOOLEAN]]), "TYPEVAR");

		this.appendValueInput("RETURN")
			.appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);

		this.setInputsInline(true);
		
		var prog = window.localStorage.prog;
		this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
		this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.HELPURL);
		this.arguments_ = [];
		this.argumentstype_ = []
	},
    updateParams_: Blockly.Blocks["procedures_defnoreturn"].updateParams_,
    mutationToDom: Blockly.Blocks["procedures_defnoreturn"].mutationToDom,
    domToMutation: Blockly.Blocks["procedures_defnoreturn"].domToMutation,
    decompose: Blockly.Blocks["procedures_defnoreturn"].decompose,
    compose: Blockly.Blocks["procedures_defnoreturn"].compose,
    getProcedureDef: function() {
        return [this.getFieldValue("NAME"), this.arguments_, true]
    },
    renameVar: Blockly.Blocks["procedures_defnoreturn"].renameVar,
    customContextMenu: Blockly.Blocks["procedures_defnoreturn"].customContextMenu,
    callType_: "procedures_callreturn"
};

// procedures_defreturn (2)
Blockly.Arduino['procedures_defreturn']=function(block){
    var funcName = Blockly.Arduino.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var branch = Blockly.Arduino.statementToCode(block, 'STACK');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + block.id + '\'') + branch;
    }
    var returnValue = Blockly.Arduino.valueToCode(block, 'RETURN', Blockly.Arduino.ORDER_NONE) || '';
    if (returnValue) returnValue = '  return ' + returnValue + ';\n';
 
	var returnType = block.getFieldValue('TYPEVAR'); // MODIFICATO!!!
	
    var args = [];
	for (var x = 0; x < block.arguments_.length; x++) { // MODIFICATO!!!
		args[x] = block.argumentstype_[x] + ' ' + Blockly.Arduino.nameDB_.getName(block.arguments_[x], Blockly.Variables.NAME_TYPE);
	}
	
    var code = returnType + ' ' + funcName + '(' + args.join(',') + ') {\n' + branch + returnValue + '}\n';
    code = Blockly.Arduino.scrub_(block, code);
    Blockly.Arduino.codeFunctions_[funcName] = code;
	
    return '';
};

//----- (3)  procedures_callnoreturn -----//
Blockly.Blocks["procedures_callnoreturn"] = {
    init: function() {
		this.setStyle("procedure_blocks");
        this.appendDummyInput("TOPROW").appendField(this.id, "NAME");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
		this.setInputsInline(true);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.arguments_ = [];
        this.quarkConnections_ = {};
        this.quarkIds_ = null
    },
    getProcedureCall: function() {
        return this.getFieldValue("NAME")
    },
    renameProcedure: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getProcedureCall())) {
            this.setFieldValue(newName, "NAME");
            this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", newName))
        }
    },
    setProcedureParameters_: function(paramNames, paramIds) {
        var defBlock = Blockly.Procedures.getDefinition(this.getProcedureCall(), this.workspace);
        var mutatorOpen = defBlock && defBlock.mutator && defBlock.mutator.isVisible();
        if (!mutatorOpen) {
            this.quarkConnections_ = {};
            this.quarkIds_ = null
        }
        if (!paramIds) return;
        if (paramIds.length != paramNames.length) throw "Error: paramNames and paramIds must be the same length.";
        this.setCollapsed(false);
        if (!this.quarkIds_) {
            this.quarkConnections_ = {};
            if (paramNames.join("\n") == this.arguments_.join("\n")) this.quarkIds_ = paramIds;
            else this.quarkIds_ = []
        }
        var savedRendered = this.rendered;
        this.rendered = false;
        for (var i = 0; i < this.arguments_.length; i++) {
            var input = this.getInput("ARG" + i);
            if (input) {
                var connection = input.connection.targetConnection;
                this.quarkConnections_[this.quarkIds_[i]] = connection;
                if (mutatorOpen && connection && paramIds.indexOf(this.quarkIds_[i]) == -1) {
                    connection.disconnect();
                    connection.getSourceBlock().bumpNeighbours_()
                }
            }
        }
        this.arguments_ = [].concat(paramNames);
        this.updateShape_();
        this.quarkIds_ = paramIds;
        if (this.quarkIds_)
            for (var i = 0; i < this.arguments_.length; i++) {
                var quarkId = this.quarkIds_[i];
                if (quarkId in this.quarkConnections_) {
                    var connection = this.quarkConnections_[quarkId];
                    if (!Blockly.Mutator.reconnect(connection, this, "ARG" + i)) delete this.quarkConnections_[quarkId]
                }
            }
        this.rendered = savedRendered;
        if (this.rendered) this.render()
    },
    updateShape_: function() {
        for (var i = 0; i < this.arguments_.length; i++) {
            var field = this.getField("ARGNAME" + i);
            if (field) {
                Blockly.Events.disable();
                try {
                    field.setValue(this.arguments_[i])
                } finally {
                    Blockly.Events.enable()
                }
            } else {
                field = new Blockly.FieldLabel(this.arguments_[i]);
                var input = this.appendValueInput("ARG" + i).appendField(field, "ARGNAME" + i).appendField("=").setAlign(Blockly.ALIGN_RIGHT);
                input.init()
            }
        }
        while (this.getInput("ARG" + i)) {
            this.removeInput("ARG" + i);
            i++
        }
        var topRow = this.getInput("TOPROW");
        if (topRow)
            if (this.arguments_.length) {
                if (!this.getField("WITH")) {
                    topRow.appendField("", "WITH");
                    topRow.init()
                }
            } else if (this.getField("WITH")) topRow.removeField("WITH")
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("name", this.getProcedureCall());
        for (var i = 0; i < this.arguments_.length; i++) {
            var parameter = document.createElement("arg");
            parameter.setAttribute("name", this.arguments_[i]);
            container.appendChild(parameter)
        }
        return container
    },
    domToMutation: function(xmlElement) {
        var name = xmlElement.getAttribute("name");
        this.renameProcedure(this.getProcedureCall(), name);
        var args = [];
        var paramIds = [];
        for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++)
            if (childNode.nodeName.toLowerCase() == "arg") {
                args.push(childNode.getAttribute("name"));
                paramIds.push(childNode.getAttribute("paramId"))
            }
        this.setProcedureParameters_(args, paramIds)
    },
    renameVar: function(oldName, newName) {
        for (var i = 0; i < this.arguments_.length; i++)
            if (Blockly.Names.equals(oldName, this.arguments_[i])) {
                this.arguments_[i] = newName;
                this.getField("ARGNAME" + i).setValue(newName)
            }
    },
    onchange: function(event) {
        if (!this.workspace || this.workspace.isFlyout) return;
        if (event.type == Blockly.Events.CREATE && event.ids.indexOf(this.id) != -1) {
            var name = this.getProcedureCall();
            var def = Blockly.Procedures.getDefinition(name, this.workspace);
            if (def && (def.type != this.defType_ || JSON.stringify(def.arguments_) != JSON.stringify(this.arguments_))) def = null;
            if (!def) {
                Blockly.Events.setGroup(event.group);
                var xml = Blockly.utils.xml.createElement("xml");
                var block = Blockly.utils.xml.createElement("block");
                block.setAttribute("type", this.defType_);
                var xy = this.getRelativeToSurfaceXY();
                var x = xy.x + Blockly.SNAP_RADIUS * (this.RTL ? -1 : 1);
                var y = xy.y + Blockly.SNAP_RADIUS * 2;
                block.setAttribute("x", x);
                block.setAttribute("y", y);
                var mutation = this.mutationToDom();
                block.appendChild(mutation);
                var field = Blockly.utils.xml.createElement("field");
                field.setAttribute("name", "NAME");
                field.appendChild(document.createTextNode(this.getProcedureCall()));
                block.appendChild(field);
                xml.appendChild(block);
                Blockly.Xml.domToWorkspace(xml, this.workspace);
                Blockly.Events.setGroup(false)
            }
        } else if (event.type == Blockly.Events.DELETE) {
            var name = this.getProcedureCall();
            var def = Blockly.Procedures.getDefinition(name, this.workspace);
            if (!def) {
                Blockly.Events.setGroup(event.group);
                this.dispose(true, false);
                Blockly.Events.setGroup(false)
            }
        }
    },
    customContextMenu: function(options) {
        var option = {
            enabled: true
        };
        option.text = Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;
        var name = this.getProcedureCall();
        var workspace = this.workspace;
        option.callback = function() {
            var def = Blockly.Procedures.getDefinition(name, workspace);
            def && def.select()
        };
        options.push(option)
    },
    defType_: "procedures_defnoreturn"
};


// procedures_callnoreturn (3)
Blockly.Arduino['procedures_callnoreturn']=function(block){
    var funcName = Blockly.Arduino.nameDB_.getName(block.getFieldValue('NAME'),
        Blockly.Procedures.NAME_TYPE);
    var args = [];
    for (var x = 0; x < block.arguments_.length; x++) {
        args[x] = Blockly.Arduino.valueToCode(block, 'ARG' + x, Blockly.Arduino.ORDER_NONE) || 'null';
    }
    var code = funcName + '(' + args.join(', ') + ');\n';
    return code;
};

//----- (4) procedures_callreturn -----//
Blockly.Blocks['procedures_callreturn'] = {
    init: function() {
		this.setStyle("procedure_blocks");
		this.setInputsInline(true);
        this.appendDummyInput("TOPROW").appendField("", "NAME");
        this.setOutput(true);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.arguments_ = [];
        this.quarkConnections_ = {};
        this.quarkIds_ = null
    },
    getProcedureCall: Blockly.Blocks["procedures_callnoreturn"].getProcedureCall,
    renameProcedure: Blockly.Blocks["procedures_callnoreturn"].renameProcedure,
    setProcedureParameters_: Blockly.Blocks["procedures_callnoreturn"].setProcedureParameters_,
    updateShape_: Blockly.Blocks["procedures_callnoreturn"].updateShape_,
    mutationToDom: Blockly.Blocks["procedures_callnoreturn"].mutationToDom,
    domToMutation: Blockly.Blocks["procedures_callnoreturn"].domToMutation,
    renameVar: Blockly.Blocks["procedures_callnoreturn"].renameVar,
    onchange: Blockly.Blocks["procedures_callnoreturn"].onchange,
    customContextMenu: Blockly.Blocks["procedures_callnoreturn"].customContextMenu,
    defType_: "procedures_defreturn"
};

// procedures_callreturn (4)
Blockly.Arduino['procedures_callreturn']=function(block){
    var funcName = Blockly.Arduino.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var args = [];
    for (var x = 0; x < block.arguments_.length; x++) {
        args[x] = Blockly.Arduino.valueToCode(block, 'ARG' + x, Blockly.Arduino.ORDER_NONE) || 'null';
	}
    var code = funcName + '(' + args.join(', ') + ')';
	//return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX]; // Da' errore!!!
	return [code, Blockly.Arduino.ORDER_NONE];
};

//-----  (5) procedures_ifreturn -----//
Blockly.Blocks['procedures_ifreturn'] = {
    init: function() {
		this.setStyle("procedure_blocks");
        this.appendValueInput("VALUE")
		.appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.hasReturnValue_ = true
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("value", Number(this.hasReturnValue_));
        return container
    },
    domToMutation: function(xmlElement) {
        var value = xmlElement.getAttribute("value");
        this.hasReturnValue_ = value == 1;
        if (!this.hasReturnValue_) {
            this.removeInput("VALUE");
            this.appendDummyInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN)
        }
    },
    onchange: function(e) {
        if (this.workspace.isDragging()) return;
        var legal = false;
        var block = this;
        do {
            if (this.FUNCTION_TYPES.indexOf(block.type) != -1) {
                legal = true;
                break
            }
            block = block.getSurroundParent()
        } while (block);
        if (legal) {
            if (block.type == "procedures_defnoreturn" && this.hasReturnValue_) {
                this.removeInput("VALUE");
                this.appendDummyInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
                this.hasReturnValue_ = false
            } else if (block.type == "procedures_defreturn" && !this.hasReturnValue_) {
                this.removeInput("VALUE");
                this.appendValueInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
                this.hasReturnValue_ = true
            }
            this.setWarningText(null);
        } else {
            this.setWarningText(Blockly.Msg.PROCEDURES_IFRETURN_WARNING);
        }
    },
    FUNCTION_TYPES: ["procedures_defnoreturn", "procedures_defreturn"]
};

// procedures_ifreturn (5)
Blockly.Arduino['procedures_ifreturn']=function(block){
    if (block.hasReturnValue_) {
        var value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_NONE) || 'null';
        var code = '  return ' + value + ';\n';
    } else {
        var code = '  return;\n';
    }
    return code;
};

// procedures_mutatorarg
Blockly.Blocks['procedures_mutatorarg'] = {
    init: function() {
        var field = new Blockly.FieldTextInput("x", this.validator_);
        this.appendDummyInput()
			.appendField(Blockly.Msg["PROCEDURES_MUTATORARG_TITLE"])
			.appendField(field, "NAME")
			.appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TYPE)
			.appendField(new Blockly.FieldDropdown([[INT, INT],[LONG, LONG],
                [FLOAT, FLOAT],[STRING, STRING],[BOOLEAN, BOOLEAN]]), "TYPEVAR");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setStyle("procedure_blocks");
        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);
        this.contextMenu = false;
    },
    getBlockType: function() {
        var blocklyTypeKey = this.getFieldValue("TYPEVAR");
        return Blockly.Types[blocklyTypeKey]
    },
    validator_: function(newVar) {
        newVar = newVar.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
        return newVar || null
    },
    createNewVar_: function(newText) {
        var source = this.sourceBlock_;
        if (source && source.workspace && source.workspace.options && source.workspace.options.parentWorkspace)
			source.workspace.options.parentWorkspace.createVariable(newText)
    }
};

