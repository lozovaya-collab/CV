<template>
  <div class="about-me">
    <div class="about-me_wrapper">
      <my-info :person-name="FIO" :person-job="job" :person-CV="urlCV"></my-info>
      <my-description
        :href-yelp-clone="hrefYelpCLone"
        :profile="profile"
        :location="location"
      ></my-description>
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
      hrefYelpCLone: "AboutMeModule/GET_HREF_YELP",
    }),
  },
};
</script>

<style lang="scss">
@import "../../scss/main.scss";

.about-me {
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 48%;
    height: 70vh;
    @media screen and (max-width: 960px) {
      height: 60vh;
      width: 90%;
    }
    @media screen and (max-width: 600px) {
      height: auto;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    &__container {
      width: 70%;
      @media screen and (max-width: 960px) {
        width: 90%;
      }
      @media screen and (max-width: 400px) {
        width: 100%;
      }
    }
  }
}
</style>
