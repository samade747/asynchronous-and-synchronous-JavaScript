function orderPizza(prepareCb) {
    console.log("placing order");
    setTimeout(() => {
        console.log("order placed");
        prepareCb(deliverycb);
    }, 3000);
}
function prepearPizza(deliverycb) {
    console.log("preparing pizza");
    setTimeout(() => {
        console.log("pizza is being prepared 🍕");
        deliverycb();
    }, 3000);
}
function deliverycb() {
    console.log("delivering pizza");
    console.log("lo khao pizza");
}
orderPizza(prepearPizza);
//# sourceMappingURL=main.js.map