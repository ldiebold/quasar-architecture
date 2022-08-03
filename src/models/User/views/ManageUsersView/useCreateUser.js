export default function useCreateUser ({
  userForm,
  showCreateUserDialog,
  users,
}) {
  async function create () {
    userForm.value.id = Math.floor(Math.random() * 10000000)
    users.value.push(userForm.value)
    showCreateUserDialog.value = false
  }

  return {
    create,
  }
}
