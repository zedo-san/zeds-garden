<template>
  <div class="bg-white rounded-md shadow p-4 h-full w-full flex flex-col justify-between">
    <div class="hidden xl:block pb-4">
      <img :src="imgSrc" class="h-auto w-auto object-cover rounded-md" />
    </div>
    <div class="grid grid-cols-4 gap-4 xl:grid-cols-1 h-full">
      <div class="cols-span-1 sm:col-span-2 object-cover xl:hidden ">
        <img :src="imgSrc" class="h-auto w-auto object-cover rounded-md" />
      </div>
      <div class="col-span-3 sm:col-span-2 flex flex-col justify-between w-full h-full">
        <div>
          <NuxtLink :to="productLink">
            <h3 class="text-lg sm:text-sm md:text-lg font-semibold mb-2 truncate hover:underline">{{ props.title }}</h3>
          </NuxtLink>
          <p class="text-2xl sm:text-lg md:text-2xl font-bold mb-3">${{ props.price }}</p>
          <div class="hidden md:block">
            <article class="line-clamp-2 xl:line-clamp-3 text-gray-400">{{ props.description }}</article>
          </div>
        </div>
        <div class="ml-auto xl:mt-6">
          <UButton icon="i-heroicons-shopping-cart" size="lg" @click="$emit('add-to-cart')">
            <label class="text-xs lg:text-base">Add to cart</label>
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { removeSquareBrackets } from '../helpers'

interface IProductsCardProps {
  productLink: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image?: string
}
const props = defineProps<IProductsCardProps>()

const imgSrc = computed(() => {
  if(!props.image) {
    return "https://fakeimg.pl/300/"
  }
 return removeSquareBrackets(props.image)
})
</script>
