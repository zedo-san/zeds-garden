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

        <a href="#" class="flex items-center px-4 -mx-2">
          <img
            class="object-cover mx-2 rounded-full h-9 w-9"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
          />
          <span class="mx-2 font-medium text-gray-800 dark:text-gray-200">John Doe</span>
        </a>
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
  {label: 'Analytics', link: '/admin', icon: 'i-heroicons-chart-bar', activeIcon: 'i-heroicons-chart-bar-16-solid'},
  {label: 'Inventory', link: '/admin/inventory', icon: 'i-heroicons-circle-stack', activeIcon: 'i-heroicons-circle-stack-16-solid'}
]
</script>
