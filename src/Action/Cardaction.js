export const addToCart=(pizza,quantity,varients)=>dispatch=>{



let cartItem={
    name : pizza.name,
    _id: pizza._id,
    image:pizza.image,
    varients:varients,
    quantity: quantity,
    prices: pizza.prices,
    price:pizza.price[0][varients]*quantity


}
dispatch({type:'ADD_TO_CART',payload : cartItem})
}