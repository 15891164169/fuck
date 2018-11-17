import { CREATE_SHOPCAR__ITEM, INCREMENT_SHOPCAR__ITEM, DECREMENT_SHOPCAR__ITEM, DELATE_SHOPCAR__ITEM } from './mutation-types.js'

// const cart = {
//   id: 87,
//   count: 1,
//   price: 99,
//   selected: false
// }

const car = JSON.parse(localStorage.getItem('car')) || []

export default {
  state: {
    cars: car
  },
  getters: {
    allCount (state) {
      let count = 0
      state.cars.forEach(item => {
        count += item.count
      })
      return count
    },

    goodsCount (state) {
      let coutObj = {}
      state.cars.forEach(item => {
        coutObj[item.id] = item.count
      })
      return coutObj
    }
  },
  mutations: {
    [CREATE_SHOPCAR__ITEM] (state, productObj) {
      state.cars.push({
        id: productObj[0].id,
        count: productObj[1],
        price: productObj[0].sell_price,
        selected: false
      })
      localStorage.setItem('car', JSON.stringify(state.cars))
    },

    [INCREMENT_SHOPCAR__ITEM] (state, productObj) {
      state.cars.some((item, idx) => {
        if (item.id === productObj[0].id) {
          state.cars[idx].count += productObj[1]
        }
      })
      localStorage.setItem('car', JSON.stringify(state.cars))
    },

    [DECREMENT_SHOPCAR__ITEM] (state, productObj) {
      state.cars.some((item, idx) => {
        if (item.id === productObj[0].id) {
          state.cars[idx].count -= 1
        }
      })
      localStorage.setItem('car', JSON.stringify(state.cars))
    },

    [DELATE_SHOPCAR__ITEM] (state, productId) {
      state.cars.some((item, idx) => {
        if (item.id === productId) {
          state.cars.splice(idx, 1)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.cars))
    }
  },
  actions: {// stock_quantity
    addtoshopcart ({ state, commit }, productObj) {
      // console.log(productObj[0].id)
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
    },

    increaseshopcart ({ state, commit }, productObj) {
      commit('INCREMENT_SHOPCAR__ITEM', productObj)
    },

    decreaseshopcart ({ state, commit }, productObj) {
      commit('DECREMENT_SHOPCAR__ITEM', productObj)
    },

    delatecartitem ({ state, commit }, productId) {
      commit('DELATE_SHOPCAR__ITEM', productId)
    }
  }
}