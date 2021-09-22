<template>
  <div class="cart-item">
    <h1>
    {{cartItem.name}}
    ${{cartItem.price * cartItem.inCart}}
    </h1>

    <p>(Price per unit: ${{cartItem.price}})</p>

    <h2>In Cart: {{cartItem.inCart}}</h2>
    <img :src=cartItem.img alt="">

<div>
    <button @click="removeOne">Remove One</button>
    <button @click="removeAll">Remove All</button>
</div>
  </div>
</template>

<script>
import { cartService } from '../Services/cartService'
export default {
  name: 'CartItem',
  props: {
    cartItemProp: Object
  },
  setup (props) {
    return {
      cartItem: props.cartItemProp,
      removeOne () {
        cartService.removeOneCartItem(this.cartItem)
      },
      removeAll () {
        cartService.removeAllCartItems(this.cartItem)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.cart-item{
  margin: 1em;
  padding: 1em;
  background-color: rgb(155, 155, 155);
  border-radius: 1rem;
}
img {
  max-height: 25vh;
  max-height: 25vw;
  border-radius: 1rem;
}
button {
  color: rgb(5, 5, 5);
  background-color: rgb(255, 238, 0);
  border: solid rgba(255, 30, 30, 0.637);
  padding: 1em;
  margin: 1em;
  font-size: 1em;
  font-weight: bolder;
  border-radius: 1rem;
  margin-top: 1em;

}
button:hover{
  color: rgba(5, 5, 5, 0.63);

  background-color: rgb(201, 188, 5);

  border: solid rgba(255, 30, 30, 0.74);
}
button:active{
  color: rgb(5, 5, 5);

  background-color: rgb(255, 238, 1);

  border: solid rgb(255, 30, 30);
}
</style>
