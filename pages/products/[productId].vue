<template>
  <div class="container p-4 mx-auto">
    <UBreadcrumb :links="links" />
    <div class="pt-8">
      <div class="">
        <!-- Product Details Section -->
        <div class="flex">
          <!-- Product Image -->
          <div class="md:w-1/3">
            <img :src="selectedImage" alt="Product Image" class="w-full h-auto rounded-lg" />
            <div class="mt-3 grid grid-cols-4 gap-4">
              <img
                v-for="image in images"
                :key="image"
                :src="removeSquareBrackets(image)"
                alt="Product Image"
                class="w-full h-auto rounded-lg"
                @mouseover="onHoverOtherProductImages(image)"
                @mouseleave="onExitHoverOtherProductImages"
              />
            </div>
          </div>

          <!-- Product Information -->
          <div class="md:w-2/3 md:pl-6">
            <h2 class="text-2xl font-semibold mb-2">{{ title }}</h2>
            <div v-if="category" class="mb-4">
              <ProductCategoryBadge :category-name="category.name" :category-id="category.id" />
            </div>
            <p class="text-4xl font-bold mb-4">${{ price }}.00</p>
            <div class="mt-8">
              <!-- Add to Cart Button -->
              <UButton
                :disabled="!product"
                :loading="!product"
                icon="i-heroicons-shopping-cart"
                size="xl"
                @click="addToCart(product)"
              >
                Add to cart
              </UButton>
            </div>
            <div>
              <p class="font-semibold mt-8 text-black mb-2">Description</p>
              <article class="text-gray-800 mb-4">
                {{ description }}
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { BreadcrumbLink } from "@nuxt/ui/dist/runtime/types"
import ProductsAPI from "~/api/products"
import type { ICategory, IProduct } from "~/types"
import { removeSquareBrackets } from '../../helpers'

const route = useRoute()
const productId = route.params.productId

const selectedImage = ref('')

// Cart Store
const cartStore = useCartStore()

// Fetch Single Product Data
const { data } = await useAsyncData(`product-${productId}`, () => ProductsAPI.getSingleProduct(productId as string))

const title = computed(() => data && data.value ? data.value.title  : 'Loading...')
const price = computed(() => data && data.value ? data.value.price  : 'Loading...')
const description = computed(() => data && data.value ? data.value.description  : 'Loading...')
const images = computed(() => data && data.value ? data.value.images  : 'Loading...')
const category = computed<ICategory| null>(() => data && data.value ? data.value.category  : null)
const product = computed(() => data && data.value ? data.value as IProduct : null)


const addToCart = (product: IProduct | null) => {
  if(product) {
    cartStore.addToCart(product)
  }
}

onMounted(() => {
  if(images.value.length > 0) {
    selectedImage.value = removeSquareBrackets(images.value[0])
  }
})

const onHoverOtherProductImages = (image: string) => {
  selectedImage.value = image
}

const onExitHoverOtherProductImages = () => {
  selectedImage.value = images ? images.value[0] : ''
}

const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: title,
  icon: 'i-heroicons-square-3-stack-3d'
}] as BreadcrumbLink[]
</script>
