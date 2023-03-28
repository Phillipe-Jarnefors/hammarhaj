import totalPriceFunction from "./print_totalprice.js";
const contentSec = document.getElementById('root');

export default function printProducts() {
    fetch("http://167.71.35.197/index.php/wp-json/wc/store/products")
        .then(res => res.json())
        .then(data => {
            
        data.map(product => {
            let div = document.createElement("div");
            let productName = document.createElement("h3");
            let price = document.createElement("span");
            let salePrice = document.createElement("span");
            let prodImage = document.createElement("img");
            let addToCart = document.createElement("button");

            //----------------------
            // Styling needs classes
            //----------------------
            prodImage.src = product.images[0].src;
            prodImage.style.height = "100px";
            prodImage.style.width = "100px";

            salePrice.innerText = product.prices.sale_price;

            // Display only regular price if there is no sale price. Overwrite regular price if it's on sale.
            if (product.prices.regular_price !== product.prices.sale_price) {
                price.innerText = product.prices.regular_price;
                price.style.textDecoration = "line-through";
            }

            addToCart.innerText = "Add to cart";
            productName.innerText = product.name;

            addToCart.addEventListener("click", () => {
                
                let cart = JSON.parse(localStorage.getItem("cart"));
                let findItem = cart.find(prod => prod.product_id === product.id)
                
                if (findItem) {
                    findItem.quantity++
                } else {
                    let cartObjectItem = {
                        product_id: product.id,
                        quantity: 1,
                        price: product.prices.price ? product.prices.price : product.prices.salePrice
                    }
                    cart.push(cartObjectItem)
                }
                localStorage.setItem("cart", JSON.stringify(cart));
                totalPriceFunction()
                
            })

            div.append(productName, addToCart, price, salePrice, prodImage);
            contentSec.append(div);
        })

    })
}

