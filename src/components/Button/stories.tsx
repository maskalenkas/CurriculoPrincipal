import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'teste',
    icon: <AddShoppingCart />,
  },
} as Meta

export const Default: Story = (args) => <Button {...args} />
