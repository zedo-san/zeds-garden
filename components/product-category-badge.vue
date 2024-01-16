<template>
  <UBadge size="xs" :label="props.categoryName" :color="badgeColor" variant="solid" />
</template>
<script lang="ts" setup>
interface ProductCategoryBadgeProps {
  categoryId: number;
  categoryName: string;
}
const props = defineProps<ProductCategoryBadgeProps>()
const colors = {
  1: 'teal',
  2: 'blue',
  3: 'orange',
  4: 'teal',
  5: 'purple',
  6: 'emerald'
}
const badgeColor = computed(() => colors[props.categoryId as keyof typeof colors])
</script>
