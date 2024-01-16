<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="min-w-96">
      <UCard>
        <template #header>
          <h2 class="text-3xl font-semibold text-black">Admin Login</h2>
        </template>

        <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
          <UFormGroup label="Username" name="username">
            <UInput v-model="state.username" :ui="{ size: 'md' }" />
          </UFormGroup>

          <UFormGroup label="Password" name="password">
            <UInput v-model="state.password" type="password" :ui="{ size: 'md' }" />
          </UFormGroup>

          <div class="pt-4">
            <UButton type="submit" block> Submit </UButton>
          </div>
        </UForm>
      </UCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from '#ui/types'

definePageMeta({
  layout: 'public'
})

const state = reactive({
  username: undefined,
  password: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.username) errors.push({ path: 'username', message: 'Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
  navigateTo('/admin/inventory')
}
</script>
