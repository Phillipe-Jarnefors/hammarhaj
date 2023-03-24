// import printPages from "./print_pages.js";
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
			checkoutButton.innerText = "Checkout"
			emptyCartButton.innerText = 'Empty Cart'

			contentSec.append(emptyCartButton, checkoutButton)

			emptyCartButton.addEventListener('click', () => {
				localStorage.setItem('cart', JSON.stringify([]))
				contentSec.innerHTML = ""
				contentSec.innerText = "Your Cart is Empty"
			})

			checkoutButton.addEventListener('click', (cartProducts) => {
				// someone
			})

			let myCart = JSON.parse(localStorage.getItem("cart"))

			cartProducts.map(cartItem => {
				myCart.map(item => {
					// console.log(item);
					if (cartItem.id === item) {
						const divContainer = document.createElement('div')
						let itemName = document.createElement('h3')
						let itemDesc = document.createElement('div')
						let itemImage = document.createElement('img')
						let itemRemove = document.createElement('button')

						itemDesc.innerHTML = cartItem.description
						itemName.innerText = cartItem.name
						itemImage.src = cartItem.images[0].src
						itemRemove.innerText = "Remove from cart"

						divContainer.append(itemName, itemDesc, itemImage, itemRemove)

						itemRemove.addEventListener('click', () => {
							divContainer.innerHTML = ""
							removeThisItem(item)
						})

						console.log(cartItem.id, cartItem.name);
						contentSec.appendChild(divContainer)
					}
				})

				// console.log(cartItem.name, cartItem.id);
			})

			function removeThisItem(productItem) {
				myCart = JSON.parse(localStorage.getItem("cart"))
				const filterMyCart = myCart.filter(items => {
					return items !== productItem
				})
			
				localStorage.setItem('cart', JSON.stringify(filterMyCart))
				console.log(myCart);
			}
			
		} else {
			contentSec.innerText = "Your Cart is Empty"
		}
	}
}