import { AppState } from '../AppState'
import { saveState } from '../Utils/LocalStorage'

class CartService {
  addItemToCart (item) {
    if (item.stock <= 0) { return }
    const items = AppState.itemsForSale
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === item.id) {
        AppState.itemsForSale[i].stock--
      }
    }
    const cartItems = AppState.itemsInCart
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === item.id) {
        AppState.itemsInCart[i].inCart++
        saveState()
        console.log(AppState.itemsInCart)

        return
      }
    }
    const newCartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      inCart: 1,
      img: item.img
    }
    AppState.itemsInCart.push(newCartItem)
    saveState()
    console.log(AppState.itemsInCart)
  }
}
export const cartService = new CartService()
