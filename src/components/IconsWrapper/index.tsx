import { colorTypes, sizeTypes } from 'components/Heading'
import * as S from './styles'

import {
  Javascript,
  Html5,
  Css3,
  Git,
  ReactLogo,
  Bootstrap,
} from '@styled-icons/boxicons-logos'

import {
  Testinglibrary,
  Cypress,
  NextDotJs,
  Graphql,
  Storybook,
  Strapi,
  Typescript,
} from '@styled-icons/simple-icons'

import { Coffee, Heart } from '@styled-icons/boxicons-solid'

import { ContactCard } from '@styled-icons/fluentui-system-filled'
import { Whatsapp } from '@styled-icons/boxicons-logos'

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
}: IconsProps) => {
  const IconsDefault = {
    Javascript: <Javascript title="Javascript" color="red" />,
    Html5: <Html5 title="Html5" />,
    Css3: <Css3 title="Css3" />,
    Git: <Git title="Git" />,
    ReactLogo: <ReactLogo title="React" />,
    Bootstrap: <Bootstrap title="Bootstrap" />,
    Testinglibrary: <Testinglibrary title="TestingLibrary" />,
    Cypress: <Cypress title="Cypress" />,
    NextDotJs: <NextDotJs title="NextJs" />,
    Graphql: <Graphql title="Graphql" />,
    Storybook: <Storybook title="Storybook" />,
    Strapi: <Strapi title="Strapi" />,
    Typescript: <Typescript title="Typescript" />,
    Coffee: <Coffee title="Coffee" />,
    Heart: <Heart title="Heart" />,
    ContactCard: <ContactCard />,
    Whatsapp: <ContactCard title="Whatsapp" />,
  }

  return (
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
}

export default IconsWrapper
