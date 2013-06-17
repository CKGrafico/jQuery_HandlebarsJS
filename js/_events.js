(function(){
	$("section").on("click","#load",function(){
		//$.fn.loadFromTemplate.dafaults.path = 'templates/';
		//$.fn.loadFromTemplate.dafaults.extension = ".html";

		$("#hand").removeClass('done').loadFromTemplate({
			template : "gente",
			data : "random.json"
		}).addClass('done');
	});
})();