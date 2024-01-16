<template>
  <GeneralContainer>
    <h2 class="text-3xl font-bold mb-4">Products</h2>
    <div class="w-96">
      <SearchInput v-model="search" />
    </div>
    <div class="my-4">
      <ProductCategoriesFilter :categories="categories" :selectedCategory="selectedCategory" />
    </div>
    <p v-if="pending" class="flex items-center gap-2">
      <UIcon name="i-heroicons-arrow-path-20-solid" class="animate-spin" />
      <span>Loading</span>
    </p>
    <ul
      v-else-if="!pending && products.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 px-2 sm:px-0"
    >
      <li v-for="product in products" :key="product.id" class="max-h-[700px]">
        <ProductsCard
          :product-link="`/products/${product.id}`"
          :title="product.title"
          :price="product.price"
          :description="product.description"
          :category="product.category.name"
          :image="product.images[0]"
          @add-to-cart="addToCart(product)"
        />
      </li>
    </ul>
    <p v-else>No products to show.</p>
  </GeneralContainer>
</template>

<script lang="ts" setup>
import { refDebounced } from "@vueuse/core"
import type { IProduct } from "~/types"

const route = useRoute()
const search = ref('')
const debouncedSearch = refDebounced(search, 400)

// Cart
const cartStore = useCartStore()
const addToCart = (product: IProduct) => cartStore.addToCart(product)

// Products
const productsStore = useProductsStore()
await productsStore.fetchCategories()
const selectedCategory = computed(() => route.query.category as string ?? '')

const { pending } = await useAsyncData('products', () => productsStore.fetchProducts({
  search: debouncedSearch.value,
  category: selectedCategory.value,
  limit: 200
}), {
  watch: [
    debouncedSearch,
    selectedCategory
  ]
})
const products = computed( () => productsStore.productsList)
const categories = computed(() => productsStore.categoriesList)
</script>
