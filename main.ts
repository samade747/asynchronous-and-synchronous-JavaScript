// class as on 1 6 2024
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
  


// function orderPizza(prepareCb: Function) {
//     console.log("placing order")
//     setTimeout(() => {
//         console.log("order placed")
//         prepareCb(deliverycb)
//     }, 3000)   
// }

// function prepearPizza(deliverycb: any) {    
//     console.log("preparing pizza")
//     setTimeout(() => {
//         console.log("pizza is being prepared 🍕")      
//         deliverycb()
//     }, 3000)   
// }


// function deliverycb() {
//     console.log("delivering pizza")
//     console.log("lo khao pizza")
// }

// orderPizza(prepearPizza)






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






function orderPizza() {
    return new Promise((resolve, reject) => {
        console.log("placing order");
        setTimeout(() => {
            console.log("order placed");
            resolve("Order placed successfully");
        }, 3000);
    });
}

function preparePizza() {
    return new Promise((resolve, reject) => {
        console.log("preparing pizza");
        setTimeout(() => {
            console.log("pizza is being prepared 🍕");
            resolve("Pizza prepared successfully");
        }, 3000);
    });
}

function deliverPizza() {
    return new Promise((resolve, reject) => {
        console.log("delivering pizza");
        setTimeout(() => {
            console.log("lo khao pizza");
            resolve("Pizza delivered successfully");
        }, 3000);
    });
}

orderPizza()
    .then((orderMessage) => {
        console.log(orderMessage);
        return preparePizza();
    })
    .then((prepareMessage) => {
        console.log(prepareMessage);
        return deliverPizza();
    })
    .then((deliverMessage) => {
        console.log(deliverMessage);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
