let cart = {
    "Lavender Honeycomb Crunch": 0,
    "Salty Caramel Pretzel Swirl": 0,
    "Spiced Pear & Blue Cheese": 0,
    "Matcha Green Tea & Black Sesame": 0,
    "Espresso Martini Madness": 0,
    "Sweet Corn & Raspberry Ripple": 0,
    "Toasted Coconut & Lime Zest": 0,
    "Pumpkin Spice Latte": 0,
    "Bacon Maple Pancake": 0,
    "Mojito Sorbet": 0,
    "Fig & Honey Cheesecake": 0,
    "Blackberry Balsamic Bliss": 0
};

function decrement(id) {
    let qtyField = document.getElementById("qty" + id);
    let flavor = qtyField.closest(".item").dataset.flavor;
    if (qtyField.innerHTML > 0) {
        qtyField.innerHTML--;
        cart[flavor]--;
    }
    updateCart();
}

function increment(id) {
    let qtyField = document.getElementById("qty" + id);
    let flavor = qtyField.closest(".item").dataset.flavor;
    qtyField.innerHTML++;
    cart[flavor]++;
    updateCart();
}

function updateCart() {
    let prods = "";
    let qtys = "";
    let total = 0;
    for (var product in cart) {
        if (cart[product] != 0) {
            prods += product + "<br/>";
            qtys += "x" + cart[product] + "<br/>";
            total += cart[product] * 4.99;
        }
    }
    document.getElementById("cart-prod").innerHTML = prods;
    document.getElementById("cart-qty").innerHTML = qtys;
    document.getElementById("cart-total-2").innerHTML = "$" + total.toFixed(2);
}
