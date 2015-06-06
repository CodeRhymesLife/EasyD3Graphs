/**
 * If we're loading outside of SemGen create a mock sender and receiver
 */
$(window).load(function() {
	// sendNSCommand is defined when the stage is loaded in SemGen
	if(typeof sendNSCommand != 'undefined')
		return;
	
	var modelNum = 0;
	var mockSender = {
			addModel: function() {
				mockReceiver.addModel("Dae's Model");
			},
			
			taskClicked: function (modelName, task) {
				if(task == "dependencies") {
					var data = [
					    {
					    	id: modelName + "A",
					    	parentModelId: modelName,
					    	name: "A",
					    	inputs: [ {sourceId: modelName + "B", parentModelId: modelName} ],
					    	nodeType: "state",
					    },
					    {
					    	id: modelName + "B",
					    	parentModelId: modelName,
					    	name: "B",
					    	nodeType: "Rate",
					    },
					    {
					    	id: modelName + "C",
					    	parentModelId: modelName,
					    	name: "C",
					    	inputs: [ {sourceId: modelName + "A", parentModelId: modelName} ],
					    	nodeType: "constitutive",
					    },
					    {
					    	id: modelName + "D",
					    	parentModelId: modelName,
					    	name: "D",
					    	inputs: [ 
					    	          {sourceId: modelName + "A", parentModelId: modelName},
					    	          {sourceId: modelName + "B", parentModelId: modelName},
					    	          {sourceId: modelName + "C", parentModelId: modelName} ],
					    	nodeType: "State",
					    },
					];
					mockReceiver.showDependencyNetwork(modelName, data);
				}
				else if (task == "submodels") {
					var data = [
						{
							id: modelName + "Pathways",
							parentModelId: modelName,
							name: "Pathways",
							dependencies: [
							    {
							    	id: modelName + "Pathways" + "A",
							    	parentModelId: modelName + "Pathways",
							    	name: "A",
							    	inputs: [
							    	         {
							    	        	 sourceId: modelName + "Pathways" + "B",
							    	        	 parentModelId: modelName + "Pathways"
							    	         },
							    	],
							    	nodeType: "pathway",
							    },
							    {
							    	id: modelName + "Pathways" + "B",
							    	parentModelId: modelName + "Pathways",
							    	name: "B",
									inputs: [
							    	         {
							    	        	 sourceId: modelName + "Pathways" + "C",
							    	        	 parentModelId: modelName + "Pathways"
							    	         },
							    	         {
							    	        	 sourceId: modelName + "Pathways" + "D",
							    	        	 parentModelId: modelName + "Pathways"
							    	         },
							    	],
							    	nodeType: "pathway",
							    },
							    {
							    	id: modelName + "Pathways" + "C",
							    	parentModelId: modelName + "Pathways",
							    	name: "C",
							    	nodeType: "pathway",
							    },
							    {
							    	id: modelName + "Pathways" + "D",
							    	parentModelId: modelName + "Pathways",
							    	name: "D",
							    	nodeType: "pathway",
							    },
							],
						},
						{
							id: modelName + "Publications",
							parentModelId: modelName,
							name: "Publications",
							dependencies: [
										    {
										    	id: modelName + "Publications" + "P1",
										    	parentModelId: modelName + "Publications",
										    	name: "P1",
										    	inputs: [
										    	         {
										    	        	 sourceId: modelName + "Pathways" + "C",
										    	        	 parentModelId: modelName + "Pathways"
										    	         },
										    	],
										    	nodeType: "publications",
										    },
										    {
										    	id: modelName + "Publications" + "P2",
										    	parentModelId: modelName + "Publications",
										    	name: "P2",
										    	inputs: [
										    	         {
										    	        	 sourceId: modelName + "Pathways" + "A",
										    	        	 parentModelId: modelName + "Pathways"
										    	         },
										    	],
										    	nodeType: "publications",
										    },
											{
										    	id: modelName + "Publications" + "P3",
										    	parentModelId: modelName + "Publications",
										    	name: "P3",
										    	inputs: [
										    	         {
										    	        	 sourceId: modelName + "Pathways" + "C",
										    	        	 parentModelId: modelName + "Pathways"
										    	         },
										    	],
										    	nodeType: "publications",
										    },
										],
						},
						{
							id: modelName + "Experiments",
							parentModelId: modelName,
							name: "Experiments",
							dependencies: [
										    {
										    	id: modelName + "Experiments" + "E1",
										    	parentModelId: modelName + "Experiments",
										    	name: "E1",
										    	inputs: [
										    	         {
										    	        	 sourceId: modelName + "Publications" + "P1",
										    	        	 parentModelId: modelName + "Publications"
										    	         },
										    	],
										    	nodeType: "experiments",
										    },
										    {
										    	id: modelName + "Experiments" + "E2",
										    	parentModelId: modelName + "Experiments",
										    	name: "E2",
										    	inputs: [
										    	         {
										    	        	 sourceId: modelName + "Publications" + "P2",
										    	        	 parentModelId: modelName + "Publications"
										    	         },
										    	],
										    	nodeType: "experiments",
										    },
											{
										    	id: modelName + "Experiments" + "E3",
										    	parentModelId: modelName + "Experiments",
										    	name: "E3",
										    	inputs: [
										    	         {
										    	        	 sourceId: modelName + "Publications" + "P3",
										    	        	 parentModelId: modelName + "Publications"
										    	         },
										    	],
										    	nodeType: "experiments",
										    },
										],
						},
					];
					
					mockReceiver.showSubmodelNetwork(modelName, data);
				}
				else if(task == "physiomap") {
					var data = [
					    {
					    	id: modelName + "Entity 1",
					    	parentModelId: modelName,
					    	name: "Entity 1",
					    	inputs: [
					    	         {
					    	        	 sourceId: modelName + "Entity 2",
					    	        	 parentModelId: modelName,
					    	        	 label: "Process A",
					    	         },
					    	],
					    },
					    {
					    	id: modelName + "Entity 2",
					    	parentModelId: modelName,
					    	name: "Entity 2",
					    	inputs: [
					    	         {
					    	        	 sourceId: modelName + "Entity 3",
					    	        	 parentModelId: modelName,
					    	        	 label: "Process B",
					    	         },
					    	],
					    },
					    {
					    	id: modelName + "Entity 3",
					    	parentModelId: modelName,
					    	name: "Entity 3",
					    	inputs: [
									{
										 sourceId: modelName + "Entity 1",
										 parentModelId: modelName,
										 label: "Process C",
									},
					    	         {
					    	        	 sourceId: modelName + "Entity 2",
					    	        	 parentModelId: modelName,
					    	        	 label: "Process C",
					    	         },
					    	],
					    },
					];
					mockReceiver.showPhysioMapNetwork(modelName, data);
				}
				else if(task == "close") {
					mockReceiver.removeModel(modelName);
				}
				else if(task == "annotate" ||
						task == "extract" ||
						task == "merge") {
					alert("Task: '" + task + "' executed");
				}
			},
			
			addModelByName: function(modelName) {
				mockReceiver.addModel(modelName);
			},
			
			search: function (searchStr) {
				searchResults = [
				     searchStr + "Search Result 1",
				     searchStr + "Search Result 2",
				     searchStr + "Search Result 3",
				];
				
				
				mockReceiver.search(searchResults);
			},
			
			merge: function (modelName1, modelName2) {
				alert("Merge: '" + modelName1 + "' and '" + modelName2 + "'");
			},
			
			log: function () {}
	};
	
	var mockReceiver = {
			onAddModel: function (handler) { this.addModel = handler; },
			
			onShowDependencyNetwork: function (handler) { this.showDependencyNetwork = handler; },
			
			onShowSubmodelNetwork: function (handler) { this.showSubmodelNetwork = handler; },
			
			onShowPhysioMapNetwork: function (handler) { this.showPhysioMapNetwork = handler; },
			
			onSearch: function (handler) { this.search = handler; },
			
			onRemoveModel: function (handler) { this.removeModel = handler; },
	};
	
	var event; // The custom event that will be created

	if (document.createEvent) {
		event = document.createEvent("HTMLEvents");
		event.initEvent("cwb-initialized", true, true);
	}
	else {
		event = document.createEventObject();
		event.eventType = "cwb-initialized";
	}

	event.eventName = "cwb-initialized";
	event.commandReceiver = mockReceiver;
	event.commandSender = mockSender;

	if (document.createEvent) {
		window.dispatchEvent(event);
	}
	else {
		window.fireEvent("on" + event.eventType, event);
	}
});