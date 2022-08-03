import { mount } from '@cypress/vue'
import CreateUserDialog from '../CreateUserDialog.vue'

describe('<CreateUserDialog>', () => {
  beforeEach(() => {
    // cy.viewport(800, 600)
  })

  it('mounts', () => {
    mount(CreateUserDialog, {
      props: {
        //
      },
    })
  })
})
