var prodNameInput = document.getElementById('prodName');
var prodDescriptionInput = document.getElementById('prodDescription');
var prodCategoryInput = document.getElementById('prodCategory');
var prodPriceInput = document.getElementById('prodPrice');
var addBtn = document.getElementById('click');
var data = document.getElementById('data');
var products = [];


addBtn.onclick = function () {
    addProduct();
    displayData();
}


function addProduct() {
    var product = {
        name: prodNameInput.value,
        description: prodDescriptionInput.value,
        price: prodPriceInput.value,
        category: prodCategoryInput.value
    }
    products.push(product);
    console.log(products);
}

function displayData() {
    var result = "";
    for (var i = 0; i < products.length; i++) {
        result += "<tr><td>" + i + "</td><td>" + products[i].name + "</td><td>" + products[i].category + "</td><td>" + products[i].price + "</td><td>" + products[i].description + "</td></tr>"
    }
    data.innerHTML = result;
}


