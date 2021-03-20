<template>
  <div class="container">
    <div class="wrapper">
      <div class="search-input">
        <input type="text" placeholder="Search products by name">
      </div>
      <div class="location-input">
        <input type="text" placeholder="Location">
      </div>
      <div class="btn btn-lg">SEARCH</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchProduct"
}
</script>

<style lang="scss" scoped>
.btn{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100%;
  background: #3E3961;
  border-radius: 4px;
}
input:focus{
  outline: none;
}
  input{
    border: none;
    width: 80%;
    height: 31px;
  }
  .container{
    max-width: 855px;
  }
  .wrapper{

    margin: 0 auto;
    display: grid;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    align-items: center;
    grid-template-columns:467px 1fr 1fr;
    .search-input, .location-input {

      background: #FFFFFF;
      border-radius: 4px;
      padding-top: 11px ;
      padding-bottom: 8px ;
      padding-left: 52px ;
    }
  }
</style>