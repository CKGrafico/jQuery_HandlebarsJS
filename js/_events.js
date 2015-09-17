(function(){
 var dataJSON = {
     "clients": [{
         "id": 100,
         "isActive": false,
         "age": 312,
         "name": "Katherine Stanley two",
         "company": "Robotomic 22",
         "phone": "884-522-23902"
     },
     {
         "id": 200,
         "isActive": true,
         "age": 31,
         "name": "Grace Hodges two",
         "company": "eSteganoergy 33",
         "phone": "865-535-29803"
     }]
 };
 $("section").on("click","#load",function(){
  //$.fn.loadFromTemplate.defaults.path = 'templates/';
  //$.fn.loadFromTemplate.defaults.extension = ".html";

  $("#hand").removeClass('done').loadFromTemplate({
   template :  "<div class='client'>{{#each clients}}<h1>{{Name}} {{lastName}}</h1><h2>{{company}} - {{phone}}</h2>{{#if isActive}}<h3>Age: {{age}} years</h3>{{/if}}{{/each}}</div>",
   data : "random.json",
   render_method : "html",
  }).addClass('done');
 });

 $("section").on("click","#load2",function(){
  $("#hand2").removeClass('done').loadFromTemplate({
   template : "gente",
   extension: '.html',
   path: 'templates/',
   data : dataJSON
  }).addClass('done');
 });

 $("section").on("click", "#loadWithCallback", function(){
  $('.result').loadFromTemplate({
   template: "gente",
   path: 'templates/',
   data: dataJSON,
   extension: '.html',
   callback: function(){
    console.log("appended to:", this);
   },
   callbackPerEach: function(index, element){
    console.log("index: ", index, "element", element);
   }
  })
 });

 //testing when the asyn_mode is true by default
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

 //testing async_mode true
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
