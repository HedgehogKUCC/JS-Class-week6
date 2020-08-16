import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/home/index.vue'),
  },
  {
    path: '/front',
    component: () => import('../views/front/index.vue'),
    children: [
      {
        path: '/front/products',
        component: () => import('../views/front/components/Products.vue'),
      },
      {
        path: '/front/shoppingcart',
        component: () => import('../views/front/components/ShoppingCart.vue'),
      },
      {
        path: '/front/about',
        component: () => import('../views/front/components/About.vue'),
      },
      {
        path: '/front/checkout',
        component: () => import('../views/front/components/Checkout.vue'),
      },
      {
        path: '/front/checkoutfinish',
        component: () => import('../views/front/components/CheckoutFinish.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/back/index.vue'),
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
