(function(){
	$("section").on("click","#load",function(){
		$("#hand").removeClass('done').LoadFromTemplate({
			name : "gente",
			data : "random.json",
			array_name : "client"
		}).addClass('done');
	});
})();