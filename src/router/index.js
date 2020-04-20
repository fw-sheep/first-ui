import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/sys/login'
import home from '@/components/sys/home'
import user from '@/components/user/list'
import role from '@/components/role/list'
import permiss from '@/components/permissions/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }, {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/user',
          name: 'user',
          component: user,
        },
        {
          path: '/role',
          name: 'role',
          component: role,
        }
        ,
        {
          path: '/permiss',
          name: 'permiss',
          component: permiss,
        }
      ],
    }
  ]
})
