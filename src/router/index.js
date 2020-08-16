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
        path: 'products',
        component: () => import('../views/front/components/Products.vue'),
      },
      {
        path: 'shoppingcart',
        component: () => import('../views/front/components/ShoppingCart.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/front/components/About.vue'),
      },
      {
        path: 'checkout',
        component: () => import('../views/front/components/Checkout.vue'),
      },
      {
        path: 'checkoutfinish',
        component: () => import('../views/front/components/CheckoutFinish.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/back/index.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/back/components/Products.vue'),
      },
    ],
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
