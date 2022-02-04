<template>
  <v-app class="h-100 ma-5 pa-5">
    <router-view class="h-100 pa-10"> </router-view>
    <!-- Snackbar -->

  </v-app>
</template>

<script>
//import { eventBus } from "@/main";
export default {
  name: "App",
  data() {
    return {
    };
  },
  computed: {},
  watch: {
  },
  
  methods: {},
};
</script>

<style scoped>
body {
  background: white !important;
}
</style>
<style>
html {
  overflow: hidden !important;
  scroll-behavior: smooth !important;
  --scrollbarBG: #cfd8dc;
  --thumbBG: #90a4ae;
}
.v-application--wrap {
  min-height: 0vh !important;
}
</style>