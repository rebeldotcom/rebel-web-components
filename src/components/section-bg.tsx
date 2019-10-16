import React from 'react'
import PropTypes from 'prop-types'
import Box from './box'
import Img from './image'

const propTypes = {
  children: PropTypes.node.isRequired,
  containerProps: PropTypes.shape({}),
  imageProps: PropTypes.shape({}).isRequired,
}

const defaultProps = {
  containerProps: {},
}

const SectionBG = ({ children, containerProps, imageProps, ...rest }) => {
  return (
    <Box
      as="section"
      justifyContent="center"
      position="relative"
      width={1}
      {...rest}
    >
      <Img
        alt=""
        height="100%"
        left="0"
        style={{
          position: 'absolute',
        }}
        top="0"
        width={1}
        objectFit="cover"
        objectPosition="left center"
        {...imageProps}
      />
      <Box
        alignItems="center"
        flexDirection="column"
        width={1}
        {...containerProps}
      >
        {children}
      </Box>
    </Box>
  )
}

SectionBG.propTypes = propTypes
SectionBG.defaultProps = defaultProps

export default SectionBG
