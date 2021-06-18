import { Story, Meta } from '@storybook/react/types-6-0'
import { Container } from 'components/Container'
import TitleBoard, { TitleBoardProps } from '.'

import * as S from './styles'

export default {
  title: 'TitleBoard',
  component: TitleBoard,
  args: {
    children: 'HARD SKILLS',
  },
} as Meta

export const Default: Story<TitleBoardProps> = (args) => (
  <Container>
    <S.DisplayStories>
      <TitleBoard {...args} />
    </S.DisplayStories>
  </Container>
)
