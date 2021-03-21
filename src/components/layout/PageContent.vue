<template>
  <div class="page-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PageContent"
}
</script>

<style scoped>
  .page-content{
    padding: 20px;
  }
</style>