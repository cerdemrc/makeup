<template>
  <div class="container mt-5">
    <div class="form">
      <div class="form-group">
        <label for="exampleFormControlSelect1">Brand</label>
        <select
          class="form-control"
          @change="onChange()"
          v-model="selectedBrand"
        >
          <option v-for="brand in brands" :key="brand.id">{{ brand }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="exampleFormControlSelect1">Product</label>
        <select
          class="form-control"
          v-model="selectedProduct"
          @change="onChange()"
        >
          <option v-for="product in products" :key="product.id">
            {{ product }}
          </option>
        </select>
      </div>
      <button @click="getProduct" class="btn btn-danger btn-block">OK</button>
    </div>
  </div>
</template>
    
<script>
import { eventBus } from "../main";
import axios from "axios";
export default {
  data() {
    return {
      brands: [
        "Maybelline",
        "Smashbox",
        "Nyx",
        "Clinique",
        "Benefit",
        "Fenty",
        "L'oreal",
        "Wet n Wild",
      ],
      products: [
        "Blush",
        "Bronzer",
        "Eyebrow",
        "Eyeliner",
        "Eyeshadow",
        "Foundation",
        "Lipstick",
        "Mascara",
        "Nail Polish",
      ],
      selectedBrand: "",
      selectedProduct: "",
      productList: [],
      changed: false,
    };
  },
  methods: {
    getProduct() {
      axios
        .get(
          "http://makeup-api.herokuapp.com/api/v1/products.json?brand=" +
            this.selectedBrand +
            "&product_type=" +
            this.selectedProduct
        )
        .then((response) => {
          let data = response.data;
          if (this.changed === true) {
            this.productList = [];
          }
          for (let key in data) {
            this.productList.push(data[key]);
            this.changed = false;
          }
          eventBus.$emit("sendData", this.productList);
        });
    },
    onChange() {
      this.changed = true;
    },
  },
};
</script>

<style scoped>
.form {
  margin: 120px;
}
</style>