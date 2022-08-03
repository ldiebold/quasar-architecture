<script setup>
import { ref } from 'vue'
import ManageUsersTable from 'models/User/components/ManageUsersTable/ManageUsersTable.vue'
import sampleUsers from 'models/User/sample-data/users-index-rest-response.json'
import CreateUserDialog from 'models/User/components/CreateUserDialog/CreateUserDialog.vue'
import useCreateUser from './useCreateUser'

const users = ref(sampleUsers)

const showCreateUserDialog = ref(false)

const userForm = ref({})

const userCreator = useCreateUser({
  userForm,
  showCreateUserDialog,
  users,
})

function removeUser (user) {
  users.value = users.value.filter(currentUser => {
    return user !== currentUser
  })
}
</script>

<template>
  <div>
    <ManageUsersTable
      :users="users"
      @create="showCreateUserDialog = true"
      @remove="user => removeUser(user)"
    />

    <CreateUserDialog
      v-model="showCreateUserDialog"
      v-model:form="userForm"
      @create="userCreator.create()"
    />
  </div>
</template>
