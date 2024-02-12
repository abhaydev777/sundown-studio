// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

function ImageAnimation() {
    let image1 = document.querySelector(".image1")
    let image = document.querySelector(".page3-container")
    image.addEventListener("mouseenter", function () {
        image1.style.display = "block";

    })

    image.addEventListener("mouseleave", function () {
        image1.style.display = "none";

    })

    let p3image = document.querySelectorAll(".p3")
    p3image.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            let dimage = e.getAttribute("data-image")
            image1.style.backgroundImage = `url(${dimage})`
        })
    })

}

ImageAnimation();