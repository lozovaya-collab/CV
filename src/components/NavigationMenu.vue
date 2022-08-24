<template>
  <div>
    <nav>
      <aside class="goo">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </aside>
      <ul class="menu">
        <li>
          <router-link to="/">
            <img class="img-nav" alt="Info" src="../assets/id-card.png"
          /></router-link>
        </li>
        <li>
          <router-link to="/jobs">
            <img class="img-nav" alt="Job" src="../assets/suitcase.png"
          /></router-link>
        </li>
        <li>
          <router-link to="/education"
            ><img class="img-nav" alt="Education" src="../assets/mortarboard.png"
          /></router-link>
        </li>

        <li>
          <router-link to="/skills">
            <img class="img-nav" alt="Skills" src="../assets/skills.png"
          /></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navigation-menu",
};
</script>

<style lang="scss">
.img-nav {
  height: 60px;
  width: 60px;
}
:root {
  --default: #005f95;
  --hover: #efceff;
  --size: 80px;
  --distance: calc(var(--size) * -1.1);
}

.goo,
.goo ul {
  background: inherit;
  filter: url("#schlurp"); // this is reference to svg filter in HTML.
}

ul {
  display: flex;
  justify-content: center;
  background: inherit;
  padding: 0 calc(var(--size) / 2);
  li {
    width: var(--size);
    height: var(--size);
    background: var(--default);
    margin: 0 3px;
    color: black;
    position: relative;
  }
}

.goo ul li {
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
    transform: translate3d(0, var(--distance), 0);
    background: var(--hover);
  }
}

.menu {
  position: absolute;
  z-index: 1;
  background: transparent;
  text-align: center;
  // overflow: hidden;
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
    color: rgba(0, 0, 0, 0.6);
    transition: color 0.5s ease;
    width: 100%;
    height: 100%;
  }
  &:hover a {
    color: rgba(0, 0, 0, 0.9);
  }
}

nav {
  display: flex;
  justify-content: center;
  margin: 50px;
  background: var(--default);
  border-radius: 120px;
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
}
</style>
