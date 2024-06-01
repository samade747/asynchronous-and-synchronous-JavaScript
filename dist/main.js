function orderPizzaProm() {
    return new Promise((resolve) => {
        console.log("placing order");
        setTimeout(() => {
            console.log("order placed");
            resolve("pizza");
        }, 3000);
    });
}
//# sourceMappingURL=main.js.map