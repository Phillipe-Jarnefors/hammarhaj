
import printProducts from "/print_products.js"
import printCart from "./print_cart.js";
import printLandingPage from "./print_landing_page.js";
import printCheckoutPage from "./print_checkout_page.js";
import printCategories from "./print_categories.js";
import printNews from "./print_news.js";
import totalPriceFunction from "./print_totalprice.js";

const menu = document.getElementById('navbar-pages');
const contentSec = document.getElementById('root');



export default function printPages(pages) {
	let ul = document.createElement("ul")
	pages.map(page => {
		
		let li = document.createElement("li")
		li.innerText = page.title.rendered;

		ul.appendChild(li)

		li.addEventListener("click", () => {
			contentSec.innerText = "";
      
			if (page.id === 14) {
				printCart()
				totalPriceFunction()
			} else if (page.id === 13) {
				printProducts()
				printCategories()

			} else if (li.innerText === "Front Page") {
				printLandingPage(pages)

			} else if (page.id === 15) {
				printCheckoutPage()
				totalPriceFunction()
        
			} else if (page.id === 37) {
				printNews()

			} else {
				let pageContent = document.createElement("div");
				pageContent.innerHTML = page.content.rendered;
				contentSec.appendChild(pageContent);
			}
		})
	})
	menu.appendChild(ul);
}

