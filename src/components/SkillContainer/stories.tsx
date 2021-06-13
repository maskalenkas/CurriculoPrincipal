import { Story, Meta } from '@storybook/react/types-6-0'
import { Container } from 'components/Container'
import SkillContainer, { SkillContainerProps } from '.'
import mockSkills from './mock'

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
    <S.DisplayStories>
      {/* Skill Container */}
      <S.ColumnStories>
        <SkillContainer {...args} />
      </S.ColumnStories>
      {/* / Skill Container */}

      {/* Coluna vaiza */}
      <S.ColumnStories>
        <h1>Segunda coluna</h1>
      </S.ColumnStories>
      {/* / Coluna vazia */}
    </S.DisplayStories>
  </Container>
)
