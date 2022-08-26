<template>
  <div class="info">
    <img src="../../assets/avatar.png" alt="Avatar" class="info_avatar" />
    <div class="info_wrapper">
      <p class="info_FIO">{{ personName }}</p>
      <p class="info_occupation">{{ personJob }}</p>
    </div>
    <a target="_blank" :href="personCV"
      ><img src="../../assets/file.png" alt="Icon File Download" class="info_icon"
    /></a>
  </div>
</template>

<script>
export default {
  name: "my-info",
  props: ["personName", "personJob", "personCV"],
};
</script>

<style lang="scss">
@import "../../scss/main.scss";

.info {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 35%;
  background: $blue;
  border-radius: 40px;
  padding: 20px;
  box-sizing: border-box;
  &_avatar {
    height: 150px;
    margin-right: 30px;
  }
  &_FIO {
    @include fontTitle($white, 600);
    font-size: 24px;
    line-height: 29px;
    width: 60px;
  }
  &_occupation {
    @include fontText($white, 400);
    color: white;
    font-size: 18px;
  }
  &_icon {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 30px;
    right: 30px;
  }
}
</style>
