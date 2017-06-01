(function ($, root, undefined) {
	// JSON
	/*$.getJSON( "infos.json", function(data) {
	$.each( data.projects.project, function( i, item ) {
	console.log(item.title);
	$("content").append('<div class="element">'+item.title+'</div>');
});
});*/
// SLICK AAA
$(function () {
	$(".slicker").slick({
		centerMode: false,
		respondTo: 'slider',
		//centerPadding: '25vh',
		arrows: "hidden",
		touchThreshold: 20,
		cssEase: "ease",
		adaptiveHeight: false,
		initialSlide: 1,
		speed: 300,
		infinite: false,
	});
	$(".slicker").on('afterChange', function() {
		var c = $(this).slick("slickCurrentSlide")-2; // 1 and 2 doesn't have an iframe
		if(c>=0 && c <players.length) {
		players[c].play();
	}
	});
	//
	$(".element").each(function() {
		$(this).children(".next").click(function() {
			$(".slicker").slick("slickNext");
		});
		$(this).children(".prev").click(function() {
			$(".slicker").slick("slickPrev");
		});
		$(this).children(".plus").attr('isopen', 0);
		console.log("A: "+$(this).attr('isopen'));
		//console.log("a");
		$(this).children(".plus").click(function() {
			$(this).toggleClass("close");
			if($(this).attr('isopen') == 0){
				$(this).attr('isopen', 1);
				//$(this).open = true;
				$(this).parent().children(".text").animate(
					{ bottom:"0%"}, 500
				);

			} else {
				$(this).attr('isopen', 0);
				//$(this).open = false;
				$(this).parent().children(".text").animate(
					{ bottom:"-100%"}, 500
				);
			}
		});
	});
	var players = new Array();
	//
	$("iframe").each(function() {
		var temp = $(this);
		players.push(new Vimeo.Player(temp));
	});
	var iframe = document.querySelector('iframe');
	var player = new Vimeo.Player(iframe);
	//
	/*player.on('play', function() {
		console.log('played the video!');
	});*/
});

})(jQuery, this);
