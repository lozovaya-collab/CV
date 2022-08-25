<template>
  <div class="education">
    <div class="education_wrapper">
      <p>Высшее образование</p>
    </div>
    <div class="education_wrapper">
      <p>Тренинги</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-edu",
};
</script>

<style lang="scss">
@import "../scss/main.scss";
.education {
  display: flex;
  justify-content: space-between;
  &_wrapper {
    width: 48%;
    height: 70vh;
    border: 1px solid $black;
  }
}
</style>
