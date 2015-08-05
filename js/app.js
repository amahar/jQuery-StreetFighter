$(document).ready(function(){

$('.ryu').mouseenter(function(){
	$('.ryu-still').hide();
	$('.ryu-ready').show();
	$('.ryu-cool').hide();
})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		$('.ryu-cool').hide();
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500, 
			function(){
				$(this).hide();
				$(this).css('left', '520px');
			});
	})
	.mouseup(function(){
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
	});

$('html').keydown(function(){
		if (event.which == 88){
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();

		}
	});

$('html').keyup(function(){
	if (event.which == 88){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		$('.ryu-cool').hide();

	}
});


});
	

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}




