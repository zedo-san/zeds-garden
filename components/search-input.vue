<template>
  <UInput
    icon="i-heroicons-magnifying-glass-20-solid"
    size="sm"
    color="white"
    :trailing="false"
    placeholder="Search..."
    v-model="model"
    autocomplete="off"
  />
</template>
<script lang="ts" setup>
const model = defineModel<string>()
</script>
