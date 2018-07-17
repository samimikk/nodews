import Vue from 'vue'
import Router from 'vue-router'
import Booklist from './views/Booklist.vue'
import NewBook from './views/NewBook.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'booklist',
      component: Booklist
    },
    {
      path: '/new_book',
      name: 'newbook',
      component: NewBook
    }
  ]
})
