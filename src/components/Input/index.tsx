import React from "react";
import { InputContainer } from "../InputContainer";
import { InputContent } from "./styles";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

function Input({ title, ...restProps }: InputProps) {
  return (
    <InputContainer title={title}>
      <InputContent {...restProps} />
    </InputContainer>
  );
}

export { Input };
