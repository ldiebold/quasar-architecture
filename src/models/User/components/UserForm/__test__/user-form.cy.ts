import { mount } from '@cypress/vue'
import UserForm from '../UserForm.vue'

describe('<UserForm>', () => {
  beforeEach(() => {
    // cy.viewport(800, 600)
  })

  it('mounts', () => {
    mount(UserForm, {
      props: {
        //
      },
    })
  })
})
