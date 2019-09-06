let firstValue;
let selectedOperator;
let secondValue;

window.onload = function (){
  const display = document.getElementById("display")
  const btnuno = document.getElementById("btnuno")
  const btndos = document.getElementById("btndos")
  const btntres = document.getElementById("btntres")
  const btncuatro = document.getElementById("btncuatro")
  const btncinco = document.getElementById("btncinco")
  const btnseis = document.getElementById("btnseis")
  const btnsiete = document.getElementById("btnsiete")
  const btnocho = document.getElementById("btnocho")
  const btnnueve = document.getElementById("btnnueve")
  const btncero = document.getElementById("btncero")

  btnuno.onclick = function (event){
    display.innerText += event.target.textContent
  }
  btndos.onclick = function (event){
    display.innerText += event.target.textContent
  }
  btntres.onclick = function (event){
    display.innerText += event.target.textContent
  }
  btncuatro.onclick = function (event){
    display.innerText += event.target.textContent
  }
  btncinco.onclick = function (event){
    display.innerText += event.target.textContent
  }
  btnseis.onclick = function (event){
    display.innerText += event.target.textContent
  }
  btnsiete.onclick = function (event){
    display.innerText += event.target.textContent
  }
  btnocho.onclick = function (event){
    display.innerText += event.target.textContent
  }
  btnnueve.onclick = function (event){
    display.innerText += event.target.textContent
  }
  btncero.onclick = function (event){
    display.innerText += event.target.textContent
  }

btnc.onclick = function(){
  display.innerText = ""
}

const operatorFunction = function(event){
  firstValue = parseFloat(display.innerText)
  display.innerText= ""
  selectedOperator = event.target.textContent
}

btndiv.onclick = operatorFunction
btnmas.onclick = operatorFunction
btnmenos.onclick = operatorFunction
btnmult.onclick = operatorFunction

btnigual.onclick = function(event){
  secondValue = parseFloat(display.innerText)
  let result;
  switch (selectedOperator) {
    case "+":
      result = firstValue + secondValue
      break;
    case "-":
      result = firstValue - secondValue
    break;
      case "*":
      result = firstValue * secondValue
    break;
    case "/":
      result = firstValue / secondValue
    break;
    default:

  }
display.innerText = result;

}

}
