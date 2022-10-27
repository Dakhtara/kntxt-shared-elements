<template>
  <div class="grid gap-3 grid-cols-2 md:grid-cols-5">
    <div v-for="product in products" :key="product.id">
      <ProductCard  :product="product" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import ProductCard from "../components/ProductCard.vue";
import ProductService from "../Services/ProductService";
let products = ProductService.findAll();

</script>