<template>
<div>
  <h1>Name: {{name}}</h1>
    <nav><router-link to="/">Home</router-link></nav>
    <nav><router-link to="/tasks">Tasks</router-link></nav>
    
</div>
</template>

<script>
// import Menu from '../components/navigation/menu'
export default {
  name: 'Documents',
  data: () => ({
    name: 'Documents'
  }),
  components: {
    //   Menu
  }
}
</script>
