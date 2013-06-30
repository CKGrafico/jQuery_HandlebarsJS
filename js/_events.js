(function(){
	$("section").on("click","#load",function(){
		//$.fn.loadFromTemplate.dafaults.path = 'templates/';
		//$.fn.loadFromTemplate.dafaults.extension = ".html";

		$("#hand").removeClass('done').loadFromTemplate({
			template : "cliente",
			data : "random.json",
			templateString : "<div class='client'>{{#each clients}}<h1>{{Name}} {{lastName}}</h1><h2>{{company}} - {{phone}}</h2>{{#if isActive}}<h3>Age: {{age}} years</h3>{{/if}}{{/each}}</div>"
		}).addClass('done');
	});

	$("section").on("click","#load2",function(){
		$("#hand2").removeClass('done').loadFromTemplate({
			template : "gente",
			data : {
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
			}
		},
		function(){
			console.log("finish");
		}).addClass('done');
	});
})();


