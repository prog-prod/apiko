<template>
  <div class="footer text-center">
    <span>Copyright © 2017. Privacy Policy.</span>
  </div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style lang="scss" scoped>
  .footer{
    position: absolute;
    width: 100%;
    overflow: hidden;
    bottom:0;
    height: 73px;
    background: rgba(192, 196, 206, 0.127321);
    span{
      font-family: Helvetica, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14.4px;
      line-height: 73px;
      color: #C0C4CE;
    }
  }
</style>