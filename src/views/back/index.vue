<template>
  <div>
    <h2>後台</h2>
    <router-link to="/">首頁</router-link>
    <router-link to="/admin/products">產品列表</router-link>
    <router-link to="/admin/coupons">優惠劵列表</router-link>
    <router-link to="/admin/orderlist">訂單列表</router-link>
    <router-link to="/admin/imagelist">圖片儲存列表</router-link>
    <router-link to="/front">前台頁面</router-link>
    <router-view />
  </div>
</template>
