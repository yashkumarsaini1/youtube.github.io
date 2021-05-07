window.onscroll =
    function() {
        myFunction()
    };
var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function
myFunction() {
    if (window.pageYOffset >=
        sticky) {
        navbar.classList.add("sticky-top")
    } else {
        navbar.classList.remove("sticky-top");
    }
}

function menu(value) {
    if (value == 1) {
        document.getElementById("menu_btn").style.display = "none";
        document.getElementById("menu_cross").style.display = "inline";
        document.getElementById("menu_block_item").style.display = "block";
    } else if (value == 2) {
        document.getElementById("menu_block_item").style.display = "none";
        document.getElementById("menu_btn").style.display = "inline";
        document.getElementById("menu_cross").style.display = "none";
    }
}