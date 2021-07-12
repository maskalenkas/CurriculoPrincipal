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

export type IconsProps = {
  icon: IconTypes
  size: string | sizeTypes
  sizeMedia?: string | sizeTypes
  color?: colorTypes
  hoverColor?: colorTypes
  isScale?: boolean
  relativeY?: string
}

const IconsWrapper = ({
  icon,
  size,
  sizeMedia,
  color,
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
  }

  return (
    <S.Wrapper
      size={size}
      sizeMedia={sizeMedia}
      color={color}
      hoverColor={hoverColor}
      isScale={isScale}
      relativeY={relativeY}
    >
      {IconsDefault[icon]}
    </S.Wrapper>
  )
}

export default IconsWrapper
