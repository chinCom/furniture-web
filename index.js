const chair = document.querySelector('#chair-link');
const tables = document.querySelector('#tables-link');
const bed = document.querySelector('#bed-link');
const closet = document.querySelector('#closet-link');
const sofa = document.querySelector('#sofa-link');
const cabinet = document.querySelector('#cabinet-link');

const total = document.querySelector('#total-price');
const products = document.querySelector('#products');
const cartList = document.querySelector('#cart-list');
const totalPrice = document.querySelector('#total-price');

const allFurniture = document.querySelector('#all-furniture-link');
const learnMoreBtn = document.querySelector('#learn-more-btn');
let cartItemID = 1;


/* All furniture */
/* default product to display */
function loadJSON() {

    /* //*fetch from inde json */
    fetch('allFurniture.json')
        .then(response => response.json())
        .then(data => {
            let html = [];
            console.log(data);
            data.forEach(element => {
                html.push(`
                <div id="test" class="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 justify-content-lg-center align-items-lg-center item"
                style="margin-top: 13px;margin-bottom: 33px;margin-left: 22px;margin-right: 22px;
                background:var(--bs-warning-bg-subtle);border-radius: 10px;padding-top: 14px;padding-left: 14px;padding-right: 14px;">
                    <div>
                        <div class="col d-lg-flex justify-content-lg-center">
                            <a href="${element.image_url}">
                                <img class="img-fluid" src="${element.image_url}">
                            </a>
                        </div>
                        <div class="row">
                            <div class="col d-lg-flex justify-content-lg-around align-items-lg-center">
                                <p class="name-product" style="color: var(--bs-emphasis-color);font-weight: bold;">${element.name}</p>
                                <a href="#products" class="add-to-cart">
                                    <i class="fa fa-shopping-cart icon" style="font-size: 31px;color: var(--bs-danger-border-subtle);padding-top: 4px;padding-bottom: 4px;padding-left: 4px;padding-right: 4px;"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <p class="d-lg-flex justify-content-lg-center price-product">$${element.price}</p>
                </div>
                `);
            });
            html = html.join('');
            document.querySelector('#products').innerHTML = html;
        });
}

/* `learn more product` furnitrure */
function learnMoreProducts() {
    fetch('learnMoreMix.json')
        .then(response => response.json())
        .then(data => {
            let html = [];
            console.log(data);
            data.forEach(element => {
                html.push(`
                <div id="test" class="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 justify-content-lg-center align-items-lg-center item"
                style="margin-top: 13px;margin-bottom: 33px;margin-left: 22px;margin-right: 22px;
                background:var(--bs-warning-bg-subtle);border-radius: 10px;padding-top: 14px;padding-left: 14px;padding-right: 14px;">
                    <div>
                        <div class="col d-lg-flex justify-content-lg-center">
                            <a href="${element.image_url}">
                                <img class="img-fluid" src="${element.image_url}">
                            </a>
                        </div>
                        <div class="row">
                            <div class="col d-lg-flex justify-content-lg-around align-items-lg-center">
                                <p class="name-product" style="color: var(--bs-emphasis-color);font-weight: bold;">${element.name}</p>
                                <a href="#products" class="add-to-cart">
                                    <i class="fa fa-shopping-cart icon" style="font-size: 31px;color: var(--bs-danger-border-subtle);padding-top: 4px;padding-bottom: 4px;padding-left: 4px;padding-right: 4px;"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <p class="d-lg-flex justify-content-lg-center price-product">$${element.price}</p>
                </div>
                `);
            });
            html = html.join('');
            document.querySelector('#learn-more-products').innerHTML = html;
        });
}


/* fetch specified products  */
function genericProducts(event, button) {
    event.preventDefault();
    let url = '';
    switch (button.id) {
        case 'bed-link':
            url = 'bed.json';
            break;
        case 'chair-link':
            url = 'chair.json';
            break;
        case 'tables-link':
            url = 'tables.json';
            break;
        case 'closet-link':
            url = 'closet.json';
            break;
        case 'sofa-link':
            url = 'sofa.json';
            break;
        case 'cabinet-link':
            url = 'cabinet.json';
            break;
        default:
            url = 'allFurniture.json';
            break;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let html = [];
            console.log(data);
            data.forEach(element => {
                html.push(`
                <div id="test" class="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 justify-content-lg-center align-items-lg-center item"
                style="margin-top: 13px;margin-bottom: 33px;margin-left: 22px;margin-right: 22px;
                background:var(--bs-warning-bg-subtle);border-radius: 10px;padding-top: 14px;padding-left: 14px;padding-right: 14px;">
                    <div>
                        <div class="col d-lg-flex justify-content-lg-center">
                            <a href="${element.image_url}">
                                <img class="img-fluid" src="${element.image_url}">
                            </a>
                        </div>
                        <div class="row">
                            <div class="col d-lg-flex justify-content-lg-around align-items-lg-center">
                                <p class="name-product" style="color: var(--bs-emphasis-color);font-weight: bold;">${element.name}</p>
                                <a href="#products" class="add-to-cart">
                                    <i class="fa fa-shopping-cart icon" style="font-size: 31px;color: var(--bs-danger-border-subtle);padding-top: 4px;padding-bottom: 4px;padding-left: 4px;padding-right: 4px;"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <p class="d-lg-flex justify-content-lg-center price-product">$${element.price}</p>
                </div>
                `);
            });
            html = html.join('');
            document.querySelector('#products').innerHTML = html;
        });
}



function purchaseProduct(e) {
    if (e.target.parentElement.classList.contains('add-to-cart')) {
        const product = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        getProductInfo(product);
    }
}


function getProductInfo(product) {
    // console.log(product);
    const productInfo = {
        image: product.querySelector('.img-fluid').src,
        name: product.querySelector('.name-product').textContent,
        price: product.querySelector('.price-product').textContent,
    }
    addToCartList(productInfo);
}


function addToCartList(product) {
    const cartItem = document.createElement('div');

    cartItem.innerHTML = `
    <div class="row d-flex d-sm-flex justify-content-end justify-content-sm-end" style="background: var(--bs-warning-border-subtle);">
        <div
            class="col-7 col-sm-5 col-md-5 col-lg-5 d-flex d-sm-flex justify-content-end justify-content-sm-end">
            <img src="${product.image}" style="width: 100%;" />
        </div>
        <div
            class="col-sm-12 col-md-7 col-lg-7 d-flex d-sm-flex d-md-flex d-lg-flex justify-content-end justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center">
            <p class="text-center">
                <strong>${product.name}</strong> 
                <span class="price-product">
                    ${product.price}
                </span>
            </p>
           
            <a id="remove-product">
                <i class="fa fa-trash icon" style="font-size: 37px;color: var(--bs-danger);margin-left: 8px;"></i>
            </a>
        </div>
        <div class="col">
            <hr style="height: 4px;background: var(--bs-black);" />
        </div>
    </div>
    `;

    cartList.appendChild(cartItem);
    
    /* Remove product from cart list */
    const removeBtn = cartItem.querySelector('#remove-product');

    /* remove button */
    removeBtn.addEventListener('click', removeProduct);
    
    totalValue(product);
}


let total_price = 0;

/* remove product */
function removeProduct(e) {
    const remove = e.target.parentElement.parentElement.parentElement.parentElement;

    const price = document.querySelector('.price-product').textContent.trim();
    let price_number = Number(price.substring(1));

    total_price = total_price - price_number;

    renderTotalValue(total_price);

    remove.remove();
}

/* get total */
function totalValue(product) {
    const price = Number(product.price.substr(1));
    total_price += price;
    console.log(total_price);

    renderTotalValue(total_price);
}

function renderTotalValue(total_price) {
    total.textContent = `Total $${total_price.toFixed(2)}`;
}


chair.addEventListener('click', (event) => genericProducts(event, chair));
tables.addEventListener('click', (event) => genericProducts(event, tables));
bed.addEventListener('click', (event) => genericProducts(event, bed));
closet.addEventListener('click', (event) => genericProducts(event, closet));
sofa.addEventListener('click', (event) => genericProducts(event, sofa));
cabinet.addEventListener('click', (event) => genericProducts(event, cabinet));

products.addEventListener('click', purchaseProduct);


allFurniture.addEventListener('click', loadJSON);
learnMoreBtn.addEventListener('click', learnMoreProducts);

// window.onload = loadJSON;

// after dom content is loaded
window.addEventListener('DOMContentLoaded', () => {
    loadJSON();

})


