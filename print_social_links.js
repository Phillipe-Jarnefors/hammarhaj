const footerWrapper = document.getElementById('foot-wrapper')



export default function printSocialLinks(){

    fetch("http://167.71.35.197/index.php/wp-json/menus/v1/menus/sociallinks")
	.then(res => res.json())
	.then(data => {
        console.log("data", data.items)
        let ul = document.createElement("ul")

        data.items.map(item=>{
            let li = document.createElement("li")

            let linkA = document.createElement("a")
            linkA.innerText = item.post_title;
            linkA.href = item.url;

            li.appendChild(linkA)
            ul.appendChild(li)
        })

        footerWrapper.appendChild(ul)
	})
}