# loadFromTemplate
jQuery plugin that loads content from Handlebars (http://handlebarsjs.com/) template

## Options
* path: Templates folder (by default: 'templates/'). Editable globally
* extension: Template extension (by default: 'html'). Editable globally.
* name: Template file name (by default: 'template').
* data: JSON data location (by default: 'data.json').

## Use

### Default template path and extension
```javascript
$jQueryElement.loadFromTemplate({
	name : "templateName",
	data : "dataCollection.json"
});
```
### Custom template path and extension
```javascript
$.fn.loadFromTemplate.dafaults.path = "tmp/";
$.fn.loadFromTemplate.dafaults.extension = ".tmp";
$jQueryElement.loadFromTemplate({
	name : "templateName",
	data : "dataCollection.json"
});
```

## About
Plugin by @ CKGRafico
Website: http://www.ckgrafico.com
