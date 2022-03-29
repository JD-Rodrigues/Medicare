
let postsList = document.querySelector('.latest-posts-list-footer')
let tweetsList = document.querySelector('.latest-tweets-list-footer')


let count = 0

function move(element, c) {
    let pos = c + "px"
    element.style.top=pos
}

function slideDown(el) {
    if (el === postsList) {
        let interval = setInterval(() => {
            if (count>=-70) {
                move(el, count--)
            }
            else {
                clearInterval(interval)
            }
        },5)
    } else {
        let interval = setInterval(() => {
            if (count>=-95) {
                move(el, count--)
            }
            else {
                clearInterval(interval)
            }
        },2)
    }    
}

function slideUp(el) {
    let interval = setInterval(() => {
        if (count<=0) {
            move(el, count++)
        }
        else {
            clearInterval(interval)
        }
    },5)
}

window.onscroll=function (){
    let card1 = document.querySelector('.card1')
    let card2 = document.querySelector('.card2')
    let card3 = document.querySelector('.card3')
    let fcard1 = document.querySelector('.footer-card1')
    let fcard2 = document.querySelector('.footer-card2')
    let fcard3 = document.querySelector('.footer-card3')

    if (card1.getBoundingClientRect().top<=580) {
        card1.style.opacity='1.0'
        card2.style.left="0"
        card3.style.left="0"
    }    

    if (fcard1.getBoundingClientRect().top<=580) {
        fcard1.style.opacity='1.0'
        fcard2.style.left="0"
        fcard3.style.left="0"
    }
}



