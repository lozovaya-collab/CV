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
.info {
  position: relative;
  display: flex;
  width: 100%;
  height: 30%;
  background: #005f95;
  border-radius: 40px;
  padding: 20px;
  box-sizing: border-box;
  &_avatar {
    height: 150px;
    margin-right: 30px;
  }
  &_FIO {
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 600;
    color: white;
    font-size: 24px;
    line-height: 29px;
    width: 60px;
  }
  &_occupation {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    color: white;
  }
  &_icon {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 30px;
  }
}
</style>
