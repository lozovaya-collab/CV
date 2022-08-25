<template>
  <div>
    <div class="skills">
      <div class="skills_wrapper">
        <p>Hard skills</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-skills",
};
</script>

<style lang="scss">
@import "../scss/main.scss";
.skills {
  display: flex;
  justify-content: center;
  &_wrapper {
    width: 48%;
    height: 70vh;
    border: 1px solid $black;
  }
}
</style>
