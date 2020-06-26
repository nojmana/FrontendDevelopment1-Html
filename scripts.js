window.setInterval(function(){
    var date = new Date();
    document.getElementById("js-date").innerHTML = date.toDateString()
}, 1000);