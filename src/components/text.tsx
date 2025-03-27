import { ElementType, HTMLAttributes } from 'react'
import styled, {
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components'
import {
  flexbox,
  color,
  border,
  display,
  space,
  system,
  typography,
  textStyle,
  layout,
  variant,
  FlexboxProps,
  ColorProps,
  BorderProps,
  DisplayProps,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  TextStyleProps,
} from 'styled-system'

const textTransform = system({
  textTransform: true,
})

const textVariants = variant({
  scale: 'textVariants',
  prop: 'variant',
})

export const typographyVariants = variant({
  prop: 'typography',
  variants: {
    hero: {
      fontSize: ['56px', '76px', '76px'],
      lineHeight: ['60px', '78px', '78px'],
      fontFamily: (theme: DefaultTheme) => theme.fonts.title,
      letterSpacing: '-1.3px',
    },
    'heading-h1': {
      fontSize: ['36px', '56px', '56px'],
      lineHeight: ['60px', '72px', '72px'],
      fontFamily: (theme: DefaultTheme) => theme.fonts.title,
      letterSpacing: ['-0.72px', '-1.12px', '-1.12px'],
    },
    'heading-h2': {
      fontSize: ['32px', '40px', '40px'],
      lineHeight: ['44px', '52px', '52px'],
      fontFamily: (theme: DefaultTheme) => theme.fonts.body,
      letterSpacing: ['-0.64px', '-0.8px', '-0.8px'],
    },
    'heading-h3': {
      fontSize: ['28px', '32px', '32px'],
      lineHeight: ['36px', '40px', '40px'],
      fontFamily: (theme: DefaultTheme) => theme.fonts.body,
      letterSpacing: ['-0.56px', '-0.64px', '-0.64px'],
    },
    'heading-h4': {
      fontSize: ['24px', '28px', '28px'],
      lineHeight: ['32px', '36px', '36px'],
      fontFamily: (theme: DefaultTheme) => theme.fonts.body,
      letterSpacing: ['-0.48px', '-0.56px', '-0.56px'],
    },
    'heading-h5': {
      fontSize: ['20px', '24px', '24px'],
      lineHeight: ['28px', '32px', '32px'],
      fontFamily: (theme: DefaultTheme) => theme.fonts.body,
      letterSpacing: ['-0.4px', '-0.48px', '-0.48px'],
    },
    'heading-h6': {
      fontSize: ['18px', '20px', '20px'],
      lineHeight: ['24px', '28px', '28px'],
      fontFamily: (theme: DefaultTheme) => theme.fonts.body,
      letterSpacing: ['-0.36px', '-0.4px', '-0.4px'],
    },

    'paragraph-large': {
      fontSize: ['18px', '20px', '20px'],
      lineHeight: ['24px', '28px', '28px'],
      fontFamily: (theme: DefaultTheme) => theme.fonts.body,
    },
    'paragraph-medium': {
      fontSize: ['14px', '16px', '16px'],
      lineHeight: ['20px', '24px', '24px'],
      fontFamily: (theme: DefaultTheme) => theme.fonts.body,
    },
    'paragraph-small': {
      fontSize: ['18px', '20px', '20px'],
      lineHeight: ['24px', '28px', '28px'],
      fontFamily: (theme: DefaultTheme) => theme.fonts.body,
    },
    'paragraph-xsmall': {
      fontSize: ['10px', '12px', '12px'],
      lineHeight: ['16px', '18px', '18px'],
      fontFamily: (theme: DefaultTheme) => theme.fonts.body,
    },
  },
})

export type TextProps = HTMLAttributes<HTMLDivElement> &
  LayoutProps<DefaultTheme> &
  FlexboxProps<DefaultTheme> &
  ColorProps<DefaultTheme> &
  BorderProps<DefaultTheme> &
  DisplayProps<DefaultTheme> &
  SpaceProps<DefaultTheme> &
  TypographyProps<DefaultTheme> &
  TextStyleProps<DefaultTheme> & {
    textTransform?: string
    htmlFor?: string
    as?: ElementType
    css?: FlattenSimpleInterpolation
  }

const Text: React.FC<TextProps> = styled.div<TextProps>`
  ${border}
  ${color}
  ${display}
  ${layout}
  ${space}
  ${typography}
  ${textStyle}
  ${typographyVariants}
  ${textTransform}
  ${flexbox}
  ${textVariants}
`

export default Text
