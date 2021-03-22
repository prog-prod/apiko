<template>
  <div>
    <header-component v-on:show-liked="showLiked" type="light"></header-component>
    <div class="container">
      <div class="page-content">
        <div class="card">
          <h3 class="card__title">Register</h3>
          <form @submit.prevent="register" action="">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" maxlength="255" v-model="email" id="email" class="form-control" placeholder="Example@gmail.com">
            </div>
            <div class="form-group">
              <label for="full-name">Full name</label>
              <input type="text"  maxlength="100" pattern="[A-Za-z 0-9]*" v-model="fullName" id="full-name" class="form-control" placeholder="Tony Stark">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <div class="input-group">
                <input :type="typePassw" pattern="[A-Za-z0-9]{6,12}" maxlength="255" v-model="password" id="password" class="form-control" required>
                <span class="input-btn">
                  <i class="eye-icon" @click="typePassw = typePassw=== 'password' ? 'text' : 'password'"></i>
                </span>
              </div>
            </div>
            <div class="form-group">
              <label for="password-again">Password again</label>
              <div class="input-group">
                <input :type="typePasswAgain" pattern="[A-Za-z0-9]{6,12}" maxlength="255" v-model="passwordRepeat" id="password-again" class="form-control" required>
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
import HeaderComponent from "@/components/layout/Header";
import FooterComponent from "@/components/layout/Footer";
import {auth, db} from "@/db";
import {mapActions} from "vuex";
export default {
  name: "Register",
  data: () => ({
    typePassw: 'password',
    typePasswAgain: 'password',
    email:'',
    fullName:'',
    password:'',
    passwordRepeat:'',
  }),
  components: {
    HeaderComponent,
    FooterComponent
  },
  methods: {
    ...mapActions(['changeShowLikedProducts']),
    register(){
      if(this.password !== this.passwordRepeat){
        return this.$toastr.e('Password is not match')
      }

      auth.createUserWithEmailAndPassword(this.email, this.password).then( () => {
          db.collection('users').add({
            createdAt: new Date(),
            fullName: this.fullName,
            email: this.email
          })
      }).then( () => {
        this.$toastr.s('Account has been created successfully.')
        this.$router.replace('/');
      }).catch( d => this.$toastr.e(d.message));
    },
    showLiked(){
      this.changeShowLikedProducts(true);
      this.$router.replace('/');
    }
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