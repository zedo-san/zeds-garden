<template>
  <div class="flex gap-2 flex-wrap max-w-7xl">
    <NuxtLink v-for="category in gardenCategories" :key="category" :to="`/?category=${category}`">
      <UBadge
        color="primary"
        :variant="checkIsActive(category) ? 'solid' : 'outline'"
        size="lg"
        :ui="{ rounded: 'rounded-full'}"
      >
        {{ category }}
      </UBadge>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const gardenCategories = [
  'Outdoor Furniture',
  'Gardening Tools',
  'Planters and Pots',
  'Seeds and Bulbs',
  'Fertilizers and Soil Amendments',
  'Outdoor Decor',
  'Garden Lighting',
  'Garden Pest Control',
  'Lawn Care',
  'Watering Equipment',
  'Garden Apparel',
  'Outdoor Storage',
]

const selectedCategory = computed(() => route.query.category as string ?? gardenCategories[0])
const  checkIsActive = (category: string) => {
  return category === decodeURI(selectedCategory.value)
}
</script>
