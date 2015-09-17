# loadFromTemplate
jQuery plugin that loads content from Handlebars (http://handlebarsjs.com/) template

## Options
* path: Templates folder (by default: 'templates/'). Editable globally
* extension: Template extension (by default: 'hbs'). Editable globally.
* name: Template file name (by default: 'template').
* data: JSON data location (by default: 'data.json').
* async_mode: For ajax call for loading templates (by default: 'true').

## Use

### Default template path and extension
```javascript
$jQueryElement.loadFromTemplate({
  template : "templateName",
  data : "dataCollection.json"
});
```
### RENDER METHOD
#### Choose between JQueryElement.html() orJqueryElement.append() by default is 'append'
```javascript
$jQueryElement.loadFromTemplate({
  template : "templateName",
  data : "dataCollection.json",
  render_method: 'html'
});
```

### ASYNC MODE
#### async_mode is true by default you can use false instead
####
#### Check the follow examples:
####
```javascript
 var arrayData = [
   {
   title: 'value 1'
 },
 {
   title: 'value 2'
 },
 {
   title: 'value 3'
 },
 {
   title: 'value 4'
 },
 {
   title: 'value 5'
 }
 ]

 //testing async_mode: true (by default)
 for (var i = 0; i < arrayData.length ; i++)
 {
   $('#async-mode-true').loadFromTemplate({
     template: "testAsyncMode",
     path: 'templates/',
     data: arrayData[i],
     extension: '.html',
   });
 }

 //testing async_mode false
 for (var i = 0; i < arrayData.length ; i++)
 {
   $('#async-mode-false').loadFromTemplate({
     template: 'testAsyncMode',
     path: 'templates/',
     async_mode: false,
     data: arrayData[i],
     extension: '.html',
   });
 }
})();

```

#### The result for the async_mode: true(by default) will be:
####
```
value 1
value 1
value 1
value 1
value 1
```

#### The result for the async_mode: false will be:
####
```
value 1
value 2
value 3
value 4
value 5
```

### Custom template path and extension
```javascript
$.fn.loadFromTemplate.defaults.path = "tmp/";
$.fn.loadFromTemplate.defaults.extension = ".tmp";
$jQueryElement.loadFromTemplate({
  template : "templateName",
  data : "dataCollection.json"
});
```

### Json without file
```javascript

$jQueryElement.loadFromTemplate({
  template : "templateName",
  data : {
    "name":[{
      test : 1,
      custom : 2
    },
    {
      test: 4,
      custom : 76
    }]
  },
  callback: function(){
    //My code
  });
```

### If is necessary you can use a template from a String
```javascript
$jQueryElement.loadFromTemplate({
  template : "<div>{{ example }}</div>",
  data : "dataCollection.json"
});
```

## About
Plugin by @CKGRafico with strong contribution from @JorgeCasar
Website: http://www.ckgrafico.com
