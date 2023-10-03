import calculate from "./calculate.js"

const input = document.querySelector('#input')

export function handleBtnPress (ev){
  const value = ev.currentTarget.dataset.value
  input.value += value
}

export function handleClearBtn (){
  input.value = ""
  input.focus()
}

export function handleTyping (ev) {
  ev.preventDefault()
  const allowdKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
  if (allowdKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
if (ev.key === "Backspace") {
  input.value = input.value.slice(0, -1)
}
if (ev.key === "Enter") {
  calculate()
}
}