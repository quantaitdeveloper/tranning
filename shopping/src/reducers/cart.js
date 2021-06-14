import * as types from "../constants/ActionTypes";
const data = JSON.parse(localStorage.getItem("cart"));
const initialState = data ? data : [];

const findIndex = (cart, product) => {
    let index = -1;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].product.id === product.id) {
            index = i;
            break;
        }

    }
    return index;
}
const cart = (cart = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case (types.ADD_TO_CART): {
            index = findIndex(cart, action.product);
            if (index !== -1) {
                cart[index].quantity += action.quantity;
            }
            else {
                let newCartItem = {
                    product: action.product,
                    quantity: action.quantity
                }
                cart.push(newCartItem);
            }
            localStorage.setItem("cart", JSON.stringify(cart))
            return [...cart]
        }
        case (types.DELETE_CART): {
            console.log(action)
            index = findIndex(cart, action.product);
            if (index !== -1) {
                cart.splice(index, 1);
            }
            localStorage.setItem("cart", JSON.stringify(cart))
            return [...cart]
        }
        case (types.UPDATE_CART): {
            console.log(action)
            index = findIndex(cart, action.product);
            if (index !== -1) {
                cart[index].quantity = action.quantity
            }
            return [...cart];
        }
        default:
            return cart
    }
}
export default cart;