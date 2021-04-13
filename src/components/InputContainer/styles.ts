import styled from "styled-components";
import { Typography } from "../../styles/text";

export type ContainerProps = {
  fullWidth?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputTitle = styled(Typography).attrs({
  color: "#268DF8",
  bold: true,
  size: "0.9rem",
})`
  padding-bottom: 0px;
`;

export const InputContent = styled.div<ContainerProps>`
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  box-shadow: rgba(82, 82, 82, 0.24) 0px 1px 8px;
  padding: 10px;
`;
