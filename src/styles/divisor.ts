import styled from "styled-components";

type DivisorProps = {
  color?: string;
};

export const Divisor = styled.div<DivisorProps>`
  /* display: flex;
  flex: 1; */
  width: 70%;
  border-radius: 200px;
  align-self: center;
  justify-self: center;
  margin-left: auto;
  margin-right: auto;
  height: 1px;
  margin: 10px;
  /* background-color: ${({ color }) => color || "#fff"}; */
  background-image: linear-gradient(
    to right,
    transparent,
    ${({ color }) => color || "#fff"},
    transparent
  );
`;
