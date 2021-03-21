<template>
  <div class="logo">
    <img v-if="type === 'dark'" src="../../assets/LogoDark.svg" alt="">
    <img v-else src="../../assets/LogoLight.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "Logo",
  props:{
    type: String // dark,light
  }
}
</script>

<style lang="scss" scoped>
  .logo{
    display: inline-block;
    width: 100%;
    img{
      width: 100%;
    }
  }
</style>