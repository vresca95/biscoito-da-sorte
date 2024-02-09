//variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnRetry = document.querySelector("#btnRetry")

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnRetry.addEventListener('click', handleResetClick)

//função callback
function handleTryClick(){
  toggleScreen()

}

function handleResetClick(){
  toggleScreen()
}


function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}