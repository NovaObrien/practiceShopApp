<template>
  <div class="cart">
    <cart-item v-for="cartItem in cartItems" :cart-item-prop="cartItem" :key="cartItem.name"/>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
export default {
  name: 'Cart',
  setup () {
    return {
      cartItems: computed(() => AppState.cartItems)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
