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

<style lang="scss" scoped>
.description {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;
  padding: 20px;
  border: 5px solid #005f95;
  border-radius: 40px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  box-sizing: border-box;
  &_text {
    line-height: 25px;
    & > p {
      text-align: justify;
      margin: 0 0 5px 0;
    }
  }
  &_location {
    display: flex;
    align-items: center;
    font-weight: 500;
    &__icon {
      width: 20px;
      height: 20px;
      margin-right: 15px;
    }
  }
}
</style>
