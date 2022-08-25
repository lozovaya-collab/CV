<template>
  <div class="contacts">
    <headline>КОНТАКТЫ</headline>
    <list :items="contacts"></list>
  </div>
</template>

<script>
import List from "@/components/UI/List";
import Headline from "@/components/UI/Headline";

export default {
  name: "my-contacts",
  props: ["contacts"],
  components: { list: List, headline: Headline },
};
</script>

<style lang="scss">
@import "../../scss/main.scss";

.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
