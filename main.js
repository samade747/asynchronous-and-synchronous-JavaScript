// console only prints i
console.log("i");
// async function with settimeout
setTimeout(function () {
    console.log("eat");
    setTimeout(function () {
        console.log("icecream");
    }, 1000);
}, 1000);
// console only prints icecreamm
// console.log("icecreamm")
