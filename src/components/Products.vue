<template>
  <div>
<!--    header start -->
    <header-component :liked="showLikedProducts" v-on:show-liked="showLiked">
      <template v-slot:navbar-nav>
        <li><router-link class="btn btn-green" :to="{ name: 'add-product'}">+ Add</router-link></li>
      </template>
      <template v-slot:container>
        <search-component v-on:search="searchProduct"></search-component>
      </template>
    </header-component>
<!--    header end -->
<!--    page content -->
    <page-content>
      <filter-product
          v-on:price-min="filterPriceMin"
          v-on:price-max="filterPriceMax"/>

      <div class="container-small">
        <div class="products">
          <product-card v-for="product in productsCollection" :product="product" :key="product.name"></product-card>
        </div>
      </div>
    </page-content>
<!--    page content -->
    <footer-component></footer-component>
  </div>
</template>

<script>
import SearchComponent from "@/components/ui/SearchProduct";
import HeaderComponent from "@/components/layout/Header";
import FooterComponent from "@/components/layout/Footer";
import FilterProduct from "@/components/ui/FilterProduct";
import PageContent from "@/components/layout/PageContent";
import ProductCard from "@/components/ui/ProductCard";
import {mapActions, mapGetters} from "vuex";
import {db} from "@/db";

export default {
  name: "Products",
  data: () => ({
    products:[],
  }),
  computed:{
    ...mapGetters(['showLikedProducts','filter','search','searchLocation']),
    productsCollection(){
      let products = this.products;

      if(this.showLikedProducts){
        products = this.products.filter(d => d.liked)
      }

      // price filter
      products = products.filter( d => {
        if(this.filter.minPrice !== '' && this.filter.maxPrice !== '')
          return this.filter.minPrice <= d.price && d.price <= this.filter.maxPrice
        else if(this.filter.minPrice !== '' && this.filter.maxPrice === ''){
          return this.filter.minPrice <= d.price;
        }else if (this.filter.minPrice === '' && this.filter.maxPrice !== '') {
          return d.price <= this.filter.maxPrice
        }
        return true;
      });

      // search filter
      if(this.search !== ''){
        products = products.filter( d => {
          return new RegExp(this.search,'i').test(d.title);
        });

      }
      if(this.searchLocation !== ''){
        products = products.filter( d => {
          return new RegExp(this.searchLocation,'i').test(d.location);
        });
      }

      return products;
    }
  },
  methods:{
    ...mapActions(['changeShowLikedProducts','changeFilter','updateSearch','updateSearchLocation']),
    showLiked() {
      this.changeShowLikedProducts(!this.showLikedProducts);
    },
    filterPriceMin(price){
      this.filter.minPrice = price !== '' ? Number(price) : '';
      this.changeFilter(this.filter);
    },
    filterPriceMax(price){
      this.filter.maxPrice = price !== '' ? Number(price) : '';
      this.changeFilter(this.filter);
    },
    searchProduct(text,location){
      this.updateSearch(text);
      this.updateSearchLocation(location);
    }
  }, // fetch products from firestore and init products in data
  firestore () {
    return {
      products: db.collection('products')
    }
  },
  components: {
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    FilterProduct,
    PageContent,
    ProductCard
  },
}
</script>

<style scoped>
  .products{
    margin:15px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
  }
  @media (max-width: 792px) {
    .products{
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (max-width: 500px) {
    .products{
      grid-template-columns: 1fr 1fr;
    }
  }
</style>