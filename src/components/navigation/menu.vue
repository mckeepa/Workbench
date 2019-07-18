<template>
      <v-list>
      
        <v-list-tile @click="navigateTo('home')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="navigateTo('tasks')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>View IP Right</v-list-tile-title>
        </v-list-tile>
  
        <v-list-group
          prepend-icon="account_circle"
          value="true"
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Tasks</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-group
            no-action
            sub-group
            value="true"
          >
            <template v-slot:activator>
              <v-list-tile @click="navigateTo('tasks')">
                <v-list-tile-title>Examinination</v-list-tile-title>
              </v-list-tile>
            </template>
            <template v-slot:activator>
              <v-list-tile @click="navigateTo('documents')">
                <v-list-tile-title>Documents</v-list-tile-title>
              </v-list-tile>
            </template>
  
            <v-list-tile
              v-for="(exam, i) in exams"
              :key="i"
              @click="alert('clicked')"
            >
              <v-list-tile-title v-text="exam[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="exam[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
  
          <v-list-group
            sub-group
            no-action
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Actions</v-list-tile-title>
              </v-list-tile>
            </template>
            <v-list-tile
              v-for="(crud, i) in cruds"
              :key="i"
              @click="alert('clicked')"
            >
              <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
      </v-list>


</template>

<script>

export default {
  name: 'navigation',
  data: () => ({
    exams: [
      ['Document Management', 'people_outline'],
      ['CPC', 'settings']
    ],
    cruds: [
      ['Create', 'add'],
      ['Read', 'insert_drive_file'],
      ['Update', 'update'],
      ['Delete', 'delete']
    ],
    drawer: true,
   
  }),
  methods: {
    navigateTo: function(location){
        this.$router
        .push({
          name: location // 'migration'
        })
    },
    alert: function (message) {
      alert(message);
    },
    logout: function () {
      alert('Logout')      
    },
    action: function (item) {
      this.$router
        .push({
          name: 'migration'
        })
    }
  }
}
</script>
