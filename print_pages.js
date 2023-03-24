import printLandingPage from "./print_landing_page.js";
import printCheckoutPage from "./print_checkout_page.js";

const menu = document.getElementById('navbar-pages')
const contentSec = document.getElementById('root')

export default function printPages(pages) {
	let ul = document.createElement("ul")
	pages.map(page => {
		//console.log("page", page.title.rendered);
		let li = document.createElement("li")
		li.innerText = page.title.rendered;

		ul.appendChild(li)

		li.addEventListener("click", () => {
			//console.log("click på page", page.id);
			contentSec.innerText = "";

			if(li.innerText === "Front Page"){
				printLandingPage(pages)
			}else if(page.id === 15){
				printCheckoutPage()
			}else{
				let pageContent = document.createElement("div");
				pageContent.innerHTML = page.content.rendered;
				contentSec.appendChild(pageContent);
			}
		})
	})
	menu.appendChild(ul);
}