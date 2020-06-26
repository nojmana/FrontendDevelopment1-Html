// display date
window.setInterval(function () {
    var date = new Date();
    document.getElementById("js-date").innerHTML = date.toDateString()
}, 1000);


// slideshow
var slideIndex = 0;
slideshow();

function slideshow() {
    var pics = document.getElementsByClassName("kids-pic-js");
    for (i = 0; i < pics.length; i++) {
        pics[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > pics.length) { 
        slideIndex = 1 
    }
    pics[slideIndex - 1].style.display = "block";
    
    var timeout = 3000;
    setTimeout(slideshow, timeout);
}