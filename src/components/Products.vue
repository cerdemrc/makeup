<template>
  <div class="container">
    <div class="product mt-5">
      <div class="row">
        <div
          class="card col-md-3 col-sm-1"
          v-for="product in productList"
          :key="product.id"
        >
          <img :src="product.image_link" />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">
              <a class="btn btn-light" :href="product.product_link"
                >Go To Product</a
              >
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted"
              ><strong>{{ product.price }} $</strong></small
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      productList: [],
    };
  },
  created() {
    eventBus.$on("sendData", (productList) => {
      this.productList = productList;
    });
  },
};
</script>

<style scoped>
.container {
  width: 100%;
}
.row {
  display: flex;
  justify-content: space-evenly;
}
.card {
  font-family: sans-serif;
  color: black;
  margin: 10px;
  text-align: center;
  border-radius: 40px;
}

a {
  color: black;
  font-size: 15px;
}

img {
  width: 150px;
  height: 150px;
  margin: 10px;
  margin-left: 30px;
  justify-content: center;
}

@media screen and (max-width: 450px) {
  .card {
    width: 60%;
  }
  a {
    font-size: 10px;
  }
  .card-title {
    font-size: 15px;
  }
}
</style>