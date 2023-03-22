import printPages from "./print_pages.js";
const root = document.getElementById('root')


export default function printCart() {



	if (JSON.parse(localStorage.getItem('cart')).length > 0) {

		let emptyCartButton = document.createElement('button')
		emptyCartButton.innerText = 'Empty Cart'
	}
}