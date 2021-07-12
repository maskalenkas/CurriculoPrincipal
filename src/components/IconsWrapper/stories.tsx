import { Story, Meta } from '@storybook/react/types-6-0'
import IconsWrapper, { IconsProps } from '.'

export default {
  title: 'IconsWrapper',
  component: IconsWrapper,
  args: {
    size: '5rem',
    icon: 'Javascript',
    color: 'red',
    hoverColor: 'black',
  },
  argTypes: {
    size: {
      type: 'check',
      options: ['1rem', '3rem', '6rem', '9rem'],
    },
    sizeMedia: {
      type: 'check',
      options: ['1rem', '3rem', '6rem', '9rem'],
    },
    relativeY: {
      type: 'check',
      options: ['1rem', '3rem', '6rem', '9rem'],
    },
  },
} as Meta

export const Default: Story<IconsProps> = (args) => <IconsWrapper {...args} />
