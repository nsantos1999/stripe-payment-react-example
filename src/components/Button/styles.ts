import styled, { css } from "styled-components";
import Color from "color";
import { motion } from "framer-motion";

export type TouchableContainerProps = {
  color?: string;
  fullWidth?: boolean;
};

export const TouchableContainer = styled.button<TouchableContainerProps>`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 4px 8px;
  cursor: pointer;
  ${({ color = "#fff" }) => css`
    background-color: ${color};
    color: ${Color(color).isDark() ? "#FFF" : "#000"};
  `}
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  transition: 0.3s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 7px 8px;
  }
  &:focus {
    outline: none !important;
  }
  &:focus {
    outline: none !important;
  }
  padding: 15px;
`;
