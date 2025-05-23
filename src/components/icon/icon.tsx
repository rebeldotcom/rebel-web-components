import React from 'react'
import styled from 'styled-components'
import iconRepo from './icon-repo'
import Box, { BoxProps } from '../box'

const SVG = styled.svg`
  fill: currentColor;
`

const DEFAULT_VIEWBOX = '0 0 1024 1024'

const getIconData = (name: string) =>
  iconRepo.find(icon => icon.tags.includes(name))

const getIcon = (name: string) => {
  const selected = getIconData(name)

  if (!selected) {
    return <div style={{ color: 'red' }}>Invalid icon name: {name}</div>
  }

  return selected.shapes.map((shape, idx) => {
    if (typeof shape === 'string') {
      return (
        <path
          key={shape}
          d={shape}
          fill={selected.attrs ? selected.attrs[idx].fill : 'currentColor'}
        />
      )
    }

    const { type, fill, ...rest } = shape

    const getFill = () => {
      if (fill) return fill

      return selected.attrs ? selected.attrs[idx].fill : 'currentColor'
    }

    switch (type) {
      case 'path':
        return <path key={`path-${idx}`} {...rest} fill={getFill()} />
      case 'rect':
        return <rect key={`rect-${idx}`} {...rest} fill={getFill()} />
      case 'polygon':
        return <polygon key={`polygon-${idx}`} fill={getFill()} {...rest} />
      case 'circle':
        return <circle key={`circle-${idx}`} fill={getFill()} {...rest} />
      default:
        return null
    }
  })
}

const getIconViewbox = (name: string) => {
  const selected = getIconData(name)

  if (!selected || !selected.viewBox) {
    return DEFAULT_VIEWBOX
  }

  return selected.viewBox
}

type IconProps = {
  /** The name of the icon in our repo. */
  name: string
  width?: number | string
  height?: number | string
  title?: string
  titleId?: string
  descId?: string
  desc?: string
  viewBox?: string
  containerProps?: BoxProps
} & BoxProps

function Icon({
  name,
  width = 16,
  height = 16,
  title,
  titleId,
  descId,
  desc,
  containerProps,
  ...rest
}: IconProps) {
  const iconShapes = getIcon(name)
  const calcViewBox = getIconViewbox(name)
  const ariaLabelledBy = desc ? `${titleId} ${descId}` : titleId

  return (
    <Box {...containerProps} height={height} width={width} {...rest}>
      <SVG
        aria-labelledby={ariaLabelledBy}
        height={height}
        role="img"
        viewBox={calcViewBox}
        width={width}
      >
        <title id={titleId}>{title}</title>

        {desc && <desc id={descId}>{desc}</desc>}
        {iconShapes}
      </SVG>
    </Box>
  )
}

Icon.getIcon = getIcon

export default Icon
