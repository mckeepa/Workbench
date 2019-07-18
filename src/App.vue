<template>
  <v-app id="inspire">
   <v-app id="inspire">
    <v-toolbar fixed app dark color="indigo"  :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Patents  {{this.$route.name}} : {{this.$route.params.name}} </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <div id="app">
      <v-navigation-drawer :clipped="clipped" v-model="drawer" enable-resize-watcher app dark class="primary lighten-3">
          <Menu />
      </v-navigation-drawer>
    </div>
      <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
   <!-- <v-content>
        <v-container fluid>
   <router-view/>
       
        </v-container>
      </v-content> -->

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019 IP Australia</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Menu from './components/navigation/menu.vue'

  export default {
    name: 'App',
    components: {
      Menu
    },
    data: () => ({
      drawer: null,
       clipped: false,
    }),
    props: {
      source: String
    }
  }
</script>