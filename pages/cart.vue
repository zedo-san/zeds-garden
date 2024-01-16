<template>
  <GeneralContainer>
    <h2 class="text-3xl font-bold">Cart</h2>
    <div class="border border-mantis-600 rounded-md mt-8">
      <UTable :columns="selectedColumns" :rows="cartItems">
        <template #empty-state>
          <div class="flex flex-col items-center justify-center py-6 gap-3">
            <span class="italic text-sm">No cart items.</span>
            <UButton to="/" icon="i-heroicons-shopping-cart" label="Shop now" />
          </div>
        </template>
        <template #product.price-data="{row}">
          <span>${{ row.product.price }}</span>
        </template>
        <template #product.images-data="{row}">
          <div class="h-16 w-16">
            <img :src="removeSquareBrackets(row.product.images[0])" class="object-cover rounded-md h-full w-full" />
          </div>
        </template>
        <template #quantity-data="{row}">
          <span class="text-center">x{{ row.quantity }}</span>
        </template>
        <template #total-data="{row}">
          <span>${{ productByQuantity(row.product.price, row.quantity) }}</span>
        </template>
      </UTable>
      <hr class="border-t border-gray-400" />
      <div class="flex justify-between items-center container mx-auto p-4 text-xl font-bold">
        <p>Overall Total:</p>
        <UButton size="xl" icon="i-heroicons-credit-card" :disabled="overallTotal === 0">
          <span class="text-xl">Checkout: ${{ overallTotal }}</span>
        </UButton>
      </div>
    </div>
  </GeneralContainer>
</template>
<script lang="ts" setup>
import { removeSquareBrackets } from "~/helpers";
import type { ICartItem } from "~/types"

const columns = [
  {key: 'product.id', label: 'Product ID'},
  {key: 'product.images', label: 'Product Image'},
  {key: 'product.title', label: 'Product Name'},
  {key: 'product.price', label: 'Price'},
  {key: 'quantity', label: 'Quantity'},
  {key: 'total', label: 'Total'},
]
const selectedColumns = ref(columns)
const cartStore = useCartStore()
const cartItems = computed(() => Object.values(cartStore.cartItems))
const productByQuantity = (price: number, quantity: number) => price * quantity
const overallTotal = computed(() => {
    return cartItems.value.reduce((acc: number, curr: ICartItem) => productByQuantity(curr.product.price, curr.quantity) + acc, 0)
})
</script>
