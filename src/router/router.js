export default [
    {
      path: '/',
      alias: '/home_page', // 别名
      name: 'Home', // 命名路由
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    // 动态路由
    {
      path: '/argu/:name',
      component: () => import('@/views/argu.vue')
    },
    // 嵌套路由
    {
      path: '/parent',
      name: 'parent',
      component: () => import('@/views/parent.vue'),
      children: [
        {
          path: 'child',
          component: () => import('@/views/child.vue')
        }
      ]
    },
    // 命名视图
    {
      path: '/named_view',
      components: {
        default: () => import('@/views/child.vue'),
        email: () => import('@/views/email.vue'),
        tel: () => import('@/views/tel.vue')
      }
    },
    // 重定向
    {
      path: '/main',
      redirect: to => '/parent'
    }
  ]