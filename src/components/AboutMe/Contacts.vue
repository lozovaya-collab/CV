<template>
  <div class="contacts">
    <headline>КОНТАКТЫ</headline>
    <list :items="contacts"></list>
  </div>
</template>

<script>
import ListLinks from "@/components/UI/ListLinks";
import Headline from "@/components/UI/Headline";

export default {
  name: "my-contacts",
  props: ["contacts"],
  components: { list: ListLinks, headline: Headline },
};
</script>

<style lang="scss">
@import "../../scss/main.scss";

.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 960px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 120px;
  }
}
</style>
