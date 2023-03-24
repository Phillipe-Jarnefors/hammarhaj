'use strict';

// Här skriver du din import av modul.
import printPages from "./print_pages.js";

import printNews from "./print_news.js";

import printCategories from "./print_categories.js";

// Här kallar du på din funktion i din egna modul


fetch("http://167.71.35.197/index.php/wp-json/wp/v2/pages")
	.then(res => res.json())
	.then(data => {
		console.log("sidor", data);
		printPages(data);
	})

