<template>
  <div class="jobs">
    <headline>ОПЫТ РАБОТЫ</headline>
    <div class="jobs_item" v-for="(job, index) in jobs" :key="index">
      <div class="jobs_item__period">
        <span>{{ job.dateStart }}</span> -
        <span>{{ job.dateEnd === null ? "наст. время" : job.dateEnd }}</span>
      </div>
      <div class="jobs_item__description">
        <span class="jobs_item__description name">{{ job.company }}</span>
        <span class="jobs_item__description occupation">{{ job.occupation }}</span>
        <list-default :items="job.responsibilities"></list-default>
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
      jobs: "JobsModule/GET_JOBS",
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
  &_item {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 0 0;
    width: 100%;
    &__period {
      @include fontText($black, 400);
      width: 50%;
    }
    &__description {
      display: flex;
      flex-direction: column;
      width: 50%;
      .name {
        @include fontText($black, 600);
        margin-bottom: 15px;
      }
      .occupation {
        @include fontText($black, 500);
        width: 100%;
      }
    }
  }
}
</style>
