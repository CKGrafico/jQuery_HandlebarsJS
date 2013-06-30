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
		//$.fn.loadFromTemplate.dafaults.path = 'templates/';
		//$.fn.loadFromTemplate.dafaults.extension = ".html";

		$("#hand").removeClass('done').loadFromTemplate({
			template :  "<div class='client'>{{#each clients}}<h1>{{Name}} {{lastName}}</h1><h2>{{company}} - {{phone}}</h2>{{#if isActive}}<h3>Age: {{age}} years</h3>{{/if}}{{/each}}</div>",
			data : "random.json",
		}).addClass('done');
	});

	$("section").on("click","#load2",function(){
		$("#hand2").removeClass('done').loadFromTemplate({
			template : "gente",
			data : dataJSON
		}).addClass('done');
	});

	$("section").on("click", "#loadWithCallback", function(){
		$('.result').loadFromTemplate({
			template: "gente",
			data: dataJSON,
			callback: function(){
				console.log("appended to:", this);
			},
			callbackPerEach: function(index, element){
				console.log("index: ", index, "element", element);
			}
		})
	});
})();


