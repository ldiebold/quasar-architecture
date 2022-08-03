import { mount } from '@cypress/vue'
import ManageUsersView from '../ManageUsersView.vue'

describe('<ManageUsersView>', () => {
  beforeEach(() => {
    // cy.viewport(800, 600)
  })

  it('mounts', () => {
    mount(ManageUsersView, {
      props: {
        //
      },
    })
  })
})
