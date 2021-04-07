import { TouchableContainer } from "./styles";

type ButtonProps = {
  children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  return <TouchableContainer>{children}</TouchableContainer>;
}
