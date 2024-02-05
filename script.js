var btn = document.querySelector("button")
var elements = document.querySelectorAll("#image")
var screen = document.querySelectorAll(".screen")
var playGround = document.querySelector("#playground")
var scoreVal = document.querySelector("#nav h5 span")
var score = 0;
var selected = "";
var timer = 60;

btn.addEventListener("click", function () {
    screen[1].style.transform = "translateY(-100%)"
})

elements.forEach(function (elem) {
    elem.addEventListener("click", function () {
        runTimer();

        screen[2].style.transform = "translateY(-200%)";
        selected = elem.childNodes[1].getAttribute("src")

        setInterval(function () {
            createImage();

        }, 1000)
    })
})

function createImage() {
    var newImg = document.createElement("img")
    newImg.setAttribute("src", selected)
    var x = Math.random() * 100
    var y = Math.random() * 100
    var z = Math.random() * 360
    newImg.style.left = x + "%"
    newImg.style.top = y + "%"
    newImg.style.rotate = z + "deg"
    playGround.appendChild(newImg)


    catchImage();

    setTimeout(function () {
        playGround.removeChild(newImg)
    }, 1200)
}

function catchImage() {
    var image = document.querySelectorAll("#playground img")
    image.forEach(function (elem) {
        elem.addEventListener("click", function () {
            score++;
            scoreVal.innerHTML = score;
        })
    })
}


function runTimer() {
    var stoptimer = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#nav h4 span").innerHTML = timer;
        }
        else {
            clearInterval(stoptimer);
            playGround.style.backgroundColor = "white"
            playGround.innerHTML = `Game Over Score : ${score}`
            playGround.style.fontSize = "50px"
            createImage = null
        }
    }, 1000)
}
