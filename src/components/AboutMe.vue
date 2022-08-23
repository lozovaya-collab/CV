<template>
  <div class="about-me">
    <div class="about-me_wrapper">
      <p>Фото и основная информация</p>
    </div>
    <div class="about-me_wrapper">
      <p>Контакты, гитхаб, обо мне</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-me",
};
</script>

<style lang="scss" scoped>
.about-me {
  display: flex;
  justify-content: space-between;
  &_wrapper {
    width: 48%;
    height: 70vh;
    border: 1px solid black;
  }
}
</style>