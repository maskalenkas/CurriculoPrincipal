import { Story, Meta } from '@storybook/react/types-6-0'
import Icons, { IconsProps } from '.'

import { Coffee } from '@styled-icons/boxicons-solid'

export default {
  title: 'Icons',
  component: Icons,
  args: {
    children: <Coffee />,
    color: 'primary',
    size: '10rem',
  },
} as Meta

export const Default: Story<IconsProps> = (args) => <Icons {...args} />
