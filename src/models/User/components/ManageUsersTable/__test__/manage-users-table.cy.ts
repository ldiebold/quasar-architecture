import { mount } from '@cypress/vue'
import ManageUsersTable from '../ManageUsersTable.vue'

describe('<ManageUsersTable>', () => {
  beforeEach(() => {
    // cy.viewport(800, 600)
  })

  it('mounts', () => {
    mount(ManageUsersTable, {
      props: {
        //
      },
    })
  })
})
