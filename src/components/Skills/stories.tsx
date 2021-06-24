import { Story, Meta } from '@storybook/react/types-6-0'
import { Container } from 'components/Container'
import Skills, { SkillsProps } from '.'

import { mock1 } from './mock'

export default {
  title: 'Skills',
  component: Skills,
  args: {
    items: mock1,
  },
} as Meta

export const Default: Story<SkillsProps> = (args) => (
  <Container>
    <Skills {...args} />
  </Container>
)
