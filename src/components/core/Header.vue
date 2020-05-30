<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
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

    <v-spacer></v-spacer>

    <v-btn
      class="ma-2"
      outlined
      :to="{ name: 'Versions'}"
    >
      {{ appVersion }}
    </v-btn>
  </v-app-bar>
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
      //
    };
  },
};
</script>
