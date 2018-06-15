/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import MyButton from './MyButton.vue'
// import Welcome from './Welcome.vue'
import Hello from '../components/HelloWorld'
import App from '../App'

// storiesOf('Welcome', module).add('to Storybook', () => ({
//   components: { Welcome },
//   template: '<welcome :showApp="action" />',
//   methods: { action: linkTo('Button') }
// }))
storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Hello },
  template: '<hello />'
}))

storiesOf('HelloWorld0000', module).add('to Storybookxx', () => ({
  components: { App },
  template: '<app />'
}))

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template:
      '<my-button @click="action"><span role="img" aria-label="so cool">😀 😎 👍 💯</span></my-button>',
    methods: { action: action('clicked') }
  }))

/* eslint-enable react/react-in-jsx-scope */
