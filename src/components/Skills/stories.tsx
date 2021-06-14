import { Story, Meta } from '@storybook/react/types-6-0'
import { Container } from 'components/Container'
import Skills, { SkillsProps } from '.'

import mockSkills from './mock'

export default {
  title: 'Skills',
  component: Skills,
  args: {
    items: mockSkills,
  },
} as Meta

export const Default: Story<SkillsProps> = (args) => (
  <Container>
    <Skills {...args} />
  </Container>
)
