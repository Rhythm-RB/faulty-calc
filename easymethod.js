let a = prompt("Enter first number");
let b = prompt("Enter second number")
let c = prompt("Enter operation");
let d = Math.random()

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}



if (d > 0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}