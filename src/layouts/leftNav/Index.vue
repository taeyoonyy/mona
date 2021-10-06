<template>
  <v-app>
    <left-nav />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import LeftNav from '@/components/LeftNav.vue';
export default {
  name: 'LeftNavLayout',
  components: {
    LeftNav
  }
};
</script>

<style></style>
