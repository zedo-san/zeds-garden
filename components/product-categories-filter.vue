<template>
  <div class="flex gap-2 flex-wrap max-w-7xl">
    <NuxtLink :to="`/`" @click="$emit('select-category-filter', 'All')">
      <UBadge
        color="primary"
        :variant="checkIsActive('All') ? 'solid' : 'outline'"
        size="lg"
        :ui="{ rounded: 'rounded-full'}"
      >
        All
      </UBadge>
    </NuxtLink>
    <NuxtLink
      v-for="category in props.categories"
      :key="category.id"
      :to="`/?category=${category.id}`"
      @click="$emit('select-category-filter', category.id)"
    >
      <UBadge
        color="primary"
        :variant="checkIsActive(category.id) ? 'solid' : 'outline'"
        size="lg"
        :ui="{ rounded: 'rounded-full'}"
      >
        {{ category.name }}
      </UBadge>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import type { ICategory } from "~/types"

interface ProductCategoriesFilterProps {
  categories: ICategory[];
  selectedCategory: string;
}
const props = defineProps<ProductCategoriesFilterProps>()

const productsStore = useProductsStore()
await productsStore.fetchCategories()

const  checkIsActive = (category: number | string) => {
  if(category === 'All' && !props.selectedCategory) return true
  return category.toString() === decodeURI(props.selectedCategory)
}
</script>
