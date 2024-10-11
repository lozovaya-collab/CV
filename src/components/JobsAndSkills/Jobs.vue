<template>
  <div class="jobs">
    <headline>ОПЫТ РАБОТЫ</headline>
    <div class="jobs-wrapper">
      <div class="jobs_item" v-for="(job, index) in jobs" :key="index">
      <div class="jobs_item__period">
        <span>{{ job.dateStart }}</span> -
        <span>{{ job.dateEnd === null ? "наст. время" : job.dateEnd }}</span>
      </div>
      <div class="jobs_item__description">
        <span class="jobs_item__description name">{{ job.company }}</span>
        <p class="jobs_item__description job-description">{{ job.description }}</p>
        <p class="jobs_item__description occupation">
          Роль на проекте: <span>{{ job.occupation }}</span>
        </p>
        <p class="jobs_item__description occupation">
          Команда: <span>{{ job.team }}</span>
        </p>
        <p class="jobs_item__description occupation">
          Технологии: <span>{{ job.stack }}</span>
        </p>
        <h3 class="jobs_title" v-if="job.projects.length">Проекты: </h3>
        <list-default v-if="job.projects.length" :mark="'&#8212;'" :items="job.projects"></list-default>
        <h3 class="jobs_title">Задачи: </h3>
        <list-default :mark="'&#8212;'" :items="job.responsibilities"></list-default>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
import Headline from "@/components/UI/Headline";
import List from "@/components/UI/List";
import { mapGetters } from "vuex";

export default {
  name: "my-jobs",
  components: {
    headline: Headline,
    "list-default": List,
  },
  computed: {
    ...mapGetters({
      jobs: "JobsAndSkillsModule/GET_JOBS",
    }),
  },
  watch: {},
  methods: {},
  beforeMount() {},
};
</script>

<style lang="scss">
@import "../../scss/main.scss";

.jobs {
  width: 100%;
  &-wrapper{
    overflow-y: auto;
      overflow-x: hidden;
      height: 70vh;
  }
  &_title{
    width: 100%;
    @include fontText($black, 600);
    margin-bottom: 10px;
  }
  &_item {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 0 0;
    width: 100%;
    @media screen and (max-width: 1200px) {
      flex-direction: column;
      justify-content: flex-start;
      border: 1px solid $blue;
      border-radius: 35px;
      padding: 20px;
      box-sizing: border-box;
    }
    &__period {
      @include fontText($black, 400);
      width: 50%;
      @media screen and (max-width: 960px) {
        width: 100%;
        font-size: 14px;
      }
    }
    &__description {
      display: flex;
      flex-direction: column;
      width: 50%;
      @media screen and (max-width: 1200px) {
        margin-top: 15px;
        width: 100%;
        font-size: 14px;
      }
      .name {
        @include fontText($black, 600);
        font-size: 20px;
        margin-bottom: 0 0 15px 0;
      }
      .job-description {
        width: 100%;
        @include fontText($black, 600);
        margin-bottom: 15px;
      }
      .occupation {
        @include fontText($black, 500);
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 5px;
        & > span {
          @include fontText($black, 400);
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
