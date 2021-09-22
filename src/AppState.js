import { reactive } from '@vue/reactivity'
export const AppState = reactive({
  itemsForSale: [
    {
      id: 1,
      name: 'Orange',
      price: 1,
      stock: 5,
      img: 'http://riviste.newbusinessmedia.it/wp-content/uploads/sites/27/2013/12/Fotolia_11313277_M.jpg'
    },
    {
      id: 2,
      name: 'Apple',
      price: 1.25,
      stock: 3,
      img: 'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1'
    },
    {
      id: 3,
      name: 'Bacon',
      price: 5,
      stock: 2,
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*'
    },
    {
      id: 4,
      name: 'RootBeer Soda',
      price: 2.25,
      stock: 10,
      img: 'https://sodapopstop.com/wp-content/uploads/2016/09/dads-root-beer.png'
    }
  ],

  itemsInCart: [],

  total: 0

})
