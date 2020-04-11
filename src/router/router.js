export default [
    {
      path: '/',
      alias: '/home_page', // 别名
      name: 'Home', // 命名路由
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      props: route => ({
        food: route.query.food
      }),
      beforeEnter: (to, from, next) => {
        if(from.name == 'About') {
          console.log('这是从about来的')
        } else {
          console.log('这不是从about来的')
        }
        next() //不调用的话不会跳转
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue'),
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      props: {
        // food: 'banna'
      },
      meta: {
        title: '关于'
      }
    },
    // 动态路由
    {
      path: '/argu/:name',
      component: () => import('@/views/argu.vue'),
      props: true
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
    },
    {
      path: '/store',
      component: () => import('@/views/store.vue')
    },
    {
      path: '*',
      component: () => import('@/views/error_404.vue')
    }
  ]