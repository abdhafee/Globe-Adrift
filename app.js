var next = document.querySelector(".next")
var prev = document.querySelector(".prev")

next.addEventListener("click", function(){
    var items = document.querySelectorAll(".item")
    document.querySelector(".slider-container").appendChild(items[0])
})

prev.addEventListener("click", function(){
    var items = document.querySelectorAll(".item")
    document.querySelector(".slider-container").prepend(items[items.length - 1]) // here the length of items = 6
})