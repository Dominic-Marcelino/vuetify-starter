<template>
  <v-app>
    <Header />

    <v-content>
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/core/Header.vue';

export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
