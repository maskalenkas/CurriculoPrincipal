import { Story, Meta } from '@storybook/react/types-6-0'
import AboutMe, { AboutMeProps } from '.'
import { Container } from '../Container/index'

export default {
  title: 'AboutMe',
  component: AboutMe,
  args: {
    image: '/img/fotocurrc.jpg',
  },
} as Meta

export const Default: Story<AboutMeProps> = (args) => (
  <Container>
    <AboutMe {...args} />
  </Container>
)
