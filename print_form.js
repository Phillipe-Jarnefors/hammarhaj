const contentSec = document.getElementById('root')


export default function printForm() {

    const formBox = document.createElement("form")
    formBox.className = "form-wrapper"

    const firstName = document.createElement("input")
    firstName.placeholder = "First Name:"

    const lastName = document.createElement("input")
    lastName.placeholder = "Last Name:"

    const adress = document.createElement("input")
    adress.placeholder = "Adress:"

    const city = document.createElement("input")
    city.placeholder = "City:"

    const postcode= document.createElement("input")
    postcode.placeholder = "Postcode:"

    const country = document.createElement("input")
    country.placeholder = "Country:"

    const email = document.createElement("input")
    email.placeholder = "Email:"

    const phone = document.createElement("input")
    phone.placeholder = "Phone:"

    const sendBtn = document.createElement("button")
    sendBtn.innerText = "Send Order!"

    formBox.append(firstName, lastName, adress, city, postcode, country, email, phone, sendBtn)
    
    contentSec.appendChild(formBox)

    sendBtn.addEventListener("click", (event) =>{
        event.preventDefault()
        postOrder()  
    }) 


    function postOrder(){
        console.log("Skicka order");
        
        let myCart = JSON.parse(localStorage.getItem("cart"))

        

        let order = {
            payment_method: "bacs", 
            payment_method_title: "Direct Bank Transfer",
            set_paid: true,

            // dessa i billing ska komma från ett formulär
            billing: {
                first_name: firstName.value,
                last_name: lastName.value,
                adress_1: adress.value,
                city: city.value,
                postcode: postcode.value,
                country: country.value,
                email: email.value,
                phone: phone.value
            },
            shipping: {
                first_name: firstName.value,
                last_name: lastName.value,
                adress_1: adress.value,
                city: city.value,
                postcode: postcode.value,
                country: country.value,
                email: email.value,
                phone: phone.value
            },
            line_items: [
                // LOOP TROU MYCART
                
            ],
            shipping_lines: [
                {
                    method_id: "flat_rate",
                    method_title: "Flat rate",
                    total: "100"
                }
            ]
        }

        myCart.map(item =>{
            delete item.price
            console.log(item);
            order.line_items.push(item)
        })
        

        console.log(order);

        fetch("http://167.71.35.197/index.php/wp-json/wc/v3/orders", {
            method: "POST",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify(order), 
        })
        .then(res => res.json())
        .then(data => {
            console.log("Ordern är skickad", data);
            localStorage.setItem("cart", JSON.stringify([]));
        })
        .catch(err => console.log("err", err));
    }
}

