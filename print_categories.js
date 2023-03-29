const menu = document.getElementById('navbar-pages')
const contentSec = document.getElementById('root');


export default function printCategories() {


    fetch("http://167.71.35.197/index.php/wp-json/wc/v3/products/categories")
	.then(res => res.json())
	.then(categories => {
		console.log("kategorier", categories);
	    
        let categoryUl = document.createElement("ul")

        categories.map(category => {

            //console.log("category", category.name);
            let li = document.createElement("li")
            li.innerText = category.name;
            
            li.addEventListener("click", () => {
                //console.log("Click på category", category.name);
                contentSec.innerHTML = "";

                fetch("http://167.71.35.197/index.php/wp-json/wc/store/products")
                .then(res => res.json())
                .then(products => {
                    //console.log("produkter", products);
                    
                    products.map(product => {

                        //console.log("produktkategori", category.id);

                        for (let i = 0; i < product.categories.length; i++) {


                            if (product.categories[i].id === category.id) {

    //========= print_products ========

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
                            price.innerText = product.prices.price;
                            addToCart.innerText = "Add to cart";
                            productName.innerText = product.name;

                            addToCart.addEventListener("click", () => {
                                
                                let cart = JSON.parse(localStorage.getItem("cart"));
                                let findItem = cart.find(prod => prod.id === product.id)
                                    
                                if (findItem) {
                                    findItem.quantity++
                                } else {
                                    let cartObjectItem = {
                                        id: product.id,
                                        quantity: 1,
                                    }
                                    cart.push(cartObjectItem)
                                }
                                localStorage.setItem("cart", JSON.stringify(cart));

                            })

                            div.append(productName, prodImage, price, addToCart);
                            contentSec.append(div);

  //=================================
                            }  

                        } 

                    })  

                }) 

            }) 

            categoryUl.appendChild(li)

        }) 

    menu.appendChild(categoryUl);

    }) 

}



