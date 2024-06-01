// // class as on 1 6 2024
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
// console.log("icecreamm")
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
        prepareCb(deliverycb);
    }, 3000);
}
function prepearPizza(deliverycb) {
    console.log("preparing pizza");
    setTimeout(function () {
        console.log("pizza is being prepared 🍕");
        deliverycb();
    }, 3000);
}
function deliverycb() {
    console.log("delivering pizza");
    console.log("lo khao pizza");
}
orderPizza(prepearPizza);
// function with async promises 
// function orderPizzaProm(){
//     return new Promise((resolve) => {
//         console.log("placing order")
//         setTimeout(() => {
//             console.log("order placed")
//             resolve("pizza")
//         }, 3000)   
//     }) 
// }
// orderPizzaProm().then((pizza) => console.log("I got my " + pizza))
// function orderPizza(): Promise<string> {
//     return new Promise((resolve, reject) => {
//         console.log("placing order");
//         setTimeout(() => {
//             const success = Math.random() > 0.2; // Simulating a success rate
//             if (success) {
//                 console.log("order placed");
//                 resolve("Order placed successfully");
//             } else {
//                 reject("Failed to place order");
//             }
//         }, 3000);
//     });
// }
// function preparePizza(): Promise<string> {
//     return new Promise((resolve, reject) => {
//         console.log("preparing pizza");
//         setTimeout(() => {
//             const success = Math.random() > 0.2; // Simulating a success rate
//             if (success) {
//                 console.log("pizza is being prepared 🍕");
//                 resolve("Pizza prepared successfully");
//             } else {
//                 reject("Failed to prepare pizza");
//             }
//         }, 3000);
//     });
// }
// function deliverPizza(): Promise<string> {
//     return new Promise((resolve, reject) => {
//         console.log("delivering pizza");
//         setTimeout(() => {
//             const success = Math.random() > 0.2; // Simulating a success rate
//             if (success) {
//                 console.log("lo khao pizza");
//                 resolve("Pizza delivered successfully");
//             } else {
//                 reject("Failed to deliver pizza");
//             }
//         }, 3000);
//     });
// }
// orderPizza()
//     .then((orderMessage: string) => {
//         console.log(orderMessage);
//         return preparePizza();
//     })
//     .then((prepareMessage: string) => {
//         console.log(prepareMessage);
//         return deliverPizza();
//     })
//     .then((deliverMessage: string) => {
//         console.log(deliverMessage);
//     })
//     .catch((error: any) => {
//         console.error("An error occurred:", error);
//     });
