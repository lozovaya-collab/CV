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

<style lang="scss" scoped>
.headline {
  width: 90%;
  &_title {
    color: #221f1f;
    width: 100%;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 600;
    margin: 5px 0;
    text-align: center;
  }
  &_divider {
    width: 100%;
    height: 0px;
    background: #005f95;
    border: 1px solid #005f95;
  }
}
</style>
