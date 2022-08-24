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
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap");
body {
  color: black;
  background: white;
  margin: 50px 70px;
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
