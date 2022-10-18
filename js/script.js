const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const inputNumber = document.querySelector("#inputNumber")
const h2 = document.querySelector(".screen2 h2")

let randomNumber = Math.round(Math.random() * 10)
let attempts = 1

inputNumber.focus()


btnTry.addEventListener(`click`, compareNumber)
btnReset.addEventListener(`click`, resetGame)
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




