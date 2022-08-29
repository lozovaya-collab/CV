<template>
  <div class="description">
    <div class="description_text">
      <p v-for="(text, index) in profile" :key="index">
        {{ text }}
      </p>
    </div>

    <div class="description_location">
      <img
        src="../../assets/maps-and-flags.png"
        alt="Icon Location"
        class="description_location__icon"
      />
      <span class="description_location__city">{{ location }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-description",
  props: ["profile", "location"],
};
</script>

<style lang="scss">
@import "../../scss/main.scss";

.description {
  @include fontText($black, 400);
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;
  padding: 20px;
  border: 5px solid $blue;
  border-radius: 40px;
  box-sizing: border-box;
  @media screen and (max-width: 1100px) {
    height: 65%;
    font-size: 14px;
  }

  &_text {
    line-height: 25px;
    & > p {
      text-align: justify;
      margin: 0 0 5px 0;
    }
  }
  &_location {
    @include fontText($black, 500);
    display: flex;
    align-items: center;
    @media screen and (max-width: 480px) {
      margin-top: 15px;
    }
    &__icon {
      width: 20px;
      height: 20px;
      margin-right: 15px;
    }
  }
}
</style>
