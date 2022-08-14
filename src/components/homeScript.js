const parallax = document.getElementById("Parallax")
console.log(parallax)


window.addEventListener("scroll", function()
{
    var offset = window.pageYOffset;
    // console.log(offset)
    // console.log(offset * 0.5)
    parallax.style.backgroundPositionY = offset * 0.8 + "px"
})