import { AppState } from '../AppState'
import { saveState } from '../Utils/LocalStorage'

class CartService {
  addItemToCart (item) {
    if (item.stock <= 0) { return }
    const items = AppState.itemsForSale
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === item.id) {
        AppState.itemsForSale[i].stock--
        saveState()
      }
    }
  }
}
export const cartService = new CartService()
