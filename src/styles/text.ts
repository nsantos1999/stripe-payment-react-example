import styled, { css } from "styled-components";

type TextProps = {
  size?: number;
  color?: string;
  bold?: boolean;
};

export const Typography = styled.p<TextProps>`
  ${({ size = "1rem", color = "#000", bold }) => css`
    font-size: ${size};
    color: ${color};
    font-weight: ${bold ? "bold" : "normal"};
  `}
`;

export const Title = styled(Typography)<TextProps>`
  ${({ size = "2rem", color = "#000" }) => css`
    font-weight: bold;
    font-size: ${size};
    color: ${color};
  `}
`;
