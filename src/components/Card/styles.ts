import styled from "styled-components";

type ContainerProps = {
  minWidth?: number;
};

export const Container = styled.div<ContainerProps>`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}px` : "none")};
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
  /* padding: 10px; */
`;
