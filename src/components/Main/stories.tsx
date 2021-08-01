import { Story, Meta } from '@storybook/react/types-6-0'
import Main from './index'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = (args) => <Main {...args} />

Basic.args = {
  title: 'Alisson teste',
  desc: 'Alisson testando o boilerplate dele'
}
