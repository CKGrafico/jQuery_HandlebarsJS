(function(){
	$("section").on("click","#load",function(){
		$("#hand").LoadFromTemplate({
			name : "gente",
			data : "random.json",
			array_name : "client"
		});
	});
})();