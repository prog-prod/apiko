<template>
  <div>
    <header-user-component></header-user-component>

    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderUserComponent from "@/components/layout/HeaderUser";
import FooterComponent from "@/components/layout/Footer";
export default {
  name: "Products",
  components: {
    HeaderUserComponent,
    FooterComponent
  }
}
</script>

<style scoped>
  header{
    background: linear-gradient(180deg, #090810 0%, #171236 100%);
  }
</style>