<template>
  <div class="home">
    <div>
      <h1>Foods 4 U</h1>
      <item-for-sale v-for="item in itemsForSale" :item-for-sale-prop = "item" :key="item.name"/>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
import ItemForSale from '../components/ItemForSale.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  setup () {
    return {
      itemsForSale: computed(() => AppState.itemsForSale)
    }
  },
  components: {
    ItemForSale
  }
}
</script>

<style lang="scss" scoped>
h1 {
   color: rgb(255, 0, 0);
   padding: 1em;
   border-bottom: solid rgba(128, 0, 0, 0.452);
   background-color: rgba(255, 232, 130, 0.657);
   border-radius: 1em;
}
</style>
