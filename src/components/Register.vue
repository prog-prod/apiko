<template>
  <div>
    <header-guest></header-guest>
    <div class="container">
      <div class="page-content">
        <div class="card">
          <h3 class="card__title">Register</h3>
          <form @submit.prevent="register" action="">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" class="form-control" placeholder="Example@gmail.com">
            </div>
            <div class="form-group">
              <label for="full-name">Full name</label>
              <input type="email" id="full-name" class="form-control" placeholder="Tony Stark">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <div class="input-group">
                <input :type="typePassw" id="password" class="form-control" required>
                <span class="input-btn">
                  <i class="eye-icon" @click="typePassw = typePassw=== 'password' ? 'text' : 'password'"></i>
                </span>
              </div>
            </div>
            <div class="form-group">
              <label for="password-again">Password again</label>
              <div class="input-group">
                <input :type="typePasswAgain" id="password-again" class="form-control" required>
                <span class="input-btn">
                  <i class="eye-icon" @click="typePasswAgain = typePasswAgain === 'password' ? 'text' : 'password'"></i>
                </span>
              </div>
            </div>
            <button type="submit" class="btn btn-lg btn-green">Register</button>
          </form>
        </div>
        <div class="card text-center">
          I already have an account, <router-link class="text-green" to="/login">LOG IN</router-link>
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
  name: "Register",
  data: () => ({
    typePassw: 'password',
    typePasswAgain: 'password',
  }),
  components: {
    HeaderGuest,
    FooterComponent
  },
  methods: {
    register(){

    },
  }
}
</script>

<style lang="scss" scoped>
.page-content {
  padding: 55px 10px;
  //display: flex;
  //justify-content: center;
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