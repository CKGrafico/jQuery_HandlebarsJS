(function(){
	$("section").on("click","#load",function(){
		
		$.fn.LoadFromTemplate.dafaults.path = 'templates/';
		$.fn.LoadFromTemplate.dafaults.extension = ".html";

		$("#hand").removeClass('done').LoadFromTemplate({
			name : "gente",
			data : "random.json",
			array_name : "client"
		}).addClass('done');
	});
})();