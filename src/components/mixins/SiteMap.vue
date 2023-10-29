<template>
    <div>
        <h3>Welcome to SiteMap Component</h3>
        <ul v-if="products.length">
            <li>Home</li>
            <li>About</li>
            <li>
                Products
                <ul>
                    <li v-for="(item, i) in products" :key="i" v-text="item"></li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
import productmixin from '@/mixins/productmixins'
export default {
    mixins: [productmixin]
    // name: 'SiteMap',
    // data() {
    //     return {
    //         products: [],
    //     };
    // },
    // created() {
    //     this.products = this.getProducts();
    // },
    // methods: {
    //     getProducts() {
    //         return ['products1', 'products2', 'products3', 'products4'];
    //     },
    // },
}
</script>