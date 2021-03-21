<template>
  <header :class="{'dark': headerType === 'dark'}">
    <div class="container">
      <div class="header-container">
        <div class="header-container__logo">
          <logo v-if="headerType === 'dark'" type="dark"></logo>
          <logo v-else type="light"/>
        </div>
        <nav class="navbar-nav">
          <ul>
            <slot name="navbar-nav">
              <li><router-link class="btn btn-green" to="#">Sell</router-link></li>
              <li v-if="$route.name === 'register'"><router-link class="nav-link" to="/login">Login</router-link></li>
              <li v-else-if="$route.name === 'login'"><router-link class="nav-link" to="/register">Register</router-link></li>
            </slot>
            <li>
              <a @click.prevent="showLiked" >
                <heart-icon :fill="this.liked ? '#349A89' : headerType === 'dark' ? '#ffffff' : '#33333A'"></heart-icon>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <slot name="container"></slot>
    </div>
  </header>
</template>

<script>
import HeartIcon from "@/components/ui/icons/HeartIcon";
import Logo from "@/components/ui/Logo";
export default {
name: "HeaderGuest",
  props:[
      'type',
      'liked'
  ],
  computed:{
    headerType(){
      return  this.type ? this.type : 'dark'
    }
  },
  methods:{
    showLiked(){
      return this.$emit('show-liked')
    }
  },
  components:{
    HeartIcon,
    Logo
  }
}
</script>

<style lang="scss" scoped>
  header.dark{
    color:white;
    padding-bottom: 14px;
    background: linear-gradient(180deg, #090810 0%, #171236 100%);
    .navbar-nav{
      color:white;
    }
  }
  .wrapper {
    justify-content: space-between;
  }
  .nav-link{
    line-height: 40px;
  }
  .btn{
    text-transform: uppercase;
  }
  .heart-icon{
    cursor: pointer;
  }
</style>