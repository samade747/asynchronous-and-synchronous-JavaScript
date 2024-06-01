// // console only prints i
// console.log("i")
// // async function with settimeout
// setTimeout(() => {  
//     console.log("eat")
//     // async function with settimeout
//     setTimeout(() => {  
//         console.log("icecream")
//     }, 1000)
// }, 1000)
// // console only prints icecreamm
// // console.log("icecreamm")
// // async function with loop 
// function syncTask() {
//     console.log("Task 1 started");
//     // Simulating a blocking task, like a for-loop with a delay
//     for (let i = 0; i < 1e9; i++) {}
//     console.log("Task 1 completed");
//     console.log("Task 2 started");
//     console.log("Task 2 completed");
//   }
//   syncTask();
//   console.log("All tasks completed");
function orderPizza(prepareCb) {
    console.log("placing order");
    setTimeout(function () {
        console.log("order placed");
        prepareCb();
    }, 3000);
}
function prepearPizza() {
    console.log("preparing pizza");
    setTimeout(function () {
        console.log("pizza is being prepared 🍕");
    }, 3000);
}
orderPizza(prepearPizza);
