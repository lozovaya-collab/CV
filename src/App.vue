<template>
  <router-view />
  <navigation-menu></navigation-menu>
</template>

<script>
import NavigationMenu from "@/components/NavigationMenu";
export default {
  name: "App",
  components: { NavigationMenu },
};
</script>

<style>
</style>
