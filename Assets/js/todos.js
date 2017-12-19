// Check off Specific Todos by Clicking 
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");	
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().remove();
 	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		//grabbing new todo from input 
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
	}
});

$(".fa-bullseye").click(function(){
 $("input[type='text']").toggle("slow");
});