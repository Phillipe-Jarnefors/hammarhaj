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
				//------------------
				// HERE IS CHECKOUT
				//------------------
			})

			let myCart = JSON.parse(localStorage.getItem("cart"))
			
			cartProducts.map(cartItem => {
				myCart.map(item => {
					
					if (cartItem.id === item.id) {
						const divContainer = document.createElement('div')
						let itemName = document.createElement('h3')
						let itemDesc = document.createElement('div')
						let itemImage = document.createElement('img')
						let itemQuantity = document.createElement('p')
						let itemRemove = document.createElement('button')

						itemDesc.innerHTML = cartItem.description
						itemName.innerText = cartItem.name
						itemImage.src = cartItem.images[0].src
						itemQuantity.innerText = item.quantity
						itemRemove.innerText = "Remove from cart"

						divContainer.append(itemName, itemDesc, itemImage, itemQuantity, itemRemove)

						itemRemove.addEventListener('click', () => {
							divContainer.innerHTML = ""
							removeThisItem(item.id)
						})

						contentSec.appendChild(divContainer)
					}
				})
			})

			function removeThisItem(productItem) {
				myCart = JSON.parse(localStorage.getItem("cart"))

				const filterMyCart = myCart.filter(items => {
					return items.id !== productItem
				})
				localStorage.setItem('cart', JSON.stringify(filterMyCart))
			}
			
		} else {
			contentSec.innerText = "Your Cart is Empty"
		}
	}
}