window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var navbar = document.getElementById("myNavbar");
    var colorChangeButton = document.getElementById("colorChangeButton");

    if (document.body.scrollTop > 290 || document.documentElement.scrollTop > 290) {
        navbar.classList.add("scrolled");
        colorChangeButton.style.backgroundColor = "#555"; // Navbar rengi değiştiğinde buton rengini güncelle
    } else {
        navbar.classList.remove("scrolled");
        colorChangeButton.style.backgroundColor = ""; // Navbar rengi normale döndüğünde buton rengini sıfırla
    }
}
