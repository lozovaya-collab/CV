<template>
  <div class="jobs-and-skills">
    <div class="jobs-and-skills_wrapper">
      <my-jobs></my-jobs>
    </div>
    <div class="jobs-and-skills_wrapper">
      <my-skills></my-skills>
    </div>
  </div>
</template>

<script>
import Jobs from "@/components/JobsAndSkills/Jobs";
import Skills from "@/components/JobsAndSkills/Skills";

export default {
  name: "my-jobs-and-skills",
  components: {
    "my-jobs": Jobs,
    "my-skills": Skills,
  },
};
</script>

<style lang="scss">
@import "../../scss/main.scss";

.jobs-and-skills {
  display: flex;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
  }
  
  &_wrapper {
    display: flex;
    justify-content: center;
    width: 30%;
    height: 70vh;
    
    &:first-child{
      width: 70%;
    }
    @media screen and (max-width: 960px) {
      width: 100%;
      height: auto;
    }
    @media screen and (max-width: 600px) {
      margin-bottom: 40px;
    }
  }
  
}
</style>
