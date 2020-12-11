<template>
  <div id="app">
    <app-homepage />
    <app-makeup />
    <app-product />
    <app-footer />
  </div>
</template>

<script>
import Homepage from "./components/Homepage";
import Footer from "./components/shared/Footer";
import Makeup from "./components/Makeup";
import Product from "./components/Products";
export default {
  components: {
    "app-homepage": Homepage,
    "app-footer": Footer,
    "app-makeup": Makeup,
    "app-product": Product,
  },
};
</script>

<style scoped>
</style>>
