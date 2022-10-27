<template>

  <div class="flex space-x-4 mt-16">
    <div class="w-7/12">
      <img v-shared-element:[`product-image-${product.id}`]  :src="product.image"/>
    </div>
    <div class="w-5/12">
      <p v-shared-element:[`product-title-${product.id}`] class="text-3xl">{{ product.title }}</p>
      <p v-shared-element:[`product-price-${product.id}`]>{{ product.price }}</p>
      <p>{{product.description}}</p>
    </div>
  </div>
</template>


<script lang="ts" setup>
import {useRouter} from 'vue-router';
import {ref} from "vue";
import ProductService from "../Services/ProductService";

const router = useRouter();
const product = ref(ProductService.findById(Number(router.currentRoute.value.params.id)));
</script>