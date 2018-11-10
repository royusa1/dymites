var slideIndex = 0;
showSlides();
function showSlides() {

	var slides = document.getElementsByClassName("myImages");
	for (var i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	slideIndex++;   
	
	if (slideIndex >= slides.length){
		slideIndex = 0;
	}
	slides[slideIndex].style.display = "block";
	setTimeout(showSlides, 4000);
}       


//1st loop: i=0, slides[0] = img1
//2nt loop: i=1, slides[1] = img1
//3rt loop: i=2, slides[2] = img1

