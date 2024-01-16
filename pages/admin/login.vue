<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="min-w-96">
      <UCard>
        <template #header>
          <h2 class="text-3xl font-semibold text-black">Login</h2>
        </template>

        <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
          <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" :ui="{ size: 'md' }" />
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
  email: undefined,
  password: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
  navigateTo('/')
}
</script>
