<template>
  <div>
    <h2>前台</h2>
    <router-link to="/">首頁</router-link>
    <router-link to="/front/products">產品列表</router-link>
    <router-link to="/front/shoppingcart">購物車</router-link>
    <router-link to="/front/about">關於我們</router-link>
    <router-link to="/front/checkout">結帳</router-link>
    <router-link to="/front/checkoutfinish">結帳完成</router-link>
    <router-link to="/admin">後台頁面</router-link>
    <router-view />
  </div>
</template>
