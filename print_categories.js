const menu = document.getElementById('navbar-pages')


export default function printCategories() {


    fetch("http://167.71.35.197/index.php/wp-json/wc/v3/products/categories")
	.then(res => res.json())
	.then(categories => {
		console.log("kategorier", categories);
	    
        let ul = document.createElement("ul")

        categories.map(category => {

            console.log("category", category.name);
            let li = document.createElement("li")
            li.innerText = category.name;

            li.addEventListener("click", () => {
                console.log("Click på category", category.name);

                let categoryContent = document.createElement("div");

                console.log(category.count);
                


                // categoryContent.innerHTML = ;
                //contentSec.appendChild(categoryContent);

            }) 

            ul.appendChild(li)
        })
    menu.appendChild(ul);

    })
}





