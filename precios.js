function hasValidPrice(product) {
    return ((product !== undefined) && (typeof product.price !== "string") && product.price >= 0)
    }
  



console.log(hasValidPrice({ "product": "Milk", price: 1.50 }))
console.log(hasValidPrice({ "product": "Cheese", price: -1 }))
console.log(hasValidPrice({ "product": "Eggs", price: 0 }))
console.log(hasValidPrice({ "product": "Cereals", price: "3.0" }))
console.log(hasValidPrice())
