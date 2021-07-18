

 let dots = document.getElementById("dots");
 let more = document.getElementById("more");
 let buttonText = document.getElementById("buttonText");      

// .addEventListener('click', readMore);

function readMore(){

if(dots.style.display === "none") {
	dots.style.display = "inline";
	more.style.display = "none";
	buttonText.innerHTML = "Read more";
}else{
	dots.style.display = "none";
	more.style.display = "inline";
	buttonText.innerHTML = "Read less";
}
}




 let dots2 = document.getElementById("dots2");
 let more2 = document.getElementById("more2");
 let buttonText2 = document.getElementById("buttonText2");



function readMore2(){

if(dots2.style.display === "none") {
	dots2.style.display = "inline";
	more2.style.display = "none";
	buttonText2.innerHTML = "Read more";
}else{
	dots2.style.display = "none";
	more2.style.display = "inline";
	buttonText2.innerHTML = "Read less";
}
}



 let dots3 = document.getElementById("dots3");
 let more3 = document.getElementById("more3");
 let buttonText3 = document.getElementById("buttonText3");



function readMore3(){

if(dots3.style.display === "none") {
	dots3.style.display = "inline";
	more3.style.display = "none";
	buttonText3.innerHTML = "Read more";
}else{
	dots3.style.display = "none";
	more3.style.display = "inline";
	buttonText3.innerHTML = "Read less";
}
}
