<template>
  <div class="item-for-sale">
    <h1>
     {{itemForSale.name}}
   ${{itemForSale.price}}
     </h1>
     <h4> Stock: {{itemForSale.stock}}</h4>
     <img :src=itemForSale.img alt="">
  <div>

    <button @click="addToCart" v-if="itemForSale.stock != 0">Add to Cart</button>
    <h3 v-else>Out of Stock</h3>
  </div>
  </div>
</template>

<script>
import { cartService } from '../Services/cartService'
export default {
  name: 'ItemForSale',
  props: {
    itemForSaleProp: Object
  },
  setup (props) {
    return {
      itemForSale: props.itemForSaleProp,
      addToCart () {
        cartService.addItemToCart(this.itemForSale)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.item-for-sale {
  background-color: rgba(128, 128, 128, 0.698);
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;
}
h1 {
  color: black;
}
img {
  max-height: 25vh;
  max-height: 25vw;
  border-radius: 1rem;

}
button {
  color: rgb(5, 5, 5);
  background-color: rgb(59, 209, 134);
  border: solid green;
  padding: 1em;
  font-size: 1em;
  font-weight: bolder;
  border-radius: 1rem;
  margin-top: 1em;

}
button:hover{
  color: rgba(5, 5, 5, 0.63);

  background-color: rgb(63, 197, 130);

  border: solid rgba(0, 128, 0, 0.404);
}
button:active{
  color: rgb(5, 5, 5);

  background-color: rgb(84, 255, 170);

  border: solid rgba(21, 241, 21, 0.404);
}
</style>
