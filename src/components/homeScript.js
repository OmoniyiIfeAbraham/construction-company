const move = document.getElementById("Parallax")
console.log(move)

window.addEventListener("scroll", function() {
    var offset = window.pageYOffset;
    move.style.backgroundPositionY = offset * 0.8 + "px"
})