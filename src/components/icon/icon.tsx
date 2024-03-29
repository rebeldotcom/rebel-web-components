import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import iconRepo from './icon-repo'
import Box from '../box'

const SVG = styled.svg`
  fill: currentColor;
`

const DEFAULT_VIEWBOX = '0 0 1024 1024'

const getIconData = (name: string) =>
  iconRepo.find(icon => icon.tags.includes(name))

const getIcon = name => {
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

const getIconViewbox = name => {
  const selected = getIconData(name)

  if (!selected || !selected.viewBox) {
    return DEFAULT_VIEWBOX
  }

  return selected.viewBox
}

type IconProps = {
  name: string
  width?: number
  height?: number
  title?: string
  titleId?: string
  descId?: string
  desc?: string
  color?: string
  containerProps?: {}
}

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
  const viewBox = getIconViewbox(name)
  const ariaLabelledBy = desc ? `${titleId} ${descId}` : titleId

  return (
    <Box {...containerProps} {...rest} height={height} width={width}>
      <SVG
        aria-labelledby={ariaLabelledBy}
        height={height}
        role="img"
        viewBox={viewBox}
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
