import { Story, Meta } from '@storybook/react/types-6-0'
import { Container } from 'components/Container'
import SkillContainer, { SkillContainerProps } from '.'
import { HardSkills as mockSkills } from './mock'

import * as S from './styles'

export default {
  title: 'SkillContainer',
  component: SkillContainer,
  args: {
    title: 'Titulo',
    items: mockSkills,
  },
} as Meta

export const Default: Story<SkillContainerProps> = (args) => (
  <Container>
    <SkillContainer {...args} />
  </Container>
)
