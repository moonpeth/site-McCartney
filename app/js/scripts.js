$(window).ready(function(){

	$(".playButton").on("click", function(){
		var name = $(this).parent().attr("class");
		console.log(name);
		var audio = new Audio('musics/'+name);
		audio.play();
	});

 $('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
 });

});
