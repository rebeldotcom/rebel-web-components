import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import iconRepo from './icon-repo'
import Box from '../box'

const SVG = styled.svg`
  fill: currentColor;
`

const propTypes = {
  containerProps: PropTypes.shape({}),
  desc: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  viewBox: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

const defaultProps = {
  containerProps: {},
  desc: '',
  height: 16,
  viewBox: '0 0 1024 1024',
  width: 16,
}

const getIcon = name => {
  const selected = iconRepo.find(icon => {
    return icon.tags[0] === name
  })

  if (!selected) {
    return <div style={{ color: 'red' }}>Invalid icon name: {name}</div>
  }

  return selected.paths.map((p, idx) => (
    <path
      key={p}
      d={p}
      fill={selected.attrs ? selected.attrs[idx].fill : 'currentColor'}
    />
  ))
}

const getIconViewbox = name => {
  const selected = iconRepo.find(icon => {
    return icon.tags[0] === name
  })

  if (!selected) {
    return defaultProps.viewBox
  }

  return selected.viewBox
}

const Icon = ({
  name,
  width,
  height,
  title,
  titleId,
  descId,
  desc,
  containerProps,
  ...rest
}) => {
  const iconPaths = getIcon(name)
  const viewBox = getIconViewbox(name)
  const ariaLabelledBy = desc ? `${titleId} ${descId}` : titleId

  return (
  <Box {...containerProps} {...rest} width={width} height={height}>
      <SVG
        aria-labelledby={ariaLabelledBy}
        height={height}
        role="img"
        viewBox={viewBox}
        width={width}
      >
        <title id={titleId}>{title}</title>

        {desc && <desc id={descId}>{desc}</desc>}
        {iconPaths}
      </SVG>
    </Box>
  )
}

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps
Icon.getIcon = getIcon

export default Icon
