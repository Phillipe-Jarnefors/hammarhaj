'use strict';

//------------------------------------
// Här skriver du din import av modul.
//------------------------------------

import printPages from "./print_pages.js";
import printLandingPage from "./print_landing_page.js";
import printSocialLinks from "./print_social_links.js";



//------------------------
//	CREATE STORAGE
//------------------------

if(!localStorage.getItem("cart")){
    let cart = []
	localStorage.setItem("cart", JSON.stringify(cart));
}


//------------------------------------------------ 
// Här kallar du på din funktion i din egna modul
//------------------------------------------------

fetch("http://167.71.35.197/index.php/wp-json/wp/v2/pages")
	.then(res => res.json())
	.then(data => {
		//console.log("sidor", data);
		printPages(data);
		printLandingPage(data);
		printSocialLinks();
	})