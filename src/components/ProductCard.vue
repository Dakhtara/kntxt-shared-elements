<template>
    <router-link class="flex flex-col group" :to="'/products/' + props.product.id">
      <div>
        <img v-shared-element:[`product-image-${product.id}`] :src="props.product.image" alt="product image"/>
      </div>
      <div>
        <p class="group-hover:underline" v-shared-element:[`product-title-${product.id}`]>{{ props.product.title }}</p>
        <p v-shared-element:[`product-price-${product.id}`]>{{ props.product.price }}</p>
      </div>
    </router-link>
</template>

<script lang="ts" setup>

import { defineProps } from "vue";

const props = defineProps<{ product: any }>();
</script>