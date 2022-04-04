
import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

export const ProgressBar = ({ value, max, color, width }) => {
  return (
    <Container
      color={color}
      width={width}
    >
      <progress value={value} max={max} />
    </Container>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string
};

ProgressBar.defaultProps = {
  max: 100,
  color: "lightBlue",
  width: "24vw"
};


