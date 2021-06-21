import { Story, Meta } from '@storybook/react/types-6-0'
import AboutMe, { AboutMeProps } from '.'
import { Container } from '../Container/index'

import mock from './mock'

export default {
  title: 'AboutMe',
  component: AboutMe,
  args: {
    image: '/img/computers.svg',
    data: mock,
  },
} as Meta

export const Default: Story<AboutMeProps> = (args) => (
  <Container>
    <AboutMe {...args} />
  </Container>
)
