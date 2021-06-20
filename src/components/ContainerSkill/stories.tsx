import { Story, Meta } from '@storybook/react/types-6-0'
import ContainerSkill, { ContainerSkillProps } from '.'

export default {
  title: 'ContainerSkill',
  component: ContainerSkill,
  args: {
    title: 'Conhecimentos',
    children: '',
  },
} as Meta

export const Default: Story<ContainerSkillProps> = (args) => (
  <ContainerSkill {...args} />
)
