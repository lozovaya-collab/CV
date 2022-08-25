<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <navigation-menu></navigation-menu>
</template>

<script>
import NavigationMenu from "@/components/UI/NavigationMenu";
export default {
  name: "App",
  components: { NavigationMenu },
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
