$(function(){
	$('.menu a').on("click",function(e){
		$('.content-panel').removeClass('active');
		$('.menu a').removeClass('active');
		$('.nav').removeClass('active');
		$(".menu-container").removeClass("active");	
		var activate = $(this).data("target");
		$(activate).addClass("active");
		$(this).addClass("active");
	});

	$('.nav').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');	
			$(".menu-container").removeClass("active");	
			return;
		}
		$(this).addClass('active');
		$(".menu-container").addClass("active");
	});
})