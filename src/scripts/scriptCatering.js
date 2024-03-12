let cart = {
    "Vanilla": 0,
    "Chocolate": 0,
    "Strawberry": 0,
    "Mint Chocolate Chip": 0,
    "Rocky Road": 0,
    "Coffee": 0,
    "Matcha": 0,
    "Milk Tea": 0,
    "Ube": 0
};

function decrement(id) {
    let qtyField = document.getElementById("qty" + id);
    let flavor = qtyField.closest("#item").dataset.flavor;
    if (qtyField.innerHTML > 0) {
        qtyField.innerHTML--;
        cart[flavor]--;
    }
}

function increment(id) {
    let qtyField = document.getElementById("qty" + id);
    let flavor = qtyField.closest("#item").dataset.flavor;
    qtyField.innerHTML++;
    cart[flavor]++;
}
