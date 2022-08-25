<template>
  <div class="jobs">
    <div class="jobs_wrapper">
      <p>Об опыте работы</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-jobs",
};
</script>

<style lang="scss">
@import "../scss/main.scss";
.jobs {
  display: flex;
  justify-content: center;
  &_wrapper {
    width: 48%;
    height: 70vh;
    border: 1px solid $black;
  }
}
</style>
