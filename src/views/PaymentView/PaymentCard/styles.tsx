import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  color: #202020;
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 2rem;
  padding-left: 10px;
  padding-right: 10px;
  color: #268df8;
`;

export const Content = styled.div`
  padding: 20px;
`;

export const RowContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 18vw auto;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
  /* height: 100%; */
  padding: 50px;
`;
