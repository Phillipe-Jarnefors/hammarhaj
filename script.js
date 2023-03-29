'use strict';

import printPages from "./print_pages.js";
import printLandingPage from "./print_landing_page.js";
import printSocialLinks from "./print_social_links.js";
import totalPriceFunction from "./print_totalprice.js";
import printNews from "./print_news.js";
import printCategories from "./print_categories.js";

if(!localStorage.getItem("cart")){
    let cart = []
	localStorage.setItem("cart", JSON.stringify(cart));
}

fetch("http://167.71.35.197/index.php/wp-json/wp/v2/pages")
	.then(res => res.json())
	.then(data => {
		printPages(data);
		printLandingPage(data);
		printSocialLinks();
		totalPriceFunction();
  })