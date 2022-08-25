<template>
  <div class="headline">
    <h3 class="headline_title"><slot></slot></h3>
    <div class="headline_divider"></div>
  </div>
</template>

<script>
export default {
  name: "main-headline",
};
</script>

<style lang="scss">
@import "../../scss/main.scss";

.headline {
  width: 90%;
  &_title {
    @include fontTitle($black, 600);
    width: 100%;

    margin: 5px 0;
    text-align: center;
  }
  &_divider {
    width: 100%;
    height: 0px;
    background: $blue;
    border: 1px solid $blue;
  }
}
</style>
