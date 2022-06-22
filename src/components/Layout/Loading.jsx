import { css } from "@emotion/react";
import PropTypes from "prop-types";
import React from "react";
import { PacmanLoader } from "react-spinners";
import COLOR from "../constants/colors";
const override = css`
  position: absolute;
  display: flex;
  align-self: center;
  justify-self: center;
  margin: auto;
`;
Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};
Loading.defaultProps = {
  loading: false,
  size: 50,
  color: COLOR.blue,
};

function Loading(props) {
  const { color, loading, size } = props;
  return (
    <PacmanLoader color={color} loading={loading} size={size} css={override} />
  );
}

export default Loading;
