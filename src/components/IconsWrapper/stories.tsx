import { Story, Meta } from '@storybook/react/types-6-0'
import IconsWrapper, { IconsProps } from '.'

export default {
  title: 'IconsWrapper',
  component: IconsWrapper,
  args: {
    size: '5rem',
  },
  argTypes: {
    icon: {
      type: 'check',
      options: [
        'Javascript',
        'Html5',
        'Css3',
        'Git',
        'ReactLogo',
        'Bootstrap',
        'Testinglibrary',
        'Cypress',
        'NextDotJs',
        'Graphql',
        'Storybook',
        'Strapi',
        'Typescript',
      ],
    },
    color: {
      type: 'check',
      options: [
        'green',
        'red',
        'primary',
        'secondary',
        'black',
        'gray',
        'darkGray',
        'white',
      ],
    },
  },
} as Meta

export const Default: Story<IconsProps> = (args) => <IconsWrapper {...args} />
