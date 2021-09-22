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
        this.setTotalCost()
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
    this.setTotalCost()
  }

  removeOneCartItem (cartItem) {
    let index
    for (let i = 0; i < AppState.itemsInCart.length; i++) {
      if (AppState.itemsInCart[i].id === cartItem.id) {
        index = i
      }
    }
    if (AppState.itemsInCart[index].inCart <= 1) {
      AppState.itemsInCart.splice(index, 1)
    } else {
      AppState.itemsInCart[index].inCart--
    }
    const saleIndex = AppState.itemsForSale.findIndex(i => i.id === cartItem.id)
    AppState.itemsForSale[saleIndex].stock++
    this.setTotalCost()
  }

  removeAllCartItems (cartItem) {
    let index
    for (let i = 0; i < AppState.itemsInCart.length; i++) {
      if (AppState.itemsInCart[i].id === cartItem.id) {
        index = i
      }
    }
    const saleIndex = AppState.itemsForSale.findIndex(i => i.id === cartItem.id)
    AppState.itemsForSale[saleIndex].stock += AppState.itemsInCart[index].inCart
    AppState.itemsInCart.splice(index, 1)
    this.setTotalCost()
  }

  setTotalCost () {
    const arr = AppState.itemsInCart
    let total = 0
    for (let i = 0; i < arr.length; i++) {
      total += (arr[i].price * arr[i].inCart)
    }
    console.log(total)
    AppState.total = total

    saveState()
  }
}
export const cartService = new CartService()
