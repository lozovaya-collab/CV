<template>
  <div class="jobs-and-skills">
    <div class="jobs-and-skills_wrapper">
      <my-jobs></my-jobs>
    </div>
    <div class="jobs-and-skills_wrapper"></div>
  </div>
</template>

<script>
import Jobs from "@/components/JobsAndSkills/Jobs";

export default {
  name: "my-jobs-and-skills",
  components: {
    "my-jobs": Jobs,
  },
};
</script>

<style lang="scss">
@import "../../scss/main.scss";

.jobs-and-skills {
  display: flex;
  justify-content: space-between;
  &_wrapper {
    width: 48%;
    height: 70vh;
  }
}
</style>
