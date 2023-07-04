document.title = "Color Filter"

let background = document.querySelector("#background");
let btn = document.querySelector("#cc")
let main = document.querySelector(".main")


colorArr = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener('click', ()=> {

    let hexagonal = '#'
    for(i=0; i<6; i++){
        hexagonal+= colorArr[getRandomColor()]
    }
    main.style.backgroundColor = hexagonal
    background.style.color = hexagonal
    background.textContent = hexagonal
})

function getRandomColor() {
    return Math.floor(Math.random() * colorArr.length)
}