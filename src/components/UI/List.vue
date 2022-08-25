<template>
  <ul class="list-default">
    <li class="list-default_item" v-for="(item, index) in items" :key="index">
      <span class="list-default_item__mark">{{ mark }}</span>
      <p class="list-default_item__detail">{{ item.text }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "list-default",
  props: ["items", "mark"],
};
</script>

<style lang="scss">
@import "../../scss/main.scss";

.list-default {
  margin-top: 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  &_item {
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    margin: 0 0 10px 0;
    background: none;
    &__mark {
      margin-right: 15px;
    }
    &__detail {
      @include fontText($black, 400);
      font-size: 14px;
      margin: 0;
    }
  }
}
</style>
