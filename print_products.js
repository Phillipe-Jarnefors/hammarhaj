import printCart from "./print_cart.js";

const contentSec = document.getElementById('root');

let cart = [];
localStorage.setItem("cart", JSON.stringify(cart));

export default function printProducts(products) {
    fetch("http://167.71.35.197/index.php/wp-json/wc/store/products")
        .then(res => res.json())
        .then(data => {
            console.log(data)

            let div = document.createElement("div");

            data.map(product => {
                let li = document.createElement("li");
                let price = document.createElement("span");
                let salePrice = document.createElement("span");
                let prodImage = document.createElement("img");
                let addToCart = document.createElement("button");

                prodImage.src = product.images[0].src;
                prodImage.style.height = "100px";
                prodImage.style.width = "100px";

                salePrice.innerText = product.prices.sale_price;
                price.innerText = product.prices.price;
                addToCart.innerText = "Add to cart";
                li.innerText = product.name;

                addToCart.addEventListener("click", () => {
                    console.log(product.id);
                    let cart = JSON.parse(localStorage.getItem("cart"));
                    cart.push(product.id);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    console.log("cart från LS", cart);
                })

                div.append(li, addToCart, price, prodImage);
                contentSec.innerHTML = "";
                contentSec.append(div);


            })

        })
}

