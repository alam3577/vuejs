<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HomeComponent data="sajjad alam"/> -->
    <ul>
      <li>
         <router-link to="/">Home</router-link>
      </li>
      <li>
         <router-link to="/api">Api Calls</router-link>
      </li>
      <li>
         <router-link to="/about">About</router-link>
      </li>
      <li>
         <router-link to="/settings">Settings</router-link>
      </li>
      <li>
         <router-link to="/store">Store</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HomeComponent from './components/HomeComponent.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // HomeComponent
  }
}
</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
