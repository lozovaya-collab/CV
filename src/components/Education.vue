<template>
  <div class="education">
    <div class="education_wrapper">
      <headline>ОБРАЗОВАНИЕ</headline>
      <div
        class="education_item"
        v-for="(education, index) in educations"
        :key="index"
      >
        <div class="education_item__period">
          <span>{{ education.dateStart }}</span> -
          <span>{{
            education.dateEnd === null ? "наст. время" : education.dateEnd
          }}</span>
        </div>
        <div class="education_item__description">
          <span class="education_item__description name">{{
            education.university
          }}</span>
          <span class="education_item__description level">{{
            education.level
          }}</span>
          <span class="education_item__description subtitle">{{
            education.subtitle
          }}</span>
        </div>
      </div>
    </div>
    <div class="education_wrapper">
      <headline>ТРЕНИНГИ</headline>
      <div
        class="education_item"
        v-for="(training, index) in trainings"
        :key="index"
      >
        <div class="education_item__period">
          <span>{{ training.dateStart }}</span> -
          <span>{{
            training.dateEnd === null ? "наст. время" : training.dateEnd
          }}</span>
        </div>
        <div class="education_item__description">
          <span class="education_item__description name">{{
            training.training
          }}</span>
          <a
            class="education_item__description sertificate"
            :href="training.sertificate"
            target="_blank"
          >
            Сертификат
          </a>
          <span class="education_item__description subtitle">{{
            training.subtitle
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headline from "@/components/UI/Headline";
import { mapGetters } from "vuex";

export default {
  name: "my-edu",
  components: {
    headline: Headline,
  },
  computed: {
    ...mapGetters({
      educations: "EducationModule/GET_UNIVERSITIES",
      trainings: "EducationModule/GET_TRAININGS",
    }),
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
.education {
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
  }
  &_wrapper {
    width: 48%;
    height: 70vh;
    @media screen and (max-width: 960px) {
      width: 100%;
      height: auto;
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 150px;
      }
    }
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
      @media screen and (max-width: 1200px) {
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
        margin-bottom: 15px;
        width: 100%;
      }
      .level {
        @include fontText($black, 500);
        width: 100%;
        margin-bottom: 15px;
      }
      .sertificate {
        @include fontText($black, 500);
        width: 100%;
        margin-bottom: 15px;
        &:hover {
          color: $blue;
          @include fontTitle($black, 500);
        }
      }
      .subtitle {
        @include fontText($black, 400);
        width: 100%;
        font-size: 14px;
      }
    }
  }
}
</style>
