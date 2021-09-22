<template>
  <div class="home">
    <button @click="resetAppData">Reset</button>
    <div>
      <h5>Welcome to</h5>
      <h1>Nova's Food Market</h1>
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
      itemsForSale: computed(() => AppState.itemsForSale),
      resetAppData () {
        localStorage.clear()
        window.location.reload()
      }
    }
  },
  components: {
    ItemForSale
  }
}
</script>

<style lang="scss" scoped>
.home {
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
