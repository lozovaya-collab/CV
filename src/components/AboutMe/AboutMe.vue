<template>
  <div class="about-me">
    <div class="about-me_wrapper">
      <my-info :person-name="FIO" :person-job="job" :person-CV="urlCV"></my-info>
      <my-description :profile="profile" :location="location"></my-description>
    </div>
    <div class="about-me_wrapper">
      <my-contacts class="about-me_wrapper__container" :contacts="contacts"></my-contacts>
    </div>
  </div>
</template>

<script>
import Info from "./Info.vue";
import Description from "./Description";
import Contacts from "./Contacts";

import { mapGetters } from "vuex";

export default {
  name: "about-me",
  components: {
    "my-info": Info,
    "my-description": Description,
    "my-contacts": Contacts,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      FIO: "AboutMeModule/GET_FIO",
      job: "AboutMeModule/GET_JOB",
      urlCV: "AboutMeModule/GET_URL_CV",
      profile: "AboutMeModule/GET_PROFILE",
      location: "AboutMeModule/GET_LOCATION",
      contacts: "AboutMeModule/GET_CONTACTS",
    }),
  },
};
</script>

<style lang="scss">
@import "../../scss/main.scss";

.about-me {
  display: flex;
  justify-content: space-between;
  &_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 48%;
    height: 70vh;
    &__container {
      width: 70%;
    }
  }
}
</style>
