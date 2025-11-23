const input1 = document.querySelector(".num1")
const input2 = document.querySelector(".num2")
const btn = document.querySelector("button")
const result = document.querySelector(".result")

btn.addEventListener("click", function () {
const x=parseInt(input1.value) 
const y=parseInt (input2.value)
const sum= x + y
result.textContent=sum
})
console.log("hello shaima")