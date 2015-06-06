/**
 * Represents a dependency node in the d3 graph
 */

DependencyNode.prototype = new Node();
DependencyNode.prototype.constructor = DependencyNode;
function DependencyNode (graph, data, parentNode) {
	// Ensure the node type is formatted properly
	data.nodeType = data.nodeType.toLowerCase().capitalizeFirstLetter();
	
	// Get the correct group from the node type
	this.group = typeToGroup[data.nodeType];
	if(this.group == "undefined")
		throw "invalid dependency node type: " + data.nodeType;
	
	Node.prototype.constructor.call(this, graph, data.id, data.name, parentNode, data.inputs, 5, typeToColor[data.nodeType], 14, data.nodeType, -300);
	
	this.addClassName("dependencyNode");
	this.addBehavior(Columns);
	this.addBehavior(HiddenLabelNodeGenerator);
}

// Maps node type to group number
var typeToGroup = {
		"Pathway": 0,
		"Publications": 1,
		"Experiments": 2,
};

// Maps node type to node color
var typeToColor = {
		"Pathway": "#1F77B4",
		"Publications": "#2CA02C",
		"Experiments": "#FF7F0E"
};