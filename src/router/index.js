import Vue from 'vue'
import Router from 'vue-router'

import HomeCon from '@/components/tabber/HomeContainer.vue'
import MemberCon from '@/components/tabber/MemberContainer.vue'
import CartCon from '@/components/tabber/CartContainer.vue'
import SearchCon from '@/components/tabber/SearchContainer.vue'

import NewsList from '@/components/news/Newslist.vue'
import NewsInfo from '@/components/news/NewsInfo.vue'

import PhotoList from '@/components/photos/PhotoList.vue'
import PhotoInfo from '@/components/photos/PhotoInfo.vue'

import GoodsList from '@/components/goods/GoodsList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeCon
    },
    {
      path: '/member',
      component: MemberCon
    },
    {
      path: '/cart',
      component: CartCon
    },
    {
      path: '/search',
      component: SearchCon
    },
    {
      path: '/home/newslist',
      component: NewsList
    },
    {
      path: '/home/newsinfo/:id',
      component: NewsInfo
    },
    {
      path: '/home/photolist',
      component: PhotoList
    },
    {
      path: '/home/photoinfo/:id',
      component: PhotoInfo
    },
    {
      path: '/home/goodslist',
      component: GoodsList
    }

  ],
  linkExactActiveClass: 'myactive'
})
