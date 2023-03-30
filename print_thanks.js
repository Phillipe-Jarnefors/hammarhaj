const contentSec = document.getElementById('root')

export default function printThanks() {

    contentSec.innerHTML = ""

    const thanksMsgBox = document.createElement("div")
    thanksMsgBox.className = "thanks-wrapper"

    const thanksTitle = document.createElement("h1")
    thanksTitle.innerText = "Thank you for your order!"

    const thanksText = document.createElement("p")
    thanksText.innerText = "Your order has been placed, and we are processing and preparing it as quickly as possible. We will send an email when it is ready for pickup."

        // Knapp till "SE UTLÄMNINGSSTÄLLE"?

    thanksMsgBox.append(thanksTitle, thanksText)
    contentSec.appendChild(thanksMsgBox)
}