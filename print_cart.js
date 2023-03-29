import printCheckoutPage from "./print_checkout_page.js";
import totalPriceFunction from "./print_totalprice.js";
import { totalSumOfProducts } from "./print_totalprice.js";

const contentSec = document.getElementById('root')

export default function printCart() {

	fetch("http://167.71.35.197/index.php/wp-json/wc/store/products")
		.then(resp => resp.json())
		.then(data => {
			showMyCartItems(data)
		})

	function showMyCartItems(cartProducts) {

		if (JSON.parse(localStorage.getItem('cart')).length > 0) {
			let emptyCartButton = document.createElement('button')
			let checkoutButton = document.createElement('button')
			let itemTotalPrice = document.createElement('p')
			itemTotalPrice.innerText = `Your total: ${totalSumOfProducts} kr`
			checkoutButton.innerText = "Checkout"
			emptyCartButton.innerText = 'Empty Cart'

			contentSec.append(emptyCartButton, checkoutButton, itemTotalPrice)

			emptyCartButton.addEventListener('click', () => {
				localStorage.setItem('cart', JSON.stringify([]))
				contentSec.innerHTML = ""
				contentSec.innerText = "Your Cart is Empty"
				itemTotalPrice.innerHTML = ""
			})

			checkoutButton.addEventListener('click', (cartProducts) => {
				printCheckoutPage(cartProducts)
			})

			let myCart = JSON.parse(localStorage.getItem("cart"))
			
			const divElem = document.createElement("div")
    		divElem.className = "checkout-cart-box" 

			cartProducts.map(cartItem => {
				myCart.map(item => {
					
					if (cartItem.id === item.product_id) {
						const divContainer = document.createElement('div')
						let itemName = document.createElement('h3')
						let itemDesc = document.createElement('div')
						let itemImage = document.createElement('img')
						let itemPrice = document.createElement('p')
						let itemQuantity = document.createElement('p')
						let itemRemove = document.createElement('button')

						itemDesc.innerHTML = cartItem.description
						itemName.innerText = cartItem.name
						itemImage.src = cartItem.images[0].src
						itemPrice.innerText = cartItem.prices.price + " kr"
						itemQuantity.innerText = item.quantity
						itemRemove.innerText = "Remove from cart"

						divContainer.append(itemName, itemDesc, itemImage, itemPrice, itemQuantity, itemRemove)

						itemRemove.addEventListener('click', () => {
							divContainer.innerHTML = ""
							contentSec.innerHTML = ""
							console.log(totalSumOfProducts);
							removeThisItem(item.product_id)
							totalPriceFunction()
							showMyCartItems(cartProducts)
						})

						divElem.appendChild(divContainer)
					}
				})
			})
			contentSec.appendChild(divElem)

			function removeThisItem(productItem) {
				myCart = JSON.parse(localStorage.getItem("cart"))

				const filterMyCart = myCart.filter(items => {
					return items.product_id!== productItem
				})
				localStorage.setItem('cart', JSON.stringify(filterMyCart))
			}
			
		} else {
			contentSec.innerText = "Your Cart is Empty"
			// knapp till produkter?
		}
	}
}