var im = document.querySelector(".img")

imgs = [
    img1 = {
        url: "images/img1.jpg"
    },
    img2 = {
        url: "images/img2.jpg"
    },
    img3 = {
        url: "images/img3.jpg"
    }

]


setInterval((renderImage), 2000);

let i = 1
function renderImage() {
    if (i <= imgs.length - 1) {
        im.setAttribute('src', `${imgs[i].url}`)
        i++
    } else {
        i = 0
    }
}