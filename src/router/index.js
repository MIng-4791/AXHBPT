import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home/home'
import index from '@/components/index/index'
import recharge from '@/components/recharge/recharge'
import setting from '@/components/setting/setting'
import system from '@/components/system/system'
import zhxx from '@/components/zhxx/zhxx'
import hbgl from '@/components/hbgl/hbgl'
import qxgl from '@/components/qxgl/qxgl'
import yhgl from '@/components/yhgl/yhgl'
import zzjggl from '@/components/zzjggl/zzjggl'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/home/index',
          name: 'index',
          component: index
        },
        {
          path: '/home/recharge',
          name: 'recharge',
          component: recharge
        },
        {
          path: '/home/setting',
          name: 'setting',
          component: setting
        },
        {
          path: '/home/system',
          name: 'system',
          component: system
        },
        {
          path: '/home/zhxx',
          name: 'zhxx',
          component: zhxx
        },
        {
          path: '/home/hbgl',
          name: 'hbgl',
          component: hbgl
        },
        {
          path: '/home/qxgl',
          name: 'qxgl',
          component: qxgl
        },
        {
          path: '/home/yhgl',
          name: 'yhgl',
          component: yhgl
        },
        {
          path: '/home/zzjggl',
          name: 'zzjggl',
          component: zzjggl
        },
      ]
    },
    {
      path: '/',
      redirect: '/home/index'
    }
  ]
})
