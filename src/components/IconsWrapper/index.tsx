import { colorTypes, sizeTypes } from 'components/Heading'
import * as S from './styles'
import { IconsDefault } from './icons'

export type IconTypes =
  | 'Javascript'
  | 'Html5'
  | 'Css3'
  | 'Git'
  | 'ReactLogo'
  | 'Bootstrap'
  | 'Testinglibrary'
  | 'Cypress'
  | 'NextDotJs'
  | 'Graphql'
  | 'Storybook'
  | 'Strapi'
  | 'Typescript'
  | 'Coffee'
  | 'Heart'
  | 'ContactCard'
  | 'Whatsapp'

export type IconsProps = {
  icon: IconTypes
  size?: string | sizeTypes
  sizeMedia?: string | sizeTypes
  color?: colorTypes
  colorNoDefault?: string
  hoverColor?: colorTypes
  isScale?: boolean
  relativeY?: string
}

const IconsWrapper = ({
  icon,
  size,
  sizeMedia,
  color,
  colorNoDefault,
  hoverColor,
  isScale,
  relativeY,
}: IconsProps) => (
  <S.Wrapper
    size={size}
    sizeMedia={sizeMedia}
    color={color}
    colorNoDefault={colorNoDefault}
    hoverColor={hoverColor}
    isScale={isScale}
    relativeY={relativeY}
  >
    {IconsDefault[icon]}
  </S.Wrapper>
)

export default IconsWrapper
