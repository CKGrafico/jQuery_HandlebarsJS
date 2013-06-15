
// Objeto de templates
var handlebars_templates = {};

/**
 * [LoadFromTemplate jQuery plugin that loads content from Handlebars template]
 * @param {Object}   params   [All options of the plugin]
 * params.path = My templates folder
 * params.extension = My template extension
 * params.name = My template file name
 * params.data = JSON data location (array)
 * params.array_name = Name for rename my JSON data (used for handlebars template see the example)
 */

$.fn.LoadFromTemplate = function(params){

	// Default options
	var options = {
		path : "templates/",
		extension : ".html",
		name : "template",
		data : "data.json",
		array_name : "client"
	};

	// Save this jquery object
	var _this = $(this);

	// Extend default options with custom options
	$.extend(options,params);

	// Private methods of the plugin
	var methods = {
		// Get json data
		getData : function(){
			$.getJSON(options.data, function(data) {
				var obj = {};
				obj[options.array_name] = data;
				_this.append(handlebars_templates[options.name](obj));
			});
		},
		// Compile Handlebars Template
		compileTemplate : function(){
			$.get(options.path+options.name+options.extension,function(results){
					handlebars_templates[options.name] = Handlebars.compile(results);
					methods.getData();
			});
		}
	};

	if (typeof handlebars_templates[options.name] == "function"){
		// If the template is preloaded data compiled
		methods.getData();
	}else{
		// If the themplate isn't compiled I compile
		methods.compileTemplate();
	}



};