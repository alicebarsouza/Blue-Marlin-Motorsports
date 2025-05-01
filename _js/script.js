let count = 1;
document.getElementById("slider1").checked = true;

setInterval(function() {
    nextImage();
}, 2000)

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }
    document.getElementById("slider" + count).checked = true;
}