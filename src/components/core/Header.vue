<template>
  <div>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        temporary
      >
        <v-list
          nav
        >
          <v-list-item
            v-for="(menuItem, i) in mainMenuItems"
            :key="i"
            :to="{ name: menuItem.routeName }"
            :exact="menuItem.exact || false"
          >
            <v-list-item-icon>
              <v-icon> {{ menuItem.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click.stop="drawer = !drawer"
      />

      <div class="d-flex align-center mr-3">
        <v-btn
          icon
          class="mr-4"
          :to="{ name: 'Home'}"
        >
          <v-icon>
            mdi-palette-swatch
          </v-icon>
        </v-btn>

        <h2>Project-Name</h2>
      </div>

      <v-toolbar-items class="hidden-xs-only">
          <v-btn
            text
            v-for="(menuItem, i) in mainMenuItems"
            :key="i"
            :to="{ name: menuItem.routeName }"
            :exact="menuItem.exact || false"
          >
            <span>{{ menuItem.title }}</span>
            <v-icon> {{ menuItem.icon }} </v-icon>

          </v-btn>
        </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-btn
        class="ma-2"
        outlined
        :to="{ name: 'Version'}"
        exact
      >
        {{ appVersion }}
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TopBar',

  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'appVersion',
    ]),
  },

  data() {
    return {
      drawer: false,
      mainMenuItems: [
        {
          title: 'Home',
          icon: 'mdi-home',
          routeName: 'Home',
          exact: true,
        },
        {
          title: 'About',
          icon: 'mdi-information',
          routeName: 'About',
        },
        {
          title: 'Version',
          icon: 'mdi-information',
          routeName: 'Version',
        },
      ],
    };
  },
};
</script>
