import { TouchableContainer, TouchableContainerProps } from "./styles";
import { motion } from "framer-motion";

interface ButtonProps extends Partial<TouchableContainerProps> {
  children: React.ReactNode;
}

export function Button({ children, ...restProps }: ButtonProps) {
  return (
    <TouchableContainer
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
      {...restProps}
    >
      {children}
    </TouchableContainer>
  );
}
