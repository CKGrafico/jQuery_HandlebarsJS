(function(){
	$("section").on("click","#load",function(){
		//$.fn.LoadFromTemplate.dafaults.path = 'templates/';
		//$.fn.LoadFromTemplate.dafaults.extension = ".html";

		$("#hand").removeClass('done').LoadFromTemplate({
			template : "gente",
			data : "random.json"
		}).addClass('done');
	});
})();