
import printProducts from "/print_products.js"
import printCart from "./print_cart.js";
import printLandingPage from "./print_landing_page.js";

import printCategories from "./print_categories.js";
import printNews from "./print_news.js";

const menu = document.getElementById('navbar-pages');
const contentSec = document.getElementById('root');



export default function printPages(pages) {
	let ul = document.createElement("ul")
	pages.map(page => {
		//console.log("page", page.title.rendered);
		let li = document.createElement("li")
		li.innerText = page.title.rendered;

		ul.appendChild(li)

		li.addEventListener("click", () => {

			console.log("click på page", page.id);
			contentSec.innerText = "";
			// Kalla på funktion "visa kundvagn" 
			if (page.id === 14) {
				
				printCart()
			} else if (page.id === 13) {

				printCategories()

				printProducts()
				
			}else if (li.innerText === "Front Page") {

				printLandingPage(pages)
			}
			else if (page.id === 37) {
				printNews()

			} 
			
			else {
			
			let pageContent = document.createElement("div");
				pageContent.innerHTML = page.content.rendered;
				contentSec.appendChild(pageContent);
			}
			
		})
	})
	menu.appendChild(ul);
}

