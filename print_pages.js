import printProducts from "/print_products.js"


const menu = document.getElementById('navbar-pages');
const contentSec = document.getElementById('root');

export default function printPages(pages) {
	let ul = document.createElement("ul")
	pages.map(page => {
		console.log("page", page.title.rendered);
		let li = document.createElement("li")
		li.innerText = page.title.rendered;

		ul.appendChild(li)

		li.addEventListener("click", () => {
			console.log("click på page", page.id);
			let pageContent = document.createElement("div");
			pageContent.innerHTML = page.content.rendered;

			printProducts(page.id[13])
			contentSec.appendChild(pageContent);
		})
	})
	menu.appendChild(ul);
}

