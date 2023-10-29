export default {
    name: 'ProductsComponent',
    data() {
      return {
        products: [],
      };
    },
    created() {
      this.products = this.getProducts();
    },
    methods: {
      getProducts() {
        return ['products1', 'products2', 'products3', 'products4'];
      },
    },
  };