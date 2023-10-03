export default function calculate() {
  const resultInput = document.querySelector('#result')
  resultInput.value = "ERROR"
  resultInput.classList.add("error")
  const resultado = eval(input.value)
  resultInput.value = resultado
  resultInput.classList.remove("error")
}

