<template>
  <nav>
    <aside class="panel">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </aside>
    <ul class="menu">
      <li v-for="(route, index) in routes" :key="index">
        <router-link :to="route.path">
          <img :alt="route.name" :src="require(`../../assets/${route.icon}`)"
        /></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "navigation-menu",
  computed: {
    ...mapGetters({
      routes: "RouterModule/GET_ROUTES",
    }),
  },
  methods: {
    ...mapActions(["getRouter"]),
  },
  beforeMount() {
    this.$store.dispatch("RouterModule/getRouter", this.$router);
  },
};
</script>

<style lang="scss">
@import "../../scss/main.scss";
:root {
  --size: 80px;
}

ul {
  display: flex;
  justify-content: center;
  background: inherit;
  padding: 0 calc(var(--size) / 2);
  li {
    width: var(--size);
    height: var(--size);
    background: $blue;
    border-radius: 50%;
    margin: 0 3px;
    color: $black;
    position: relative;
    @media screen and (max-width: 600px) {
      background: none;
    }
  }
}

.panel ul li {
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 100%;
    background: inherit;
    transition: all 0.85s ease;
    transform: translate3d(0, 0, 0); // performance / stability
    will-change: transform; // performance / stability
    backface-visibility: hidden; // performance / stability
  }
  &.hover:before {
    transition: all 0.5s cubic-bezier(0.09, 1.98, 0.41, 0.71);
  }
}

.menu {
  position: absolute;
  z-index: 1;
  background: transparent;
  text-align: center;
  @media screen and (max-width: 370px) {
    background: $blue;
  }
}

.menu li {
  background: transparent;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.85s ease;
  height: calc(var(--size) * 2);
  &:hover {
    transition: all 0.5s cubic-bezier(0.09, 1.98, 0.41, 0.71);
    transform: translateY(-53%);
    color: white;
  }

  a {
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transition: color 0.5s ease;
    width: 100%;
    height: 100%;
  }
}

nav {
  display: flex;
  justify-content: center;
  margin: 50px;
  background: $blue;
  border-radius: 120px;
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
}
</style>
