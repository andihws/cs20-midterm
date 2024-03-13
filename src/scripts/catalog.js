let cart = {
    "Bacon Maple": 0,
    "Blackberry Balsamic": 0,
    "Corn and Raspberry": 0,
    "Espresso Martini": 0,
    "Lavender Honey Crunch": 0,
    "Matcha Green Tea": 0,
    "Pumpkin Spice": 0,
    "Salty Caramel Pretzel": 0,
    "Spiced Pear": 0,
    "Toasted Coconut": 0
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
