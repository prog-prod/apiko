<template>
  <div>
    <header-component v-on:show-liked="showLiked">
      <template v-slot:navbar-nav>
        <li><router-link class="btn btn-green" to="/">Back</router-link></li>
      </template>
    </header-component>
    <page-content>
      <div class="container">
        <div class="card">
          <h3 class="card__title">Add Product</h3>
          <form @submit.prevent="addProduct(title,location,description,img,price)" action="">
            <div class="form-group">
              <label for="title">Title <span>*</span></label>
              <input type="text" id="title" v-model="title" class="form-control" placeholder="For Example: Iron man suit" required>
            </div>
            <div class="form-group">
              <label for="location">Location <span>*</span></label>
              <input type="text" id="location" v-model="location" class="form-control" placeholder="For example: Los Angeles, CA" required>
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea type="text" id="description" v-model="description" class="form-control" placeholder="For example: Iron man suit"></textarea>
            </div>
            <div class="form-group">
              <label for="photos">Photos</label>
              <input type="text" id="photos" v-model="img" class="form-control" placeholder="For example: Los Angeles, CA">
            </div>
            <div class="form-group mb-0">
              <label for="price">Price</label>
              <input type="number" id="price" v-model="price" class="form-control" placeholder="For example: Los Angeles, CA">
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-lg btn-green">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <footer-component></footer-component>
    </page-content>
  </div>
</template>

<script>
import HeaderComponent from "@/components/layout/Header";
import FooterComponent from "@/components/layout/Footer";
import PageContent from "@/components/layout/PageContent";
import {db} from "@/db";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AddProduct",
  data: () => ({
    title: '',
    location: '',
    description: '',
    img: '',
    price: 0
  }),
  components: {
    HeaderComponent,
    FooterComponent,
    PageContent
  },
  computed:{
    ...mapGetters(['showLikedProducts'])
  },
  methods:{
    ...mapActions(['changeShowLikedProducts']),
    showLiked(){
      this.changeShowLikedProducts(true);
      this.$router.replace('/');
    },
    addProduct(title,location, description, img, price){
      const liked = false;
      db.collection('products').add({ title,location, description, img, price ,liked})
      this.$router.replace('/');
    }

  }
}
</script>

<style lang="scss" scoped>
  .card{
    background: #FFFFFF;
    box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
    border-radius: 7px;
    padding:36px 236px 32px;

    .btn{
      margin-top:32px;
      max-width: 377px;
    }
    textarea{
      height: 183px;
    }
    label{
      span{
        font-size: 12px;
        line-height: 14px;
        /* identical to box height */

        letter-spacing: 0.3px;
        text-transform: uppercase;

        color: #FF0000;
      }
    }
    input,textarea{
      padding-top: 19px;
      padding-left: 22px;
      padding-bottom: 21px;

      &::placeholder {
        font-size: 16px;
        line-height: 18px;
        letter-spacing: 0.4px;
        font-weight: 300;
        color: rgba(102, 102, 102, 0.466455);
      }
    }
  }
  @media (max-width: 992px){
    .card{
      padding-left: 20px;
      padding-right: 20px;
    }
  }
</style>