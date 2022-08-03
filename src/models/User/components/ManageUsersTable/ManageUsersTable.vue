<script setup>
import columns from './columns'
import { mdiPlus } from '@quasar/extras/mdi-v7'

defineProps({
  users: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits([
  'create',
  'remove',
])
</script>

<template>
  <q-table
    :columns="columns"
    :rows="users"
  >
    <template #top-right>
      <q-btn
        unelevated
        color="primary"
        round
        :icon="mdiPlus"
        @click="emit('create')"
      />
    </template>

    <template #body-cell-remove="scope">
      <q-td>
        <q-btn
          label="remove"
          unelevated
          @click="emit('remove', scope.row)"
        />
      </q-td>
    </template>
  </q-table>
</template>
