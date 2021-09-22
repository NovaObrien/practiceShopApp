import { AppState } from '../AppState'

export function saveState () {
  localStorage.setItem('market-shop-practice', JSON.stringify({
    itemsForSale: AppState.itemsForSale,
    itemsInCart: AppState.itemsInCart
  }))
}

export function loadState () {
  const data = JSON.parse(localStorage.getItem('market-shop-practice'))
  if (data) {
    AppState.itemsForSale = data.itemsForSale
    AppState.itemsInCart = data.itemsInCart
  }
}
