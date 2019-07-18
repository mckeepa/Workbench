<template>
<div>
  <h1>Name: {{name}}</h1>
 
    <nav><router-link to="/">Home</router-link></nav>
    <nav><router-link to="/tasks">Tasks</router-link></nav>
</div>
</template>

<script>
export default {
  name: 'ViewIPRight',
   data: () => ({
    name: 'View IP Right'
  }),
  components: {
 
  }
}
</script>
