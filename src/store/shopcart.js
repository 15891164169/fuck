import { ADD_TO_SHOP_CART, CREATE_SHOPCAR__ITEM, INCREMENT_SHOPCAR__ITEM } from './mutation-types.js'

// const cart = {
//   id: '',
//   count: '',
//   price: '',
//   selected: false
// }

export default {
  state: {
    cars: [
      // {
      //   id: 87,
      //   count: 1,
      //   price: 99,
      //   selected: false
      // }
    ]
  },
  getters: {
    allCount (state) {
      let count = 0
      state.cars.forEach(item => {
        count += item.count
      })
      return count
    }
  },
  mutations: {
    [ADD_TO_SHOP_CART] (state, productObj) {
      state.car = productObj
    },
    [CREATE_SHOPCAR__ITEM] (state, productObj) {
      state.cars.push({
        id: productObj[0].id,
        count: productObj[1],
        price: productObj[0].sell_price,
        selected: false
      })
    },
    [INCREMENT_SHOPCAR__ITEM] (state, productObj) {
      state.cars.some((item, idx) => {
        if (item.id === productObj[0].id) {
          state.cars[idx].count += productObj[1]
        }
      })
    }
  },
  actions: {// stock_quantity
    addtoshopcart ({ state, commit }, productObj) {
      // console.log(productObj[0].id)
      // commit('ADD_TO_SHOP_CART', productObj)
      if (productObj[0].stock_quantity > 0) {
        const cartItem = state.cars.find(item => item.id === productObj[0].id)
        // console.log('有库存')
        if (!cartItem) {
          // create productObj item
          // console.log('车里没')
          commit('CREATE_SHOPCAR__ITEM', productObj)
        } else {
          // increase productObj quantity
          // console.log('车里有')
          commit('INCREMENT_SHOPCAR__ITEM', productObj)
        }
      }
    }
  }
}
