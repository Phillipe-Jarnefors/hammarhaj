import printProducts from "./print_products.js"
import printCart from "./print_cart.js";
import printLandingPage from "./print_landing_page.js";
import printCheckoutPage from "./print_checkout_page.js";
import printCategories from "./print_categories.js";
import printNews from "./print_news.js";
import totalPriceFunction from "./print_totalprice.js";
import { categoryUl } from "./print_categories.js";

const menu = document.getElementById('navbar-pages');
const contentSec = document.getElementById('root');
const footerWrapper = document.getElementById('foot-wrapper')

export default function printPages(pages) {
	let ul = document.createElement("ul")
	pages.map(page => {
		
		let li = document.createElement("li")
		li.innerText = page.title.rendered;

		if(li.innerText === "Refund and Returns Policy"){
			footerWrapper.appendChild(li)
		} else if(li.innerText === "Privacy Policy"){
			footerWrapper.appendChild(li)
		} else{
			ul.appendChild(li)				
		}
		
		li.addEventListener("click", () => {
			contentSec.innerText = "";

			if (page.id === 14) {
				printCart()
				totalPriceFunction()
				categoryUl.style.display = "none"

			} else if (page.id === 13) {
				printProducts()
				printCategories()
				categoryUl.style.display = "flex"

			} else if (li.innerText === "Front Page") {
				printLandingPage(pages)
				categoryUl.style.display = "none"

			} else if (page.id === 15) {
				printCheckoutPage()
				totalPriceFunction()
				categoryUl.style.display = "none"
        
			} else if (page.id === 37) {
				printNews()
				categoryUl.style.display = "none"

			} else {
				categoryUl.style.display = "none"
				let pageContent = document.createElement("div");
				pageContent.innerHTML = page.content.rendered;
				contentSec.appendChild(pageContent);
			}
		})
	})
	menu.appendChild(ul);
}