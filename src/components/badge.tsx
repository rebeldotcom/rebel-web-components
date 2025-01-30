import React from 'react'
import Text, { TextProps } from './text'

export default function Badge({
  children,
  bg = 'black',
  color = 'white',
  ...rest
}: TextProps) {
  return (
    <Text
      alignItems="center"
      bg={bg}
      color={color}
      display="flex"
      fontSize={0}
      justifyContent="center"
      p={1}
      textStyle="caps"
      {...rest}
    >
      {children}
    </Text>
  )
}
