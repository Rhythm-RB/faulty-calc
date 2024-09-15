let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter operation");
let d = Math.random()

if (d > 0.1) {
    if (c = "+") {
        console.log(Number(a) + Number(b))
    }

    else if (c = "-") {
        console.log(Number(a) - Number(b))
    }

    else if (c = "*") {
        console.log(Number(a) * Number(b))
    }

    else if (c = "/") {
        console.log(Number(a) / Number(b))
    }

    else {
        console.log(Number(a) ** Number(b))
    }

}

else {
    if (c = "+") {
        console.log(Number(a) - Number(b))
    }

    else if (c = "-") {
        console.log(Number(a) / Number(b))
    }

    else if (c = "*") {
        console.log(Number(a) + Number(b))
    }

    else if (c = "/") {
        console.log(Number(a) ** Number(b))
    }

    else {
        console.log(Number(a) * Number(b))
    }
}