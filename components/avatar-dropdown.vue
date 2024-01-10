<template>
  <UDropdown
    :items="items"
    :popper="{ placement: 'bottom-start' }"
    :ui="{ item: { disabled: 'cursor-text select-text' } }"
  >
    <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />
    <template #account="{ item }">
      <div class="text-left">
        <p>Signed in as</p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>
    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>
      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 ms-auto" />
    </template>
  </UDropdown>
</template>

<script setup lang="ts">
const props = defineProps({
  loggedInEmail: {
    type: String,
    required: true,
  },
});
const items = [
  [
    {
      label: props.loggedInEmail,
      slot: "account",
      disabled: true,
    },
  ],
  [{ label: "Logout", icon: "i-heroicons-arrow-left-on-rectangle" }],
];
</script>
