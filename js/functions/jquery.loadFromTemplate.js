/**
 * [loadFromTemplate jQuery plugin that loads content from Handlebars template]
 * @param {Object}   params   [All options of the plugin]
 * params.path = My templates folder
 * params.extension = My template extension
 * params.template = My template file name
 * params.data = JSON data location (array)
 */
(function($){
	// Objeto de templates
	var handlebars_templates = {};

	$.fn.loadFromTemplate = function(params){

		// Default options
		var options = {
			template : "template",
			data : "data.json"
		};

		// Save this jquery object
		var _this = $(this);

		// Extend default options with custom options
		options = $.extend($.fn.loadFromTemplate.dafaults, options, params);

		// Private methods of the plugin
		var methods = {
			// Get json data
			getData : function(){
				$.getJSON(options.data, function(data) {
					_this.append(handlebars_templates[options.template](data));
				});
			},
			// Compile Handlebars Template
			compileTemplate : function(){
				$.get(options.path+options.template+options.extension,function(results){
					handlebars_templates[options.template] = Handlebars.compile(results);
					methods.getData();
				});
			}
		};
		// returns each of the elements we have passed to the plugin
		// it allows you to chain multiple functions and plugins together on one jQuery element.
		return this.each(function(){
			if (typeof handlebars_templates[options.template] == "function"){
				// If the template is preloaded data compiled
				methods.getData();
			}else{
				// If the themplate isn't compiled I compile
				methods.compileTemplate();
			}
		});
	};

	$.fn.loadFromTemplate.dafaults = {
		path : "templates/",
		extension : ".html"
	};
}(jQuery));