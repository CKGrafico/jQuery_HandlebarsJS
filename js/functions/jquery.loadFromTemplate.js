/**
 * [loadFromTemplate jQuery plugin that loads content from Handlebars template]
 * @param {Object}   params   [All options of the plugin]
 * params.path = My templates folder
 * params.extension = My template extension
 * params.template = My template file name or string with the HTML
 * params.data = JSON data location (array)
 */
(function($){
	// Objeto de templates
	var handlebars_templates = {};

	$.fn.loadFromTemplate = function(params){

		var end = false;

		// Extend default options with custom options
		options = $.extend({}, $.fn.loadFromTemplate.dafaults, params);

		// Private methods of the plugin
		var methods = {
			// Get json data
			getData : function(){
				if(typeof options.data == "object"){
					methods.renderData.call(this, options.data);
				}else{
					var _this = this;
					$.getJSON(options.data, function(data) {
						methods.renderData.call(_this, data);
					});
				}
			},
			// get final HTML and append to the element
			renderData: function(data){
				var html = handlebars_templates[options.template](data);
				this.append(html).each(options.callbackPerEach);
				methods.doCallback.call(this);
			},
			// Compile Handlebars Template
			compileTemplate : function(){
				var $template = $(options.template);
				if($template.length){
					handlebars_templates[options.template] = Handlebars.compile(options.template);
					methods.getData.call(this);
				}else{
					var _this = this;
					$.get(options.path+options.template+options.extension,function(results){
						handlebars_templates[options.template] = Handlebars.compile(results);
						methods.getData.call(_this);
					});
				}
			},
			doCallback : function(){
				// Do the calback if necessary
				if(!end){
					end = true;
					if(options.callback){
						options.callback.call(this);
					}else if(typeof params == "function"){
						params.call(this);
					}
				}

			}
		};
		if (typeof handlebars_templates[options.template] == "function"){
			// If the template is preloaded data compiled
			methods.getData.call(this);
		}else{
			// If the themplate isn't compiled I compile
			methods.compileTemplate.call(this);
		}
		// returns the elements we have passed to the plugin
		// it allows you to chain multiple functions and plugins together on one jQuery element.
		return this;
	};

	$.fn.loadFromTemplate.dafaults = {
		template : "template",
		data : "data.json",
		path : "templates/",
		extension : ".html",
		callback: $.noop,
		callbackPerEach: $.noop
	};
}(jQuery));