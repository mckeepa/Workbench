<template>
<div>
  <h1>Name: {{name}} </h1>
    <nav><router-link to="/">Home</router-link></nav>
    <nav><router-link to="/tasks">Tasks</router-link></nav>
    <v-btn  color="primary" @click="displayName('new name')">Success</v-btn>
</div>
</template>

<script>
// import Menu from '../components/navigation/menu'
export default {
  params: {name: 'Task Name'},
  name: 'Tasks',
  data: () => ({
    name: 'task'
  }),
  watch: {

  },
  methods: {
    displayName(name) {
      this.$emit("changeName", this.welcomeMsg);
    }
  },
  components: {
    //   Menu
  }
}
</script>
