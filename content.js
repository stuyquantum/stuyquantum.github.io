let slideIndex = []
function loadImages(number, count){
    const containerElement = document.getElementById(number);

    var slideShow = document.createElement('div');
    slideShow.classList.add("slideshow-container");

    var files = {'png':count};
    for (var ext in files){
        for (var i = 0; i < files[ext]; i++){
            var src = "img/"+"Slides"+number+"/" + "slide"+number + "_" + (i+1) + "." + ext;
            console.log(src);
            var img = new Image(); 
            img.src = src;
            img.style="width:100%"

            var elemDiv = document.createElement('div');
            elemDiv.classList.add("mySlides"+number);
            elemDiv.appendChild(img);

            slideShow.appendChild(elemDiv);  
        }
    }
    slideShow.insertAdjacentHTML('beforeend', '<a class="prev" onclick="plusSlides(-1,' +number+')">&#10094;</a><a class="next" onclick="plusSlides(1,' +number+')">&#10095;</a>');
    //idk why this is needed
    var prev = document.createElement('a');
    var next = document.createElement('a');
    prev.onclick=plusSlides(-1, number-1);
    next.onclick=plusSlides(1, +number-1);

    containerElement.prepend(slideShow);
    slideIndex.push(1);
    showSlides(1, number);
}




function plusSlides(n, no) {
showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
let i;
let x = document.getElementsByClassName("mySlides"+no);
if (n > x.length) {
    slideIndex[no] = 1;
    n=1;
}    
if (n < 1) {
    slideIndex[no] = x.length;
    n=x.length;
}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
    if (i === slideIndex[no]-1){x[i].style.display = "block"}; 
}
}


//loadImages(slideSetId, numberOfSlides)
loadImages(1,19)
loadImages(2,26)
loadImages(3,32)
loadImages(4,10)
loadImages(5,29)
loadImages(6,25)
loadImages(7,19)
loadImages(8,15)
loadImages(9,14)
loadImages(10,14)
loadImages(11,26)
loadImages(12,29)
