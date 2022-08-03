<script setup>
import { mdiClose } from '@quasar/extras/mdi-v7/index.js'
import UserForm from '../UserForm/UserForm.vue'
import { useVModel } from '@vueuse/core'

const props = defineProps({
  form: {
    required: true,
    type: Object,
  },
})

const emit = defineEmits([
  'update:form',
  'create',
])

const form = useVModel(props, 'form', emit)
</script>

<template>
  <q-dialog>
    <q-card>
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title>CreateUserDialog</q-toolbar-title>
        <q-btn
          v-close-popup
          flat
          round
          :icon="mdiClose"
        />
      </q-toolbar>
      <q-card-section>
        <UserForm
          v-model="form"
        />
      </q-card-section>
      <q-btn
        class="full-width"
        color="primary"
        label="create"
        @click="emit('create')"
      />
    </q-card>
  </q-dialog>
</template>
