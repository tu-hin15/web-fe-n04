// Write a function when user click on button it will change the background color of box1 to red.
var counter = document.getElementById("counter");

var btn = document.getElementById("btn").addEventListener("click", function () { 
    counter.textContent = parseInt(counter.textContent) + 1;
    
    if(counter.textContent == 21) {
        document.getElementById("theLe-img").style.display = "block";
    }
    else {
        document.getElementById("theLe-img").style.display = "none";
    }
});

document.getElementById("reset-btn").addEventListener("click", function () {
    counter.textContent = 0;
    document.getElementById("theLe-img").style.display = "none";
});




