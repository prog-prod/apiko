<template>
  <div class="product-card">
    <div class="product-background">
      <img :src="product.img" alt="">
      <div class="like-wrapper" @click="likeProduct(product)">
        <template v-if="product.liked">
          <like-icon type="like"></like-icon>
        </template>
        <template v-else>
          <like-icon></like-icon>
        </template>
      </div>

    </div>
    <div class="product-info">
      <div class="product-info__name">{{ product.title }}</div>
      <div class="product-info__price">${{ product.price }}</div>
    </div>
  </div>
</template>

<script>
import LikeIcon from "@/components/ui/icons/LikeIcon";
import {db} from "@/db";


export default {
  name: "ProductCard",
  props: [
      'product'
  ],
  methods:{
    likeProduct(product){
      db.collection('products').doc(product.id).update({
        liked: !product.liked
      })
    }
  },
  components:{
    LikeIcon
  }
}
</script>

<style>

</style>
<style lang="scss" scoped>

.product-card{

  max-width: 209px;

  
  background: #FFFFFF;
  border: 1px solid #E4E4E4;
  box-sizing: border-box;
  box-shadow: 0 4px 14px rgba(121, 121, 121, 0.0527344);
  border-radius: 4px;

  .product-background {
    padding: 3px 3px 0 3px;
    position: relative;
    img {

      width: 100%;
      max-height: 148px;
    }

    .like-wrapper {
      background: #FFFFFF;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.163407);
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      width: 30px;
      border-radius: 50%;

      position: absolute;
      bottom: -10px;
      right: 6px;
      cursor: pointer;
    }
  }
  .product-info{
    .product-info__name{
      font-size: 15px;
      line-height: 17px;
      color: #373738;
      margin: 6px 12px;
    }
    .product-info__price{

      font-size: 18px;
      line-height: 21px;
      /* identical to box height */
      font-weight: bold;
      margin: auto auto 10px 12px;
      color: #101010;
    }
  }
}
</style>