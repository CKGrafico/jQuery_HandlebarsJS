##Plugin by @ CKGRafico
###Website: http://www.ckgrafico.com
####Please remember that you need localhost or server to run this

$("section").on("click","#load",function(){
	$("#hand").LoadFromTemplate({
		name : "gente",
		data : "random.json",
		array_name : "client"
	});
});

##Please visit http://handlebarsjs.com/ for more information about HandleBars