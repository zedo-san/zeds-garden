<template>
  <div class="p-4">
    <h2 class="text-3xl font-bold mb-4">Inventory</h2>
    <UCard class="border rounded-md bg-white shadow">
      <UTable :columns="selectedColumns" :rows="products">
        <template #title-data="{ row }">
          <NuxtLink :to="`/admin/products/${row.id}`" class="hover:underline">
            <p>{{ row.title }}</p>
          </NuxtLink>
        </template>
        <template #category.name-data="{ row }">
          <ProductCategoryBadge :category-id="row.category.id" :category-name="row.category.name" />
        </template>
      </UTable>
      <template #footer>
        <div class="flex flex-wrap justify-end items-center">
          <UPagination
            v-model="page"
            :page-count="pageCount"
            :total="pageTotal"
            :ui="{
            wrapper: 'flex items-center gap-1',
            rounded: '!rounded-full min-w-[32px] justify-center',
            default: {
              activeButton: {
                variant: 'outline'
              }
            }
          }"
          />
        </div>
      </template>
    </UCard>
  </div>
</template>
<script lang="ts" setup>
const columns = [
  {key: 'id', label: 'Product ID'},
  {key: 'title', label: 'Product Name'},
  {key: 'price', label: 'Price'},
  {key: 'category.name', label: 'Category'},
  {key: 'creationAt', label: 'Created At'},
  {key: 'updatedAt', label: 'Updated At'},
]
const selectedColumns = ref(columns)
const page = ref(1)
const pageTotal = ref(30)
const pageCount = ref(10)
const offset = computed(() => page.value * 10)

// Products Store
const productsStore = useProductsStore()
await useAsyncData('productsInventory', () => productsStore.fetchProducts({skip: offset.value}), { watch: [offset]})
const products = computed(() => productsStore.productsList)
</script>
