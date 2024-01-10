<script setup lang="ts">
const route = useRoute();
const navItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "FAQs", link: "/faq" },
];
</script>

<template>
  <header class="py-4 lg:px-32 px-4 border-b-2 border-mantis-500">
    <div class="container flex items-center justify-between mx-auto">
      <a href="#" class="font-bold text-xl">Zedosan</a>
      <nav class="flex gap-12">
        <ul class="flex items-center gap-8 *:font-semibold *:tracking-wide">
          <li v-for="navItem in navItems" :key="navItem.label">
            <NuxtLink :to="navItem.link" :class="{ 'font-bold': route.path === navItem.link }">
              {{ navItem.label }}
            </NuxtLink>
          </li>
        </ul>
        <AvatarDropdown loggedInEmail="zedosan@email.com" />
      </nav>
    </div>
  </header>
</template>
