<template>
  <header :class="{'dark': headerType === 'dark'}">
    <div class="container">
      <div class="header-container">
        <div class="header-container__logo">
          <logo v-if="headerType === 'dark'" type="dark"></logo>
          <logo v-else type="light"/>
        </div>
        <div class="burger" :class="{'dark': headerType === 'light'}" @click="showCollapse"><img src="../../assets/burger.svg" alt=""></div>
        <nav class="navbar-nav collapse-content">
          <ul>
            <slot name="navbar-nav">
              <li><router-link class="btn btn-green" to="#">Sell</router-link></li>
              <li v-if="$route.name === 'register'"><router-link class="nav-link" to="/login">Login</router-link></li>
              <li v-else-if="$route.name === 'login'"><router-link class="nav-link" to="/register">Register</router-link></li>
            </slot>
            <template v-if="user">
              <li class="position-relative">
                <span class="dropdown-btn">{{user.email}}</span>
                <div class="dropdown-menu"><a href="#" @click="logout">Logout</a></div>
              </li>
            </template>
            <li>
              <a @click.prevent="showLiked" >
                <heart-icon :fill="this.liked ? '#349A89' : headerType === 'dark' ? '#ffffff' : '#33333A'"></heart-icon>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="mobile-menu" id="mobile-menu">
        <nav class="navbar-nav">
          <ul>
            <slot name="navbar-nav">
              <li><router-link class="btn btn-green" to="#">Sell</router-link></li>
              <li v-if="$route.name === 'register'"><router-link class="nav-link" to="/login">Login</router-link></li>
              <li v-else-if="$route.name === 'login'"><router-link class="nav-link" to="/register">Register</router-link></li>
            </slot>
            <template v-if="user">
              <li class="position-relative">
                <span class="dropdown-btn">{{user.email}}</span>
                <div class="dropdown-menu"><a href="#" @click="logout">Logout</a></div>
              </li>
            </template>
            <li>
              <a @click.prevent="showLiked" >
                <heart-icon :fill="this.liked ? '#349A89' : headerType === 'dark' ? '#ffffff' : '#33333A'"></heart-icon>
              </a>
            </li>
          </ul>
        </nav>
        <slot name="container"></slot>
      </div>
      <div class="collapse-content">
        <slot name="container"></slot>
      </div>
    </div>
  </header>
</template>

<script>
import HeartIcon from "@/components/ui/icons/HeartIcon";
import Logo from "@/components/ui/Logo";
import {auth} from "@/db";
import {mapActions, mapGetters} from "vuex";
import $ from 'jquery';

export default {
name: "HeaderGuest",
  data: () => ({
    showDropdown: false
  }),
  props:[
      'type', // can be dark / light
      'liked'
  ],
  computed:{
  ...mapGetters(['user']),
    headerType(){
      return  this.type ? this.type : 'dark'
    }
  },
  methods:{
    ...mapActions(['updateUser']),
    showLiked(){
      return this.$emit('show-liked')
    },
    logout(){
      auth.signOut().then( () => {
        this.$toastr.s('You are logged out successfully')
        this.$router.replace('/login')
        this.updateUser(null)
      }).catch(d => this.$toastr.e(d.message));
    },
    showCollapse(){
      $('.mobile-menu').slideToggle();
    }
  },
  mounted() {
    $('header .dropdown-btn').on('click', function () {
      $('.dropdown-menu').fadeToggle();
    })
  },
  components:{
    HeartIcon,
    Logo
  }
}
</script>

<style lang="scss">

header {
  .burger{
    display: none;
    &.dark{
      filter: invert(1);
    }
  }
  &.dark{
    color:white;
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
  .dropdown-menu{
    position: absolute;
    top:100%;
    background: white;
    z-index: 999;
    border-radius: 5px;
    color:#333;
    margin-top:10px;
    width: 100%;
    padding:5px 0 ;
    display: none;
    &> a{
      padding:5px 0 ;
      //border-radius: 5px;
      width: 100%;
      display: inline-block;
      &:hover{
        background: #5897fb;
        color:white;
      }
    }
  }
  .dropdown-btn{
    cursor: pointer;
    width: 100%;
  }
}
@media (max-width: 500px) {
  header .burger{
    display: block;
  }
  header .collapse-content{
    display: none;
  }
  .header-container{
    padding: 18px 25px !important;
  }
}
</style>