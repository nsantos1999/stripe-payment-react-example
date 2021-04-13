import React from "react";
import { InputContent, ContainerProps, Container, InputTitle } from "./styles";

interface InputContainerProps extends Partial<ContainerProps> {
  children: React.ReactNode;
  title?: string;
}

export function InputContainer({
  children,
  title,
  ...restProps
}: InputContainerProps) {
  return (
    <Container>
      {title && <InputTitle>{title}</InputTitle>}
      <InputContent {...restProps}>{children}</InputContent>
    </Container>
  );
}
