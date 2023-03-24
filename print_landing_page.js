import printProducts from "./print_products.js";

const contentSec = document.getElementById('root')

export default function printLandingPage(pages) {

    const landingPage = pages.find((page) => page.slug === "front-page");
    const ctaBtn = document.createElement("button");
    ctaBtn.className = "cta-Btn";
    ctaBtn.innerText = "Shop";

    //------------
    // GO TO SHOP
    //------------
    ctaBtn.addEventListener("click", () => {
        contentSec.innerHTML = ""
        printProducts()
    })

    let pageContent = document.createElement("div");
    pageContent.classList.add("front-page-wrapper");
    pageContent.innerHTML = landingPage.content.rendered;

    pageContent.appendChild(ctaBtn);
    contentSec.appendChild(pageContent);
}