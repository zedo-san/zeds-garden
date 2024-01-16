<template>
  <div class="p-4 mx-auto">
    <h2 class="font-bold text-3xl mb-8">Product Information</h2>
    <section class="p-6 mx-auto bg-white rounded-md shadow-md">
      <form @submit.prevent="updateProduct">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200 mb-2 block" for="title">Product Name</label>
            <UInput id="title" v-model="productTitle" type="text" size="xl" />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200 mb-2 block" for="price">Price</label>
            <UInput id="price" v-model="productPrice" type="text" size="xl" />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200 mb-2 block" for="price">Description</label>
            <UTextarea placeholder="Enter Description" resize class="w-full" v-model="description" size="xl" />
          </div>

          <!-- Add more input fields for other product information like description, images, etc. -->
        </div>

        <div class="flex justify-end mt-6">
          <button
            type="submit"
            class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ProductsAPI from '~/api/products';

const route = useRoute()
const toast = useToast()

const productId = route.params.productId


const { data } = await useAsyncData(`product-${productId}`, () => ProductsAPI.getSingleProduct(productId as string))

const productTitle = ref('')
const productPrice = ref(0)
const description = ref('')

onMounted(() => {
  if(data && data.value) {
    productTitle.value = data.value.title
    productPrice.value = data.value.price
    description.value = data.value.description
  }
})

const updateProduct = async () => {
  toast.add({title: 'Successfully updated product details.'})
  navigateTo('/admin/inventory')
}
</script>
