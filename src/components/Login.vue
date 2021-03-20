<template>
  <div>
    <header-guest></header-guest>
    <div class="container">
      <div class="page-content">
        <div class="card">
          <h3 class="card__title">Login</h3>
          <form @submit.prevent="login" action="">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" class="form-control" placeholder="Example@gmail.com">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <div class="input-group">
                <input :type="typePassw" id="password" class="form-control" required>
                <span class="input-btn">
                  <i class="eye-icon" @click="typePassw = typePassw=== 'password' ? 'text' : 'password'"></i>
                </span>
                <small>Don’t remember password?</small>
              </div>
            </div>
            <button type="submit" class="btn btn-lg btn-green">Continue</button>
          </form>
        </div>
        <div class="card text-center">
          I have no account, <router-link class="text-green" to="/register">Register</router-link>
        </div>
      </div>
    </div>
    <footer-component/>
  </div>
</template>

<script>
import HeaderGuest from "@/components/layout/HeaderGuest";
import FooterComponent from "@/components/layout/Footer";
export default {
  name: "Login",
  data: () => ({
    typePassw: 'password',
  }),
  components: {
    HeaderGuest,
    FooterComponent
  },
  methods: {
    login(){
      this.$router.replace('/');
    },
  }
}
</script>

<style lang="scss" scoped>
  .page-content {
    padding: 55px 10px;
    .card{
      margin: 0 auto;
      padding:25px 24px 21px 24px;
      max-width: 425px;
      h4{
        padding:25px;
      }
      &:last-child{
        margin-top:24px;
        padding-top: 30px;
        padding-bottom: 30px;
      }
    }
  }
</style>