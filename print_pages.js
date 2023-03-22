import printCart from "./print_cart.js";

const menu = document.getElementById('navbar-pages')
const contentSec = document.getElementById('root')

export default function printPages(pages) {
	let ul = document.createElement("ul")
	pages.map(page => {
		console.log("page", page.title.rendered);
		let li = document.createElement("li")
		li.innerText = page.title.rendered;

		ul.appendChild(li)

		li.addEventListener("click", () => {
			console.log("click på page", page.id);

			// Kalla på funktion "visa kundvagn" 
			if (page.id === 14) {
				printCart()
			}

			let pageContent = document.createElement("div");
			contentSec.innerHTML = ""
			pageContent.innerHTML = page.content.rendered;
			contentSec.appendChild(pageContent);
		})
	})
	menu.appendChild(ul);
}