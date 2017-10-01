function loadBars() {
	var skillsDiv = $('#skills');

	$(window).on('scroll', function(){
		var winT = $(window).scrollTop(),
		winH = $(window).height(),
		skillsT = skillsDiv.offset().top;
		if(winT + winH  > skillsT){
			$('.skillbar').each(function(){
				$(this).find('.skillbar-bar').animate({
					width:$(this).attr('data-percent')
				},1500);
			});
		}
	});
}

function smoothscrolling() {
	console.log('here');
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash=this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash=hash;
			});
		}
	});
}
$(document).ready(loadBars);
$(document).ready(smoothscrolling);
