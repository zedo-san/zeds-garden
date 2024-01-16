<template>
  <header class=" border-b-2 border-mantis-500">
    <div class="container p-4 flex items-center justify-between mx-auto">
      <a href="#" class="font-bold text-xl">Zedosan</a>
      <nav class="flex gap-12">
        <ul class="flex items-center gap-8 *:font-semibold *:tracking-wide">
          <li v-for="navItem in navItems" :key="navItem.label">
            <NuxtLink :to="navItem.link" :class="{ 'font-bold': route.path === navItem.link }">
              {{ navItem.label }}
            </NuxtLink>
          </li>
          <li>
            <UChip :text="cartCount" size="2xl" color="red" position="bottom-right" :show="cartCount > 0">
              <NuxtLink to="/cart">
                <UButton icon="i-heroicons-shopping-cart" variant="link" color="mantis" />
              </NuxtLink>
            </UChip>
          </li>
        </ul>
        <AvatarDropdown loggedInEmail="zedosan@email.com" />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const navItems = [
  { label: "Products", link: "/" },
  { label: "About", link: "/about" },
  { label: "FAQs", link: "/faq" },
];
const cartStore = useCartStore()
const cartCount = computed(() => cartStore.cartCount)
</script>
