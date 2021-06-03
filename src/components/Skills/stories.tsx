import { Story, Meta } from '@storybook/react/types-6-0'
import { Container } from 'components/Container'
import Skills from '.'

export default {
  title: 'Skills',
  component: Skills,
} as Meta

export const Default: Story = () => (
  <Container>
    <Skills />
  </Container>
)
