// var btn = document.querySelector("button")

// var image = document.querySelector("#img1")
// var image2 = document.querySelector("#img2")

// btn.addEventListener("click",function(){
// image.setAttribute("src","https://images.unsplash.com/photo-1634549667619-bbbdb4b098a9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
// image2.setAttribute("src","https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
   
// })


var btn = document.querySelector("button")
 
var elements = document.querySelectorAll("#image")

var screen = document.querySelectorAll(".screen")

var playGround = document.querySelector("#playground")

btn.addEventListener("click",function(){
     screen[1].style.transform = "translateY(-100%)"
})

var selected = "";

elements.forEach(function(elem){
    elem.addEventListener("click",function(){
        screen[2].style.transform = "translateY(-200%)"
        selected = elem.childNodes[1].getAttribute("src")
       var newImg =  document.createElement("img")
       newImg.setAttribute("src",selected)
       var x = Math.random()*100
       var y = Math.random()*100
       var z = Math.random()*360
       newImg.style.left = x + "%"
       newImg.style.top = y + "%"
       newImg.style.rotate = z + "deg"

       playGround.appendChild(newImg)

    })
})





// btn.addEventListener("click",function(){
//     screen[1].style.transform = "translateY(-100%)"

// })
// var selected = "";


// elements.forEach(function(elem){
//     elem.addEventListener("click",function(){
//     screen[2].style.transform = "translateY(-200%)"
//     selected =   elem.childNodes[1].getAttribute("src")
//     console.log(selected);
//     var newImage = document.createElement("img")
//     var x = Math.random()*100
//     var y = Math.random()*100
//     var rot = Math.random()*360
//     newImage.setAttribute("src",selected)
//     newImage.style.left = x+"%"
//     newImage.style.top = y+"%"
//     newImage.style.rotate = rot + "deg"
//     playGround.appendChild(newImage)

//     })
// })


