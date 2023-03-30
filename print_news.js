const contentSec = document.getElementById('root')

export default function printNews() {

    fetch("http://167.71.35.197/index.php/wp-json/wp/v2/posts")
	.then(res => res.json())
	.then(posts => {

        let newsTitle = document.createElement("div");
        newsTitle.className = "news-title";
        let ul = document.createElement("ul");
        let newsContent = document.createElement("div");
        
        posts.map(post => {
            let li = document.createElement("li")
            li.innerText = post.title.rendered;
            
            li.addEventListener("click", () => {
                newsContent.innerHTML = post.content.rendered;
                contentSec.appendChild(newsContent);
                
            })    
            
            ul.appendChild(li)
        })
        newsTitle.appendChild(ul)
        contentSec.appendChild(newsTitle);
    })
}



