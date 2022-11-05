const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector(".btnTry")
const btnReset = document.querySelector(".btnReset")
const inputNumber = document.querySelector("#inputNumber")
const h2 = document.querySelector(".screen2 h2")
const body = document.querySelector("body")
const main = document.querySelector("main")
const p = document.querySelector("p")
const moonIcon = document.querySelector("i")
const sunIcon = document.querySelector("i + i")

let randomNumber = Math.round(Math.random() * 10)
let attempts = 1

inputNumber.focus()


btnTry.addEventListener(`click`, compareNumber)
btnReset.addEventListener(`click`, resetGame)
moonIcon.addEventListener(`click`, darkMode)
sunIcon.addEventListener(`click`, lightMode)
document.addEventListener(`keydown`, enterKey)


function compareNumber(event) {
    
    event.preventDefault()

    if(inputNumber.value.length == 0) {

        attempts--

    } else if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {

        alert(`Número inválido! Digite um número entre 0 e 10`)
        attempts--

    }
    else if(Number(inputNumber.value) == randomNumber) {

        screen1.classList.toggle("hide")
        screen2.classList.toggle("hide")

        h2.innerHTML = `Acertou em ${attempts} tentativas!`

    }

    inputNumber.value = ""
    inputNumber.focus()

    attempts++
}

function resetGame() {
    
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")  

    attempts = 1
    randomNumber = Math.round(Math.random() * 10)
    inputNumber.focus()
}

function enterKey(event) {

    if(event.key == `Enter` && screen1.classList.contains("hide")) {
        resetGame()
    }

}

function lightMode() {
    body.classList.toggle("darkBody")
    main.classList.toggle("darkMain")
    p.classList.toggle("pDark")
    sunIcon.classList.toggle("hide")
    moonIcon.classList.toggle("hide")

    inputNumber.focus()
}

function darkMode() {
    body.classList.toggle("darkBody")
    main.classList.toggle("darkMain")
    p.classList.toggle("pDark")
    sunIcon.classList.toggle("hide")
    moonIcon.classList.toggle("hide")

    inputNumber.focus()
}



