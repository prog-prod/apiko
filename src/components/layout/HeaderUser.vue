<template>
  <header>
    <div class="container">
      <div class="header-container">
        <div class="header-container__logo">
          <img src="../../assets/LogoDark.svg" alt="">
        </div>
        <nav class="navbar-nav">
          <ul>
            <li><router-link class="btn btn-green" to="#">+ Add</router-link></li>
            <li><span>User</span></li>
            <li>
              <a href="#">
                <heart-icon fill="#ffffff"></heart-icon>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <search-component></search-component>
    </div>
  </header>
</template>

<script>
import HeartIcon from "@/components/ui/icons/HeartIcon";
import SearchComponent from "@/components/ui/SearchProduct";
export default {
  name: "HeaderUser",
  components:{
    HeartIcon,
    SearchComponent
  }
}
</script>

<style scoped>
  .navbar-nav{
    color:white;
  }
  header{
    padding-bottom: 14px;
  }
</style>