<template>
  <NuxtLoadingIndicator :height="6" />
  <div class="h-screen flex">
    <aside
      class="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700"
    >
      <a href="#">
        <span class="text-xl font-bold">Admin Control</span>
      </a>

      <div class="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <NuxtLink
            v-for="navItem in navItems"
            :key="navItem.label"
            class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md hover:bg-mantis-100 hover:text-gray-700"
            :to="navItem.link"
            :class="{ 'bg-mantis-100' : route.path === navItem.link}"
          >
            <UIcon :name="navItem.icon" :class="{'text-mantis-500' : route.path === navItem.link}" />
            <span
              class="mx-4 font-medium"
              :class="{'text-mantis-500' : route.path === navItem.link}"
              >{{ navItem.label }}</span
            >
          </NuxtLink>
        </nav>

        <UButton to="/admin/login" size="xl" variant="outline" color="lime" icon="i-heroicons-arrow-left-on-rectangle">
          <span class="mx-2 font-medium">Logout</span>
        </UButton>
      </div>
    </aside>
    <div class="overflow-y-auto w-full relative">
      <!-- <div class="bg-white h-96 w-96 shadow-xl absolute left-2 bottom-2 z-10 rounded-md"></div> -->
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const navItems = [
  // {label: 'Analytics', link: '/admin', icon: 'i-heroicons-chart-bar', activeIcon: 'i-heroicons-chart-bar-16-solid'},
  {label: 'Inventory', link: '/admin/inventory', icon: 'i-heroicons-circle-stack', activeIcon: 'i-heroicons-circle-stack-16-solid'}
]
</script>
