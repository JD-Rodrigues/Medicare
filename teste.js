
let um = document.querySelector('.um')
let dois = document.querySelector('.dois')

um.addEventListener('click', anima)

count = 0

function move(element, p) {
    let pos = "-" + p + "px"
    element.style.top=pos
}

function anima() {
    setInterval(()=> {
        if (count <= 70) {
            move(dois,count++)
        }
    },10)
}