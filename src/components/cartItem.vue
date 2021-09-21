<template>
  <div class="cart-item">
    {{cartItem.name}}
    {{cartItem.price}}
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    cartItemProp: Object
  },
  setup (props) {
    return {
      cartItem: props.cartItemProp
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
