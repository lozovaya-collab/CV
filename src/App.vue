<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <navigation-menu></navigation-menu>
</template>

<script>
import NavigationMenu from "@/components/NavigationMenu";
export default {
  name: "App",
  components: { NavigationMenu },
};
</script>

<style lang="scss">
/* unimportant styles */

body {
  color: black;
  background: white;
  margin: 50px;
}

ul {
  list-style: none;
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s linear;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
