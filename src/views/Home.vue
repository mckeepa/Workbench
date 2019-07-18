<template>
<div>
  
  <h1>Home page....</h1>
    <nav><router-link to="/">Home</router-link></nav>
    <nav><router-link to="/tasks">Tasks</router-link></nav>
    <nav><router-link to="/IRRight/123">View IP Right 123</router-link></nav>
    <HelloWorld />
</div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";


export default {
  components: {
    HelloWorld
  }
}
</script>
