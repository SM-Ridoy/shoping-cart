
//Product value

function productPrice(price, productId) {
    const productSelect = document.getElementById(productId);
    productSelect.innerText = price;

    //Product text function
    productText();
}

// Product all price sumation 

function productText() {
    const bestPrice = parseFloat(document.getElementById("best-price").innerText);
    const extraMemory = parseFloat(document.getElementById("extra-memory").innerText);
    const extraStorage = parseFloat(document.getElementById("extra-storage").innerText);
    const deliveryCharge = parseFloat(document.getElementById("delivery-cost").innerText);

    const totalPrice = bestPrice + extraMemory + extraStorage + deliveryCharge;
    document.getElementById("total-price").innerText = totalPrice;
    document.getElementById("total").innerText = totalPrice;

}
//cuppon


//Memory
document.getElementById("eigth-gb").addEventListener("click", function () {
    productPrice(0, "extra-memory");
});

document.getElementById("sixtine-gb").addEventListener("click", function () {
    productPrice(180, "extra-memory");
});

//Storage
document.getElementById("first-storage").addEventListener("click", function () {
    productPrice(0, "extra-storage");
});

document.getElementById("second-storage").addEventListener("click", function () {
    productPrice(100, "extra-storage");
});
document.getElementById("third-storage").addEventListener("click", function () {
    productPrice(180, "extra-storage");
});

// Delivery
document.getElementById("free-delivery").addEventListener("click", function () {
    productPrice(0, "delivery-cost");
});
document.getElementById("cost-delivery").addEventListener("click", function () {
    productPrice(20, "delivery-cost");
});

//Cuppon 
document.getElementById("cuppon-button").addEventListener("click", function () {
    const coppunText = document.getElementById("cuppon-text").value;
    const lastTotal = parseFloat(document.getElementById("best-price").innerText);
    const cupponBonus = lastTotal / 20;


    if (coppunText == "stevekaku") {
        const lastPrice = lastTotal - cupponBonus;
        document.getElementById("total").innerText = lastPrice;
    }

});

