$(document).ready(function(){
	$(".css3animate").css("visibility","hidden");
	$(window).scroll(function(){
		$(".css3animate").each(function(){
			if (!$(this).hasClass('animate')) {
				var top = $(this).position().top-400;
				if ($(window).scrollTop()>top) {
					if (!$(this).attr('data-group')) {
						if (!$(this).attr('data-delay')) {
							var time = 0;
						};
						if ($(this).attr('data-delay')) {
							var time = $(this).attr('data-delay');
						};
						var now = $(this);
						window.setTimeout(function(){
							now.css('visibility', 'visible');
							var action = now.attr('data-animation');
							now.addClass('animated ' +action);
							now.addClass('animate');
						}, time)					
					};
					if ($(this).attr('data-group')) {
						var grp = $(this).attr('data-group');
						$(".css3animate[data-group="+grp+"]").each(function(){
							if (!$(this).attr('data-delay')) {
								var time = 0;
							};
							if ($(this).attr('data-delay')) {
								var time = $(this).attr('data-delay');
							};
							var now = $(this);
							window.setTimeout(function(){
								now.css('visibility', 'visible');
								var action = now.attr('data-animation');
								now.addClass('animated ' +action);
								now.addClass('animate');
							}, time)		
						})
					};
				};
			};
		})
	})
})
(function ( $ ) {
$.fn.parallax = function(options){
	var element = this;
	var settings = $.extend({
		rate: 4,
		direction: "up"
	}, options);
	jQuery(window).scroll(function(){
			element.css("background-attachment" , "fixed"); 
		if (settings.direction === "down") {
			var dir = "+";
		};
		if (settings.direction === "up") {
			var dir = "-";
		};
		var topParallax = jQuery(window).scrollTop();
		bottom = element.position().top;
		if(true){
			wtop = jQuery(window).scrollTop();
			element.css("background-position" , "0 "+dir+wtop/settings.rate+"px" );
		}
	});
}
}( jQuery ));