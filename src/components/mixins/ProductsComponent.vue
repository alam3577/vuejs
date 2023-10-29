<template>
  <div>
    <h3>Welcome To Products</h3>
    <ul v-if="products.length">
        <li v-for="(item, i) in products" :key="i" v-text="item"></li>
    </ul>
  </div>
</template>
<script>
import productmixin from '@/mixins/productmixins'
export default {
    mixins: [productmixin]
//   name: 'ProductsComponent',
//   data() {
//     return {
//       products: [],
//     };
//   },
//   created() {
//     this.products = this.getProducts();
//   },
//   methods: {
//     getProducts() {
//       return ['products1', 'products2', 'products3', 'products4'];
//     },
//   },
};
</script>
