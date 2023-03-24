import printCart from "./print_cart.js";

const contentSec = document.getElementById('root');

let cart = [];
localStorage.setItem("cart", JSON.stringify(cart));

export default function printProducts() {
    fetch("http://167.71.35.197/index.php/wp-json/wc/store/products")
        .then(res => res.json())
        .then(data => {
            console.log(data)

            

            data.map(product => {
                let div = document.createElement("div");
                let productName = document.createElement("h3");
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
                productName.innerText = product.name;

                addToCart.addEventListener("click", () => {
                    
                    let cart = JSON.parse(localStorage.getItem("cart"));
                    
                        let findItem = cart.find(prod => prod.id === product.id)
                        console.log("findItem", findItem);

                        if (findItem) {
                            findItem.quantity++
                        } else {
                            let cartObjectItem = {
                                id: product.id,
                                quantity: 1,
                            }
                            cart.push(cartObjectItem)
                        }

                        
                        // if(findItem === -1) {
                        //     cart.push(cartObjectItem);
                        // }else {
                        //     cart.splice(findItem, 1);
                        //     cart.unshift(cartObjectItem);
                        //     cartObjectItem.quantity ++;
                        // }
                    
                        console.log(cart);
                       
                        localStorage.setItem("cart", JSON.stringify(cart));
                    

                    
            })

                div.append(productName, addToCart, price, prodImage);
                /* contentSec.innerHTML = ""; */
                contentSec.append(div);


            })

        })
}

