'use strict';

// Här skriver du din import av modul.
import printCart from "./print_cart.js";
import printPages from "./print_pages.js";

// Här kallar du på din funktion i din egna modul


fetch("http://167.71.35.197/index.php/wp-json/wp/v2/pages")
	.then(res => res.json())
	.then(data => {
		console.log("sidor", data);
		printPages(data);
	})