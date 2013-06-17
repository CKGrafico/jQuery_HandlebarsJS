(function(){
	$("section").on("click","#load",function(){
<<<<<<< HEAD

		$.fn.LoadFromTemplate.dafaults.path = 'templates/';
		$.fn.LoadFromTemplate.dafaults.extension = ".html";
=======
		
		$.fn.loadFromTemplate.dafaults.path = 'templates/';
		$.fn.loadFromTemplate.dafaults.extension = ".html";
>>>>>>> 22b1bb38f4a2fe566ac3a9cf94d5d3c1c3c920b0

		$("#hand").removeClass('done').loadFromTemplate({
			name : "gente",
			data : "random.json"
		}).addClass('done');
	});
})();