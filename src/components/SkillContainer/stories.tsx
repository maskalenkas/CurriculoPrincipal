import { Story, Meta } from '@storybook/react/types-6-0'
import { Container } from 'components/Container'
import SkillContainer, { SkillContainerProps } from '.'
import { HardSkills as mockSkills } from './mock'

import * as S from './styles'

export default {
  title: 'SkillContainer',
  component: SkillContainer,
  argTypes: {
    items: {
      control: {
        type: 'check',
        options: [
          'Testes unitarios',
          'Testes E2E',
          'Estruturação de um projeto escalavel',
          'Webhooks',
          'Rotas simples e dinamicas em NextJs',
          'SSG, SSR, SPA',
          'Criar APIS rapidamente com Strapi',
        ],
      },
    },
  },
} as Meta

export const Default: Story<SkillContainerProps> = (args) => (
  <Container>
    <SkillContainer {...args} />
  </Container>
)

Default.args = {
  title: 'Titulo',
  items: mockSkills,
}
