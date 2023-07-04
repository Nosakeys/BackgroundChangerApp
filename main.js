document.title = "Color Filter"

let background = document.querySelector("#background");
let btn = document.querySelector("#cc")
let main = document.querySelector(".main")

let colorArr = ['black', 'white','yellow','green','blue'];

btn.addEventListener('click', () => {
let randomColor = colorArr[getRandomColor()]
main.style.backgroundColor = randomColor
background.textContent = randomColor
background.style.color = randomColor
})

function getRandomColor() {
    return Math.floor(Math.random() * colorArr.length)
}

