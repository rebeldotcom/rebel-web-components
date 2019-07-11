import React from "react";
import PropTypes from "prop-types";
import Box from "./box";
import Img from "./image";

const propTypes = {
  children: PropTypes.node.isRequired,
  containerProps: PropTypes.shape({}),
  imageProps: PropTypes.shape({})
};

const defaultProps = {
  containerProps: {},
  imageProps: {}
};

const ImageBG = ({ containerProps, imageProps, children }) => {
  return (
    <Box position="relative" {...containerProps}>
      <Img
        alt=""
        height={1}
        left="0"
        style={{
          position: "aboslute"
        }}
        top="0"
        width={1}
        {...imageProps}
      />
      {children}
    </Box>
  );
};

ImageBG.propTypes = propTypes;
ImageBG.defaultProps = defaultProps;

export default ImageBG;
