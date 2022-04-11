const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')


const firstFunc = () => {
    setTimeout(function () {
        console.log("КНОПКА 1")
    }, 1000)
}

const secFunc = () => {
    setTimeout(function () {
        console.log("КНОПКА 2")
    }, 2000)
}

const thirdFunc = () => {
    setTimeout(function () {
        console.log("КНОПКА 3")
    }, 3000)
}


btn.addEventListener('click', firstFunc);
btn2.addEventListener('click', secFunc);
btn3.addEventListener('click', thirdFunc);


setTimeout(function () {
    console.log("Салам")
}, 1000)

setTimeout(function () {
    console.log("Алейкум")
}, 2000)

setTimeout(function () {
    console.log("Илим")
}, 3000)

setTimeout(function () {
    console.log("Большой человек!")
}, 4000)