<template>
  <ul class="list">
    <li v-for="(li, index) in items" :key="index" class="list__item">
      <img
        :src="require(`../../assets/${li.img}`)"
        :alt="li.img.replace('.png', '')"
        class="list__item icon"
      />
      <a class="list__item contact" :href="li.href">{{ li.text }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "list-elements",
  props: ["items"],
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";

.list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 90%;
  &__item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    background: none;
    .icon {
      margin-right: 15px;
      width: 30px;
      height: 30px;
    }
    .contact {
      @include fontText($black, 400);
      &:hover {
        color: $blue;
      }
    }
  }
}
</style>
