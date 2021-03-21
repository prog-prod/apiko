<template>
  <div class="filter-products">
    <div class="container-small">
      <div class="card">
        <v-select class="categories" placeholder="Choose Category" :options="categories">
          <template #header>
            <div class="grid-icon"><grid-icon></grid-icon></div>
          </template>
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes"><arrow-down-icon></arrow-down-icon></span>
          </template>
        </v-select>
        <div class="inline-block">
          <div class="filter-price">
            <input type="number" class="custom-placeholder" v-model="priceMinModel" v-on:change="priceMin(priceMinModel)" placeholder="Price from (USD)">
            <hyphen-icon class="line"></hyphen-icon>
            <input type="number" class="custom-placeholder" v-model="priceMaxModel" v-on:change="priceMax(priceMaxModel)" placeholder="Price to (USD)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import HyphenIcon from "@/components/ui/icons/HyphenIcon";
import ArrowDownIcon from "@/components/ui/icons/ArrowDownIcon";
import GridIcon from "@/components/ui/icons/GridIcon";

export default {
  name: "FilterProduct",
  data: () => ({
    category: null,
    categories: ['Canada', 'United States'],
    search: '',
    priceMinModel: '',
    priceMaxModel: '',
  }),
  components:{
    vSelect,
    HyphenIcon,
    ArrowDownIcon,
    GridIcon
  },
  methods:{
    priceMin(price){
      this.$emit('price-min',price)
    },
    priceMax(price){
      this.$emit('price-max',price)
    }
  }
}
</script>

<style lang="scss">

.filter-products{
  .categories {
    position: relative;
    background: #F9FAFB;
    max-width: 285px;
    width: 100%;
    display: inline-block;
    .vs__dropdown-toggle{
      border: 1px solid #DEDEE0;
    }
    .vs__dropdown-menu {
      background: #F9FAFB;
      color: #505050;
      font-size: 14px;
      line-height: 16px;
      /* identical to box height */
      font-weight: 300;
      letter-spacing: 0.35px;
    }
    .grid-icon{
      position:absolute;
      top:0;
      left: 11px;
      height: 100%;
      display: flex;
      align-items: center;
    }

    .vs__search {
      margin: 8px 0 0;
      padding-left: 39px;
      font-size: 14px;
      font-weight: 300;
      &::placeholder {
        color: #505050;
        font-size: 14px;
        line-height: 16px;
        /* identical to box height */
        font-weight: 300;
        letter-spacing: 0.35px;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
  .card{
    padding: 12px 12px;
    //display: grid;
    //grid-template-columns: 285px 1fr;

    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.217111);
    border-radius: 4px;
  }


  .filter-price{
    display: flex;
    align-items: center;
    padding:0 14px;

    .line{
      margin: 0 7px;
    }
    input{
      height: 35px;
      max-width: 143px;
      width: 100%;
      background: #F9FAFB;
      border: 1px solid #DEDEE0;
      box-sizing: border-box;
      border-radius: 5px;
      font-size: 14px;
      line-height: 16px;
      /* identical to box height */
      font-weight: 300;
      letter-spacing: 0.35px;
      padding: 10px 8px 9px 9px;
      &::placeholder{
        color: #505050;
        font-size: 14px;
        line-height: 16px;
        /* identical to box height */
        font-weight: 300;
        letter-spacing: 0.35px;
      }
    }
  }
  @media (max-width:688px) {
    .filter-price{
      padding:0;
      margin-top:10px;
      input{
        max-width: 100%;
      }
    }
    .categories{
      max-width: 100%;
    }
  }
</style>