import { TouchableContainer, TouchableContainerProps } from "./styles";
import { motion } from "framer-motion";

interface ButtonProps extends Partial<TouchableContainerProps> {
  children: React.ReactNode;
}

export function Button({ children, ...restProps }: ButtonProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      transition={{ type: "spring", mass: 0.5 }}
      whileTap={{ scale: 0.9 }}
      style={{ width: "100%" }}
    >
      <TouchableContainer {...restProps}>{children}</TouchableContainer>
    </motion.div>
  );
}
