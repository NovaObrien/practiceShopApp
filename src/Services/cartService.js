import { AppState } from '../AppState'

class CartService {
  addItemToCart (item) {
    if (item.stock <= 0) { return }
    const items = AppState.itemsForSale
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === item.id) {
        AppState.itemsForSale[i].stock--
      }
    }
  }
}
export const cartService = new CartService()
