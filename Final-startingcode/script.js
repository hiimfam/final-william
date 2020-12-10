document.querySelector(".footer").style.display = 'none';

var pict = document.querySelector(".container");
var display = document.querySelector(".displayedimg");

Array.from(document.querySelectorAll(".imgThumbnail")).forEach(item => {
item.addEventListener("mouseover", event => {
document.querySelector(".footer").style.display = 'block';
pict.style.display = "block";
display.src = event.target.src;
});
});

var btn = document.getElementById("button")

function myFunction() {
    document.getElementById("frm").reset();
    var x = document.forms["myForm"]["inputthing"].value;
    if (x != "blur") {
        alert("Incorrect command.")
    } else {
        displayedimg.src = "images/pic1B.jpg";
    }

}

