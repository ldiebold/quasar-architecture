<script setup>
import { ref } from 'vue'
import { useVModel } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    required: true,
    type: Object,
  },
})

const emit = defineEmits([
  'update:modelValue',
])

const form = useVModel(props, 'modelValue', emit)
</script>

<template>
  <q-form class="q-gutter-md">
    <q-input
      v-model="form.name"
      label="name"
      filled
    />
    <q-input
      v-model="form.email"
      label="email"
      filled
    />
    <q-input
      v-model="form.username"
      label="username"
      filled
    />
  </q-form>
</template>
