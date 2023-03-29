const contentSec = document.getElementById('root')

export default function printNews() {

    fetch("http://167.71.35.197/index.php/wp-json/wp/v2/posts")
	.then(res => res.json())
	.then(posts => {
		console.log("sidor", posts);
        
        let ul = document.createElement("ul")
        let newsContent = document.createElement("div");
        
        posts.map(post => {
            console.log("news", post.title.rendered);
            let li = document.createElement("li")
            li.innerText = post.title.rendered;
            
            li.addEventListener("click", () => {
                console.log("Click på nyhet", post.title.rendered);

                //let newsContent = document.createElement("div");
                newsContent.innerHTML = post.content.rendered;
                contentSec.appendChild(newsContent);
                
            })    
            
            ul.appendChild(li)
        })
        contentSec.appendChild(ul);
    })
}



