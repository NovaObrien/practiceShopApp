<template>
  <div class="cart">
    <h1>Cart</h1>
    <h3>Total: ${{total}}</h3>
    <h2 v-if="cartItems.length === 0">No Items In Cart. Check out the Home Page For Groceries</h2>
    <cart-item v-for="cartItem in cartItems" :cartItemProp="cartItem" :key="cartItem.id"/>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
import CartItem from '../components/cartItem.vue'
export default {
  name: 'Cart',
  setup () {
    return {
      cartItems: computed(() => AppState.itemsInCart),
      total: computed(() => AppState.total)
    }
  },
  components: { CartItem }
}
</script>

<style lang="scss" scoped>
.cart {
   padding: 1em;
   border-bottom: solid rgb(50, 139, 155);
   background-color: rgba(209, 209, 209, 0.657);
   border-radius: 1em;
}
h1 {
   color: rgb(44, 115, 128);
  border-bottom: solid rgb(130, 142, 177);
}
</style>
