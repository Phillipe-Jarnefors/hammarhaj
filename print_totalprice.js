export let totalSumOfProducts = ""

export default function totalPriceFunction() {
    let myCart = JSON.parse(localStorage.getItem("cart"))
    let sum = Number()
    let totalPrices = []

    myCart.map(item =>{
        let sum = item.quantity * Number(item.price) 
        totalPrices.push(sum)
    })
   
    totalPrices.map(item => {
        sum += item;
    })

    totalSumOfProducts = sum.toString()
}