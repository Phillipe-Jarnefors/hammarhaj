import printCart from "./print_cart.js";
import printForm from "./print_Form.js";


const contentSec = document.getElementById('root')

export default function printCheckoutPage() {

    contentSec.innerHTML = ""
    printCart()
    printForm()
}
