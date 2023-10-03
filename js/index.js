import calculate from "./calculate.js"
import copyClip from "./copyClip.js"
import { handleBtnPress, handleClearBtn, handleTyping } from "./keyHandlers.js"
import switchTheme from "./switchTheme.js"

document.querySelectorAll(".charKey").forEach(function (charKeyBtn){
  charKeyBtn.addEventListener("click", handleBtnPress)
})

document.getElementById("clear").addEventListener("click", handleClearBtn)
document.getElementById("input").addEventListener("keydown", handleTyping)
document.getElementById("equal").addEventListener("click", calculate)
document.getElementById("copyToClipboard").addEventListener("click", copyClip)
document.getElementById("themeSwitcher").addEventListener("click", switchTheme)