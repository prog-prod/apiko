<template>
  <header>
    <div class="container">
      <div class="header-container">
        <div class="header-container__logo">
          <img src="../../assets/Logofull.svg" alt="">
        </div>
        <nav class="navbar-nav">
          <ul>
            <li><router-link class="btn btn-green" to="#">Sell</router-link></li>
            <li v-if="$route.name === 'register'"><router-link class="nav-link" to="/login">Login</router-link></li>
            <li v-else-if="$route.name === 'login'"><router-link class="nav-link" to="/register">Register</router-link></li>
            <li>
              <a href="#">
                <heart-icon fill="#33333A"></heart-icon>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import HeartIcon from "@/components/icons/HeartIcon";
export default {
name: "HeaderGuest",
  components:{
    HeartIcon
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    //align-items: space-between;
    justify-content: space-between;
  }
  .nav-link{
    line-height: 40px;
  }
  .btn{
    text-transform: uppercase;
  }
  .heart-icon{
  }
</style>