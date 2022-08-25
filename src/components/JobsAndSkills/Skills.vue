<template>
  <div class="skills">
    <headline>НАВЫКИ</headline>
    <list-default class="skills_list" :mark="null" :items="skills"></list-default>
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
      skills: "JobsAndSkillsModule/GET_SKILLS",
    }),
  },
  watch: {},
  methods: {},
  beforeMount() {},
};
</script>

<style lang="scss">
@import "../../scss/main.scss";

.skills {
  @include fontText($black, 400);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  &_list {
    width: auto;
    margin: 20px 0 0 0;
  }
}
</style>
