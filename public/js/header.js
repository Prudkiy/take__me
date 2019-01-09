$( document ).ready(function() {

function slideBg (blockMainId, blockSlideClass, time) {
	let slides = document.querySelectorAll('#'+ blockMainId +' .'+ blockSlideClass +'');
	let currentSlide = 0;
	let slideInterval = setInterval(nextSlide, time);
	
	function nextSlide() {
	 slides[currentSlide].className = 'slide';
	 currentSlide = (currentSlide+1)%slides.length;
	 slides[currentSlide].className = 'slide showing';
	}
}


slideBg ('slides', 'slide', 2000);


});