<template>
  <div class="item-for-sale">
    <h1>
     {{itemForSale.name}}
     </h1>
     <img :src=itemForSale.img alt="">

  </div>
</template>

<script>
export default {
  name: 'itemForSale',
  props: {
    itemForSaleProp: Object
  },
  setup (props) {
    return {
      itemForSale: props.itemForSaleProp
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
div {
  background-color: grey;
  padding: 1rem;
  margin: 1rem;
}
h1 {
  color: black;
}
img {
  max-width:100%;
max-height:100%;
border-radius: 1rem;
}
</style>
