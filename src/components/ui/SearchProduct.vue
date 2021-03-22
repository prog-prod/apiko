<template>
  <div class="container-small">
    <div class="wrapper">
      <div class="search-input">
          <search-icon></search-icon>
          <input type="text" v-model="searchText"  placeholder="Search products by name">
      </div>
      <div class="location-input">
        <location-icon></location-icon>
        <input type="text" v-model="location" placeholder="Location">
      </div>
      <div class="btn btn-lg" @click="search">SEARCH</div>
    </div>
  </div>
</template>

<script>
import SearchIcon from "@/components/ui/icons/SearchIcon";
import LocationIcon from "@/components/ui/icons/LocationIcon";

export default {
  name: "SearchProduct",
  data: () => ({
    searchText: '',
    location: ''
  }),
  methods:{
    search(){
      this.$emit('search',this.searchText, this.location)
    },
  },
  components:{
    SearchIcon,
    LocationIcon
  }
}
</script>

<style lang="scss" scoped>
  .container-small{
    padding: 0 10px 14px 10px;
  }
  .search-icon,.location-icon{
    position: absolute;
    left: 21px;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .location-icon{
    left:14px;
  }
  .btn{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    height: 100%;
    font-weight: 300;
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

    font-size: 15px;
    font-weight: 300;
    &::placeholder{
      font-size: 15px;
      line-height: 31px;
      /* identical to box height, or 207% */
      color: rgba(123, 123, 123, 0.776523);
      font-weight: 300;
    }
  }
  .wrapper{

    margin: 0 auto;
    display: grid;
    grid-column-gap: 5px;
    grid-row-gap: 10px;
    grid-template-columns: 60% 1fr 1fr;
    .search-input, .location-input {
      position: relative;
      background: #FFFFFF;
      border-radius: 4px;
      padding-top: 11px ;
      padding-bottom: 8px ;
      padding-left: 52px ;
    }
    .location-input{
      padding-left: 38px ;
    }
  }
@media (max-width:524px) {
  .wrapper{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    .btn{
      height: 52px;
      margin-top:10px;
    }
  }
}
</style>