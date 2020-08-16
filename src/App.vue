<template>
  <div id="app">
    <h1>Week6 - router setting</h1>
    <div id="nav">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0 30px 30px;
  margin-top: 50px;

  h2 {
    color: blue;
  }

  h3 {
    margin-top: 50px;
    color: red;
  }

  img {
    display: block;
    height: auto;
    margin: 50px auto;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &:not(:first-of-type) {
      margin-left: 10px;
    }

    &:not(:last-of-type) {
      padding-right: 10px;
      border-right: 1px solid #2c3e50;
    }

    &:hover {
      color: #42b983;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
