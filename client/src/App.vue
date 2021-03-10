<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      :mini-variant="drawer"
     mobile-breakpoint="900"
     >
      <v-list-item link :to="item.to"  v-for="(item, i) in data"
          :key="i">
        <v-list-item-action>
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on">{{item.icon}}</v-icon>
            </template>
            <span>{{item.title}}</span>
          </v-tooltip>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item-content>
      
      </v-list-item>
          <v-divider />
    </v-navigation-drawer>

    <v-app-bar app dense permanent :clipped-left="$vuetify.breakpoint.lgAndUp"  flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{SystemName}}</v-toolbar-title>
      <v-spacer />
      <!-- <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on">mdi-logout</v-icon>
        </template>
        <span>Logout</span>
      </v-tooltip>-->
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    SystemName:'Hacchu Henkou Monitoring',
    drawer: true,
    data: [{
      title: 'On-Going',
      icon:'mdi-text-box-plus',
      to: '/'
    },
    {
      title: 'Reports',
      icon:'mdi-text-box-check-outline',
      to: '/reports'
    }]
    //
  })
};
</script>
<style scoped>
div.v-list-item__title {
  align-self: center;
  font-size: 13px;
}
</style>